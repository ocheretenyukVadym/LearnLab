import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Header.css";
import { observer } from 'mobx-react';
import store from '../../Store/store';

function Header() {

    const singout = () => store.singOut();

    return (
        <div className="header-container">
            <div className="logo">
                <NavLink to='/home'>
                    <img alt='Home' src="https://www.quintagroup.com/cms/js/js-image/react.js-logo.png/@@images/a9bf22bd-373a-4fae-a900-c22fd12c87c7.png" />
                </NavLink>
            </div>
            <div className="header-nav">
                {!store.isAuth ?
                    <>
                        <span className="button-nav">
                            <NavLink to='/singup' activeClassName='activeLink'>
                                SingUp
                            </NavLink>
                        </span>
                        <span className="button-nav">
                            <NavLink to='/login' activeClassName='activeLink'>
                                Login
                            </NavLink>
                        </span>
                    </> :
                    <>
                        <span className="header-userName"> {store.currentUserName}</span>
                        <span className="button-nav" onClick={singout}>Sing out</span>
                    </>
                }
            </div>
        </div>
    );
}

export default observer(Header);
