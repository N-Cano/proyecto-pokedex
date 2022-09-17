<template>
    <input type="text" @input.prevent="search" placeholder="Search">
</template>

<script setup>
import { usePokeStore as poke } from '@/stores/pokedex';

function search(event) {
    const name = event.target.value
    poke().searchPokes(name)
}
</script>