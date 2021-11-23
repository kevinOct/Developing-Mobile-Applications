import {createRouter, createWebHistory} from 'vue-router'

import LogIn from '../Views/LogIn'
import welcomePage from '../Views/welcomePage'
import signUp from '../Views/SignUp'


const routes = [
    {
        path: '/',
        name: 'welcomePage',
        component: welcomePage,
    },
    {
        path: '/login',
        name: 'LogIn',
        component: LogIn,
    },
    {
        path: '/signup',
        name: 'signup',
        component: signUp,
    }
]

const router = createRouter(
    {
        history: createWebHistory(process.env.BASE_URL),
        routes
    }
)

export default router