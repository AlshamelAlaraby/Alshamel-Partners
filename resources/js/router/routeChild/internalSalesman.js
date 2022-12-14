import auth from "../../middleware/auth";
import checkAuth from "../../middleware/auth-check";

export default [
    {
        path: '/internalSalesman',
        name: 'internalSalesman',
        meta: {
            middleware: [auth,checkAuth]
        },
        component: () => import('../../views/pages/internalSalesMen/index'),
    },
];
