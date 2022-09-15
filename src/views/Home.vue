<template>
  <header>
    <h1>{{ name || 'Sin usuario en store'}}</h1>
    <LogoutButton />
  </header>

  <PokemonDetail />
  <PokemonList />
</template>

<style scoped>
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 300px;
  }
  
  button {
    height: 30px;
  }
</style>

<script setup>
import LogoutButton from '@/components/LogoutButton.vue';
import PokemonList from '@/components/PokemonList.vue';
import PokemonDetail from '@/components/PokemonDetail.vue';

import { useAuthStore as auth} from '@/stores/auth';
import { usePokeStore } from '@/stores/pokedex'
import { ref, onMounted, onUnmounted } from 'vue';

const name = ref('')

onMounted(async () => {
    name.value = (await auth().user()).name
})

onUnmounted(() => {
  usePokeStore().clearGarbage()
})
</script>
