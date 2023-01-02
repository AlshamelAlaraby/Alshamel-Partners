import auth from "../../middleware/auth";
import checkAuth from "../../middleware/auth-check";

export default [
    {
        path: '/dashboard/salesmen',
        name: 'salesmen',
        meta: {
            middleware: [auth,checkAuth]
        },
        component: () => import('../../views/pages/salesmen/index'),
    },
];
