const env = import.meta.env

export default {
    apiKey: env.VITE_POKEDEX_FIREBASE_API_KEY,
    authDomain: env.VITE_POKEDEX_FIREBASE_AUTH_DOMAIN,
    projectId: env.VITE_POKEDEX_FIREBASE_PROJECT_ID,
    storageBucket: env.VITE_POKEDEX_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: env.VITE_POKEDEX_FIREBASE_MESSAGING_SENDER_ID,
    appId: env.VITE_POKEDEX_FIREBASE_APP_ID,
    measurementId: env.VITE_POKEDEX_FIREBASE_MEASUREMENT_ID,
};