import {createRouter,createWebHashHistory} from 'vue-router'

const routes  = [
    {
        path:'/index',
        name:'Home',
        components:()=>import('../views/Home.vue')
    }
]

const router = createRouter({
    history:createWebHashHistory(),
    routes
})

export default router