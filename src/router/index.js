// import Vue from 'vue'
import Vue from 'vue/dist/vue.js'
import Router from 'vue-router'
import Login from "@/components/login/Login.vue";
import HelloWorld from "@/components/HelloWorld.vue";


Vue.use(Router);

export default new Router({
    mode:"hash",
    routes:[
        {
            path:'/',
            redirect:'/login'
        },
        {
            path:'/index',
            name:'HelloWorld',
            component:HelloWorld
        },
        {
            path:'/login',
            name:'Login',
            component:Login
        },

    ]
})
