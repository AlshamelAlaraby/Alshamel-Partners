import auth from "../../middleware/auth";
import checkAuth from "../../middleware/auth-check";

export default [
    {
        path: '/dashboard/branch',
        name: 'branch',
        meta: {
            middleware: [auth,checkAuth]
        },
        component: () => import('../../views/pages/branch/index')
    },
];
