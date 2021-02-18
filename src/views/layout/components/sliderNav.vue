<template>
  <div class="main-header">
    <a-button
      type="primary"
      style="margin-bottom: 16px"
      @click="toggleCollapsed"
    >
      <a-icon :type="$store.state.collapsed ? 'menu-unfold' : 'menu-fold'" />
    </a-button>
    <div class="breadcrumb">
      <a-breadcrumb>
        <a-breadcrumb-item>{{
          $route.matched[0].meta.title
        }}</a-breadcrumb-item>
        <a-breadcrumb-item
          >{{ $route.matched[1].meta.title }}
        </a-breadcrumb-item>
      </a-breadcrumb>
    </div>
    <ul class="user-info">
      <li>
        欢迎 {{ user.username }}
        <a-icon type="down" />
      </li>
      <li @click="hangleExit">退出登录</li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['user']),
  },
  methods: {
    toggleCollapsed() {
      this.$store.dispatch('collapsedChanged');
    },
    hangleExit() {
      this.$router.push({ name: 'Login' });
      this.$store.dispatch('removeUserInfo');
    },
  },
};
</script>
