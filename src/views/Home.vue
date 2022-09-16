<template>
  <header>
    <h1>{{ name || 'Sin usuario en store'}}</h1>
    <LogoutButton />
  </header>

  <PokemonSearch />
  <PokemonList />

  <PokemonDetail />
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
import PokemonSearch from '@/components/PokemonSearch.vue';
import { useAuthStore as auth } from '@/stores/auth';
import { usePokeStore as poke } from '@/stores/pokedex'

import { ref, onMounted, onUnmounted } from 'vue';

// chanchada para actualizar el título de la web
document.title = 'Pokedex'

const name = ref('')

onMounted(async () => {
  await poke().loadPokes()
  name.value = (await auth().user()).name
})

onUnmounted(() => {
  poke().clearGarbage()
})
</script>
