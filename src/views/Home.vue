<template>
  <div class="home">
    <header class="header-home">
      <h1 class="name-home">{{ name || 'Sin usuario en store'}}</h1>
      <LogoutButton class="btn-home" />
    </header>
    <img class="img-home" src="../assets/img/logo-pokedex.svg" alt="logo-pokedex.svg">
    <main class="main-home">
      <PokemonSearch class="search" />
      <PokemonList class="list"/>
      <PokemonDetail class="detail"/>
    </main>
    <footer>.:Proyecto with PokeAPI | Developed by Nahuel Cano:.</footer>
    </div>
</template>


<script setup>
import LogoutButton from '@/components/LogoutButton.vue';
import PokemonList from '@/components/PokemonList.vue';
import PokemonDetail from '@/components/PokemonDetail.vue';
import PokemonSearch from '@/components/PokemonSearch.vue';
import { useAuthStore as auth } from '@/stores/auth';
import { usePokeStore as poke } from '@/stores/pokedex'

import { ref, onMounted, onUnmounted } from 'vue';

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
