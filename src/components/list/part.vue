<template>
    <!-- 部分 -->
    <div class="main">
        <span v-if="left" class="main-left">{{ left }}</span>
        <span v-if="right || left == '1号桩'" class="main-right">
            <span>{{ right }}</span>
            <span v-if="left == '1号桩'">
                <span
                    class="right-active"
                    v-for="(item, index) in num"
                    :key="index"
                    @click="change(index)"
                    :class="{ active: index == numberPart }"
                >
                    <span class="text">{{ item.text }}</span>
                </span>
            </span></span
        >
    </div>
</template>

<script>
export default {
    name: 'part',
    props: {
        left: {
            type: String
        },
        right: {},
        num: {
            type: Array
        },
        number: {
            type: Number
        }
    },
    data() {
        return { numberPart: this.number };
    },
    created() {},
    computed: {},
    methods: {
        change: function(index) {
            this.numberPart = index;
            this.$emit('Number',this.numberPart)
            // console.log(index, this.numberPart, 'active');
        }
    }
};
</script>
<style lang="less" scoped>
.main {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin: 2px 0px;
    .text {
        display: inline-block;
        width: 22px;
        border-radius: 50%;
        text-align: center;
        color: #fff;
        margin-right: 5px;
        background-color: #27ae60;
    }
    .right-active {
        width: 100%;
        padding-bottom: 7px;
    }
    .active {
        border-bottom: 2px solid #27ae60;
    }
}
</style>
