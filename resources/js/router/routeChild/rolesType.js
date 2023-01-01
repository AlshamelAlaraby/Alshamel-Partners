import auth from "../../middleware/auth";
import checkAuth from "../../middleware/auth-check";

export default [
    {
        path: '/dashboard/rolesType',
        name: 'rolesType',
        meta: {
            middleware: [auth,checkAuth]
        },
        component: () => import('../../views/pages/rolesType/index'),
    },
];
