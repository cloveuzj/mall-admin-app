<template>
  <div class="serach-box">
    <a-form-model
      layout="inline"
      :model="formInline"
      @submit="handleSubmit"
      @submit.native.prevent
    >
      <a-form-model-item>
        <a-input
          v-model="formInline.searchWord"
          placeholder="请输入需要搜索的关键字"
        >
        </a-input>
      </a-form-model-item>
      <a-form-model-item>
        <a-select
          allowClear
          show-search
          placeholder="请选择需要查询的类目"
          style="width: 200px"
          @change="handleChange"
        >
          <a-select-option :value="c.id" v-for="c in catagroyList" :key="c.id">
            {{ c.name }}
          </a-select-option>
        </a-select>
      </a-form-model-item>
      <a-form-model-item>
        <a-button
          type="primary"
          html-type="submit"
          :disabled="formInline.user === '' || formInline.password === ''"
        >
          搜索
        </a-button>
      </a-form-model-item>
    </a-form-model>
  </div>
</template>
<script>
import api from '@/api/catagory';

export default {
  data() {
    return {
      formInline: {
        searchWord: '',
        category: '',
      },
      catagroyList: [],
    };
  },
  created() {
    api.select({ appkey: 'liusj_1613439945717' }).then((res) => {
      this.$store.dispatch('getCategory', res.data.data.data);
      this.catagroyList = this.$store.state.cateList;
    });
  },
  methods: {
    handleSubmit() {
      this.$emit('submit', this.formInline);
    },
    handleChange(val) {
      this.formInline.category = val;
    },

  },
};
</script>

<style lang="less">
.serach-box {
  padding: 10px 50px;
}
</style>
