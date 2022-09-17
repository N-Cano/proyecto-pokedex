import { defineStore } from 'pinia'
import axios from 'axios'
import config from '@/config/pokeapi'
import { ucfirst } from '@/helpers'

export const usePokeStore = defineStore("pokeStore", {
    state() {
        return {
            pokes: [],
            filteredPokes: [],
            poke: {},
        }
    },

    actions: {
        async loadPokes(limit = 5) {
            const payload = await axios.get(`${config.url}?limit=${limit}`)

            this.pokes = payload?.data?.results?.map((pokemon) => {
                const id = Number(pokemon.url.split("/")[6])
                return {
                    id,
                    name: ucfirst(pokemon.name),
                    img: `${config.images}/${id}.png`,
                }
            }) ?? []

            this.filteredPokes = this.pokes
        },
        async loadPoke(id) {
            let poke = localStorage.getItem(`poke_${id}`)
            if (poke) return this.poke = JSON.parse(poke)

            const payload = (await axios.get(`${config.url}/${id}`))?.data
            if (!payload) return this.poke = {}

            poke = {
                id: payload.id,
                name: payload.name,
                img: `${config.images}/${id}.png`,
            }

            this.poke = poke
            localStorage.setItem(`poke_${id}`, JSON.stringify(poke))
        },
        searchPokes(name = '') {
            this.filteredPokes = this.pokes.filter((poke) => (
                poke.name.toLowerCase().indexOf(name.toLowerCase()) != -1
            ));
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