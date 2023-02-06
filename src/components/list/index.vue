<template>
    <div class="list">
        <div class="list-certainOne" v-for="(item, index) in listValueType" :key="index" @click="change(index, number)">
            <div class="list-active" :class="{ active: index == number }">
                <div @click="handleCursor" class="list-top">
                    <span class="list-a">{{ item.code }}</span>
                    <span class="status">{{ item.status }} </span>
                </div>
                <part left="1号桩" @Number="listNumber" :num="num" :number="number" class="part-one" />
                <part left="枪口编号：" :right="item.muzzleNumber" />
                <part left="待机时长：" :right="item.standbyTime" />
                <part left="待机时间：" :right="item.time" />
                <!-- 电价明细 -->
                <el-popover placement="bottom" trigger="click" popper-class="popperOptions">
                    <el-table border :data="gridData" :cell-style="rowStyle">
                        <el-table-column align="center" width="100" property="date" label="时间"></el-table-column>
                        <el-table-column align="center" width="100" property="electricityCharge" label="电费"></el-table-column>
                        <el-table-column align="center" width="100" property="serviceCharge" label="服务费"></el-table-column>
                        <el-table-column align="center" width="100" property="price" label="价格"></el-table-column>
                    </el-table>
                    <el-button slot="reference">电价明细</el-button>
                </el-popover>
            </div>
        </div>
    </div>
</template>

<script>
import part from './part.vue';
export default {
    name: 'list',
    components: {
        part
    },
    props: {
        listValue: {
            type: Array
        }
    },
    data() {
        return {
            num: [
                { id: 0, text: '1#' },
                { id: 1, text: '2#' }
            ],
            number: 0,
            listValueType: [],
            gridData: [
                {
                    date: '00:00-07:00',
                    electricityCharge: '0.381',
                    serviceCharge: '0',
                    price: 0.381
                },
                {
                    date: '07:00-09:00',
                    electricityCharge: '0.381',
                    serviceCharge: '0',
                    price: 0.381
                },
                {
                    date: '09:00-15:00',
                    electricityCharge: '0.381',
                    serviceCharge: '0',
                    price: 0.381
                },
                {
                    date: '15:00-20:00',
                    electricityCharge: '0.381',
                    serviceCharge: '0',
                    price: 0.381
                },
                {
                    date: '20:00-22:00',
                    electricityCharge: '0.381',
                    serviceCharge: '0',
                    price: 0.381
                },
                {
                    date: '22:00-23:00',
                    electricityCharge: '0.381',
                    serviceCharge: '0',
                    price: 0.381
                },
                {
                    date: '23:00-24:00',
                    electricityCharge: '0.381',
                    serviceCharge: '0',
                    price: 0.381
                }
            ]
        };
    },
    created() {
        this.listNumber(0);
    },
    computed: {},
    methods: {
        handleCursor() {
            console.log('handleCursor');
        },
        change: function(index) {
            this.number = index;
        },
        listNumber(num) {
            this.listValueType = [];
            this.number = num;
            this.listValue.forEach(item => {
                if (item.pile == this.number) {
                    this.listValueType.push(item);
                }
            });
            // console.log(this.listValue, 'this.listValue');
        },
        rowStyle({ row, column, rowIndex, columnIndex }) {
            //设置表格每行间隔颜色
            if (rowIndex % 2 === 0) {
                return 'background:#2A3056;border:none;color: #FFFFFF;';
            }
            if (rowIndex % 2 === 1) {
                return 'background:#2E335E;border:none;color: #FFFFFF;';
            }
        }
    }
};
</script>
<style lang="less" scoped>
.list {
    width: 100%;
    display: flex;
    .list-certainOne {
        width: 260px;
        background-color: #f6f6f6;
        border: 1px dashed #ccc;
        padding: 1px;
        .list-active {
            width: 100%;
            padding: 15px 5px 5px 5px;
            .list-top {
                width: 100%;
                height: 35px;
                line-height: 35px;
                display: flex;
                justify-content: space-between;
                background-color: #27ae60;
                padding: 1px;
                margin-bottom: 8px;
                .list-a {
                    text-decoration-line: underline;
                    cursor: pointer;
                }
            }
            .part-one {
                margin-bottom: 10px;
            }
            .list-btn {
                padding: 1px 2px;
            }
            /deep/.el-button {
                padding: 8px 10px;
            }
            /deep/.el-table--scrollable-x .el-table__body-wrapper {
                overflow-x: hidden;
            }
        }
        .active {
            border: 2px solid #000;
        }
        /deep/.el-table .cell {
            text-align: center !important;
        }
    }
}
</style>
<style>
.popperOptions {
    min-width: 400px !important;
    min-height: 270px !important;
}
</style>
