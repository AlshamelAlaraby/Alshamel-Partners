import companyId from "../../middleware/companyId";
import checkAuth from "../../middleware/auth-check";

export default [
    {
        path: '/company',
        name: 'company',
        meta: {
            middleware: [companyId,checkAuth]
        },
        component: () => import('../../views/pages/company/index'),
    },
];
