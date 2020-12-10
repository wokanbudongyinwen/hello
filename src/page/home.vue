<template>
<div>
    <head-top></head-top>
    <section class="data_section">
    <header class="section_title">数据统计</header>
    <el-row :gutter="20" style="margin-bottom: 10px;">
        <el-col :span="4"><div class="data_list today_head"><span class="data_num head">当日数据：</span></div></el-col>
        <el-col :span="4"><div class="data_list"><span class="data_num">{{userCount}}</span> 新增用户</div></el-col>
        <el-col :span="4"><div class="data_list"><span class="data_num">{{orderCount}}</span> 新增订单</div></el-col>
        <el-col :span="4"><div class="data_list"><span class="data_num">{{adminCount}}</span> 新增管理员</div></el-col>
    </el-row>
    <el-row :gutter="20">
        <el-col :span="4"><div class="data_list all_head"><span class="data_num head">总数据：</span></div></el-col>
        <el-col :span="4"><div class="data_list"><span class="data_num">{{allUserCount}}</span> 注册用户</div></el-col>
        <el-col :span="4"><div class="data_list"><span class="data_num">{{allOrderCount}}</span> 订单</div></el-col>
        <el-col :span="4"><div class="data_list"><span class="data_num">{{allAdminCount}}</span> 管理员</div></el-col>
    </el-row>
        <e-tend :sevenDay="sevenDay" :sevenDate="sevenDate" style="margin-top: 20px"></e-tend>
</section>
</div>
</template>
<script>
    import headTop from "../components/headTop.vue"
    import eTend from "../components/echatTendency.vue"
    export default {
        data(){
            return {
                userCount: 10,
                orderCount: 20,
                adminCount: 10,
                allUserCount: 20,
                allOrderCount: 10,
                allAdminCount: 20,
                sevenDay: ["2020-12-01","2020-12-04","2020-12-07","2020-12-10","2020-12-13","2020-12-16","2020-12-19"],
                sevenDate: [[39,25,63,84,55,44,98],[45,65,78,96,25,34,79],[88,77,66,22,11,55,33]],
            }
        },
        components: {
            headTop,
            eTend
        },
        mounted(){
        },
        computed: {
        },
        methods: {
        }
    }
</script>
<style lang="less">
    @import '../style/mixin';
    .data_section{
        padding: 20px;
        margin-bottom: 40px;
        .section_title{
            text-align: center;
            font-size: 30px;
            margin-bottom: 10px;
        }
        .data_list{
            text-align: center;
            font-size: 14px;
            color: #666;
            border-radius: 6px;
            background: #E5E9F2;
            .data_num{
                color: #333;
                font-size: 26px;
            }
            .head{
                border-radius: 6px;
                font-size: 22px;
                padding: 4px 0;
                color: #fff;
                display: inline-block;
            }
        }
        .today_head{
            background: #FF9800;
        }
        .all_head{
            background: #20A0FF;
        }
    }
    .wan{
        .sc(16px, #333)
    }
</style>