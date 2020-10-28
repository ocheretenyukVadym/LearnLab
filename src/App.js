import React from 'react';
import './App.css';
import ButtonCounter from './ButtonCounter/ButtonCounter';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      name: ['+1','-1','+2','+5']
    }
  }

  updateState = (currentCount) => {
    this.setState({ count: currentCount })
  }

  render() {
    return (
      <div className='container'>
        <h1>{this.state.count}</h1>
        <div className='buttons'>
          {this.state.name.map(button => 
            <ButtonCounter key={button.name} count={this.state.count} updateState={this.updateState} name={button} />)}
        </div>
      </div>
    )
  }
}

export default App;
