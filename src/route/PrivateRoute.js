import React from 'react';
import {Redirect, Route} from "react-router-dom";
import ModelManager from "../common/ModelManager";
import {Routes} from "../common/Routes";

function PrivateRoute({ component: Component, ...rest }) {
  const useAuth = ModelManager.checkAuth();
  return (
    <Route
      {...rest}
      render={(props) => {
        if (useAuth) {
          return (
            <Component {...props} />
          );
        }
        const pathName = props.location?.pathname?.slice(1) || '';
        return (
          <Redirect
            to={{
              pathname: Routes.Login.path,
              search: `?from=${pathName}`,
            }}
          />
        );
      }}
    />
  );
}

export default PrivateRoute;
