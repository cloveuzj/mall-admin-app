<template>
  <div class="details">
    <a-form-model
      ref="ruleForm"
      :model="form"
      :rules="rules"
      :label-col="{ span: 4 }"
      :wrapper-col="{ span: 14 }"
    >
      <a-form-model-item label="标题" prop="title" required>
        <a-input v-model="form.title" />
      </a-form-model-item>
      <a-form-model-item label="描述" prop="desc">
        <a-input v-model="form.desc" />
      </a-form-model-item>
      <a-form-model-item label="请选择商品类目" prop="category" required>
        <a-select
          v-model="form.category"
          placeholder="please select your zone"
          @change="changeName"
        >
          <a-select-option
            v-for="item in cateList"
            :key="item.id"
            :value="item.id"
          >
            {{ item.name }}
          </a-select-option>
        </a-select>
        <a-select v-model="form.c_item" placeholder="请选择对应的子类目">
          <a-select-option v-for="item in cateItems" :key="item" :value="item">
            {{ item }}
          </a-select-option>
        </a-select>
      </a-form-model-item>
      <a-form-model-item label="标签" prop="tags" required>
        <a-select
          mode="tags"
          style="width: 100%"
          :default-value="form.tags"
          :token-separators="[',']"
          @change="handleChange"
        >
          <a-select-option v-for="item in form.tags" :key="item" :value="item">
            {{ item }}
          </a-select-option>
        </a-select>
      </a-form-model-item>
      <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
        <a-button type="primary" @click="onSubmit"> 下一步 </a-button>
        <a-button style="margin-left: 10px" @click="resetForm"> 重置 </a-button>
      </a-form-model-item>
    </a-form-model>
  </div>
</template>
<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {
      rules: {},
      cateItems: [],
    };
  },
  props: ['form'],
  methods: {
    onSubmit() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          this.$emit('next', this.form);
          return true;
        }
        console.log('error submit!!');
        return false;
      });
    },
    resetForm() {
      // this.$refs.ruleForm.resetFields();
      // console.log(this.cateList);
    },
    changeName() {
      this.form.c_item = '';
      for (let i = 0; i < this.cateList.length; i += 1) {
        if (this.cateList[i].id === this.form.category) {
          this.cateItems = this.cateList[i].c_items;
        }
      }
      console.log(this.cateItems);
    },
    handleChange() {
      console.log(this.form.tags);
    },
  },
  computed: {
    ...mapState(['cateList']),
  },
};
</script>

<style lang="less">
</style>
