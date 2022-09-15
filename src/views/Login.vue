<script setup>
import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router';

const router = useRouter()
const auth = useAuthStore()

async function logIn() {
    await auth.logIn()
    router.push('/')
}
</script>
  
<template>
    <h1>Iniciar Sesión</h1>
    <br>
    <button @click="logIn()">Google</button>
</template>