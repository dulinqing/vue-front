<template>
    <div class="container">

        <header>
            <slot name="header" >header</slot>
        </header>
        <main>
            <slot v-bind:my_value="tafirst">这里是主题</slot>

        </main>
        <footer>
            <slot name="footer">这里是footer</slot>
        </footer>
    </div>
</template>

<script>
//子组件

    export default {
        name: "baselayout",

        data(){
            return{
              tafirst:"子组件的内容",
              taage:24,
              taaddres:"sichuan"

            }
        },

    }
</script>

<style scoped>
.container{

    /*height: 100%;*/
    background-color: #8fff87;
}
    *{
        margin: 0;
        padding: 0;
    }
</style>