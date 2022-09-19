<template>
    <input placeholder="  Pokemon Name" type="text" @input.prevent="search">
</template>

<script setup>
import { usePokeStore as poke } from '@/stores/pokedex';

function search(event) {
    const name = event.target.value
    poke().searchPokes(name)
}
</script>