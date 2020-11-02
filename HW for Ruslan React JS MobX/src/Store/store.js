import { action, computed, makeObservable, observable } from 'mobx';

export class Store{
    users = []

    currentUserName = ''
    currentUserId = null;

    setUsers(payload){
        this.users = payload;
    }

    constructor() {
        makeObservable(this, {
            users: observable,
            currentUserId: observable,
            currentUserName: observable,
            isAuth: computed,
            autorizatedUser: action,
            createNewUser: action,
            singOut: action
        })
    }

    get isAuth(){
        let result = this.users.find(user => user.auth === true)
        return result? result : false;
    }

    singOut(){
        let result = this.users.find(user => user.auth === true);
        result.auth = false;
        this.currentUserName = '';
        this.currentUserId = null;
    }

    autorizatedUser(login, password){
        let result = this.users.find(user => user.email === login && user.password === password)
        if(result) {
            result.auth = true;
            this.currentUserName = result.userName;
            this.currentUserId = result.id;
            return true;
        } 
        else return false;
    }

    createNewUser(userName, email, password){
        let lastId = this.users.length > 0? this.users[this.users.length-1].id : 1;
        this.users.push({userName, email, password, auth: false, id:lastId+1});       
    }

}


export const store = new Store();