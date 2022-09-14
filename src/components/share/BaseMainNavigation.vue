<template>
    <nav class="main-navigation">
        <p @click="toggle()"
        class="relative button button_icon material-symbols-outlined zindex-900"
        :class="{'white':isShow}">
            {{iconMenu}}
        </p>
        <button @click="toggle()" 
        class="relative button button_icon material-symbols-outlined zindex-900"
        :class="{'white':isShow}">
            {{iconMenu}}
        </button>
    </nav>
</template>
<script>
    export default {
        name:'BaseMainNavigation',
    }
</script>
<script setup>
import {reactive, toRefs, computed, defineProps, defineExpose} from 'vue'
    const props = defineProps({

    })
    const dataNav = reactive({
        isShow: false,
    })
    function toggle(){
        dataNav.isShow = !dataNav.isShow;
    }
    const iconMenu = computed({
        get() {
            return dataNav.isShow ? 'Logout' : 'Login'
        },
    })
    const { isShow } = toRefs(dataNav)
    defineExpose({
        props,
        ...toRefs(dataNav)
    })   
</script>



