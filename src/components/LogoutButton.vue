<template>
    <button @click.prevent="logOut" class="material-symbols-outlined">Button </button>
</template>
<script>
// import { useStore } from "vuex";
import { useRouter } from "vue-router";
// import { auth } from '../config/firebase'
export default {
    name: "LogoutButton",

    setup() {
        // const store = useStore()
        const router = useRouter()
        // auth.onAuthStateChanged(user => {
        //     store.dispatch("fetchUser", user);
        // });
        // const logOut = async () => {
        //     await store.dispatch('logOut')
        //     router.push('/login')
        // }
        const logOut = async () => {
            router.push('/login')
        }
        return { logOut }
    }
};
</script>