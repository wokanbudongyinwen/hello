<template>
    <div class="header_container">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item v-for="(item, index) in $route.meta" :key="index">{{item}}</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>

<script>
    export default {
        props: {
            msg: String
        },
        mounted(){
        },
        computed:{
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
    @import '../style/mixin';
    .header_container{
        background-color: #EFF2F7;
        height: 60px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-left: 20px;
    }
    .avator{
        .wh(36px, 36px);
        border-radius: 50%;
        margin-right: 37px;
    }
    .el-dropdown-menu__item{
        text-align: center;
    }
</style>
