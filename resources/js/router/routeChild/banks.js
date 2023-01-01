import auth from "../../middleware/auth";
import checkAuth from "../../middleware/auth-check";

export default [
    {
        path: '/dashboard/banks',
        name: 'banks',
        meta: {
            middleware: [auth,checkAuth]
        },
        component: () => import('../../views/pages/banks/index'),
    },
];
