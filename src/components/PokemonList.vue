<template>
    <ul>
        <li v-for="poke in pokes" :key="poke.id">
            <div @click="onClick(poke.id)">
                <img :src="poke.img" :alt="poke.name" />
                <p>{{poke.name}}</p>
            </div>
        </li>
    </ul>
</template>

<style scoped>
    li {
        list-style: none;
    }

    div {
        cursor: pointer;
        margin: 20px 0;
        display: flex;
        align-items: center;
        max-width: 200px;
    }

    p {
        display: inline;
        padding: 0;
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
    pokes.value = poke().pokes
})
</script>