export const Routes = {
    // basic system
    Home: { path: "/" },
    Dashboard: { path: "/dashboard" },
    Login: { path: "/login" },

    // pages
    Lock: { path: "/examples/lock" },
    NotFound: { path: "/examples/404" },
    ServerError: { path: "/examples/500" },

    // account
    ListAccountAdmin: { path: '/admin-management' },
    ListAccountNormal: { path: '/user-management' },

    // freelancer
    ListFreelancer: { path: '/freelancer-management' },

    // job
    ListJob: { path: '/job-management' },

    // transaction
    ListTransaction: { path: '/transaction-management' },

    // report
    MainReport: { path: '/statistical-report' },
    ReportFinancial: { path: '/statistical-report/financial' },
};
