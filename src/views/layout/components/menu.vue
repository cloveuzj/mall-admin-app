<template>
    <div class="menu-list">
      <a-menu
        :default-selected-keys="[$route.matched[1].name]"
        :default-open-keys="[$route.matched[0].name]"
        mode="inline"
        theme="dark"
        :inline-collapsed="$store.state.collapsed"
      >
        <a-sub-menu v-for="menu in menuList" :key="menu.name">
          <span slot="title"
            ><a-icon :type="menu.meta.icon"/><span>{{ menu.meta.title }}</span></span>
            <a-menu-item v-for="item in menu.children" :key="item.name">
              {{ item.meta.title }}
              <router-link :to="{ name: item.name }"></router-link>
            </a-menu-item>
        </a-sub-menu>
      </a-menu>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['menuList']),
  },
};
</script>
