export const menuItems = [
    {
        id: 1,
        label: "menuitems.navigation.text",
        isTitle: true
    },
    {
        id: 100032,
        label: 'menuitems.company.text',
        icon: 'fas fa-city',
        link: '/dashboard/company'
    },
    {
        id: 10007,
        label: 'menuitems.branch.text',
        icon: 'fas fa-code-branch',
        link: '/dashboard/branch'
    },
    {
        id: 10008,
        label: 'menuitems.store.text',
        icon: 'fas fa-store',
        link: '/dashboard/store'
    },
    {
        id: 10009,
        label: 'menuitems.serial.text',
        icon: 'fas fa-eraser',
        link: '/dashboard/serial'
    },
    {
        id: 113872,
        label: "general.Properties",
        icon: "fas fa-hand-spock",
        isMenuCollapsed: false,
        subItems: [
            {
                id:225,
                label: 'general.ScreenProperties',
                link: '/dashboard/screen-properties'
            },
            {
                id:226,
                label: 'general.TreeProperty',
                link: '/dashboard/tree-properties'
            },
        ]
    },
    {
        id: 10006,
        label: "menuitems.salesMen.text",
        icon: "fas fa-user-tag",
        isMenuCollapsed: false,
        subItems: [
            {
                id: 10027,
                label: 'menuitems.dashboard.list.salesMenType',
                link: '/dashboard/salesmenTypes'
            },
            {
                id: 100117,
                label: 'menuitems.dashboard.list.salesMen',
                link: '/dashboard/salesmen'
            },
            {
                id: 9,
                label: 'menuitems.dashboard.list.externalSalesmen',
                link: '/dashboard/externalSalesmen'
            },
            {
                id: 7636473,
                label: 'menuitems.dashboard.list.internalSalesmen',
                link: '/dashboard/internalSalesman'
            }
        ]
    },
    {
        id: 1000548,
        label: "menuitems.Banks.text",
        icon: "fas fa-piggy-bank",
        isMenuCollapsed: false,
        subItems: [
            {
                id:112201,
                label: 'general.paymentTypes',
                link: '/dashboard/paymentTypes'
            },
            {
                id:222,
                label: 'menuitems.Banks.text',
                link: '/dashboard/banks'
            },
            {
                id:112202,
                label: 'general.bankAccounts',
                link: '/dashboard/bankAccount'
            }
        ]
    },
    {
        id: 1000544,
        label: "menuitems.area.text",
        icon: "fas fa-flag",
        isMenuCollapsed: false,
        subItems: [
            {
                id: 2,
                label: 'menuitems.dashboard.list.country',
                link: '/dashboard/country'
            },
            {
                id: 3,
                label: 'menuitems.dashboard.list.governorate',
                link: '/dashboard/governorate'
            },
            {
                id: 4,
                label: 'menuitems.dashboard.list.city',
                link: '/dashboard/city'
            },
            {
                id: 8,
                label: 'menuitems.dashboard.list.avenue',
                link: '/dashboard/avenue'
            },
        ]
    },
    {
        id: 10001,
        label: "menuitems.role.text",
        icon: "ri-shield-user-line",
        isMenuCollapsed: false,
        subItems: [
            {
                id: 10002,
                label: 'menuitems.dashboard.list.rolesType',
                link: '/dashboard/rolesType'
            },
            {
                id: 10003,
                label: 'menuitems.dashboard.list.roles',
                link: '/dashboard/roles'
            },
            {
                id: 100043,
                label: 'menuitems.dashboard.list.roleWorkflow',
                link: '/dashboard/role-workflow'
            },
            {
                id: 100088,
                label: 'menuitems.dashboard.list.roleWorkflowButton',
                link: '/dashboard/role-workflow-button'
            },
            {
                id: 100134,
                label: 'menuitems.dashboard.list.RoleHotfieldScreen',
                link: '/dashboard/role-hotfield-screen'
            },
        ]
    },
    {
        id: 10023578,
        label: "general.realEstate",
        icon: "fas fa-hotel",
        isMenuCollapsed: false,
        subItems: [
            {
                id: 100001,
                label: 'general.unitstatus',
                link: '/dashboard/realEstate/unitstatus'
            },
            {
                id: 100111,
                label: 'general.contract',
                link: '/dashboard/realEstate/contract'
            },

            {
                id: 100021,
                label: 'general.contractunit',
                link: '/dashboard/realEstate/contractunit'
            },
            
            {
                id: 1000201,
                label: 'general.owner',
                link: '/dashboard/realEstate/owner'
            },
            {
                id: 10048103,
                label: 'general.building',
                link: '/dashboard/realEstate/building'
            },
            {
                id: 1022343,
                label: 'general.customer',
                link: '/dashboard/realEstate/customer'
            },
            {
                id: 1022323,
                label: 'general.wallet',
                link: '/dashboard/realEstate/wallet'
            },
            {
                id: 1042323,
                label: 'general.walletOwner',
                link: '/dashboard/realEstate/wallet-owner'
            },
            {
                id: 1042323,
                label: 'units.units',
                link: '/dashboard/realEstate/unit'
            },
            {
                id: 102371,
                label: 'general.building_wallet',
                link: '/dashboard/realEstate/building-wallet'
            },
        ]
    },
    {
        id: 1004346756,
        label: "general.archive",
        icon: "ri-share-line",
        isMenuCollapsed: false,
        subItems: [
            {
                id: 38781,
                label: 'menuitems.DocumentField.text',
                link: '/dashboard/document-fields'
            },
            {
                id: 34343,
                label: 'menuitems.ArchiveClosedReference.text',
                link: '/dashboard/archive-closed-references'
            },
            {
                id: 432234,
                label: 'menuitems.GenArchDocType.text',
                link: '/dashboard/gen-arch-doc-types'
            },
            {
                id: 34561,
                label: 'menuitems.ArchDocTypeField.text',
                link: '/dashboard/arch-doc-type-fields'
            },
            {
                id: 879756,
                label: 'menuitems.ArchDepartment.text',
                link: '/dashboard/arch-departments'
            },
            {
                id: 1567443,
                label: 'menuitems.ArchDocument.text',
                link: '/dashboard/arch-documents'
            },
            {
                id: 36462,
                label: 'menuitems.ArchDocumentDtl.text',
                link: '/dashboard/arch-document-dtls'
            },
            {
                id: 32020,
                label: 'menuitems.ArchDocumentStatus.text',
                link: '/dashboard/arch-doc-status'
            },
        ]
    },
    {
        id:224,
        label: 'general.Workflowhotfields',
        icon: 'fas fa-hot-tub',
        link: '/dashboard/workflow-hotfields'
    },
    {
        id: 223,
        label: 'general.Users',
        icon: 'fas fa-network-wired',
        link: '/dashboard/users'
    },
    {
        id: 5,
        label: 'menuitems.currency.text',
        icon: ' fas fa-dollar-sign',
        link: '/dashboard/currency'
    },
    {
        id: 6,
        label: 'menuitems.employee.text',
        icon: 'fas fa-user-friends',
        link: '/dashboard/employee'
    },
    {
        id: 7,
        label: 'menuitems.financialYear.text',
        icon: 'fas fa-file-invoice-dollar',
        link: '/dashboard/financialYear'
    },
    {
        id: 10004,
        label: 'menuitems.units.text',
        icon: 'far fa-list-alt',
        link: '/dashboard/units'
    },
    {
        id: 10005,
        label: 'menuitems.colors.text',
        icon: 'fas fa-palette',
        link: '/dashboard/colors'
    },
    {
        id: 10099,
        label: 'general.dictionary',
        icon: 'fas fa-palette',
        link: '/dashboard/dictionary'
    },


    // {
    //     id: 1115,
    //     label: "menuitems.dashboard.text",
    //     icon: "ri-dashboard-line",
    //     badge: {
    //         variant: "success",
    //         text: "menuitems.dashboard.badge"
    //     },
    //     isMenuCollapsed: false,
    //     subItems: [
    //         {
    //             id: 1114,
    //             label: 'menuitems.dashboard.list.sales',
    //             link: '/dashboard/'
    //         },
    //         {
    //             id: 1113,
    //             label: 'menuitems.dashboard.list.crm',
    //             link: '/dashboard/dashboard/crm'
    //         },
    //         {
    //             id: 1115,
    //             label: 'menuitems.dashboard.list.analytics',
    //             link: '/dashboard/dashboard/analytics'
    //         },
    //     ]
    // },
    // {
    //     id: 1114,
    //     label: "menuitems.apps.text",
    //     isTitle: true
    // },
    // {
    //     id: 11113,
    //     label: "menuitems.chat.text",
    //     icon: "ri-message-2-line",
    //     link: '/dashboard/apps/chat'
    // },
    // {
    //     id: 1112,
    //     label: "menuitems.ecommerce.text",
    //     icon: "ri-shopping-cart-2-line",
    //     badge: {
    //         variant: "danger",
    //         text: "menuitems.ecommerce.badge"
    //     },
    //     isMenuCollapsed: false,
    //     subItems: [
    //         {
    //             id: 1111,
    //             label: "menuitems.ecommerce.list.products",
    //             link: "/dashboard/ecommerce/products"
    //         },
    //         {
    //             id: 1110,
    //             label: "menuitems.ecommerce.list.productsgrid",
    //             link: "/dashboard/ecommerce/products-grid"
    //         },
    //         {
    //             id: 1109,
    //             label: 'menuitems.ecommerce.list.productdetail',
    //             link: '/dashboard/ecommerce/product-detail/1'
    //         },
    //         {
    //             id: 1108,
    //             label: 'menuitems.ecommerce.list.createproduct',
    //             link: '/dashboard/ecommerce/product-create'
    //         },
    //         {
    //             id: 1107,
    //             label: "menuitems.ecommerce.list.customers",
    //             link: "/dashboard/ecommerce/customers"
    //         },
    //         {
    //             id: 1106,
    //             label: "menuitems.ecommerce.list.orders",
    //             link: "/dashboard/ecommerce/orders"
    //         },
    //         {
    //             id: 1105,
    //             label: "menuitems.ecommerce.list.orderdetail",
    //             link: "/dashboard/ecommerce/order-detail"
    //         },
    //         {
    //             id: 1104,
    //             label: "menuitems.ecommerce.list.sellers",
    //             link: "/dashboard/ecommerce/sellers"
    //         },
    //         {
    //             id: 1103,
    //             label: "menuitems.ecommerce.list.cart",
    //             link: "/dashboard/ecommerce/cart"
    //         },
    //         {
    //             id: 1102,
    //             label: "menuitems.ecommerce.list.checkout",
    //             link: "/dashboard/ecommerce/checkout"
    //         }
    //     ]
    // },
    // {
    //     id: 1101,
    //     label: 'menuitems.calendar.text',
    //     icon: 'ri-calendar-2-line',
    //     link: '/dashboard/apps/calendar'
    // },
    // {
    //     id: 1100,
    //     label: 'menuitems.email.text',
    //     icon: 'ri-mail-line',
    //     isMenuCollapsed: false,
    //     subItems: [
    //         {
    //             id: 1099,
    //             label: 'menuitems.email.list.inbox',
    //             link: '/dashboard/email/inbox'
    //         },
    //         {
    //             id: 1098,
    //             label: 'menuitems.email.list.reademail',
    //             link: '/dashboard/email/reademail/1'
    //         },
    //         {
    //             id: 1097,
    //             label: 'menuitems.email.list.template',
    //             link: '/dashboard/email/templates'
    //         }
    //     ]
    // },
    // {
    //     id: 1096,
    //     label: 'menuitems.companies.text',
    //     icon: 'ri-building-4-line',
    //     link: '/dashboard/apps/companies'
    // },
    // {
    //     id: 1095,
    //     label: 'menuitems.tasks.text',
    //     icon: 'ri-task-line',
    //     isMenuCollapsed: false,
    //     subItems: [
    //         {
    //             id: 1093,
    //             label: 'menuitems.tasks.list.list',
    //             link: '/dashboard/task/list'
    //         },
    //         {
    //             id: 1092,
    //             label: 'menuitems.tasks.list.detail',
    //             link: '/dashboard/task/detail'
    //         },
    //         {
    //             id: 1091,
    //             label: 'menuitems.tasks.list.kanban',
    //             link: '/dashboard/task/kanban'
    //         }
    //     ]
    // },
    // {
    //     id: 1090,
    //     label: 'menuitems.ticket.text',
    //     icon: 'ri-customer-service-2-line',
    //     link: '/dashboard/apps/tickets'
    // },
    // {
    //     id: 1089,
    //     label: 'menuitems.contacts.text',
    //     icon: 'ri-profile-line',
    //     isMenuCollapsed: false,
    //     subItems: [
    //         {
    //             id: 1088,
    //             label: 'menuitems.contacts.list.members',
    //             link: '/dashboard/contacts/list'
    //         },
    //         {
    //             id: 1087,
    //             label: 'menuitems.contacts.list.profile',
    //             link: '/dashboard/contacts/profile'
    //         }
    //     ]
    // },
    // {
    //     id: 1086,
    //     label: 'menuitems.filemanager.text',
    //     icon: 'ri-folders-line',
    //     link: '/dashboard/apps/file-manager'
    // },
    // {
    //     id: 1085,
    //     label: "menuitems.custom.text",
    //     isTitle: true
    // },
    // {
    //     id: 1084,
    //     label: 'menuitems.auth.text',
    //     icon: 'ri-shield-user-line',
    //     isMenuCollapsed: false,
    //     subItems: [
    //         {
    //             id: 1083,
    //             label: 'menuitems.auth.list.login',
    //             link: '/dashboard/auth/login-1'
    //         },
    //         {
    //             id: 1082,
    //             label: 'menuitems.auth.list.login-2',
    //             link: '/dashboard/auth/login-2'
    //         },
    //         {
    //             id: 1081,
    //             label: 'menuitems.auth.list.register',
    //             link: '/dashboard/auth/register-1'
    //         },
    //         {
    //             id: 1080,
    //             label: 'menuitems.auth.list.register-2',
    //             link: '/dashboard/auth/register-2'
    //         },
    //         {
    //             id: 1079,
    //             label: 'menuitems.auth.list.signin-signup',
    //             link: '/dashboard/auth/signin-signup'
    //         },
    //         {
    //             id: 1078,
    //             label: 'menuitems.auth.list.signin-signup-2',
    //             link: '/dashboard/auth/signin-signup-2'
    //         },
    //         {
    //             id: 1077,
    //             label: 'menuitems.auth.list.recoverpwd',
    //             link: '/dashboard/auth/recoverpwd'
    //         },
    //         {
    //             id: 1076,
    //             label: 'menuitems.auth.list.recoverpwd-2',
    //             link: '/dashboard/auth/recoverpwd-2'
    //         },
    //         {
    //             id: 1075,
    //             label: 'menuitems.auth.list.lock-screen',
    //             link: '/dashboard/auth/lock-screen'
    //         },
    //         {
    //             id: 1074,
    //             label: 'menuitems.auth.list.lock-screen-2',
    //             link: '/dashboard/auth/lock-screen-2'
    //         },
    //         {
    //             id: 1073,
    //             label: 'menuitems.auth.list.logout',
    //             link: '/dashboard/auth/logout-1'
    //         },
    //         {
    //             id: 1072,
    //             label: 'menuitems.auth.list.logout-2',
    //             link: '/dashboard/auth/logout-2'
    //         },
    //         {
    //             id: 1072,
    //             label: 'menuitems.auth.list.confirm-mail',
    //             link: '/dashboard/auth/confirm-mail'
    //         },
    //         {
    //             id: 1072,
    //             label: 'menuitems.auth.list.confirm-mail-2',
    //             link: '/dashboard/auth/confirm-mail-2'
    //         },
    //     ]
    // },
    // {
    //     id: 1071,
    //     label: 'menuitems.extrapages.text',
    //     icon: 'ri-pages-line',
    //     isMenuCollapsed: false,
    //     subItems: [
    //         {
    //             id: 1070,
    //             label: 'menuitems.extrapages.list.starter',
    //             link: '/dashboard/extras/starter'
    //         },
    //         {
    //             id: 1069,
    //             label: 'menuitems.extrapages.list.timeline',
    //             link: '/dashboard/extras/timeline'
    //         },
    //         {
    //             id: 1068,
    //             label: 'menuitems.extrapages.list.sitemap',
    //             link: '/dashboard/extras/sitemap'
    //         },
    //         {
    //             id: 1067,
    //             label: 'menuitems.extrapages.list.invoice',
    //             link: '/dashboard/extras/invoice'
    //         },
    //         {
    //             id: 1066,
    //             label: 'menuitems.extrapages.list.faqs',
    //             link: '/dashboard/extras/faqs'
    //         },
    //         {
    //             id: 1065,
    //             label: 'menuitems.extrapages.list.search-results',
    //             link: '/dashboard/extras/search-results'
    //         },
    //         {
    //             id: 1064,
    //             label: 'menuitems.extrapages.list.pricing',
    //             link: '/dashboard/extras/pricing'
    //         },
    //         {
    //             id: 1063,
    //             label: 'menuitems.extrapages.list.maintenance',
    //             link: '/dashboard/extras/maintenance'
    //         },
    //         {
    //             id: 1062,
    //             label: 'menuitems.extrapages.list.comingsoon',
    //             link: '/dashboard/extras/coming-soon'
    //         },
    //         {
    //             id: 1061,
    //             label: 'menuitems.extrapages.list.lightbox',
    //             link: '/dashboard/extras/lightbox'
    //         },
    //         {
    //             id: 1060,
    //             label: 'menuitems.extrapages.list.error404',
    //             link: '/dashboard/error/404'
    //         },
    //         {
    //             id: 1059,
    //             label: 'menuitems.extrapages.list.error404-alt',
    //             link: '/dashboard/error/404-alt'
    //         },
    //         {
    //             id: 1058,
    //             label: 'menuitems.extrapages.list.error500',
    //             link: '/dashboard/error/500'
    //         }
    //     ]
    // },
    // {
    //     id: 1057,
    //     label: "menuitems.components.text",
    //     isTitle: true
    // },
    // {
    //     id: 1056,
    //     label: 'menuitems.ui.text',
    //     icon: 'ri-pencil-ruler-2-line',
    //     isMenuCollapsed: false,
    //     subItems: [
    //         {
    //             id: 1055,
    //             label: 'menuitems.ui.list.avatars',
    //             link: '/dashboard/ui/avatars'
    //         },
    //         {
    //             id: 1054,
    //             label: 'menuitems.ui.list.buttons',
    //             link: '/dashboard/ui/buttons'
    //         },
    //         {
    //             id: 1053,
    //             label: 'menuitems.ui.list.cards',
    //             link: '/dashboard/ui/cards'
    //         },
    //         {
    //             id: 1052,
    //             label: 'menuitems.ui.list.carousel',
    //             link: '/dashboard/ui/carousel'
    //         },
    //         {
    //             id: 1051,
    //             label: 'menuitems.ui.list.dropdowns',
    //             link: '/dashboard/ui/dropdowns'
    //         },
    //         {
    //             id: 1050,
    //             label: 'menuitems.ui.list.video',
    //             link: '/dashboard/ui/video'
    //         },
    //         {
    //             id: 1049,
    //             label: 'menuitems.ui.list.general',
    //             link: '/dashboard/ui/general'
    //         },
    //         {
    //             id: 1048,
    //             label: 'menuitems.ui.list.grid',
    //             link: '/dashboard/ui/grid'
    //         },
    //         {
    //             id: 1047,
    //             label: 'menuitems.ui.list.images',
    //             link: '/dashboard/ui/images'
    //         },
    //         {
    //             id: 1046,
    //             label: 'menuitems.ui.list.listgroup',
    //             link: '/dashboard/ui/list-group'
    //         },
    //         {
    //             id: 1045,
    //             label: 'menuitems.ui.list.modals',
    //             link: '/dashboard/ui/modals'
    //         },
    //         {
    //             id: 1044,
    //             label: 'menuitems.ui.list.notifications',
    //             link: '/dashboard/ui/notifications'
    //         },
    //         {
    //             id: 1043,
    //             label: 'menuitems.ui.list.portlet',
    //             link: '/dashboard/ui/portlets'
    //         },
    //         {
    //             id: 1042,
    //             label: 'menuitems.ui.list.progress',
    //             link: '/dashboard/ui/progress'
    //         },
    //         {
    //             id: 1041,
    //             label: 'menuitems.ui.list.ribbons',
    //             link: '/dashboard/ui/ribbons'
    //         },
    //         {
    //             id: 1040,
    //             label: 'menuitems.ui.list.spinners',
    //             link: '/dashboard/ui/spinners'
    //         },
    //         {
    //             id: 1039,
    //             label: 'menuitems.ui.list.tabs',
    //             link: '/dashboard/ui/tabs-accordions'
    //         },
    //         {
    //             id: 1038,
    //             label: 'menuitems.ui.list.tooltip',
    //             link: '/dashboard/ui/tooltips-popovers'
    //         },
    //         {
    //             id: 1037,
    //             label: 'menuitems.ui.list.typography',
    //             link: '/dashboard/ui/typography'
    //         }
    //     ]
    // },
    // {
    //     id: 1036,
    //     label: 'menuitems.extendedui.text',
    //     icon: 'ri-stack-line',
    //     badge: {
    //         variant: "primary",
    //         text: "menuitems.extendedui.badge"
    //     },
    //     isMenuCollapsed: false,
    //     subItems: [
    //         {
    //             id: 1035,
    //             label: 'menuitems.extendedui.list.rangeslider',
    //             link: '/dashboard/extended/rangeslider'
    //         },
    //         {
    //             id: 1034,
    //             label: 'menuitems.extendedui.list.sweetalert',
    //             link: '/dashboard/extended/sweet-alert'
    //         },
    //         {
    //             id: 1033,
    //             label: 'menuitems.extendedui.list.tour',
    //             link: '/dashboard/extended/tour'
    //         },
    //         {
    //             id: 1032,
    //             label: 'menuitems.extendedui.list.scrollspy',
    //             link: '/dashboard/extended/scrollspy'
    //         },
    //     ]
    // },
    // {
    //     id: 1031,
    //     label: 'menuitems.widgets.text',
    //     icon: 'ri-honour-line',
    //     link: '/dashboard/widgets'
    // },
    // {
    //     id: 1024,
    //     label: 'menuitems.icons.text',
    //     icon: 'ri-markup-line',
    //     isMenuCollapsed: false,
    //     subItems: [
    //         {
    //             id: 1025,
    //             label: 'menuitems.icons.list.feather',
    //             link: '/dashboard/icons/feather'
    //         },
    //         {
    //             id: 1026,
    //             label: 'menuitems.icons.list.remix',
    //             link: '/dashboard/icons/remix'
    //         },
    //         {
    //             id: 1027,
    //             label: 'menuitems.icons.list.boxicons',
    //             link: '/dashboard/icons/boxicons'
    //         },
    //         {
    //             id: 1028,
    //             label: 'menuitems.icons.list.materialdesign',
    //             link: '/dashboard/icons/mdi'
    //         },
    //         {
    //             id: 1029,
    //             label: 'menuitems.icons.list.fontawesome',
    //             link: '/dashboard/icons/font-awesome'
    //         },
    //         {
    //             id: 1030,
    //             label: 'menuitems.icons.list.weather',
    //             link: '/dashboard/icons/weather'
    //         }
    //     ]
    // },
    // {
    //     id: 1023,
    //     label: 'menuitems.forms.text',
    //     icon: 'ri-eraser-line',
    //     isMenuCollapsed: false,
    //     subItems: [
    //         {
    //             id: 1022,
    //             label: 'menuitems.forms.list.elements',
    //             link: '/dashboard/forms/elements'
    //         },
    //         {
    //             id: 1021,
    //             label: 'menuitems.forms.list.advanced',
    //             link: '/dashboard/forms/advanced'
    //         },
    //         {
    //             id: 1020,
    //             label: 'menuitems.forms.list.validation',
    //             link: '/dashboard/forms/validation'
    //         },
    //         {
    //             id: 1019,
    //             label: 'menuitems.forms.list.wizard',
    //             link: '/dashboard/forms/wizard'
    //         },
    //         {
    //             id: 1018,
    //             label: 'menuitems.forms.list.mask',
    //             link: '/dashboard/forms/mask'
    //         },
    //         {
    //             id: 1017,
    //             label: 'menuitems.forms.list.editor',
    //             link: '/dashboard/forms/quill'
    //         },
    //         {
    //             id: 1016,
    //             label: 'menuitems.forms.list.fileupload',
    //             link: '/dashboard/forms/file-uploads'
    //         }
    //     ]
    // },
    // {
    //     id: 1015,
    //     label: 'menuitems.tables.text',
    //     icon: 'ri-table-line',
    //     isMenuCollapsed: false,
    //     subItems: [
    //         {
    //             id: 1014,
    //             label: 'menuitems.tables.list.basic',
    //             link: '/dashboard/tables/basic'
    //         },
    //         {
    //             id: 1013,
    //             label: 'menuitems.tables.list.advanced',
    //             link: '/dashboard/tables/advanced'
    //         },
    //     ]
    // },
    // {
    //     id: 1012,
    //     label: 'menuitems.charts.text',
    //     icon: 'ri-bar-chart-line',
    //     isMenuCollapsed: false,
    //     subItems: [
    //         {
    //             id: 1007,
    //             label: 'menuitems.charts.list.apex',
    //             link: '/dashboard/charts/apex'
    //         },
    //         {
    //             id: 1008,
    //             label: 'menuitems.charts.list.chartjs',
    //             link: '/dashboard/charts/chartjs'
    //         },
    //         {
    //             id: 1009,
    //             label: 'menuitems.charts.list.c3',
    //             link: '/dashboard/charts/c3'
    //         },
    //         {
    //             id: 1010,
    //             label: 'menuitems.charts.list.chartist',
    //             link: '/dashboard/charts/chartist'
    //         },
    //         {
    //             id: 1011,
    //             label: 'menuitems.charts.list.knob',
    //             link: '/dashboard/charts/knob'
    //         }
    //     ]
    // },
    // {
    //     id: 1006,
    //     label: 'menuitems.maps.text',
    //     icon: 'ri-map-pin-line',
    //     isMenuCollapsed: false,
    //     subItems: [
    //         {
    //             id: 1005,
    //             label: 'menuitems.maps.list.googlemap',
    //             link: '/dashboard/maps/google'
    //         }
    //     ]
    // },
    // {
    //     id: 1004,
    //     label: "menuitems.multilevel.text",
    //     icon: "ri-share-line",
    //     isMenuCollapsed: false,
    //     subItems: [
    //         {
    //             id: 1003,
    //             label: "menuitems.multilevel.list.level1.1",
    //             link: "javascript: void(0);",
    //         },
    //         {
    //             id: 1002,
    //             label: "menuitems.multilevel.list.level1.2",
    //             isMenuCollapsed: false,
    //             subItems: [
    //                 {
    //                     id: 1001,
    //                     label: "menuitems.multilevel.list.level1.level2.1",
    //                     link: "javascript: void(0);"
    //                 },
    //                 {
    //                     id: 1000,
    //                     label: "menuitems.multilevel.list.level1.level2.2",
    //                     link: "javascript: void(0);"
    //                 }
    //             ]
    //         }
    //     ]
    // }
];

