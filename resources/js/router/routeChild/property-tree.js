import auth from "../../middleware/auth";
import checkAuth from "../../middleware/auth-check";

export default [
    {
        path: '/dashboard/tree-properties',
        name: 'tree-properties',
        meta: {
            middleware: [auth,checkAuth]
        },
        component: () => import('../../views/pages/property-tree/index'),
    },
];
