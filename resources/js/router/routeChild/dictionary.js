import auth from "../../middleware/auth";
import checkAuth from "../../middleware/auth-check";

export default [
    {
        path: '/dashboard/dictionary',
        name: 'dictionary',
        meta: {
            middleware: [auth,checkAuth]
        },
        component: () => import('../../views/pages/dictionary/index'),
    },
];
