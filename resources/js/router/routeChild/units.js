import auth from "../../middleware/auth";
import checkAuth from "../../middleware/auth-check";

export default [
    {
        path: '/units',
        name: 'units',
        meta: {
            middleware: [auth,checkAuth]
        },
        component: () => import('../../views/pages/units/index'),
    },
];
