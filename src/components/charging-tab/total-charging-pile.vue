<template>
    <!-- 电站-累计和日充电桩 -->
    <div class="charging">
        <div class="charging-tab" v-for="(item, index) in data" :key="index">
            <!-- <div class="circle" @mouseenter="handleCircle" @mouseout="outHandleCircle">?</div> -->
            <el-popover popper-class="popoverDiv" placement="bottom" trigger="hover" content="结束时间所在阅读的充电次数(数据截止到昨天)">
                <el-button class="circle" slot="reference">?</el-button>
            </el-popover>
            <div class="left-tab">
                <span class="left-tab-circle">{{ index + 1 }} <span style="font-size:14px">次</span></span>
                <span class="left-tab-times">今日充电次数</span>
            </div>
            <div class="kpi_divDashed"></div>
            <div class="right-tab">
                <div class="top">月度充电次数:{{ item.month }} 次</div>
                <div class="medium">年度充电次数:{{ item.year }} 次</div>
                <div class="bottom">累计充电次数:{{ item.total }} 次</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'charging-tab',
    props: {
        data: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return { visible: false };
    },
    created() {},
    computed: {},
    methods: {
        handleCircle() {
            this.visible = true;
            console.log(11);
        },
        outHandleCircle() {
            this.visible = false;
            console.log(22);
        }
    }
};
</script>
<style lang="less" scoped>
.charging {
    width: 100%;
    height: 140px;
    display: flex;
    flex-wrap:wrap;
    .charging-tab {
        position: relative;
        display: flex;
        width: 360px;
        height: 140px;
        margin: 10px 5px;
        border-radius: 5px;
        align-items: center;
        background-color: #52b1d5;
        /deep/.el-button {
            padding: 0px;
        }
        .circle {
            position: absolute;
            width: 18px;
            height: 18px;
            line-height: 18px;
            text-align: center;
            border-radius: 50%;
            font-size: 14px;
            top: 10px;
            right: 15px;
            background-color: #fff;
            font-weight: 700;
            color: #52b1d5;
        }
        .kpi_divDashed {
            width: 1%;
            height: 80%;
            border-left: 1px dashed;
            border-color: rgb(255, 255, 255);
        }
        .left-tab,
        .right-tab {
            display: flex;
            width: 140px;
            height: 100%;
            align-items: center;
            justify-content: center;
            color: #fff;
            .left-tab-circle {
                margin-left: 10px;
                font-size: 20px;
            }
            .left-tab-times {
                margin: 5px 0px 0px 10px;
                font-size: 12px;
            }
        }
        .left-tab {
            align-items: flex-start;
            flex-direction: column;
        }
        .right-tab {
            flex: 1;
            flex-direction: column;
            justify-content: space-around;
            color: #fff;
            font-size: 12px;
            padding: 20px 25px 20px 0px;
        }
    }
}
</style>
<style lang="less">
.el-popover.popoverDiv {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 28px;
    color: #fff;
    background-color: #000;
    border: 0px;
}

.el-popper[x-placement^='top'] .popper__arrow::after {
    border-top-color: #000022;
}
.el-popper[x-placement^='top'] .popper__arrow {
    border-top-color: #000022;
}
.el-popper[x-placement^='bottom'] .popper__arrow::after {
    border-bottom-color: #000022;
}
.el-popper[x-placement^='bottom'] .popper__arrow {
    border-bottom-color: #000022;
}
</style>
