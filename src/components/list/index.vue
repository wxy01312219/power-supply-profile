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
                <button class="list-btn">电价明细</button>
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
            listValueType: []
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
            console.log(this.number, num, 'this.number');
            this.listValue.forEach(item => {
                if (item.pile == this.number) {
                    this.listValueType.push(item);
                }
            });
            console.log(this.listValue, 'this.listValue');
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
        }
        .active {
            border: 2px solid #000;
        }
    }
}
</style>
