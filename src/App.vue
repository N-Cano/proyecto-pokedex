<template>
  <div class="app">
    <BasePokemon />
  </div>
</template>
<script>
import BasePokemon from '@/components/layout/BasePokemon.vue'
export default {
  setup() {
  },
  components: {
    BasePokemon,
  }
}
</script>
<style lang="scss">
@import '@/assets/css/normalize.min';
@import '@/assets/css/styles';
</style>
