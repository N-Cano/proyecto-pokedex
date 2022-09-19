<template>
    <div class="login">
        <img class="img-login" src="../assets/img/logo-pokedex.svg" alt="logo-pokedex.svg">
        <section class="section-login">
            <h1 class="name-login">Iniciar Sesión</h1>
            <button class="btn-login" @click="logIn()">Google</button>
        </section>
        <footer>.:Proyecto with PokeAPI | Developed by Nahuel Cano:.</footer>
    </div>
</template>

<script setup>
import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router';

document.title = 'Pokedex | Login'

const router = useRouter()
const auth = useAuthStore()

async function logIn() {
    await auth.logIn()
    router.push('/')
}
</script>