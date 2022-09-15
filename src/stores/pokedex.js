import { defineStore } from 'pinia'
import axios from 'axios'
import config from '@/config/pokeapi'

export const usePokeStore = defineStore("pokeStore", {
    state() {
        return {
            pokes: [],
            poke: {},
        }
    },

    getters: {
        pokemons: (state) => state.pokes,
        pokemon: (state) => state.poke,
    },

    actions: {
        async allPokemons() {
            const payload = await axios.get(`${config.url}?limit=20`)
            this.pokes = payload?.data?.results?.map((pokemon) => {
                const id = Number(pokemon.url.split("/")[6])
                return {
                    id,
                    name: pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1),
                    img: `${config.images}/${id}.png`,
                }
            }) ?? this.pokes
        },
        async onePokemon(id) {
            const payload = (await axios.get(`${config.url}/${id}`))?.data

            if (! payload) return this.poke = null

            console.log(payload)

            this.poke = {
                name: payload.name,
                img: `${config.images}/${id}.png`,
            }
        },
        clearPokemon() {
            this.poke = {}
        }
    },
})