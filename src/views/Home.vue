<template>
  <LogoutButton />
  <main>

  </main>
</template>

<script setup>
import LogoutButton from '../components/LogoutButton.vue';
import { pokedex } from '../stores/pokedex';
import { onMounted } from 'vue';

const pokeStore = pokedex()

onMounted(() => {
  pokeStore.allPokemons()
  console.log(pokeStore.pokemons)
})
</script>
