// import Vue from 'vue'
import Vue from 'vue/dist/vue.js'
import App from './App.vue'


//导入router.js，然后在vue中传递，这样将router文件与vue关联起来。
import router from './router/index'
// import slotlayout from "@/components/synctest/slotlayout";
// import ElementUI from 'element-ui'
import {
  Button,
  Radio,
  Row,
  Col,
  Input,
  Form,
  FormItem

} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import 'element-ui/lib/theme-chalk/display.css';
// Vue.use(ElementUI)

Vue.use(Button)
Vue.use(Radio)
Vue.use(Row)
Vue.use(Col)
Vue.use(Input)
Vue.use(Form)
Vue.use(FormItem)
//true：You are running Vue in development mode
Vue.config.productionTip = true
// Vue.config.performance = true
// 局部注册组件
// var todoItem = Vue.extend({
//     data: function () {
//         return {
//             todoData: [
//                 { id: 0, text: '蔬菜' },
//                 { id: 1, text: '奶酪' },
//                 { id: 2, text: '随便其它什么人吃的东西' }
//             ]
//         }
//     },
//     template: `
//         <ul>
//             <li v-for='(d, i) in todoData' :key="i">
//                 {{ d.text }}
//             </li>
//         </ul>
//   `
// });

// 请注意，在实例化extends组件构造器时，传入属性必须是propsData、而不是props哦
// new todoItem({
//     propsData: {
//         todoData: [
//             { id: 0, text: '蔬菜' },
//             { id: 1, text: '奶酪' },
//             { id: 2, text: '随便其它什么人吃的东西' }
//         ]
//     },
//   router,
//   render: h => h(App),
// }).$mount('#app')

// Vue.config.warnHandler=function (msg, vm, trace) {
//
//     console.log("警告处理机制"+trace)
//     console.log(vm)
//     console.log(msg)
// }
Vue.config.ignoredElements=[
    'el-form-item',
    // 'icon',
    'el-form'
]
// Vue.config.errorHandler=function (err,vm,info) {
//
//     console.log("错误处理机制"+err)
//     console.log(vm)
//     console.log(info)
// }
Vue.component('testates', {
    props: ['post'],
    template: `
    <div class="blog-post">
      <h3>{{ post.title }}</h3>
      <button v-on:click="$emit('update:style',0.1)">
        Enlarge text
      </button>
    </div>
  `
})
//重新定义v-model
Vue.component('base-checkbox', {
    model: {
        //这里的作用是从自定义组件中选择哪个属性作为v-model的bind的值
        prop: 'checked',
        event: 'change'
    },
    props: {
        //这里指定这个自定义组件具有哪些属性
        checked: Boolean
    },
    template: `
    <input
      type="checkbox"
      v-bind:checked="checked"
      v-on:change="$emit('change', $event.target.checked)"
    >
  `
})

Vue.component('my-button',{
    template:'<button @click="methodinner">包裹后的按钮<slot></slot></button>',
    methods:{
        methodinner:function () {
            console.log("子组件被点击")
            this.$emit('click')
        }
    }
})
Vue.directive('focus', {
    // 当被绑定的元素插入到 DOM 中时……
    inserted: function (el) {
        // 聚焦元素
        el.focus()
    }
})
Vue.filter('capitalize', function (value) {
    if (!value) return ''
    value = value.toString()
    return value.charAt(0).toUpperCase() + value.slice(1)
})


new Vue({
  router,

    filters: {
        capitalize: function (value) {
            if (!value) return ''
            value = value.toString()
            return value.charAt(0).toUpperCase() + value.slice(1)
        }
    },
  render:
      h =>{ return h(App)}
}).$mount('#app')


