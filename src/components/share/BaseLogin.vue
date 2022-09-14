<template>
    <form v-if="!user.user" @submit.prevent="login">
        <h3 v-if="user.msg">
            {{user.msg}}
        </h3>
        <fieldset>
            <label>
                Correo
            </label>
            <input type="email" v-model.trim="userData.email" />
            <label>
                Password
            </label>
            <input type="password" v-model.trim="userData.pass" />
            <input type="submit" value="login" />
        </fieldset>
    </form>
    <button v-else @click="user.setLogout" class="button">Logout</button>
</template>
<script>
    import { reactive, toRefs} from 'vue'
    import { useUserStore } from '@/stores/dbUser'
// import router from '@/router';
    export default {
        name:'BaseLogin',
        setup(){
            const user = useUserStore();
            const dataLogin = reactive({
                userData:{
                    email:'',
                    pass:''
                },
                msg:''
            })
            function login(){
                if(dataLogin.userData.email != '' || dataLogin.userData.password != ''){
                    dataLogin.userData.email = dataLogin.userData.email.replace(/[$<>]/g,'');
                    dataLogin.userData.pass = dataLogin.userData.pass.replace(/[$<>]/g,'');
                    checkLogin();
                }
            }
            async function checkLogin(){
                try {
                    await user.setLoginM( dataLogin.userData.email, dataLogin.userData.pass)
                }catch(error){
                    console.log(error)
                }finally{
                   cleanForm();
                }
            }
            function cleanForm(){
                dataLogin.userData.email = dataLogin.userData.pass = '';
            }
            // function goHome(){
            //     router.push('/');
            // }
            return {
              ...toRefs(dataLogin),
              user,
              login,
            //   goHome
            }
        }
    }
</script>