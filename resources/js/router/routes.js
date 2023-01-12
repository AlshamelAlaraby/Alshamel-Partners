import auth from "../middleware/auth";
import checkAuth from "../middleware/auth-check";
import login from "./routeChild/login";
import company from "./routeChild/company";
import country from "./routeChild/country";
import governorate from "./routeChild/governorate";
import city from "./routeChild/city";
import currency from "./routeChild/currency";
import employee from "./routeChild/employee";
import financialYear from  "./routeChild/financialYear";
import avenue from  "./routeChild/avenue";
import externalSalesmen from  "./routeChild/externalSalesmen";
import rolesType from "./routeChild/rolesType";
import roles from "./routeChild/roles";
import units from "./routeChild/units";
import banks from "./routeChild/banks";
import colors from "./routeChild/colors";
import salesmenTypes from "./routeChild/salesmenTypes";
import branches from "./routeChild/branch";
import serial from "./routeChild/serial";
import store from "./routeChild/store";
import dictionary from "./routeChild/dictionary";
import workflowhotfields from "./routeChild/workflowhotfield";
import screenproperties from "./routeChild/screen-property";
import salesmen from  "./routeChild/salesMen";
import internalSalesmen from  "./routeChild/internalSalesman";
import paymentTypes from "./routeChild/paymentTypes";
import bankAccount from "./routeChild/bankAccount";
import users from  "./routeChild/users";
import propertyTrees from  "./routeChild/property-tree";
import realEstate from  "./routeChild/realEstate";
import archiving from "./routeChild/archiving";
import recievablePayable from "./routeChild/recievablePayable";


export default [
    ...login,
    ...company,
    ...country,
    ...governorate,
    ...city,
    ...banks,
    ...dictionary,
    ...currency,
    ...employee,
    ...financialYear,
    ...externalSalesmen,
    ...avenue,
    ...rolesType,
    ...roles,
    ...units,
    ...colors,
    ...salesmenTypes,
    ...branches,
    ...users,
    ...screenproperties,
    ...store,
    ...workflowhotfields,
    ...serial,
    ...propertyTrees,
    ...salesmen,
    ...internalSalesmen,
    ...paymentTypes,
    ...bankAccount,
    ...realEstate,
    ...archiving,
    ...recievablePayable,
    //**********************************************
    {
        path: '/dashboard/',
        name: 'home',
        meta: {
            middleware: [auth,checkAuth]
        },
        component: () => import('../views/pages/dashboard/sales/index')
    },
    {
        path: '/dashboard/dashboard/crm',
        name: 'crm-dashboard',
        meta: {
            middleware: [auth,checkAuth]
        },
        component: () => import('../views/pages/dashboard/crm/index')
    },
    {
        path: '/dashboard/dashboard/analytics',
        name: 'analytics-dashboard',
        meta: {
            middleware: [auth,checkAuth]
        },
        component: () => import('../views/pages/dashboard/analytics/index')
    },
    {
        path: '/dashboard/apps/calendar',
        name: 'calendar',
        meta: {
            middleware: [auth,checkAuth]
        },
        component: () => import('../views/pages/apps/calendar/index')
    },
    {
        path: '/dashboard/apps/chat',
        name: 'chat',
        meta: {
            middleware: [auth,checkAuth]
        },
        component: () => import('../views/pages/apps/chat')
    },
    {
        path: '/dashboard/apps/companies',
        name: 'companies',
        meta: {
            middleware: [auth,checkAuth]
        },
        component: () => import('../views/pages/apps/companies')
    },
    {
        path: '/dashboard/apps/tickets',
        name: 'tickets',
        meta: {
            middleware: [auth,checkAuth]
        },
        component: () => import('../views/pages/apps/tickets')
    },
    {
        path: '/dashboard/apps/file-manager',
        name: 'file-manager',
        meta: {
            middleware: [auth,checkAuth]
        },
        component: () => import('../views/pages/apps/file-manager')
    },
    {
        path: '/dashboard/ecommerce/customers',
        name: 'customers',
        meta: {
            middleware: [auth,checkAuth]
        },
        component: () => import('../views/pages/ecommerce/customers/index')
    },
    {
        path: '/dashboard/ecommerce/orders',
        name: 'orders',
        meta: {
            middleware: [auth,checkAuth]
        },
        component: () => import('../views/pages/ecommerce/orders/index')
    },
    {
        path: '/dashboard/ecommerce/product-detail/:id',
        name: 'product-detail',
        meta: {
            middleware: [auth,checkAuth]
        },
        component: () => import('../views/pages/ecommerce/product-detail')
    },
    {
        path: '/dashboard/ecommerce/products',
        name: 'products',
        meta: {
            middleware: [auth,checkAuth]
        },
        component: () => import('../views/pages/ecommerce/products/index')
    },
    {
        path: '/dashboard/ecommerce/cart',
        name: 'cart',
        meta: {
            middleware: [auth,checkAuth]
        },
        component: () => import('../views/pages/ecommerce/cart')
    },
    {
        path: '/dashboard/ecommerce/checkout',
        name: 'checkout',
        meta: {
            middleware: [auth,checkAuth]
        },
        component: () => import('../views/pages/ecommerce/checkout')
    },
    {
        path: '/dashboard/ecommerce/order-detail',
        name: 'order-detail',
        meta: {
            middleware: [auth,checkAuth]
        },
        component: () => import('../views/pages/ecommerce/order-detail')
    },
    {
        path: '/dashboard/ecommerce/product-create',
        name: 'product-create',
        meta: {
            middleware: [auth,checkAuth]
        },
        component: () => import('../views/pages/ecommerce/product-create')
    },
    {
        path: '/dashboard/ecommerce/products-grid',
        name: 'products-grid',
        meta: {
            middleware: [auth,checkAuth]
        },
        component: () => import('../views/pages/ecommerce/products-grid')
    },
    {
        path: '/dashboard/ecommerce/sellers',
        name: 'sellers',
        meta: {
            middleware: [auth,checkAuth]
        },
        component: () => import('../views/pages/ecommerce/sellers')
    },
    {
        path: '/dashboard/email/inbox',
        name: 'email-inbox',
        meta: {
            middleware: [auth,checkAuth]
        },
        component: () => import('../views/pages/email/inbox')
    },
    {
        path: '/dashboard/email/reademail/:id',
        name: 'reademail',
        meta: {
            middleware: [auth,checkAuth]
        },
        component: () => import('../views/pages/email/reademail')
    },
    {
        path: '/dashboard/email/templates',
        name: 'email-templates',
        meta: {
            middleware: [auth,checkAuth]
        },
        component: () => import('../views/pages/email/templates')
    },
    {
        path: '/dashboard/task/list',
        name: 'task-list',
        meta: {
            middleware: [auth,checkAuth]
        },
        component: () => import('../views/pages/task/list')
    },
    {
        path: '/dashboard/task/detail',
        name: 'task-detail',
        meta: {
            middleware: [auth,checkAuth]
        },
        component: () => import('../views/pages/task/detail')
    },
    {
        path: '/dashboard/task/kanban',
        name: 'kanban-board',
        meta: {
            middleware: [auth,checkAuth]
        },
        component: () => import('../views/pages/task/kanban/index')
    },
    {
        path: '/dashboard/contacts/list',
        name: 'contacts-list',
        meta: {
            middleware: [auth,checkAuth]
        },
        component: () => import('../views/pages/contacts/list')
    },
    {
        path: '/dashboard/contacts/profile',
        name: 'contacts-profile',
        meta: {
            middleware: [auth,checkAuth]
        },
        component: () => import('../views/pages/contacts/profile')
    },
    {
        path: '/dashboard/auth/login-1',
        name: 'auth-login-1',
        meta: {
            middleware: [auth,checkAuth]
        },
        component: () => import('../views/pages/authi/login-1')
    },
    {
        path: '/dashboard/auth/register-1',
        name: 'auth-register-1',
        meta: {
            middleware: [auth,checkAuth]
        },
        component: () => import('../views/pages/authi/register-1')
    },
    {
        path: '/dashboard/auth/recoverpwd',
        name: 'auth-recoverpwd',
        meta: {
            middleware: [auth,checkAuth]
        },
        component: () => import('../views/pages/authi/recoverpwd')
    },
    {
        path: '/dashboard/auth/lock-screen',
        name: 'auth-lock-screen',
        meta: {
            middleware: [auth,checkAuth]
        },
        component: () => import('../views/pages/authi/lock-screen')
    },
    {
        path: '/dashboard/auth/signin-signup',
        name: 'auth-signin-signup',
        meta: {
            middleware: [auth,checkAuth]
        },
        component: () => import('../views/pages/authi/signin-signup')
    },
    {
        path: '/dashboard/auth/logout-1',
        name: 'auth-logout-1',
        meta: {
            middleware: [auth,checkAuth]
        },
        component: () => import('../views/pages/authi/logout-1')
    },
    {
        path: '/dashboard/auth/login-2',
        name: 'auth-login-2',
        meta: {
            middleware: [auth,checkAuth]
        },
        component: () => import('../views/pages/authi/login-2')
    },
    {
        path: '/dashboard/auth/register-2',
        name: 'auth-register-2',
        meta: {
            middleware: [auth,checkAuth]
        },
        component: () => import('../views/pages/authi/register-2')
    },
    {
        path: '/dashboard/auth/recoverpwd-2',
        name: 'auth-recoverpwd-2',
        meta: {
            middleware: [auth,checkAuth]
        },
        component: () => import('../views/pages/authi/recoverpwd-2')
    },
    {
        path: '/dashboard/auth/lock-screen-2',
        name: 'auth-lock-screen-2',
        meta: {
            middleware: [auth,checkAuth]
        },
        component: () => import('../views/pages/authi/lock-screen-2')
    },
    {
        path: '/dashboard/auth/signin-signup-2',
        name: 'auth-signin-signup-2',
        meta: {
            middleware: [auth,checkAuth]
        },
        component: () => import('../views/pages/authi/signin-signup-2')
    },
    {
        path: '/dashboard/auth/logout-2',
        name: 'auth-logout-2',
        meta: {
            middleware: [auth,checkAuth]
        },
        component: () => import('../views/pages/authi/logout-2')
    },
    {
        path: '/dashboard/extras/starter',
        name: 'extras-starter',
        meta: {
            middleware: [auth,checkAuth]
        },
        component: () => import('../views/pages/extras/starter')
    },
    {
        path: '/dashboard/extras/timeline',
        name: 'extras-timeline',
        meta: {
            middleware: [auth,checkAuth]
        },
        component: () => import('../views/pages/extras/timeline')
    },
    {
        path: '/dashboard/extras/sitemap',
        name: 'extras-sitemap',
        meta: {
            middleware: [auth,checkAuth]
        },
        component: () => import('../views/pages/extras/sitemap')
    },
    {
        path: '/dashboard/extras/invoice',
        name: 'extras-invoice',
        meta: {
            middleware: [auth,checkAuth]
        },
        component: () => import('../views/pages/extras/invoice')
    },
    {
        path: '/dashboard/extras/faqs',
        name: 'extras-faqs',
        meta: {
            middleware: [auth,checkAuth]
        },
        component: () => import('../views/pages/extras/faqs')
    },
    {
        path: '/dashboard/extras/search-results',
        name: 'extras-search-results',
        meta: {
            middleware: [auth,checkAuth]
        },
        component: () => import('../views/pages/extras/search-results')
    },
    {
        path: '/dashboard/extras/pricing',
        name: 'extras-pricing',
        meta: {
            middleware: [auth,checkAuth]
        },
        component: () => import('../views/pages/extras/pricing')
    },
    {
        path: '/dashboard/extras/maintenance',
        name: 'extras-maintenance',
        meta: {
            middleware: [auth,checkAuth]
        },
        component: () => import('../views/pages/extras/maintenance')
    },
    {
        path: '/dashboard/extras/coming-soon',
        name: 'extras-coming-soon',
        meta: {
            middleware: [auth,checkAuth]
        },
        component: () => import('../views/pages/extras/coming-soon')
    },
    {
        path: '/dashboard/extras/lightbox',
        name: 'extras-lightbox',
        meta: {
            middleware: [auth,checkAuth]
        },
        component: () => import('../views/pages/extras/lightbox')
    },
    {
        path: '/dashboard/error/404',
        name: 'error-404',
        meta: {
            middleware: [auth,checkAuth]
        },
        component: () => import('../views/pages/error/404')
    },
    {
        path: '/dashboard/error/500',
        name: 'error-500',
        meta: {
            middleware: [auth,checkAuth]
        },
        component: () => import('../views/pages/error/500')
    },
    {
        path: '/dashboard/error/404-alt',
        name: 'error-404-alt',
        meta: {
            middleware: [auth,checkAuth]
        },
        component: () => import('../views/pages/error/404-alt')
    },
    {
        path: '/dashboard/ui/avatars',
        name: 'ui-avatars',
        meta: {
            middleware: [auth,checkAuth]
        },
        component: () => import('../views/pages/ui/avatars')
    },
    {
        path: '/dashboard/ui/buttons',
        name: 'ui-buttons',
        meta: {
            middleware: [auth,checkAuth]
        },
        component: () => import('../views/pages/ui/buttons')
    },
    {
        path: '/dashboard/ui/cards',
        name: 'ui-cards',
        meta: {
            middleware: [auth,checkAuth]
        },
        component: () => import('../views/pages/ui/cards')
    },
    {
        path: '/dashboard/ui/carousel',
        name: 'ui-carousel',
        meta: {
            middleware: [auth,checkAuth]
        },
        component: () => import('../views/pages/ui/carousel')
    },
    {
        path: '/dashboard/ui/dropdowns',
        name: 'ui-dropdowns',
        meta: {
            middleware: [auth,checkAuth]
        },
        component: () => import('../views/pages/ui/dropdowns')
    },
    {
        path: '/dashboard/ui/general',
        name: 'ui-general',
        meta: {
            middleware: [auth,checkAuth]
        },
        component: () => import('../views/pages/ui/general')
    },
    {
        path: '/dashboard/ui/grid',
        name: 'ui-grid',
        meta: {
            middleware: [auth,checkAuth]
        },
        component: () => import('../views/pages/ui/grid')
    },
    {
        path: '/dashboard/ui/images',
        name: 'ui-images',
        meta: {
            middleware: [auth,checkAuth]
        },
        component: () => import('../views/pages/ui/images')
    },
    {
        path: '/dashboard/ui/list-group',
        name: 'ui-list-group',
        meta: {
            middleware: [auth,checkAuth]
        },
        component: () => import('../views/pages/ui/list-group')
    },
    {
        path: '/dashboard/ui/modals',
        name: 'ui-modals',
        meta: {
            middleware: [auth,checkAuth]
        },
        component: () => import('../views/pages/ui/modals')
    },
    {
        path: '/dashboard/ui/notifications',
        name: 'ui-notifications',
        meta: {
            middleware: [auth,checkAuth]
        },
        component: () => import('../views/pages/ui/notifications')
    },
    {
        path: '/dashboard/ui/portlets',
        name: 'ui-portlets',
        meta: {
            middleware: [auth,checkAuth]
        },
        component: () => import('../views/pages/ui/portlets')
    },
    {
        path: '/dashboard/ui/progress',
        name: 'ui-progress',
        meta: {
            middleware: [auth,checkAuth]
        },
        component: () => import('../views/pages/ui/progress')
    },
    {
        path: '/dashboard/ui/ribbons',
        name: 'ui-ribbons',
        meta: {
            middleware: [auth,checkAuth]
        },
        component: () => import('../views/pages/ui/ribbons')
    },
    {
        path: '/dashboard/ui/spinners',
        name: 'ui-spinners',

        component: () => import('../views/pages/ui/spinners')
    },
    {
        path: '/dashboard/ui/tabs-accordions',
        name: 'ui-tabs-accordions',
        meta: {
            middleware: [auth,checkAuth]
        },
        component: () => import('../views/pages/ui/tabs-accordions')
    },
    {
        path: '/dashboard/ui/tooltips-popovers',
        name: 'ui-tooltips-popovers',
        meta: {
            middleware: [auth,checkAuth]
        },
        component: () => import('../views/pages/ui/tooltips-popovers')
    },
    {
        path: '/dashboard/ui/typography',
        name: 'ui-typography',
        meta: {
            middleware: [auth,checkAuth]
        },
        component: () => import('../views/pages/ui/typography')
    },
    {
        path: '/dashboard/ui/video',
        name: 'ui-video',
        meta: {
            middleware: [auth,checkAuth]
        },
        component: () => import('../views/pages/ui/video')
    },
    {
        path: '/dashboard/extended/rangeslider',
        name: 'rangeslider',
        meta: {
            middleware: [auth,checkAuth]
        },
        component: () => import('../views/pages/extended/rangeslider')
    },
    {
        path: '/dashboard/extended/sweet-alert',
        name: 'sweet-alert',
        meta: {
            middleware: [auth,checkAuth]
        },
        component: () => import('../views/pages/extended/sweet-alert')
    },
    {
        path: '/dashboard/extended/tour',
        name: 'tour',
        meta: {
            middleware: [auth,checkAuth]
        },
        component: () => import('../views/pages/extended/tour')
    },
    {
        path: '/dashboard/extended/scrollspy',
        name: 'scrollspy',
        meta: {
            middleware: [auth,checkAuth]
        },
        component: () => import('../views/pages/extended/scrollspy')
    },
    {
        path: '/dashboard/widgets',
        name: 'widgets',
        meta: {
            middleware: [auth,checkAuth]
        },
        component: () => import('../views/pages/widgets')
    },
    {
        path: '/dashboard/icons/feather',
        name: 'feather',
        meta: {
            middleware: [auth,checkAuth]
        },
        component: () => import('../views/pages/icons/feather')
    },
    {
        path: '/dashboard/icons/remix',
        name: 'remix',
        meta: {
            middleware: [auth,checkAuth]
        },
        component: () => import('../views/pages/icons/remix')
    }, {
        path: '/dashboard/icons/boxicons',
        name: 'boxicons',
        meta: {
            middleware: [auth,checkAuth]
        },
        component: () => import('../views/pages/icons/boxicons')
    },
    {
        path: '/dashboard/icons/mdi',
        name: 'mdi',
        meta: {
            middleware: [auth,checkAuth]
        },
        component: () => import('../views/pages/icons/mdi')
    },
    {
        path: '/dashboard/icons/font-awesome',
        name: 'font-awesome',
        meta: {
            middleware: [auth,checkAuth]
        },
        component: () => import('../views/pages/icons/font-awesome')
    },
    {
        path: '/dashboard/icons/weather',
        name: 'weather',
        meta: {
            middleware: [auth,checkAuth]
        },
        component: () => import('../views/pages/icons/weather')
    },
    {
        path: '/dashboard/forms/elements',
        name: 'elements',
        meta: {
            middleware: [auth,checkAuth]
        },
        component: () => import('../views/pages/forms/elements')
    },
    {
        path: '/dashboard/forms/advanced',
        name: 'advanced-form',
        meta: {
            middleware: [auth,checkAuth]
        },
        component: () => import('../views/pages/forms/advanced')
    },
    {
        path: '/dashboard/forms/validation',
        name: 'validation',
        meta: {
            middleware: [auth,checkAuth]
        },
        component: () => import('../views/pages/forms/validation')
    },
    {
        path: '/dashboard/forms/wizard',
        name: 'wizard',
        meta: {
            middleware: [auth,checkAuth]
        },
        component: () => import('../views/pages/forms/wizard')
    },
    {
        path: '/dashboard/forms/mask',
        name: 'mask',
        meta: {
            middleware: [auth,checkAuth]
        },
        component: () => import('../views/pages/forms/mask')
    },
    {
        path: '/dashboard/forms/quill',
        name: 'quill',
        meta: {
            middleware: [auth,checkAuth]
        },
        component: () => import('../views/pages/forms/quill')
    },
    {
        path: '/dashboard/forms/file-uploads',
        name: 'file-uploads',
        meta: {
            middleware: [auth,checkAuth]
        },
        component: () => import('../views/pages/forms/file-uploads')
    },
    {
        path: '/dashboard/tables/basic',
        name: 'basic',

        component: () => import('../views/pages/tables/basic')
    },
    {
        path: '/dashboard/tables/advanced',
        name: 'advanced',

        component: () => import('../views/pages/tables/advanced')
    },
    {
        path: '/dashboard/charts/apex',
        name: 'charts-apex',
        meta: {
            middleware: [auth,checkAuth]
        },
        component: () => import('../views/pages/charts/apex')
    },
    {
        path: '/dashboard/charts/chartjs',
        name: 'charts-chartjs',
        meta: {
            middleware: [auth,checkAuth]
        },
        component: () => import('../views/pages/charts/chartjs')
    },
    {
        path: '/dashboard/charts/c3',
        name: 'charts-c3',
        meta: {
            middleware: [auth,checkAuth]
        },
        component: () => import('../views/pages/charts/c3')
    },
    {
        path: '/dashboard/charts/chartist',
        name: 'charts-chartist',
        meta: {
            middleware: [auth,checkAuth]
        },
        component: () => import('../views/pages/charts/chartist')
    },
    {
        path: '/dashboard/charts/knob',
        name: 'charts-knob',
        meta: {
            middleware: [auth,checkAuth]
        },
        component: () => import('../views/pages/charts/knob')
    },
    {
        path: '/dashboard/maps/google',
        name: 'maps-google',
        meta: {
            middleware: [auth,checkAuth]
        },
        component: () => import('../views/pages/maps/google')
    },
    {
        path:'*',
        name:'page404',
        component: () => import('../views/pages/error/404.vue')
    }
]
