import auth from "../../middleware/auth";
import checkAuth from "../../middleware/auth-check";

export default [
    {
        path: '/dashboard/salesmenTypes',
        name: 'salesmenTypes',
        meta: {
            middleware: [auth,checkAuth]
        },
        component: () => import('../../views/pages/salesmenTypes/index'),
    },
];
