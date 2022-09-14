<template>
    <v-app>
        <base-login />
        <h2 text @click="toggle()" class="login material-symbols-outlined" :class="{'white':isShow}">
            {{iconMenu}}
        </h2>
        <v-btn depressed elevation="2" @click="toggle()" class="login-button material-symbols-outlined"
            :class="{'white':isShow}">
            Login
        </v-btn>
        <v-container class="img">
            <img alt="Pokedex logo" src="@/img/logo-pokedex.svg" style="width: 400px" />
        </v-container>

        <v-container>
            <v-container>
                <v-text-field v-model="search" label="Search" placeholder="Pokemon Name" solo></v-text-field>

                <v-row>
                    <v-col cols="3" v-for="pokemon in filtered_pokemons" :key="pokemon.name">
                        <v-card @click="show_pokemon(get_id(pokemon))">
                            <v-container class="card">
                                <v-row class="table-card">
                                    <img :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${get_id(
                                      pokemon
                                    )}.png`" :alt="pokemon.name" width="40%" />
                                </v-row>
                                <h2 class="text-center">{{ get_name(pokemon) }}</h2>
                            </v-container>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-container>

        <v-dialog v-model="show_dialog" width="800">
            <v-card v-if="selected_pokemon" class="px-2">
                <v-container>
                    <v-row class="table">
                        <v-col cols="6">
                            <img :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${selected_pokemon.id}.png`"
                                :alt="selected_pokemon.name" width="80%" />
                        </v-col>
                        <v-col cols="6">
                            <h2 class="name-selected">{{ get_name(selected_pokemon) }}</h2>
                        </v-col>
                    </v-row>

                    <h2 class="move">Move</h2>

                    <v-simple-table>
                        <template>
                            <thead>
                                <tr>
                                    <th class="text-left">Name</th>
                                    <th class="text-left">Level</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="item in filter_moves(selected_pokemon)" :key="item.move.name">
                                    <td>
                                        {{
                                        item.move.name.charAt(0).toUpperCase() +
                                        item.move.name.slice(1)
                                        }}
                                    </td>
                                    <td>{{ get_move_level(item) }}</td>
                                </tr>
                            </tbody>
                        </template>
                    </v-simple-table>
                </v-container>
            </v-card>
        </v-dialog>
        <footer>.:Proyecto with PokeAPI | Developed by Nahuel Cano:.</footer>
    </v-app>
</template>
<script>
import axios from "axios"
import { reactive, toRefs, computed, defineProps } from 'vue'
import BaseLogin from '@/components/share/BaseLogin.vue'
export default {
    name: "BasePokemon",

    components: {
    },

    setup() {

        const props = defineProps({

        })
        const dataNav = reactive({
            isShow: false,
        })
        function toggle() {
            dataNav.isShow = !dataNav.isShow;
        }
        const iconMenu = computed({
            get() {
                return dataNav.isShow ? 'logout' : 'login'
            },
        })
        const { isShow } = toRefs(dataNav)
        return {
            ...toRefs(dataNav),
            props,
            toggle,
            iconMenu,
            isShow,
            BaseLogin
        }
    },

    data() {
        return {
            pokemons: [],
            search: "",
            show_dialog: false,
            selected_pokemon: null,
        };
    },

    mounted() {
        axios
            .get("https://pokeapi.co/api/v2/pokemon?limit=151")
            .then((response) => {
                this.pokemons = response.data.results;
            });
    },

    methods: {
        get_id(pokemon) {
            return Number(pokemon.url.split("/")[6]);
        },
        get_name(pokemon) {
            return pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
        },
        show_pokemon(id) {
            axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then((response) => {
                this.selected_pokemon = response.data;
                this.show_dialog = !this.show_dialog;
            });
        },
        get_move_level(move) {
            for (let version of move.version_group_details) {
                if (
                    version.version_group.name == "sword-shield" &&
                    version.move_learn_method.name == "level-up"
                ) {
                    return version.level_learned_at;
                }
            }
            return 0;
        },
        filter_moves(pokemon) {
            return pokemon.moves.filter((item) => {
                let include = false;
                for (let version of item.version_group_details) {
                    if (
                        version.version_group.name == "sword-shield" &&
                        version.move_learn_method.name == "level-up"
                    ) {
                        include = true;
                    }
                }
                return include;
            });
        },
    },

    computed: {
        filtered_pokemons() {
            return this.pokemons.filter((item) => {
                return item.name.includes(this.search);
            });
        },
    },
};
</script>