import auth from "../../middleware/auth";
import checkAuth from "../../middleware/auth-check";

export default [
    {
        path: '/dashboard/financialYear',
        name: 'financialYear',
        meta: {
            middleware: [auth,checkAuth]
        },
        component: () => import('../../views/pages/financialYear/index'),
    },
];
