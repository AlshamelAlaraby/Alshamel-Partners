import auth from "../../middleware/auth";
import checkAuth from "../../middleware/auth-check";

export default [
    {
        path: '/currency',
        name: 'currency',
        meta: {
            middleware: [auth,checkAuth]
        },
        component: () => import('../../views/pages/currency/index'),
    },
];
