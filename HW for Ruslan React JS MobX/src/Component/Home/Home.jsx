import React from 'react';
import './Home.css'
import { withAuthRedirect } from '../../HOC/AuthRedirect';
import logo from './../../Images/logo512.png';

function Home() {
  return (
    <div className="home">
      <img src={logo} alt='logo' />
    </div>
  );
}

export default withAuthRedirect(Home);
