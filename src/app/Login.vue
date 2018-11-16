<template>
  <div>
    <div class="login-row">
      <a-form class="login-from-area"  @submit="handleSubmit" :autoFormCreate="(form)=>{this.form = form}" >
        <h1 class="title">运营管理后台</h1>
        <a-form-item
          :wrapperCol="{ span: 24 }"
          fieldDecoratorId="user_name"
          :fieldDecoratorOptions="{rules: [{ required: true, message: 'Please input your note!' }]}">
          <a-input type="text" placeholder='用户名 / 邮箱' size="large"/>
        </a-form-item>
        <a-form-item
          :wrapperCol="{ span: 24 }"
          fieldDecoratorId="password"
          :fieldDecoratorOptions="{rules: [{ required: true, message: 'Please input your password!' }]}" >
          <a-input type="password" placeholder='密码' size="large"/>
        </a-form-item>

        <a-form-item
          :wrapperCol="{ span: 24 }"
          fieldDecoratorId="user_type"
          :fieldDecoratorOptions="{rules: [{ required: true, message: 'Please select your gender!' }]}" >
          <a-select
            size="large"
            placeholder='请选择用户类型'
            defaultValue='1'
            @change="this.handleSelectChange">
            <a-select-option value='1' >管理员</a-select-option>
            <a-select-option value='0'>租户</a-select-option>
            <a-select-option value='2'>用户</a-select-option>
          </a-select>
        </a-form-item>

        <a-form-item :wrapperCol="{ span: 24 }">
          <a-button type='primary' htmlType='submit' size="large" style="width: 100%; letter-spacing: 5px; margin-top: 20px;">
            登录
          </a-button>
        </a-form-item>
      </a-form>
    </div>
  <div class="footer">
    <p style="margin: 30px auto">Copyright &copy; 2017 北京国美云网络科技有限公司 All rights reserved</p>
  </div>
</div>	 

</template>

<script>
import { Form } from 'ant-design-vue'
export default {
  data() {
    return {
      // name
      value: 1,
    }
  },
  methods: {
    handleSelectChange(value) {
      console.log(value)
      // this.form.setFieldsValue({
      //   note: `Hi, ${value === 'male' ? 'man' : 'lady'}!`,
      // })
    },
    handleSubmit(e) {
      e.preventDefault();
      const _this = this;
      this.form.validateFields((err, values) => {
        if (!err) {
          // console.log(values, 123);
          // 发送请求 登录
          // this.$axios.post('http://10.112.95.80:9015/v1/login', values)
          this.$axios.post('/iam/v1/login', values)
          .then( res => {
            this.$router.push('/nav');
            console.log(res, 'success');
          })
          .catch( err => {
            console.log(err, 'err');
          });
        }

      })
      // let formData = new FormData();
      // formData.append('name', this.name);
      // formData.append('name', this.name);
      // formData.append('name', this.name);

    }
  },
  beforeCreate() {
    console.log('组件创建前');
  }
};
</script>

<style>
.login-row {
  height: 100%;
  width: 100%;
  position: absolute;
  background-color: #494f58;
  background-size: 100% 100%;
}
.login-from-area {
    -webkit-border-radius: 3px; 
    -moz-border-radius: 3px;
    border-radius: 3px;
    background-color: #fcfcfc;
    -webkit-box-shadow: 0 9px 32px rgba(19,104,183,.38);
    -moz-box-shadow: 0 9px 32px rgba(19,104,183,.38);
    box-shadow: 0 9px 32px rgba(19,104,183,.38);
    position: relative;
    top: 50%;
    width: 400px;
    transform: translateY(-50%);
    margin: auto;
    color: #494f58;
    background-color: white;
    background-position: 248px -34px;
    padding: 50px;
    font-size: 16px;
  }
h1.title {
  font-size: 24px;
  margin-bottom: 25px;
  text-align: center;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
.footer {
  position: fixed;
  bottom: 0;
  text-align: center;
  color: #999;
  font-size: 14px;
  left: 50%;
  margin-left: -206px;
}
</style>
