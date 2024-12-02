<template>
  <div>
    <LoginForm @login="loginUser" :loginMessage="message"></LoginForm>
  </div>
</template>

<script>
import { useUsersStore } from "@/stores/users.js";
import LoginForm from "@/components/LoginForm.vue";

export default {
  components: {
    LoginForm,
  },
  data() {
    return {
      store: useUsersStore(),
      message: "",
    };
  },
  methods: {
    loginUser(email, password) {
      if (!email || !password) {
        this.message = "All fields are requied !";
        return;
      }
      if (this.store.login(email, password)) {
        if (this.store.currentUser.id === 0) {
          this.$router.push("/admin");
        } else {
          this.$router.push("/");
        }
      } else {
        this.message = "Login failed. Please check your email and password.";
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
