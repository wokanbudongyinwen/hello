<template>
    <div id="app" class="fillcontain">
        <el-row class="tac" style="height:100%">
            <el-col :span="4" style="height:100%;overflow: auto">
                <el-menu default-active="defaultActive" router style="height:100%">
                    <el-menu-item index="manage"><i class="el-icon-menu"></i>首页</el-menu-item>
                    <el-submenu index="2">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>数据展示</span>
                        </template>
                        <el-menu-item index="test"><i class="el-icon-bell"></i>商品</el-menu-item>
                    </el-submenu>
                </el-menu>
            </el-col>
            <el-col :span="20" style="height:100%;overflow: auto">
                <router-view style="height:100%"></router-view>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        computed: {
            defaultActive: function(){
                return this.$route.path.replace('/', '');
            }
        },
    }
</script>

<style lang="less">
</style>