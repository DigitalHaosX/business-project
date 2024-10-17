import { lazy } from 'react'
import authRoute from './authRoute'
import type { Routes } from '@/@types/routes'

export const publicRoutes: Routes = [...authRoute]

export const protectedRoutes = [
    {
        key: 'dashboard',
        path: '/home',
        component: lazy(() => import('@/views/Home')),
        authority: [],
    },

    /** Example purpose only, please remove */
    {
        key: 'projects',
        path: '/projects',
        component: lazy(() => import('@/views/demo/Projects')),
        authority: [],
    },
    {
        key: 'projectsDetails',
        path: '/projects/:id',
        component: lazy(() => import('@/views/demo/ProjectsDetails')),
        authority: [],
    },
    {
        key: 'documents',
        path: '/documents',
        component: lazy(() => import('@/views/demo/Documents')),
        authority: [],
    },
    {
        key: 'tasks',
        path: '/tasks',
        component: lazy(() => import('@/views/demo/Tasks')),
        authority: [],
    },
    {
        key: 'customers',
        path: '/customers',
        component: lazy(() => import('@/views/demo/Customers')),
        authority: [],
    },
    {
        key: 'chat',
        path: '/chat/ChatPage',
        component: lazy(() => import('@/views/demo/chat/ChatPage')),
        authority: [],
    },
    {
        key: 'collapseMenu.item3',
        path: '/sabloane',
        component: lazy(() => import('@/views/demo/Sabloane')),
        authority: [],
    },
    {
        key: 'tip-proiecte.item1',
        path: '/tip-proiecte',
        component: lazy(() => import('@/views/demo/TipProiecte')),
        authority: [],
    },
    {
        key: 'sabloane-documente.item2',
        path: '/sabloane-documente',
        component: lazy(() => import('@/views/demo/SabloaneDocumente')),
        authority: [],
    },
    {
        key: 'sabloane-sarcini.item3',
        path: '/sabloane-sarcini',
        component: lazy(() => import('@/views/demo/SabloaneSarcini')),
        authority: [],
    },
    {
        key: 'logs.item4',
        path: '/logs',
        component: lazy(() => import('@/views/demo/Logs')),
        authority: [],
    },
    {
        key: 'account-settings',
        path: '/account-settings',
        component: lazy(() => import('@/views/demo/AccountSettings')),
        authority: [],
    },
]
