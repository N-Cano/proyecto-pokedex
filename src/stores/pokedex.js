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
            let poke = localStorage.getItem(`poke_${id}`)
            if (poke) return this.poke = JSON.parse(poke)

            const payload = (await axios.get(`${config.url}/${id}`))?.data
            if (! payload) return this.poke = {}

            poke = {
                id: payload.id,
                name: payload.name,
                img: `${config.images}/${id}.png`,
            }

            this.poke = poke
            localStorage.setItem(`poke_${id}`, JSON.stringify(poke))
        },
        clearPokemon() {
            this.poke = {}
        },
        clearGarbage() {
            this.poke = {}
            this.pokes = []
            
            const clearLocalStorage = () => Object.keys(localStorage).forEach((key) => {
                if (key.includes('poke_')) {
                    localStorage.removeItem(key)
                }
            })

            clearLocalStorage()
        }
    },
})