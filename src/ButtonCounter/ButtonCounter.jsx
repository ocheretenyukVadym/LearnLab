import React from 'react';
import './ButtonCounter.css';

class ButtonCounter extends React.Component{
    onIncreas = () => {
        let count = this.props.count;
        switch(this.props.name){
            case "+1":
                this.props.updateState(count+=1);
                break;
            case "-1":
                this.props.updateState(count-=1);
                break;
            case "+2":
                this.props.updateState(count+=2);
                break;
            case "+5":
                this.props.updateState(count+=5);
                break;
        }
    }

    render(){
        return(
            <div className="button-block">
                <button onClick={this.onIncreas}>{this.props.name}</button>
            </div>
        )
    }
}

export default ButtonCounter;