<template>
<!--    在动画过程中，有6个class依次作用-->
    <transition name="bounce">
    <div v-if="show">
        <p>默认初始值是{{show}}，所以是显示的</p>
        <button @click.stop="closeDiv">关闭</button>
        <a v-bind:href="url" class="nav-link">
            <slot>插槽的默认提供值</slot>
        </a>
    </div>
    </transition>
</template>

<script>
    var myMixin={
        created:function () {
            this.hello()
        } ,
        methods: {
            hello:function () {
                console.log('hello from mixins')
            }
        }
    }
    export default {
        name: "myComponent",
        mixins:[myMixin],
        props: ['show','url'],
        data() {
           return  {
               "countzzzz":5
           }
        },
        methods: {
            closeDiv() {
                this.hello()
                this.$emit("update:show", false)
                console.log("子组件被调用")
                //获取当前组件所有的监听器
                console.log(this.$listeners);
                //获取当前组件所有的属性
                console.log(this.$attrs);
            }
        }
    }
</script>

<style scoped>

    .fade-leave-active{
        transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .fade-enter-active{
        /*transition: opacity 3s;*/
        transition: all .3s ease;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        transform: translateX(10px);
        opacity: 0;
    }
    .bounce-enter-active {
        animation: bounce-in .5s;
    }
    .bounce-leave-active {
        animation: bounce-in .5s reverse;
    }
    @keyframes bounce-in {
        0% {
            transform: scale(0);
        }
        50% {
            transform: scale(1.5);
        }
        100% {
            transform: scale(1);
        }
    }

</style>