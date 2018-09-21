import Vue from 'vue'
import Router from 'vue-router'

import Home from '../components/home/Home'
import QuoteMachine from '../components/quote-machine/QuoteMachine'
import WikiViewer from '../components/wiki-viewer/WikiViewer'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/quote-machine',
            component: QuoteMachine
        },
        {
            path: '/wiki-viewer',
            component: WikiViewer
        }
    ]
})
