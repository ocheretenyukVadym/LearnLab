import React from 'react';
import { Redirect } from 'react-router-dom';
import { observer } from 'mobx-react';
import store from './../Store/store';

export const withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            if (!store.isAuth) return <Redirect to='/login' />
            return <Component {...this.props} />
        }
    }

    return observer(RedirectComponent);
}