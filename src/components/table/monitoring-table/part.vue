<template>
    <!-- 部分 -->
    <div class="main">
        <div class="main-left">
            <span>{{ left }}:</span> <span>{{'212255515151'||'--'}}</span>
        </div>
        <div class="main-right">
            <span>{{ right }}:</span> <span>{{'鲁k15122'||'--'}}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'part',
    props: {
        left: {
            type: String
        },
        right: {
            type: String
        }
    },
    data() {
        return {};
    },
    created() {},
    computed: {},
    methods: {}
};
</script>
<style lang="less" scoped>
.main {
    width: 100%;
    display: flex;
    justify-content: space-between;
    .main-left,
    .main-right {
        display: inline-block;
        display: flex;
        justify-content: space-between;
        padding: 0px 5px 0px 0px;
        width: 100%;
        .direction {
            background-color: red;
        }
    }
}
</style>
