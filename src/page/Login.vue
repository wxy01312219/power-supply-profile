<template>
  <div class="login-wrap">
    <div class="ms-login">
      <div class="ms-title">欢迎登录</div>
      <el-form :model="param" :rules="rules" ref="login" label-width="0px" class="ms-content">
        <el-form-item prop="username">
          <el-input v-model="param.username" placeholder="输入账号">
            <el-button slot="prepend" icon="el-icon-user"></el-button>
          </el-input>
        </el-form-item>
        <el-form-item prop="password" style="margin-top: 25px;position:relative">
            <span class="svg-container">
          </span>
          <el-input :type="Type" placeholder="登录密码" v-model="param.password" @keyup.enter.native="submitForm()">
            <el-button slot="prepend" icon="el-icon-lock"></el-button>
          </el-input>
          <div class="eyeType" @click="handleEyeType">
            <img width="20px" v-if="eyeType==false" src="@/assets/img/close-eye.png" alt="">
            <img width="20px" v-else src="@/assets/img/open-eye.png" alt="">
          </div>
        </el-form-item>
        <div class="login-btn">
          <el-button type="primary" @click="submitForm()">登录</el-button>
          <div class="social">
             <span @click="HandleClickZfb('zfb')" class="zfb-svg"><img src="@/assets/img/zfb.png" alt="">支付宝</span>
             <span @click="HandleClickWx('wx')" class="wx-svg"><img src="@/assets/img/wx.png" alt="">微信</span>
          </div>
          <span>注：账号密码随便填写（ admin 是管理员，其他为普通用户）</span>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
import { loginApi } from '@/api/login';

export default {
  name: 'Login',  // 登录页面
  data(){
    return{
      param: {
        username: 'admin',
        password: '123456',
      },
      rules: {
        username: [{ required: true, message: '账号不能为空', trigger: 'blur' }],
        password: [{ required: true, message: '密码不能为空', trigger: 'blur' }]
      },
      eyeType:false,
      Type:'password',
    }
  },
  created() {
    this.getType();
  },
  methods: {
    getType() {
      let datas = {
        telephone: '13088888888',
        typeCode: 2
      };
      loginApi(datas).then((res) => {
        console.log('c', res);
      });
    },
    submitForm() {
      this.$refs.login.validate((valid) => {
        if (valid) {
          this.$message.success('登录成功');
          localStorage.setItem('ms_username', this.param.username);
          this.$router.push('/');
        } else {
          this.$message.error('请输入账号和密码');
          console.log('error submit!!');
          return false;
        }
      });
    },
    // 检测是否存在密码与密码是否状态为password
    handleEyeType(){
     this.eyeType=!this.eyeType
     if(this.Type=='password'){
        this.Type='text'
     }else{
        this.Type='password'
     }
    },
    HandleClickZfb(zfb) {
      alert('zfb-ok')
      // this.$store.commit('SET_AUTH_TYPE', zfb)
      // const appid = 'xxxxx'
      // const redirect_uri = encodeURIComponent('xxx/redirect?redirect=' + window.location.origin + '/auth-redirect')
      // const url = 'https://open.weixin.qq.com/connect/qrconnect?appid=' + appid + '&redirect_uri=' + redirect_uri + '&response_type=code&scope=snsapi_login#wechat_redirect'
      // openWindow(url, zfb, 540, 540)
    },
    HandleClickWx(wx) {
      alert('wx-ok')
      // this.$store.commit('SET_AUTH_TYPE', wx)
      // const client_id = 'xxxxx'
      // const redirect_uri = encodeURIComponent('xxx/redirect?redirect=' + window.location.origin + '/auth-redirect')
      // const url = 'https://graph.qq.com/oauth2.0/authorize?response_type=code&client_id=' + client_id + '&redirect_uri=' + redirect_uri
      // openWindow(url, wx, 540, 540)
    },
 
  }
}
</script>

<style lang="less" scoped>
.login-wrap {
  position: absolute;
  width: 100%;
  height: 100%;
  background: url('../assets/img/newlogin-bg.jpg');
}
.ms-title {
  width: 100%;
  text-align: center;
  font-size: 22px;
  margin: 25px 0px 15px;
}
.ms-login {
  position: relative;
  width: 450px;
  height: 400px;
  max-width: 90%;
  margin: 275px auto;
  border-radius: 5px;
  background: white;
  overflow: hidden;
}
.ms-content {
  padding: 30px 30px;
}
.login-btn {
  width: 100%;
  margin-top: 10%;
}
.login-btn button {
  width: 100%;
  height: 36px;
  text-align: center;
  margin-bottom: 10px;
}
.eyeType{
  position: absolute;
  top: 3px;
  right: 20px;
}
.social {
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .zfb-svg{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height:100%;
    }
    .wx-svg{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height:100%;
    }
  
  }
</style>
