import React from 'react';
import './App.css';
import Login from './Component/Login/Login';
import Home from './Component/Home/Home';
import Header from './Component/Header/Header';
import { Route } from 'react-router-dom';
import SingUp from './Component/SingUp/SingUp';
import { Provider } from 'mobx-react';
import { Store } from './Store/store';

class App extends React.Component {
  constructor() {
    super();
    this.store = new Store();
  }
  render() {
    return (
      <div className="App">
        <Provider store={this.store}>
          <Header />
          <Route path='/home' component={Home} />
          <Route path='/login' component={Login} />
          <Route path='/singup' component={SingUp} />
        </Provider>
      </div>
    );
  }
}

export default App;
