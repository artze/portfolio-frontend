import Vue from 'vue'
import Router from 'vue-router'

import Home from '../components/home/Home'
import Projects from '../components/home/projects/Projects'
import Contact from '../components/home/contact/Contact'

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
            path: '/projects',
            component: Projects
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
