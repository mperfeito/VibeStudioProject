<template> 
  <div>
        <nav class="navbar navbar-expand-lg" style="background-color: #B84EFF; font-family:'Ysabeau Infant' ;">
        <div class="container-fluid">
            <a class="navbar-brand" style="margin-left: 2%; margin: 1%; height: 60px;" href="#"><img style="height: 60px;" src="../assets/homepageAssets/logoBranco.png" alt=""></a>
            
            <div class="nav justify-content-end"  id="navbarSupportedContent" style="margin-right: 1%;" >
                <ul class="nav ">     <!-- nav-underline -->
                <li class="nav-item">
                    <a class="nav-link active" style="color: white;"  aria-current="page" href="#">About us</a>
                </li> 
                <li class="nav-item">
                    <a class="nav-link active" style="color: white;" aria-current="page" href="#">Calendar</a>
                </li> 
                <li class="nav-item">
                    <a class="nav-link active" style="color: white;"  aria-current="page" href="#">Packs</a>
                </li> 
                <li class="nav-item">
                    <a class="nav-link active" style="color: white;"  aria-current="page" href="#">Workshops</a>
                </li> 
                <li class="nav-item">
                    <a class="nav-link active" style="color: white;"  aria-current="page" href="#">Shows</a>
                </li> 
                <li class="nav-item">
                    <a class="nav-link active" style="color: white;" aria-current="page" href="#">(icon)</a>
                </li>
                </ul> 
            </div>
            </div>
        </nav>
    </div> 
<!-- mariana -->
  <div>
    <h1>Homepage</h1>
    <router-link to="/register">
      <a href="register">register</a>
    </router-link>
    <router-link to="/login">
      <a href="login">login</a>
    </router-link>
    <router-link to="/calendar">
      <a href="login">calendar</a>
    </router-link>
    <router-link to="/packs">
      <a href="login">packs</a>
    </router-link>
    <button @click="logoutUser()" class="btn btn-dark">Logout</button>
  </div>
</template>

<script>
import { useUsersStore } from "@/stores/users.js";
export default {
  data() {
    return {
      store: useUsersStore(),
    };
  },
  methods: {
    logoutUser() {
      this.store.logout();
    },
  },
};
</script>

<style lang="scss" scoped></style>
