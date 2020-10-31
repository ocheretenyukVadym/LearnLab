import React from 'react';
import './App.css';
import Login from './Component/Login/Login';
import Home from './Component/Home/Home';
import Header from './Component/Header/Header';
import { Route } from 'react-router-dom';
import SingUp from './Component/SingUp/SingUp';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Route path='/home' component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/singup' component={SingUp} />
      </div>
    );
  }
}

export default App;
