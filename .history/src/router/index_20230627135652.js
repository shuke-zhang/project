import {createRouter,createWebHashHistory} from 'vue-router'

const routes  = [
    {
        path: '/',
        redirect: '/home'
      },
    {
        path:'/home',
        name:'Home',
        components:()=>import('../views/home/index.vue')
    }
]

const router = createRouter({
    history:createWebHashHistory(),
    routes:[
        {
            path: '/',
            redirect: '/home'
          },
        {
            path:'/home',
            name:'Home',
            components:()=>import('../views/home/index.vue')
        }
    ]
})

export default router