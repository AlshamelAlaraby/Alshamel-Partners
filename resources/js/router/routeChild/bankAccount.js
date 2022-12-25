import auth from "../../middleware/auth";
import checkAuth from "../../middleware/auth-check";

export default [
    {
        path: '/bankAccount',
        name: 'bankAccount',
        meta: {
            middleware: [auth,checkAuth]
        },
        component: () => import('../../views/pages/bankAccounts/index'),
    },
];
