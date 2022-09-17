<template>
    <select @change="limitChange">
        <option value="5">5</option>
        <option value="10">10</option>
    </select>
</template>

<script setup>
import { usePokeStore as poke} from '@/stores/pokedex'

function limitChange(event) {
    const limit = event.target.value
    poke().loadPokes(limit)
}


</script>