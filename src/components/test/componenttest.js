import Vue from 'vue'
import "./costomcomoponent"

let mixin={
    data(){
        return{
            msg:1
        }
    },
    methods:{
        foo(){
            console.log('hello from mixin!----'+this.msg++)
        }
    }
}
Vue.component('component-a', {
    prop:['postTitle'],
    template: `<h3>{{ postTitle }}</h3>`
})
Vue.component('component-b', { /* ... */ })
Vue.component('component-c', { /* ... */ })

var componentf={
    props: {
        title: String,
        likes: Number,
        isPublished: Boolean,
        commentIds: Array,
        author: Object,
        callback: Function,
        contactsPromise: Promise // or any other constructor
    },
    mixins:[mixin]

}

new Vue({
    el: '#app',
    //这样可以在同一个vue实例中使用局部组件d和e，当然还有全局组件abc
    components:{
        'component-d':{
            prop:['xxx'],
            //这样才能咋d中使用f
            components:{
                'component-f':componentf
            },
            template:`<component-f></component-f>`
        },
        'component-e':{
            prop: ['yyy']
        }
    }


})