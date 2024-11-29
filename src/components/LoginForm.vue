<template>
  <div class="container-fluid vh-100 d-flex align-items-stretch p-0 m-0">
    <div class="row flex-grow-1 w-100 m-0">
      <div class="col-8 d-flex justify-content-center align-items-center p-0">
        <div class="text-center w-50">
          <h1>Login Access</h1>
          <p class="mb-5">Use your email for registration</p>

          <input
            class="form-control mb-3"
            type="email"
            placeholder="Email"
            aria-label="default input example"
            v-model="email"
          />
          <div class="d-flex flex-column">
            <input
              class="form-control mb-1"
              type="password"
              placeholder="Password"
              aria-label="default input example"
              v-model="password"
            />
            <div class="text-end mb-4">
              <span class="text-danger">{{ loginMessage }}</span>
            </div>
          </div>
          <button @click="checkLogin()" class="btn btn-dark">SIGN IN</button>
        </div>
      </div>
      <div
        class="col-4 d-flex justify-content-center align-items-center text-center p-0"
        style="background-color: #b84eff; height: 100vh"
      >
        <div>
          <h1 class="text-light">Hello, Friend!</h1>
          <p class="mb-5 text-light">
            Don’t have a account? Don’t worry! <br />
            Enter with your personal information
          </p>
          <router-link :to="'/register'">
            <button type="button" class="btn btn-outline-light">SIGN UP</button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useUsersStore } from "@/stores/users.js";
export default {
  data() {
    return {
      store: useUsersStore(),
      email: "",
      password: "",
      loginMessage: "",
    };
  },
  methods: {
    checkLogin() {
      if (this.email && this.password) {
        if (this.store.login(this.email, this.password)) {
          if (this.store.currentUser.id === 0) {
            this.$router.push("/admin");
          } else {
            this.$router.push("/");
          }
        } else {
          this.loginMessage =
            "Login failed. Please check your email and password.";
        }
      } else {
        this.loginMessage = "All fields are required!";
      }
      this.email = "";
      this.password = "";
    },
    
  },
};
</script>

<style lang="scss" scoped></style>
