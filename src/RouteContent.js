import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/dashboard/dashboard";
import React from "react";
import NotFound from "./pages/NotFound";
import {Routes} from "./common/Routes";
import HomePage from "./pages/HomePage";
import MainReport from "./pages/report-statistic/MainReport";
import ListUserAdmin from "./pages/user-admin/ListUserAdmin";
import ListFreelancer from "./pages/freelancer/ListFreelancer";
import ListUserNormal from "./pages/user-normal/ListUserNormal";
import ListTransaction from "./pages/transaction/ListTransaction";
import ListJob from "./pages/job/ListJob";
import StatisticFinancial from "./pages/report-statistic/StatisticFinancial";
import PublicRoute from "./route/PublicRoute";
import PrivateRoute from "./route/PrivateRoute";

export default () => (
    <Router>
        <Switch>
            <Route exact path={Routes.Home.path} component={HomePage} />

            <PublicRoute exact path={Routes.Login.path} component={Login} />

            <PrivateRoute exact path={Routes.Dashboard.path} component={Dashboard} />

            {/* account */}
            <PrivateRoute exact path={Routes.ListAccountAdmin.path} component={ListUserAdmin} />
            <PrivateRoute exact path={Routes.ListAccountNormal.path} component={ListUserNormal} />

            {/* freelancer */}
            <PrivateRoute exact path={Routes.ListFreelancer.path} component={ListFreelancer} />

            {/* job */}
            <PrivateRoute exact path={Routes.ListJob.path} component={ListJob} />

            {/* transaction */}
            <PrivateRoute exact path={Routes.ListTransaction.path} component={ListTransaction} />

            {/* report */}
            <PrivateRoute exact path={Routes.MainReport.path} component={MainReport} />
            <PrivateRoute exact path={Routes.ReportFinancial.path} component={StatisticFinancial} />

            <Route path="*" component={NotFound} />
        </Switch>
    </Router>
)
