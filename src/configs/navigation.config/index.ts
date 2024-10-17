import {
    //NAV_ITEM_TYPE_TITLE,
    NAV_ITEM_TYPE_ITEM,
    NAV_ITEM_TYPE_COLLAPSE,
} from '@/constants/navigation.constant'
import type { NavigationTree } from '@/@types/navigation'

const navigationConfig: NavigationTree[] = [
    {
        key: 'dashboard',
        path: '/dashboard',
        title: 'Dashboard',
        translateKey: 'nav.dashboard',
        icon: 'home',
        type: NAV_ITEM_TYPE_ITEM,
        authority: [],
        subMenu: [],
    },

    /** Example purpose only, please remove */
    {
        key: 'projects',
        path: '/projects',
        title: 'Projects',
        translateKey: 'nav.projects',
        icon: 'singleMenu',
        type: NAV_ITEM_TYPE_ITEM,
        authority: [],
        subMenu: [],
    },

    {
        key: 'documents',
        path: '/documents',
        title: 'Documents',
        translateKey: 'nav.documents',
        icon: 'singleMenu',
        type: NAV_ITEM_TYPE_ITEM,
        authority: [],
        subMenu: [],
    },
    {
        key: 'tasks',
        path: '/tasks',
        title: 'Tasks',
        translateKey: 'nav.tasks',
        icon: 'singleMenu',
        type: NAV_ITEM_TYPE_ITEM,
        authority: [],
        subMenu: [],
    },
    {
        key: 'customers',
        path: '/customers',
        title: 'Customers',
        translateKey: 'nav.customers',
        icon: 'singleMenu',
        type: NAV_ITEM_TYPE_ITEM,
        authority: [],
        subMenu: [],
    },
    {
        key: 'chat',
        path: '/chat/ChatPage',
        title: 'Chat',
        translateKey: 'nav.chat',
        icon: 'singleMenu',
        type: NAV_ITEM_TYPE_ITEM,
        authority: [],
        subMenu: [],
    },
    {
        key: 'options',
        path: '/options',
        title: 'Options',
        translateKey: 'nav.sabloane.collapseMenu',
        icon: 'collapseMenu',
        type: NAV_ITEM_TYPE_COLLAPSE,
        authority: [],
        subMenu: [
            {
                key: 'logs',
                path: '/logs',
                title: 'Logs',
                translateKey: 'nav.logs.item4',
                icon: 'singleMenu',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu: [],
            },
            {
                key: 'account-settings',
                path: '/account-settings',
                title: 'Account Settings',
                translateKey: 'nav.setari-cont.item5',
                icon: 'singleMenu',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu: [],
            },
        ],
    },
]

export default navigationConfig
