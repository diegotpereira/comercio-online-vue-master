import Vue from "vue";
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: () => import('../layouts/Base.vue'),
        children: [
            {
                path: '', component: () => import('../views/home/Produtos.vue')
            }
        ]
    },
    {
        path: '/login',
        component: () => import ('../views/conta/Entrar.vue')
    }
]

const router = new VueRouter({
    base: process.env.BASE_URL,
    routes
})

export default router