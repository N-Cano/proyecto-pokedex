import { defineStore } from 'pinia'
import { signOut, GoogleAuthProvider, getAuth, onAuthStateChanged, signInWithPopup as sigIn } from 'firebase/auth'


export const useAuthStore = defineStore('authStore', {
  actions: {
    async logIn() {
      const provider = new GoogleAuthProvider()
      const auth = await getAuth()
      await sigIn(auth, provider)
    },
    async logOut() {
      const auth = await getAuth()
      await signOut(auth)
      this.user = null
    },
    async user() {
      const auth = getAuth();
      const payload = new Promise((resolve, reject) => auth.onAuthStateChanged(
        user => resolve(user),
        e => reject(e)
      ));

      const user = await payload;

      if (! user) return null;

      return {
        name: user.displayName,
        photo: user.photoURL,
        email: user.email,
      }
    }
  }
})