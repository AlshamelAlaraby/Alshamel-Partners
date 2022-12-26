import auth from "../../middleware/auth";
import checkAuth from "../../middleware/auth-check";

export default [
    {
        path: '/users',
        name: 'users',
        meta: {
            middleware: [auth,checkAuth]
        },
        component: () => import('../../views/pages/users/index'),
    },
];
