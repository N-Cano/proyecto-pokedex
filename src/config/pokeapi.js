const env = import.meta.env

export default {
    url: env.VITE_POKEDEX_POKEAPI_URL,
    images: env.VITE_POKEDEX_POKEAPI_IMAGES_URL,
}