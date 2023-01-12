import auth from "../../middleware/auth";
import checkAuth from "../../middleware/auth-check";

export default [
    {
        path: '/dashboard/installment-status',
        name: 'installmentStatus',
        meta: {
            middleware: [auth,checkAuth]
        },
        component: () => import('../../views/pages/recievablePayable/installmentStatus'),
    },
];
