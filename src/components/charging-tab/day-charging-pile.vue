<template>
    <!-- 电站-日充电桩 -->

    <div class="charging">
        <el-card style="width:100%">
            <div class="monitor-list">
                <!-- 左边按钮 -->
                <div class="btn" @click="scrollLeft">
                    <i class="el-icon el-icon-caret-left" />
                </div>
                <!-- 中间列表 -->
                <div id="list-box" class="list-box">
                    <div id="list" class="list">
                        <div
                            class="charging-tab"
                            style="width:265px;"
                            v-for="(item, index) in data"
                            :key="index"
                            @click="handleTab(index)"
                            :class="{ activeBgColor: index == checkBgColor }"
                        >
                            <div class="left-tab">
                                <span class="left-tab-circle">{{ index + 1 }}</span>
                            </div>
                            <div class="right-tab">
                                <div class="top">7日桩日均电量:{{ item.text1 }} 度</div>
                                <div class="medium">{{ item.text2 }}</div>
                                <div class="bottom">7日站日均电量:{{ item.text3 }} 度</div>
                            </div>
                            <div v-if="checkBgColor == index" class="check"><img width="25px" src="@/assets/img/check.png" alt="" /></div>
                        </div>
                    </div>
                </div>
                <!-- 右边按钮 -->
                <div class="btn" @click="scrollRight">
                    <i class="el-icon el-icon-caret-right" />
                </div>
            </div>
        </el-card>
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
        return {
            checkBgColor: false
        };
    },
    created() {},
    computed: {},
    methods: {
        handleTab(idx) {
            this.checkBgColor = idx;
        },
        // 左滑动逻辑
        scrollLeft() {
            const allLength = this.data.length * 120;
            const boxLength = document.getElementById('list-box').clientWidth;
            if (allLength < boxLength) return;
            const listEl = document.getElementById('list');
            const leftMove = Math.abs(parseInt(window.getComputedStyle(listEl, null).left));
            if (leftMove + boxLength - 360 < boxLength) {
                // 到最开始的时候
                listEl.style.left = '0px';
            } else {
                listEl.style.left = '-' + (leftMove - 360) + 'px';
            }
        },
        // 右滑动逻辑
        scrollRight() {
            const allLength = this.data.length * 120;
            const boxLength = document.getElementById('list-box').clientWidth;
            if (allLength < boxLength) return;
            const listEl = document.getElementById('list');
            const leftMove = Math.abs(parseInt(window.getComputedStyle(listEl, null).left));
            if (leftMove + boxLength + 360 > allLength) {
                listEl.style.left = '-' + (allLength - boxLength) + 'px';
            } else {
                listEl.style.left = '-' + (leftMove + 360) + 'px';
            }
        }
    }
};
</script>
<style lang="less" scoped>
.charging {
    width: 100%;
    height: 100px;
    display: flex;
    margin: 10px 0px 0px 0px;
    flex-wrap: wrap;
    .charging-tab,
    .activeBgColor {
        position: relative;
        display: flex;
        width: 220px;
        height: 100px;
        margin: 10px 5px;
        border-radius: 5px;
        background-color: #52b1d5;
        cursor: pointer;
        .left-tab,
        .right-tab {
            display: flex;
            width: 50px;
            height: 100%;
            justify-content: center;
            align-items: center;
            .left-tab-circle {
                display: flex;
                width: 30px;
                height: 30px;
                justify-content: center;
                align-items: center;
                border-radius: 50%;
                font-size: 20px;
                background-color: #fff;
                color: #04b6f9;
            }
        }
        .right-tab {
            flex: 1;
            flex-direction: column;
            justify-content: space-around;
            color: #fff;
            font-size: 12px;
            padding-right: 25px;
            .medium {
                font-size: 14px;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 1;
                -webkit-box-orient: vertical;
            }
            .bottom {
                font-style: italic;
            }
        }
        .check {
            width: 30px;
            height: 30px;
            position: absolute;
            bottom: 4px;
            right: 4px;
            border: 4px solid #fff;
            border-radius: 5px;
        }
    }
    .monitor-list {
        display: flex;
        justify-content: space-between;
        height: 130px;
        width: 100%;
        .btn {
            border: 1px solid #b3d8ff;
            width: 50px;
            height: 130px;
            line-height: 100px;
            text-align: center;
            cursor: pointer;
            background-color: #ecf5ff;
            // icon
            font-size: 24px;
            color: #409eff;

            &:hover {
                background-color: #409eff;
                color: white;
            }
        }
        .list-box {
            overflow: hidden;
            width: calc(200vw - 100px);
            .list {
                width: calc(200vw - 100px);
                display: flex;
                transform: all 2s;
                .list-item {
                    width: calc(200vw - 100px);
                    height: 95px;
                    text-align: center;
                    padding: 10px;
                    cursor: pointer;
                    margin-left: 40px;
                }
                position: relative;
                left: 0;
                transition: left 1s;
            }
        }
    }
    .activeBgColor {
        background-color: #04b6f9;
    }
}
</style>
