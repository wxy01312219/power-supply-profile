<template>
    <div class="overall">
        <el-dialog :visible.sync="dialog" :before-close="handleClose" @open="handleOpen">
            <!-- 顶部查询等功能 -->
            <div class="row-input">
                <span>
                    <select v-model="value" class="select-value">
                        <option value="0" label="全部">全部</option>
                        <option value="1" label="编号">编号</option>
                        <option value="2" label="名称">名称</option>
                    </select>
                    <el-input v-model="inputValue" type="input"></el-input>
                </span>
                <span>
                    <!-- 查询等按钮 -->
                    <el-button @click="handleSearch" class="el-btn btn-query"
                        ><img class="img" width="14px" src="@/assets/img/search-black.png" /> 查询</el-button
                    >
                    <el-button @click="handleReset" class="el-btn"
                        ><img class="img" width="14px" src="@/assets/img/reset.png" /> 重置</el-button
                    >
                </span>
            </div>
            <!-- 查询表格数据 -->
            <el-table :data="gridData">
                <el-table-column property="number" label="序号" width="150"></el-table-column>
                <el-table-column property="code" label="编号" width="200"></el-table-column>
                <el-table-column property="name" label="名称"></el-table-column>
            </el-table>
            <!-- 分页 -->
            <dialogPage />
        </el-dialog>
    </div>
</template>

<script>
import dialogPage from './page.vue';
export default {
    name: '',
    components: {
        dialogPage
    },
    props: {
        dialog: {
            type: Boolean
        },
        gridData: {
            type: Array
        }
    },
    data() {
        return { value: '0', dialogTableVisible: false, inputValue: '' };
    },
    created() {},
    computed: {},
    methods: {
        // 查询
        handleSearch() {},
        // 重置
        handleReset() {},
        handleClick() {
            alert('button click');
        },
        handleOpen() {
            this.value = '0';
            this.inputValue = '';
        },
        handleClose() {
            this.$parent.handleDialog();
        }
    }
};
</script>
<style lang="less" scoped>
.overall {
    .el-dropdown-link {
        color: #409eff !important;
        cursor: pointer;
    }
    .el-icon-arrow-down {
        font-size: 12px;
    }
    .select-value {
        width: 62px;
        height: 30px;
        padding: 4px;
        margin-right: 10px;
    }
    .img {
        vertical-align: top;
    }
    .btn-img {
        position: absolute;
        width: 30px;
        height: 30px;
        top: 5px;
        right: 0px;
    }
    .btn-query {
        margin-left: 10px;
    }
    .row-input {
        display: flex;
        width: 100%;
        justify-content: space-between;
        margin: 7px 0px;
    }
}
</style>
