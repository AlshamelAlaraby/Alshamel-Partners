import auth from "../../middleware/auth";
import checkAuth from "../../middleware/auth-check";

export default [
    {
        path: '/city',
        name: 'city',
        meta: {
            middleware: [auth,checkAuth]
        },
        component: () => import('../../views/pages/city/index'),
    },
];
