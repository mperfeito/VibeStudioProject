<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue';  
import Footer from './components/Footer.vue'; 
import { useUsersStore } from "./stores/users"; 
import LoginRegisterbar from './components/LoginRegisterbar.vue';

const userStore = useUsersStore();


</script>

<template>  
  <LoginRegisterbar v-if="!userStore.currentUser" />
  <NavBar v-if="userStore.currentUser" />  
  <RouterView /> 
  <Footer></Footer>
</template>

<style scoped>  




</style>
