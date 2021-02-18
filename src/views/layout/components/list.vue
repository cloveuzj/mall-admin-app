<template>
  <a-table :columns="columns" :data-source="tableData">
    <div slot="operation" slot-scope="text, record">
      <a-button @click="edit(record)">编辑</a-button>
      <a-popconfirm
        title="Are you sure delete this task?"
        ok-text="Yes"
        cancel-text="No"
        @confirm="removeList(record)"
      >
        <a-button >删除</a-button>
      </a-popconfirm>
    </div>
  </a-table>
</template>

<script>
import store from '@/store/index';

const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: '标题',
    dataIndex: 'title',
    key: 'title',
    ellipsis: true,
  },
  {
    title: '描述',
    dataIndex: 'desc',
    key: 'desc',
    ellipsis: true,
  },
  {
    title: '类目',
    dataIndex: 'category',
    key: 'category',
    ellipsis: true,
    customRender(text) {
      let name = '';
      store.state.cateList.forEach((item) => {
        if (item.id === text) {
          name = item.name;
        }
      });
      return name;
    },
  },
  {
    title: '预售价格',
    dataIndex: 'price',
    key: 'price',
    ellipsis: true,
  },
  {
    title: '折扣价格',
    dataIndex: 'price_off',
    key: 'price_off',
    ellipsis: true,
  },
  {
    title: '标签',
    dataIndex: 'tags',
    key: 'tags',
    ellipsis: true,
  },
  {
    title: '限制购买数量',
    dataIndex: 'inventory',
    key: 'inventory',
    ellipsis: true,
  },
  {
    title: '上架状态',
    dataIndex: 'status',
    key: 'status',
    ellipsis: true,
    customRender(text, record) {
      return record.status === 1 ? '上架' : '下架';
    },
  },
  {
    title: '操作',
    dataIndex: 'name',
    key: 'name',
    width: 200,
    scopedSlots: { customRender: 'operation' },
  },
];

export default {
  data() {
    return {
      data: [],
      columns,
    };
  },
  props: ['form', 'tableData'],
  methods: {
    removeList(record) {
      this.$emit('removeList', record);
      this.$message.success('删除成功');
    },
    edit(record) {
      this.$emit('editList', record);
    },
  },
};
</script>
