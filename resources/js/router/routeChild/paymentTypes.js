import auth from "../../middleware/auth";
import checkAuth from "../../middleware/auth-check";

export default [
    {
        path: '/paymentTypes',
        name: 'paymentTypes',
        meta: {
            middleware: [auth,checkAuth]
        },
        component: () => import('../../views/pages/paymentTypes/index'),
    },
];
