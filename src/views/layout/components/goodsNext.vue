<template>
  <div class="details">
    <a-form-model
      ref="ruleForm"
      :model="form"
      :rules="rules"
      :label-col="{ span: 4}"
      :wrapper-col="{span: 14}"
    >
      <a-form-model-item label="商品售价" prop="price" required>
        <a-input v-model="form.price" />
      </a-form-model-item>
      <a-form-model-item label="商品折扣价" prop="price_off" required>
        <a-input v-model="form.price_off" />
      </a-form-model-item>
      <a-form-model-item label="商品库存" prop="inventory" required>
        <a-input v-model="form.inventory" />
      </a-form-model-item>
      <a-form-model-item label="计量单位" prop="unit" required>
        <a-input v-model="form.unit" />
      </a-form-model-item>
      <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
        <a-button type="primary" @click="prev"> 上一步 </a-button>
        <a-button type="primary" @click="onSubmit" style="margin-left: 10px"> 提交 </a-button>
        <a-button style="margin-left: 10px" @click="resetForm">
          重置
        </a-button>
      </a-form-model-item>
    </a-form-model>
  </div>
</template>
<script>
export default {
  data() {
    return {
      rules: {

      },
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
      // this.form = '';
    },
    prev() {
      this.$emit('prev');
    },
  },
};
</script>

<style lang="less">
</style>
