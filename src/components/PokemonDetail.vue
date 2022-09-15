<template>
    <div v-show="show">
        <img :src="pokemon.img"/>
        <h1>{{pokemon?.name}}</h1>
        <button @click="close">Close</button>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { usePokeStore } from '../stores/pokedex';

const poke = usePokeStore()

const pokemon = computed( () => poke.poke )
const show = computed( () => {
    if (Object.keys(pokemon.value).length) {
        // chanchada para evitar scroll fuera del modal
        document.body.style.overflow = 'hidden'
        return true
    }

    document.body.style.overflow = 'auto'
    return false
} )

function close() {
    poke.clearPokemon()
}
</script>

<style scoped>
    div {
        position: fixed;
        inset: 1;
        background: gray;
    }
</style>