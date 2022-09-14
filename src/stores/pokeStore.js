import { defineStore } from 'pinia'

export const usePokemonStore = defineStore({
    id: 'pokeStore',
    state: () => ({
        pokemons: []
    })
})