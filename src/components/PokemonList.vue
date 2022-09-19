<template>
    <ul class="ul-list">
        <li class="li-list" v-for="poke in pokes" :key="poke.id">
            <div class="list-card" @click="onClick(poke.id)">
                <img :src="poke.img" :alt="poke.name" />
                <p>{{poke.name}}</p>
            </div>
        </li>
    </ul>
</template>

<script setup>
import { usePokeStore as poke } from '@/stores/pokedex'
import { computed } from 'vue';

const pokes = computed( () => poke().filteredPokes )

async function onClick(id) {
    await poke().loadPoke(id)
}
</script>