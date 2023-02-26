// vue router
import * as VueRouter from "vue-router"
import App from "../App.vue";

const routes = [
    {path: '/', name: 'Home', component: App},
]

export const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes, // short for `routes: routes`
})
