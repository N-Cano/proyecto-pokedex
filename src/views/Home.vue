<template>
  <header>
    <h1>{{ name }}</h1>
    <LogoutButton />
  </header>

  <div>
    <PokeSearch />
    <PokeLimiter />
  </div>

  <PokeList />

  <PokeDetail />
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
import PokeList  from '@/components/Poke/List.vue';
import PokeDetail from '@/components/Poke/Detail.vue';
import PokeSearch from '@/components/Poke/Search.vue';
import PokeLimiter from '@/components/Poke/Limiter.vue';
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
