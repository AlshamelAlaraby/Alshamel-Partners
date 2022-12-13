import auth from "../../middleware/auth";
import checkAuth from "../../middleware/auth-check";

export default [
    {
        path: '/country',
        name: 'country',
        meta: {
            middleware: [auth,checkAuth]
        },
        component: () => import('../../views/pages/country/index'),
    },
];
