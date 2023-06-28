import {createRouter,createWebHashHistory} from 'vue-router'

const routes  = [
   
    {
        path:'/home',
        name:'Home',
        components:()=>import('../views/home/index.vue')
    }
]

const router = createRouter({
    history:createWebHashHistory(),
    routes
})

export default router