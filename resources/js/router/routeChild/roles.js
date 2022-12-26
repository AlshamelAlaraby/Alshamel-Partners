import auth from "../../middleware/auth";
import checkAuth from "../../middleware/auth-check";

export default [
    {
        path: '/roles',
        name: 'roles',
        meta: {
            middleware: [auth,checkAuth]
        },
        component: () => import('../../views/pages/roles/index'),
    },
    {
        path: '/role-workflow',
        name: 'role-workflow',
        meta: {
            middleware: [auth,checkAuth]
        },
        component: () => import('../../views/pages/roleWorkflow/index'),
    },
    {
        path: '/role-workflow-button',
        name: 'role-workflow-button',
        meta: {
            middleware: [auth,checkAuth]
        },
        component: () => import('../../views/pages/roleWorkflowButton/index'),
    },
    {
        path: '/role-hotfield-screen',
        name: 'role-hotfield-screen',
        meta: {
            middleware: [auth,checkAuth]
        },
        component: () => import('../../views/pages/workflowHotfield/index'),
    },
];
