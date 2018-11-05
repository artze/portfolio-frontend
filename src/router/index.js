import Vue from 'vue'
import Router from 'vue-router'

import Home from '../components/home/Home'
import Contact from '../components/contact/Contact'

import QuoteMachine from '../components/quote-machine/QuoteMachine'
import WikiViewer from '../components/wiki-viewer/WikiViewer'
import JourneyTracker from '../components/journey-tracker/JourneyTracker'
import ChatApp from '../components/chat-app/ChatApp'

import Projects from '../components/projects/Projects'
import WorkProjectIndex from '../components/projects/WorkProjectIndex'
import ProjectIndex from '../components/projects/ProjectIndex'
import ProductivityTools from '../components/projects/productivity-tools/ProductivityTools'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/projects',
            component: Projects,
            redirect: '/projects/index',
            children: [
                {
                    path: 'work',
                    component: WorkProjectIndex
                },
                {
                    path: 'index',
                    component: ProjectIndex
                },
                {
                    path: 'productivity-tools',
                    component: ProductivityTools
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
