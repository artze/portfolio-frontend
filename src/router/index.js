import Vue from 'vue'
import Router from 'vue-router'

import Home from '../components/home/Home'
import ProductivityTools from '../components/home/projects/ProductivityTools'
import IotPlatform from '../components/home/projects/IotPlatform'

import QuoteMachine from '../components/quote-machine/QuoteMachine'
import WikiViewer from '../components/wiki-viewer/WikiViewer'
import JourneyTracker from '../components/journey-tracker/JourneyTracker'
import ChatApp from '../components/chat-app/ChatApp'
import Kaleidoscope from '../components/kaleidoscope/Kaleidoscope'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/productivity-tools',
            component: ProductivityTools
        },
        {
            path: '/iot-platform',
            component: IotPlatform
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
        },
        {
            path: '/kaleidoscope',
            component: Kaleidoscope
        }
    ]
})
