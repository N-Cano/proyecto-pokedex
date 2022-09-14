// import { fb, auth } from "@/firebase.js"
// export const useUserStore = defineStore({
//     id:'userStore',
//     state(){
//         return {
//             user:null,
//             msg:null
//         }
//     },
//     actions:{
//         setUser(){
//             return new Promise((resolve, reject)=>{
//                 const unsubscribe = auth.onAuthStateChanged(
//                     user => {
//                         unsubscribe();
//                         resolve(user);
//                     },
//                     ()=> {
//                         reject();
//                     }
//                 )
//             })
//         },

//         async setGoogleLogin(){
//             const provider = new fb.auth.GoogleAuthProvider();
//             await auth.signInWithPopup(provider);
//             this.user = auth.currentUser;
//         },

//         setLoginM(email, password){
//             auth.signInWithEmailAndPassword(email, password)
//             .then((userCredential)=>{
//                 console.log(userCredential)
//                 this.user = auth.currentUser;
//             })
//             .catch((error)=>{
//                 this.msg = error.code
//             })
//         },
        
//         async setRegister( name, email, password){
//             await auth.createUserWithEmailAndPassword(email, password);
//             const user = auth.currentUser;
//             await user.updateProfile({
//               displayName: name
//             });
//             this.user = user;
//         },

//         async setLogout() {
//             await auth.signOut();
//             this.user = null;
//         },
    
//         async setResetPass(email) {
//             await auth.sendPasswordResetEmail(email);
//         },

//         setCheckAuth() {
//             auth.onAuthStateChanged((user)=>{
//               user ? this.user = user : this.user = null;
//             })
//         }
    
//     },
// })