import auth from "../../middleware/auth";
import checkAuth from "../../middleware/auth-check";

export default [
    {
        path: '/dashboard/avenue',
        name: 'avenue',
        meta: {
            middleware: [auth,checkAuth]
        },
        component: () => import('../../views/pages/avenue/index'),
    },
];
