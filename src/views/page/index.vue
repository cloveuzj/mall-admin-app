<template>
  <div class="index">
      <card />
      <charts />
  </div>
</template>

<script>
import card from '../layout/components/card.vue';
import charts from '../layout/components/charts.vue';

export default {
  components: {
    card,
    charts,
  },
};
</script>
