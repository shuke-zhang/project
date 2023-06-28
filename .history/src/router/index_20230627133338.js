import {createRouter,createWebHashHistory} from 'vue-router'

const routes  = [
    {
        path:'/index',
        name:'Home',
        redirect: '/',
        components:()=>import('../views/home/index.vue')
        
    }
]

const router = createRouter({
    history:createWebHashHistory(),
    routes
})

export default router