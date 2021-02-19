<template>
  <div class="product-list">
    <!-- 搜索框 -->
    <serach-box @submit="handleSearch"></serach-box>
    <a-button class="product-add-button">
      <router-link :to="{ name: 'productAdd' }">添加商品</router-link>
    </a-button>
    <list :tableData="tableData" @removeList="remove" @editList="edit"/>
  </div>
</template>

<script>
import api from '@/api/products';
import serachBox from '../layout/components/serach.vue';
import list from '../layout/components/list.vue';

export default {
  data() {
    return {
      formSearch: '',
      data: [],
    };
  },
  created() {
    this.getAllProducts();
  },
  computed: {
    tableData() {
      return this.data.map((item) => ({
        ...item,
        key: item.id,
      }));
    },
  },
  components: {
    serachBox,
    list,
  },
  methods: {
    handleSearch(form) {
      this.formSearch = form;
      console.log(this.formSearch);
      this.getAllProducts();
    },
    getAllProducts() {
      api
        .product({ appkey: 'liusj_1613439945717', ...this.formSearch })
        .then((res) => {
          console.log(res);
          this.data = res.data.data.data;
        });
    },
    remove(record) {
      api.remove(record.id, { appkey: 'liusj_1613439945717' }).then(() => {
        this.getAllProducts();
      });
    },
    edit(record) {
      console.log(record.id);
      // console.log(record);
      this.$router.push({ name: 'productEdit', params: { id: record.id } });
    },
  },
};
</script>

<style lang="less">
.product-list {
  position: relative;
  .product-add-button {
    position: absolute;
    right: 100px;
    top: 14px;
  }
}
</style>
