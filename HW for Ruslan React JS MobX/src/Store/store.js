import { action, computed, makeObservable, observable } from 'mobx';

class Store{
    users = []

    currentUserName = ''
    currentUserId = null;

    setUsers(payload){
        this.users = payload;
    }

    constructor() {
        makeObservable(this, {
            users: observable,
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
        this.users.splice(this.currentUserId-1, 1);
    }

    autorizatedUser(login, password){
        let result = this.users.find(user => user.email === login && user.password === password)
        if(result) {
            result.auth = true;
            this.currentUserName = result.userName;
            this.currentUserId = result.id;
            return result.userName;
        } 
        else return false;
    }

    createNewUser(userName, email, password){
        let lastId = this.users[this.users.length-1].id;
        this.users.push({userName, email, password, auth: false, id:lastId+1});       
    }

}


export default new Store();