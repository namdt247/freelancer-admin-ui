import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/dashboard/dashboard";
import React from "react";
import NotFound from "./pages/NotFound";
import {Routes} from "./common/Routes";
import HomePage from "./pages/HomePage";
import MainReport from "./pages/report-statistic/MainReport";
import ListUserAdmin from "./pages/admin/ListUserAdmin";

export default () => (
    <Router>
        <Switch>
            <Route exact path={Routes.Home.path} component={HomePage} />
            <Route exact path={Routes.Login.path} component={Login} />
            <Route exact path={Routes.Dashboard.path} component={Dashboard} />

            {/* account */}
            <Route exact path={Routes.ListAccountAdmin.path} component={ListUserAdmin} />

            {/* freelancer */}
            <Route exact path={Routes.ListFreelancer.path} component={Dashboard} />

            {/* job */}
            <Route exact path={Routes.ListJob.path} component={Dashboard} />

            {/* transaction */}
            <Route exact path={Routes.ListTransaction.path} component={Dashboard} />

            {/* report */}
            <Route exact path={Routes.MainReport.path} component={MainReport} />

            <Route path="*" component={NotFound} />
        </Switch>
    </Router>
)
