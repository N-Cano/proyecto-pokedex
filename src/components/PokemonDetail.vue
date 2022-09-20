<template>
    <div class="table-detail" v-if="show">
        <img class="img-detail" :src="pokemon.img" />
        <h1 class="name-detail">{{pokemon?.name}}</h1>
        <ul class="ul-ditail">
            <li class="abilities">Abilities</li>
            <li class="li-ditail" v-for="ability in pokemon.abilities ">{{ability}}</li>
        </ul>
        <button class="btn-detail material-symbols-outlined" @click="close">Close</button>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { usePokeStore as poke } from '@/stores/pokedex';
import { ucfirst } from '@/helpers'

const pokemon = computed(() => poke().poke)
const show = computed(() => {
    if (Object.keys(pokemon.value).length) {
        // chanchada para evitar scroll fuera del modal
        document.body.style.overflow = 'hidden'

        document.title = `Pokedex - ${ucfirst(pokemon.value.name)}`

        return true
    }

    document.body.style.overflow = 'auto'
    document.title = 'Pokedex'
    return false
})

function close() {
    poke().clearPokemon()
}
</script>
