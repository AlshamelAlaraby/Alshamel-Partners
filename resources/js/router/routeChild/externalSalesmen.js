import auth from "../../middleware/auth";
import checkAuth from "../../middleware/auth-check";

export default [
    {
        path: '/dashboard/externalSalesmen',
        name: 'externalSalesmen',
        meta: {
            middleware: [auth,checkAuth]
        },
        component: () => import('../../views/pages/externalSalesmen/index'),
    },
];
