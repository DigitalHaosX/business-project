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
        key: 'proiecte',
        path: '/proiecte',
        component: lazy(() => import('@/views/demo/Proiecte')),
        authority: [],
    },
    {
        key: 'proiecteDetails',
        path: '/proiecte/:id',
        component: lazy(() => import('@/views/demo/ProiecteDetails')),
        authority: [],
    },
    {
        key: 'documente',
        path: '/documente',
        component: lazy(() => import('@/views/demo/Documente')),
        authority: [],
    },
    {
        key: 'sarcini',
        path: '/sarcini',
        component: lazy(() => import('@/views/demo/Sarcini')),
        authority: [],
    },
    {
        key: 'constatari',
        path: '/constatari/:id?',
        component: lazy(() => import('@/views/demo/Constatari')),
        authority: [],
    },
    {
        key: 'piese',
        path: '/piese',
        component: lazy(() => import('@/views/demo/Piese')),
        authority: [],
    },
    {
        key: 'clienti',
        path: '/clienti',
        component: lazy(() => import('@/views/demo/Clienti')),
        authority: [],
    },
    {
        key: 'chat',
        path: '/chat/ChatPage',
        component: lazy(() => import('@/views/demo/chat/ChatPage')),
        authority: [],
    },
    {
        key: 'utilizatori',
        path: '/utilizatori',
        component: lazy(() => import('@/views/demo/Utilizatori')),
        authority: [],
    },
    {
        key: 'statusuri',
        path: '/statusuri',
        component: lazy(() => import('@/views/demo/Statusuri')),
        authority: [],
        subMenu: [],
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
        key: 'setari-cont.item5',
        path: '/setari-cont',
        component: lazy(() => import('@/views/demo/SetariCont')),
        authority: [],
    },
]
