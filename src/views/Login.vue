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
                { required: true,
                pattern: /^[\w-]+@[\w.-]+.com$/,
                message: 'Please input your correct email!' },
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
        <a class="login-form-forgot" href=""> 忘记密码 </a>
        <a-button type="primary" html-type="submit" class="login-form-button">
          登录
        </a-button>
        <a href="/Register">现在去注册</a>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
import api from '@/api/user';
import { mapActions } from 'vuex';

export default {
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'normal_login' });
  },
  methods: {
    ...mapActions(['setUserInfo']),
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          api.login(values).then((res) => {
            if (res.data.status === 'success') {
              const {
                appkey, username, email, role,
              } = res.data.data;
              const user = {
                username,
                appkey,
                role,
                email,
              };
              console.log(user);
              // this.$store.dispatch('downstatused', username);
              this.setUserInfo(user);
              console.log(this.$store.state.user.username);
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
