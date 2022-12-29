import auth from "../../middleware/auth";
import checkAuth from "../../middleware/auth-check";

export default [
    {
        path: '/realEstate/owner',
        name: 'realEstate-owner',
        meta: {
            middleware: [auth,checkAuth]
        },
        component: () => import('../../views/pages/realEstate/owner'),
    },
    {
        path: '/realEstate/building',
        name: 'realEstate-building',
        meta: {
            middleware: [auth,checkAuth]
        },
        component: () => import('../../views/pages/realEstate/building'),
    },
    {
        path: '/realEstate/customer',
        name: 'realEstate-customer',
        meta: {
            middleware: [auth,checkAuth]
        },
        component: () => import('../../views/pages/realEstate/customer'),
    },
];
