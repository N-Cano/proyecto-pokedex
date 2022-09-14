Vue 3 + Firebase + Pinia js + https://pokeapi.co/

Proyecto Pokemon - Entrega 15/09

1) Crear un proyecto Vue conectado a Firebase.

Debe tener 2 stores: Una para firebase y otra genérica
Componente de Login que te loguee por Gmail
Botón de Login/Logout en el header
Una página privada, donde vamos a listar pokemons, a la cual solo accedés si estás logueado.
Conectar el proyecto a la api pública de Pokemon: https://pokeapi.co/
En la página privada crear un search en tiempo real de los pokemones.

Esto https://pokeapi.co/api/v2/pokemon/ trae un listado de nombres de pokemon. Entonces la lógica es que lo que escriba el user en el search, si existe en esa lista, te lleve al detalle del pokemon.

Para ver un pokemon en específico se añade el nombre al final de la url. Por ejemplo: https://pokeapi.co/api/v2/pokemon/charmander

De aquí vamos a listar en una card una picture 3d, el nombre y las habilidades.



# pokedex

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
