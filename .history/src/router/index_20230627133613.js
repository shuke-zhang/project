import {createRouter,createWebHashHistory} from 'vue-router'

const routes  = [
    {
        path:'/home',
        name:'Home',
        redirect: '/home',
        components:()=>import('../views/home/index.vue')
        
    }
]

const router = createRouter({
    history:createWebHashHistory(),
    routes
})

export default router