import Vue from 'vue'
import Router from 'vue-router'

import Home from '../components/home/Home'
import About from '../components/about/About'
import Projects from '../components/projects/Projects'
import WorkProjectIndex from '../components/projects/WorkProjectIndex'
import HobbyProjectIndex from '../components/projects/HobbyProjectIndex'
import ProductivityTools from '../components/projects/productivity-tools/ProductivityTools'
import Microservices from '../components/projects/microservices/Microservices'
import Contact from '../components/contact/Contact'

import QuoteMachine from '../components/quote-machine/QuoteMachine'
import WikiViewer from '../components/wiki-viewer/WikiViewer'
import JourneyTracker from '../components/journey-tracker/JourneyTracker'
import ChatApp from '../components/chat-app/ChatApp'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/about',
            component: About
        },
        {
            path: '/projects',
            component: Projects,
            redirect: '/projects/work',
            children: [
                {
                    path: 'work',
                    component: WorkProjectIndex
                },
                {
                    path: 'hobby',
                    component: HobbyProjectIndex
                },
                {
                    path: 'productivity-tools',
                    component: ProductivityTools
                },
                {
                    path: 'microservices',
                    component: Microservices
                }
            ]
        },
        {
            path: '/contact',
            component: Contact
        },
        {
            path: '/quote-machine',
            component: QuoteMachine
        },
        {
            path: '/wiki-viewer',
            component: WikiViewer
        },
        {
            path: '/journey-tracker',
            component: JourneyTracker
        },
        {
            path: '/chat-app',
            component: ChatApp
        }
    ]
})
