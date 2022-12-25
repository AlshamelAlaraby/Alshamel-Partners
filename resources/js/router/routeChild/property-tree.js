import auth from "../../middleware/auth";
import checkAuth from "../../middleware/auth-check";

export default [
    {
        path: '/property-trees',
        name: 'property-trees',
        meta: {
            middleware: [auth,checkAuth]
        },
        component: () => import('../../views/pages/property-tree/index'),
    },
];
