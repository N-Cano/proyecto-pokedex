<template>
  <header>
    <h1>{{ name || 'Sin usuario en store'}}</h1>
    <LogoutButton />
  </header>

  <PokemonList />
</template>

<style scoped>
  header {
    display: flex;
    justify-content: space-between;
  }
</style>

<script setup>
import LogoutButton from '@/components/LogoutButton.vue';
import PokemonList from '@/components/PokemonList.vue';

import { useAuthStore as auth} from '@/stores/auth';
import { ref, onMounted } from 'vue';

const name = ref('')

onMounted(async () => {
    name.value = (await auth().user()).name
})
</script>
