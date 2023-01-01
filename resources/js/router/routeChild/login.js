import guest from "../../middleware/guest";

export default [
    {
        path: '/dashboard/login',
        name: 'login',
        component: () => import('../../views/pages/auth/login'),
        meta: {
            middleware: [guest]
        },
    },
]
