import auth from "../../middleware/auth";
import checkAuth from "../../middleware/auth-check";

export default [
    {
        path: '/dashboard/realEstate/unitstatus',
        name: 'realEstate-unitstatus',
        meta: {
            middleware: [auth,checkAuth]
        },
        component: () => import('../../views/pages/realEstate/unit-status'),
    },
    {
        path: '/dashboard/realEstate/contractunit',
        name: 'realEstate-contractunit',
        meta: {
            middleware: [auth,checkAuth]
        },
        component: () => import('../../views/pages/realEstate/contractunit'),
    },
    {
        path: '/dashboard/realEstate/owner',
        name: 'realEstate-owner',
        meta: {
            middleware: [auth,checkAuth]
        },
        component: () => import('../../views/pages/realEstate/owner'),
    },
    {
        path: '/dashboard/realEstate/building',
        name: 'realEstate-building',
        meta: {
            middleware: [auth,checkAuth]
        },
        component: () => import('../../views/pages/realEstate/building'),
    },
    {
        path: '/dashboard/realEstate/customer',
        name: 'realEstate-customer',
        meta: {
            middleware: [auth,checkAuth]
        },
        component: () => import('../../views/pages/realEstate/customer'),
    },
];
