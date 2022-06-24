import React from 'react';
import {Redirect} from "react-router-dom";
import {Routes} from "../common/Routes";
import ModelManager from "../common/ModelManager";
import {Route} from "react-router-dom";

function PublicRoute({ component: Component, ...rest }) {
  const useAuth = ModelManager.checkAuth();

  return (
    <Route
      {...rest}
      render={(props) => {
        if (useAuth) {
          return (
            <Redirect
              to={{
                pathname: Routes.Dashboard.path,
                state: { from: props.location },
              }}
            />
          )
        }
        return <Component {...props} />
      }}
    />
  );
}

export default PublicRoute;
