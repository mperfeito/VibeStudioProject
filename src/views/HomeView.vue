<template>
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
      local
    },
  },
};
</script>

<style lang="scss" scoped></style>
