import auth from "../../middleware/auth";
import checkAuth from "../../middleware/auth-check";

export default [
    {
        path: '/employee',
        name: 'employee',
        meta: {
            middleware: [auth,checkAuth]
        },
        component: () => import('../../views/pages/employee/index'),
    },
];
