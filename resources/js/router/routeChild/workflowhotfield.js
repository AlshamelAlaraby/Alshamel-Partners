import auth from "../../middleware/auth";
import checkAuth from "../../middleware/auth-check";

export default [
    {
        path: '/dashboard/workflow-hotfields',
        name: 'workflow-hotfields',
        meta: {
            middleware: [auth,checkAuth]
        },
        component: () => import('../../views/pages/workflowhotfields/index'),
    },
];
