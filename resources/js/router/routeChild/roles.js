import auth from "../../middleware/auth";
import checkAuth from "../../middleware/auth-check";

export default [
    {
        path: '/roles',
        name: 'roles',
        meta: {
            middleware: [auth,checkAuth]
        },
        component: () => import('../../views/pages/roles/index'),
    },
];
