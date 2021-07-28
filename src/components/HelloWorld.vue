<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <p>
            <component :is="msg"></component>
            <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
        </p>
        <h3>Installed CLI Plugins</h3>
        <ul>
            <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank"
                   rel="noopener">babel</a></li>
            <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank"
                   rel="noopener">eslint</a></li>
        </ul>
        <h3>Essential Links</h3>
        <ul>
            <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
            <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
            <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
            <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
            <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
        </ul>
        <h3>Ecosystem</h3>
        <ul>
            <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
            <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
            <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank"
                   rel="noopener">vue-devtools</a></li>
            <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
            <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
        </ul>
        <el-row>
            <el-col :span="24">
                <div class="grid-content bg-purple-dark">这是一个栏位</div>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="12">
                <div class="grid-content bg-purple">这是一个栏位</div>
            </el-col>
            <el-col :span="12">
                <div class="grid-content bg-purple-light">这是一个栏位</div>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="8">
                <div class="grid-content bg-purple">这是一个栏位</div>
            </el-col>
            <el-col :span="8">
                <div class="grid-content bg-purple-light">这是一个栏位</div>
            </el-col>
            <el-col :span="8">
                <div class="grid-content bg-purple">这是一个栏位</div>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="6">
                <div class="grid-content bg-purple">这是一个栏位</div>
            </el-col>
            <el-col :span="6">
                <div class="grid-content bg-purple-light">这是一个栏位</div>
            </el-col>
            <el-col :span="6">
                <div class="grid-content bg-purple">这是一个栏位</div>
            </el-col>
            <el-col :span="6">
                <div class="grid-content bg-purple-light">这是一个栏位</div>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="4">
                <div class="grid-content bg-purple">这是一个栏位</div>
            </el-col>
            <el-col :span="4">
                <div class="grid-content bg-purple-light">这是一个栏位</div>
            </el-col>
            <el-col :span="4">
                <div class="grid-content bg-purple">这是一个栏位</div>
            </el-col>
            <el-col :span="4">
                <div class="grid-content bg-purple-light">这是一个栏位</div>
            </el-col>
            <el-col :span="4">
                <div class="grid-content bg-purple">这是一个栏位</div>
            </el-col>
            <el-col :span="4">
                <div class="grid-content bg-purple-light">这是一个栏位</div>
            </el-col>
        </el-row>
        <button @click="getNaem">点我测试效果</button>
    </div>

</template>

<script>
    window.aaa="nihao34";
    var sym=Symbol("symbolx");

    console.log(Symbol.keyFor(sym));//undifined
    var sym2=Symbol.for("symbolx");//相当于单例模式
    var sym3=Symbol.for("symbolx");

    let yellow1 = Symbol.for("Yellow");
    Symbol.keyFor(yellow1);    // "Yellow"
    console.log(Symbol.keyFor(sym2));//symbolx
    console.log(sym3===sym2)//返回true，但是和sym不同


    const p1 = new Promise(function(resolve,reject){
        resolve('success1');
        reject('success2');
    });
    const p2 = new Promise(function(resolve,reject){
        resolve('success3');
        reject('reject');
    });
    p1.then(function(value){
        console.log(value); // success1
    },function (error) {
        console.log(error);
    });
    p2.then(function(value){
        console.log(value); // success3
    });
    export default {
        name: 'HelloWorld',
        props: {
            msg: String
        },
        data(){
            return{
                data1:"name",
                [sym]:"mnbv"
            }
        },
        methods:{
            getNaem:function () {
                console.log(this.data1);
                console.log(this.aaa);
                console.log(window.aaa);
            }
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }

    /*.el-row {*/
    /*    margin-bottom: 20px;*/

    /*&*/
    /*:last-child {*/
    /*    margin-bottom: 0;*/
    /*}*/

    /*}*/
    .el-col {
        border-radius: 4px;
    }

    .bg-purple-dark {
        background: #99a9bf;
    }

    .bg-purple {
        background: #d3dce6;
    }

    .bg-purple-light {
        background: #e5e9f2;
    }

    .grid-content {
        border-radius: 4px;
        min-height: 36px;
    }

    .row-bg {
        padding: 10px 0;
        background-color: #f9fafc;
    }

</style>
