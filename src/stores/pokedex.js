import { defineStore } from 'pinia'
import axios from 'axios'

export const pokedex = defineStore("pokedex", {
    state() {
        return {
            pokes: [],
            apiUrl: "https://pokeapi.co/api/v2/pokemon",
        }
    },
    getters: {
        pokemons: (state) => state.pokes
    },
    actions: {
        async allPokemons() {
            try {
                const data = await axios.get(`${this.apiUrl}?limit=151`)
                this.pokes = data?.data?.results?.map((pokemon) => {
                    const id = Number(pokemon.url.split("/")[6])
                    return {
                        id,
                        name: pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1),
                        img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
                    }
                }) ?? this.pokes
            }
            catch (error) {
                console.error(error)
            }
        },
        async onePokemon(id) {
            try {

            }
            catch (error) {
                console.error(error)
            }
        }
    },
})