<template>
    <ul>
        <li v-for="poke in pokes" :key="poke.id">
            <div @click="onClick(poke.id)">
                <img :src="poke.img" :alt="poke.name" />
                <span>{{poke.name}}</span>
            </div>
        </li>
    </ul>
</template>

<style scoped>
    li {
        list-style: none;
    }
</style>

<script setup>
import { usePokeStore as poke } from '@/stores/pokedex'
import { onMounted, ref } from 'vue';

const pokes = ref([])

async function onClick(id) {
    await poke().onePokemon(id)
}

onMounted(async () => {
    await poke().allPokemons()
    pokes.value = poke().pokemons
})
</script>