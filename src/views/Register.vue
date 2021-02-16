<template>
  <div class="login-item">
    <a-form
      id="components-form-demo-normal-login"
      :form="form"
      class="login-form"
      @submit="handleSubmit"
    >
      <a-form-item>
        <a-input
          v-decorator="[
            'email',
            {
              rules: [
                { required: true, message: 'Please input your email!' },
              ],
            },
          ]"
          placeholder="邮箱"
        >
          <a-icon
            slot="prefix"
            type="user"
            style="color: rgba(0, 0, 0, 0.25)"
          />
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-input
          v-decorator="[
            'password',
            {
              rules: [
                { required: true, message: 'Please input your Password!' },
              ],
            },
          ]"
          type="password"
          placeholder="密码"
        >
          <a-icon
            slot="prefix"
            type="lock"
            style="color: rgba(0, 0, 0, 0.25)"
          />
        </a-input>
      </a-form-item>
      <a-form-item>
        <!-- <a-checkbox
          v-decorator="[
            'remember',
            {
              valuePropName: 'checked',
              initialValue: true,
            },
          ]"
        >
          Remember me
        </a-checkbox> -->
        <a-button type="primary" html-type="submit" class="login-form-button">
          注册
        </a-button>
        <a href="/Login">现在去登录</a>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
import api from '@/api/user';

export default {
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'normal_login' });
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        const emailReg = /^[\w-]+@[\w.-]+.com$/;
        if (emailReg.test(values.email) && !err) {
          api.login(values).then((res) => {
            if (res.data.status === 'success') {
              this.$router.push({ name: 'Home' });
            }
          });
        } else {
          console.log('登录失败');
        }
      });
    },
  },
};
</script>
<style lang="less">
@import url("~@/assets/css/login.less");
#components-form-demo-normal-login .login-form {
  max-width: 300px;
}
#components-form-demo-normal-login .login-form-forgot {
  float: right;
}
#components-form-demo-normal-login .login-form-button {
  width: 100%;
}
</style>
