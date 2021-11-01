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

export default () => (
    <Router>
        <Switch>
            <Route exact path={Routes.Home.path} component={HomePage} />
            <Route exact path={Routes.Login.path} component={Login} />
            <Route exact path={Routes.Dashboard.path} component={Dashboard} />

            {/* account */}
            <Route exact path={Routes.ListAccountAdmin.path} component={ListUserAdmin} />
            <Route exact path={Routes.ListAccountNormal.path} component={ListUserNormal} />

            {/* freelancer */}
            <Route exact path={Routes.ListFreelancer.path} component={ListFreelancer} />

            {/* job */}
            <Route exact path={Routes.ListJob.path} component={ListJob} />

            {/* transaction */}
            <Route exact path={Routes.ListTransaction.path} component={ListTransaction} />

            {/* report */}
            <Route exact path={Routes.MainReport.path} component={MainReport} />
            <Route exact path={Routes.ReportFinancial.path} component={StatisticFinancial} />

            <Route path="*" component={NotFound} />
        </Switch>
    </Router>
)
