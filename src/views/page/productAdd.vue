<template>
  <div class="product-add">
    <a-steps :current="current">
      <a-step v-for="item in steps" :key="item.title" :title="item.title" />
    </a-steps>
    <div class="steps-content">
      <goods-Mes @next="next" v-if="current === 0 && show " :form="form"></goods-Mes>
      <goodsNext v-if="current === 1" @prev="prev" @next="next" :form="form" />
    </div>
  </div>
</template>
<script>
import api from '@/api/products';
import goodsMes from '../layout/components/goodsMes.vue';
import goodsNext from '../layout/components/goodsNext.vue';

export default {
  data() {
    return {
      current: 0,
      steps: [
        {
          title: '填写商品的基本信息',
        },
        {
          title: '填写商品的描述信息',
        },
      ],
      form: {
        title: '',
        desc: undefined,
        category: '',
        c_item: '',
        tags: ['111', '222'],
        price: '',
        price_off: undefined,
        inventory: undefined,
        unit: '',
      },
      show: false,
    };
  },
  created() {
    console.log(this.$route);
    const { id } = this.$route.params;
    if (id) {
      console.log(id);
      api.detail(id, { appkey: 'liusj_1613439945717' }).then((res) => {
        console.log(res);
        this.form = res.data.data;
        this.show = true;
        console.log(this.form);
      });
    }
  },
  components: {
    goodsMes,
    goodsNext,
  },
  methods: {
    next(form) {
      this.form = {
        ...this.form,
        ...form,
      };
      if (this.current === 1) {
        if (this.$route.params.id) {
          api.edit({ appkey: 'liusj_1613439945717', ...this.form }).then(() => {
            this.$message.success('修改成功');
            this.$router.push({ name: 'productList' });
          });
        } else {
          api.add({ appkey: 'liusj_1613439945717', ...this.form }).then(() => {
            this.$message.success('添加成功');
            this.$router.push({ name: 'productList' });
          });
        }
      } else {
        this.current += 1;
      }
    },
    prev() {
      this.current -= 1;
    },
  },
};
</script>
<style lang="less">
.product-add {
  width: 1000px;
  margin: 20px auto;
  .steps-content {
    margin-top: 10px;
    border: 1px dashed #e9e9e9;
    border-radius: 6px;
    background-color: #fafafa;
    min-height: 200px;
    text-align: center;
    padding-top: 40px;
  }
  .steps-action {
    margin-top: 24px;
    text-align: center;
  }
}
</style>
