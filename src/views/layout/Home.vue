<template>
  <div class="home">
    <left-menu :key="key"></left-menu>
    <div :class="{ main: true, 'menu-unfold': $store.state.collapsed }">
      <slider-nav></slider-nav>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import leftMenu from './components/menu.vue';
import sliderNav from './components/sliderNav.vue';

export default {
  data() {
    return {
      key: '',
    };
  },
  mounted() {
    console.log(new Date().getTime());
  },
  components: {
    leftMenu,
    sliderNav,
  },
  watch: {
    $route: {
      handler() {
        this.key = new Date().getTime();
      },
    },
  },
};
</script>

<style lang="less">
@import url("~@/assets/css/home.less");
</style>
