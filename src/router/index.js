import Vue from 'vue'
import Router from 'vue-router'

import Home from '../components/home/Home.vue'
import QuoteMachine from '../components/quote-machine/QuoteMachine'

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
        }
    ]
})
