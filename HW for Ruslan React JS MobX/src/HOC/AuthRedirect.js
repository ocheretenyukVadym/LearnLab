import React from 'react';
import { Redirect } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

export const withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.store.isAuth) return <Redirect to='/login' />
            return <Component {...this.props} />
        }
    }

    return inject('store')(observer(RedirectComponent));
}