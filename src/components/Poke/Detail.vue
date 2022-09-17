<template>
    <div v-if="show">
        <img :src="pokemon.img" />
        <h1>{{pokemon?.name}}</h1>
        <button @click="close">Close</button>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { usePokeStore } from '@/stores/pokedex';
import { ucfirst } from '@/helpers'

const poke = usePokeStore()

const pokemon = computed(() => poke.poke)
const show = computed(() => {
    if (Object.keys(pokemon.value).length) {
        // chanchada para evitar scroll fuera del modal
        document.body.style.overflow = 'hidden'

        // chanchada para actualizar el título de la web
        document.title = `Pokedex - ${ucfirst(pokemon.value.name)}`

        return true
    }

    document.body.style.overflow = 'auto'
    document.title = 'Pokedex'
    return false
})

function close() {
    poke.clearPokemon()
}
</script>

<style scoped>
div {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: lightgray;
}
</style>