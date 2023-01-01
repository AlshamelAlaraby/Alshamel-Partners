import auth from "../../middleware/auth";
import checkAuth from "../../middleware/auth-check";

export default [
    {
        path: '/dashboard/serial',
        name: 'serial',
        meta: {
            middleware: [auth,checkAuth]
        },
        component: () => import('../../views/pages/serial/index'),
    },
];
