<template>
  <LogoutButton />
  <h1>{{ name || 'Sin usuario en store'}}</h1>
</template>

<script setup>
import LogoutButton from '@/components/LogoutButton.vue';
import { useAuthStore } from '@/stores/auth';
import { ref } from 'vue';

const auth = useAuthStore()
const user = auth.user()

const name = ref(user?.name)
</script>
