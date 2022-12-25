import auth from "../../middleware/auth";
import checkAuth from "../../middleware/auth-check";

export default [
    {
        path: '/screen-properties',
        name: 'screen-properties',
        meta: {
            middleware: [auth,checkAuth]
        },
        component: () => import('../../views/pages/screenproperties/index'),
    },
];
