<template>
    <!-- 分页 -->
    <div class="block">
        <span class="demonstration">完整功能</span>
        <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-sizes="[10, 15, 20, 30]"
            :page-size="100"
            layout="total, sizes, prev, pager, next, jumper"
            :total="100"
        >
        </el-pagination>
    </div>
</template>

<script>
export default {
    name: '',
    data() {
        return {
            currentPage: 5
        };
    },
    created() {},
    computed: {},
    methods: {
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
        }
    }
};
</script>
<style lang="less" scoped>
.block {
   display: flex;
   width: 100%;
    /deep/.el-input {
        width: 100px !important;
    }
    .demonstration{
        margin-top: 5px;
    }
}
</style>
