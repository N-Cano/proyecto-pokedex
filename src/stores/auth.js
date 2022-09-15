import { defineStore } from 'pinia'
import { signOut, GoogleAuthProvider, getAuth, signInWithPopup as sigIn } from 'firebase/auth'

export const useAuthStore = defineStore('authStore', {
  actions: {
    async logIn() {
      const provider = new GoogleAuthProvider()
      await sigIn(getAuth(), provider)
    },
    async logOut() {
      await signOut(getAuth())
    },
    async user() {
      const payload = new Promise((resolve, reject) => getAuth().onAuthStateChanged(
        user => resolve(user),
        e => reject(e)
      ));

      const user = await payload;

      if (! user) return null

      return {
        name: user.displayName,
        photo: user.photoURL,
        email: user.email,
      }
    }
  }
})