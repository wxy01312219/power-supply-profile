<template>
    <div class="content-box">
        <div class="container">
            <p>主题页面 3 - 2 - 1</p>
            <div class="test3-2-2 test-div">
                <el-progress :percentage="100"></el-progress>
                <el-progress :percentage="100" status="success"></el-progress>
                <el-progress :percentage="100" status="warning"></el-progress>
                <el-progress :percentage="50" status="exception"></el-progress>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style>
.test3-2-2 {
    width: 30%;
}
</style>
