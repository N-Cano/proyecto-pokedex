import { db, storage } from '@/firebase.js'
import { defineStore } from 'pinia'
export const useDbStore = defineStore({
    id:'dbStore',
    state(){
        return {
            allProducts:'',
        }
    },
    actions:{
       setAllProducts(){
        db.collection('products').onSnapshot((snapshot)=>{
            let dataArray = [];
            snapshot.forEach((doc)=>{
                dataArray.push(doc.data().data);

            });
            
            return this.allProducts = dataArray[0];
        })
       },
       avatarUpload(event){
        const file = event.target.files[0];
        const ref = storage.ref(`images/avatars/${file.name}`);
        const upload = ref.put(file);
        upload.on(
            'state_changed',
            function progress(snapshot){
                console.warn((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
            },
            function error(error){
                console.error(error);
            },
            function complete(){
                console.info('Finished uploading!');
                upload.snapshot.ref.getDownloadURL()
                .then((donwloadURL)=>{
                    console.log('File', donwloadURL)
                })
            }
        )
       },
       avatarUpload2(file){
        const ref = storage.ref(`images/avatars/${file.name}`);
        const upload = ref.put(file);
        upload.on(
            'state_changed',
            function progress(snapshot){
                console.warn((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
            },
            function error(error){
                console.error(error);
            },
            function complete(){
                console.info('Finished uploading!');
                upload.snapshot.ref.getDownloadURL()
                .then((donwloadURL)=>{
                    console.log('File', donwloadURL)
                })
            }
        )
       }
    },
    getters:{
      
    }
})