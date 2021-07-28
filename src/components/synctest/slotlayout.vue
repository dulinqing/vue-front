<template>
    <baselayout>
        <template v-slot:header>
            <h1>Here might be a page title </h1>

        </template>
        <template #default="pro">
            {{pro.my_value}}
        <p>A paragraph for the main content.</p>
        <p>And another one.</p>
            <p>A paragraph for the main content.</p>
            <p>And another one.</p>
        </template>
        <template v-slot:footer>
            <p>Here's some contact info</p>
        </template>
    </baselayout>
</template>

<script>
    //父组件
    import baselayout from "./Baselayout"
    export default {
        name: "slotlayout",
        data(){

            return{

                tafirst:"父组件的内容",
                taage:24,
                taaddres:"sichuan"

            }
        },
        components:{
            baselayout
        }
    }
</script>

<style scoped>

</style>