<template>
    <div class="details">
        <myComponent :show.sync="valueChild" url="http://www.baidu.com" style="padding: 30px 20px 30px 5px;border:1px solid #ddd;margin-bottom: 10px;">
           这里是插槽的内容
            这是内部的值：{{posts[0].title}}
        </myComponent>
        <button @click="changeValue">toggle</button>
<!--        @update:show="valueChild=$event"-->

        <p>12314</p>
        <div >
        <testates
                :style="{fontSize:postFontSize+'em'}"
                v-for="post in posts"
                   :post="post"
                   :key="post.id"
                @update:style="postFontSize+=$event"
        ></testates>
        </div>
        <base-checkbox v-model="valueChild"></base-checkbox>
        <my-button @click="responseafterclick">嘻嘻嘻</my-button>
    </div>
</template>

<script>
    import myComponent from "./MyComponent"
    export default {
        components: {
            myComponent
        },
        data() {

            return {

                valueChild: true,
                postFontSize: 1,
                posts: [
                    { id: 1, title: 'My journey with Vue' },
                    { id: 2, title: 'Blogging with Vue' },
                    { id: 3, title: 'Why Vue is so fun' }
                ]
            }
        },
        methods: {
            changeValue() {
                this.valueChild = !this.valueChild
                console.log("父组件呗调用")

            },
            responseafterclick(){
                console.log("点击了我a")
            }
        }
    }
</script>

<style scoped>

</style>