<template>
    <div class="contain">
        <!--行内表单-->
        <el-col>
            <el-form :inline="inline" :model="form" ref="form" label-width="100px">
                <!--标签显示名称-->
                <el-form-item v-for="(item, index) in formLabel" :key="index">
                    <!--根据type来显示是什么标签-->
                    <el-input v-model="form[item.model]" :placeholder="item.placeholder" v-if="item.type === 'input'"></el-input>
                    <div style="position:relative" v-if="item.type === 'disabled'">
                        <el-input v-model="form[item.model]" :placeholder="item.placeholder" disabled></el-input>
                        <button @click="handleBtnImg(item.model)" class="btn-img">
                            <img class="img" width="30px" src="@/assets/img/more.png" alt="" />
                        </button>
                    </div>
                    <el-select v-model="form[item.model]" :placeholder="item.placeholder" v-if="item.type === 'select'" >
                        <!--如果是select或者checkbox 、Radio就还需要选项信息-->
                        <div v-if="item.model=='chargingStartTime'">
                        <el-option v-for="item in item.opts" :key="item.value" :label="item.label" :value="item.value"></el-option>
                        </div>
                        <div v-else>
                        <el-option v-for="item in item.opts" :key="item.value" :label="item.label" :value="item.value"></el-option>
                        </div>
                    </el-select>
                    <el-switch v-model="form[item.model]" v-if="item.type === 'switch'"></el-switch>
                    <el-date-picker
                        v-model="form[item.model]"
                        type="date"
                        placeholder="选择日期"
                        v-if="item.type === 'date'"
                        value-format="yyyy-MM-dd"
                    >
                    </el-date-picker>
                </el-form-item>
                <!--留一个插槽-->
                <el-form-item><slot></slot></el-form-item>
            </el-form>
        </el-col>
        <!-- 查询等按钮 -->
        <el-col>
            <el-button @click="handleSearch" class="el-btn btn-query"
                ><img class="img" width="14px" src="@/assets/img/search.png" /> 查询</el-button
            >
            <el-button @click="handleReset" class="el-btn"><img class="img" width="14px" src="@/assets/img/reset.png" /> 重置</el-button>
            <el-button @click="handleScheme" class="el-btn"><img class="img" width="14px" src="@/assets/img/reset.png" /> 方案</el-button>
            <el-button @click="handleExport" class="el-btn"
                ><img class="img" width="14px" src="@/assets/img/export.png" /> 导出记录</el-button
            >
        </el-col>
        <!-- 当前查询条件 -->
        <el-col>
            <div>当前条件：</div>
        </el-col>
        <dialogTable :dialog="dialog" :gridData="gridData" />
    </div>
</template>

<script>
import dialogTable from '@/components/dialog-table/index.vue';
export default {
    components: {
        dialogTable
    },
    //inline 属性可以让表单域变为行内的表单域
    //form 表单数据 formLabel 是标签数据
    props: {
        inline: {
            type: Boolean,
            default: true
        },
        form: {
            type: Object
        },
        formLabel: {
            type: Array
        }
    },
    data() {
        return {
            dialog: false,
            gridData: [
                {
                    number: 1,
                    code: '42015624',
                    name: '武汉市普陀区金沙江路 1598'
                },
                {
                    number: 2,
                    code: '42015424',
                    name: '武汉市普陀区金沙江路 1568'
                },
                {
                    number: 3,
                    code: '42015364',
                    name: '武汉市普陀区金沙江路 1515'
                },
                {
                    number: 4,
                    code: '42057324',
                    name: '武汉市普陀区金沙江路 1516'
                }
            ],
            valueTime:'充电结束时间'
        };
    },
    methods: {
        handleDialog() {
            this.dialog = false;
        },
        handleBtnImg(model) {
            this.dialog = true;
            console.log(model, 'model');
        },
        // 查询
        handleReset() {},
        // 重置
        handleScheme() {},
        // 方案
        handleSearch() {
            console.log(this.form, 'handleSearch'); //form 获取当前所有信息
        },
        // 导出记录
        handleExport() {}
    }
};
</script>
<style lang="less" scoped>
.contain {
    /deep/.el-input {
        width: 260px;
    }
    /deep/.el-input.is-disabled .el-input__inner,
    /deep/.el-input--suffix .el-input__inner,
    /deep/.el-input__inner {
        height: 30px;
        color: #444;
        border: 1px solid #4f4f4f;
    }
    /deep/.el-form-item {
        margin-bottom: 0px;
    }
    /deep/.el-button {
        padding: 8px;
    }

    .btn-img {
        position: absolute;
        width: 30px;
        height: 30px;
        top: 5px;
        right: 0px;
     
    }
    .btn-query {
        color: #fff;
        background-color: #00a7cb;
    }
    ::placeholder {
        opacity: 0.7;
        color: #333 !important;
    }
}
</style>
