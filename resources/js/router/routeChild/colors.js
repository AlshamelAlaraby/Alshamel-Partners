import auth from "../../middleware/auth";
import checkAuth from "../../middleware/auth-check";

export default [
    {
        path: '/dashboard/colors',
        name: 'colors',
        meta: {
            middleware: [auth,checkAuth]
        },
        component: () => import('../../views/pages/colors/index'),
    },
];
