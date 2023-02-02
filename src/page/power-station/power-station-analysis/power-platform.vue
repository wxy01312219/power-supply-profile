<template>
<div class="content-box">
    <breadcrumb />
    <!-- 监控平台 -->
  <div class="container">
    <p>监控平台</p>
    <div class="test-div">
      <el-steps :active="active" finish-status="success" style="width:50%;">
        <el-step title="步骤 1"></el-step>
        <el-step title="步骤 2"></el-step>
        <el-step title="步骤 3"></el-step>
      </el-steps>
      <el-button @click="next()" type="primary">下一步</el-button>
    </div>
  </div>
</div>
</template>

<script>
import breadcrumb from '@/components/breadcrumb/index.vue';
export default {
    components: {breadcrumb },
  data(){
    return{
      active: 0
    }
  },
  methods: {
    next() {
      if (this.active++ > 2) {
        this.active = 0;
      }
    }
  }
}
</script>