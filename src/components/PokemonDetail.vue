<template>
    <div v-show="show">
        <img :src="pokemon.img"/>
        <h1>{{pokemon?.name}}</h1>
        <button @click="close()">Close</button>
    </div>
</template>

<style scoped>
    div {
        position: absolute;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100vw;
        background: white;
    }
</style>

<script setup>  
import { computed } from 'vue';
import { usePokeStore as poke} from '../stores/pokedex';

const pokemon = computed( () => poke().poke )
const show = computed( () => Object.keys(poke().pokemon).length !== 0 )

function close() {
    poke().clearPokemon()
}
</script>