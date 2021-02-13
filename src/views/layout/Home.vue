<template>
  <div class="home">
    <left-menu></left-menu>
    <div :class="{ main: true, 'menu-unfold': $store.state.collapsed }">
      <slider-nav></slider-nav>
    </div>
  </div>
</template>

<script>
import leftMenu from './components/menu.vue';
import sliderNav from './components/sliderNav.vue';

export default {
  data() {
    return {

    };
  },
  components: {
    leftMenu,
    sliderNav,
  },
};
</script>

<style lang="less">
@import url("~@/assets/css/home.less");
</style>
