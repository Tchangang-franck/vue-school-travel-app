import { createRouter,createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import sourceData from '@/data.json'
const routes=[
    { 
        path:'/',
        name:'home',
        alias:'/home',
        component:Home
    },
    {
        path:'/login',
        name:'login',
        component:()=>import('@/views/Login.vue')
    },
    {

        path:'/invoices',
        name:'invoices',
        components:{
            default:()=>import('@/views/Invoices.vue'),
            leftsidebar:()=>import('@/components/LeftSideBar.vue')
        },
        meta:{requiredAuth :true}
    },
    {
        path:'/protected',
        name:'protected',
        components:{
            default:()=>import('@/views/Protected.vue'),
            leftsidebar:()=>import('@/components/LeftSideBar.vue')
        },
        meta:{requiredAuth:true}
    },

    {
        path :'/destination/:id/:slug',
        name:'destination.show',
        component:()=>import('@/views/DestinationShow.vue'),
        props:route=>({...route.params,id:parseInt(route.params.id)}),
        beforeEnter:(to,from)=>{
            const exist=sourceData.destinations.find(
                destination=>(destination.id===parseInt(to.params.id))
            )
            if(!exist) 
                return {
            name:'notfound',

            //allows keeping the url while rendering a different page 
            params:{pathMacth:to.path.split('/').slice(1)},
            query:to.query,
            hash:to.hash,
        }
},
        children:[
            {
                path:':experienceSlug',
                name:'experience.show',
                component:()=>import('@/views/ExperienceShow.vue'),
                props:route=>({...route.params,id:parseInt(route.params.id)})
            }

        ]
    },

    {
        path:'/:pathMatch(.*)*',
        name:'notfound',
        component:()=>import('@/views/NotFound.vue')
    }

]


const router= createRouter({
    history:createWebHistory(),
    routes,
    scrollBehavior(to,from,savedPosition){
        return savedPosition || new  Promise((resolve)=>{
            setTimeout(()=>{
                resolve({top:0,behavior:'smooth'})
            },300)
        })
       
    },
    linkActiveClass:'vue-school-app'
}
)
router.beforeEach((to,from)=>{
    if(to.meta.requiredAuth && !window.user){
        return {
            name:'login',
            query: {redirect:to.fullPath}
            
        }
    }
})
export default router