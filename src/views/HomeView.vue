<template>
  <div>
    <h1>Homepage</h1>
    <router-link to="/register">
      <a href="register">register</a>
    </router-link>
    <router-link to="/login">
      <a href="login">login</a>
    </router-link>
 
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
