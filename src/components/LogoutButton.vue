<template>
    <button @click.prevent="logOut">LogOut</button>
</template>
<script setup>
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/auth';

const router = useRouter()
const auth = useAuthStore()

async function logOut() {
    await auth.logOut()
    router.push('/login')
}
</script>