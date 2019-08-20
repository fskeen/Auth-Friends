import React from 'react';
import { Route, Redirect } from 'react-router';

function PrivateRoute ({ component: Friends, ...rest }) {
    return (<Route
        {...rest}
        render={props => {
          if (localStorage.getItem('token')) {
            return <Friends {...props} />;
          }
          return <Redirect to="/login" />;
        }}
      />
    );
}

export default PrivateRoute;