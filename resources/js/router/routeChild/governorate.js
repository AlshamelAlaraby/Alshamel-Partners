import auth from "../../middleware/auth";
import checkAuth from "../../middleware/auth-check";

export default [
    {
        path: '/governorate',
        name: 'governorate',
        meta: {
            middleware: [auth,checkAuth]
        },
        component: () => import('../../views/pages/governorate/index'),
    },
];
