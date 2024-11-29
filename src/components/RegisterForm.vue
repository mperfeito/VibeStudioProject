<template>
  <div class="container-fluid vh-100 d-flex align-items-stretch p-0 m-0">
    <div class="row flex-grow-1 w-100 m-0">
      <!-- Coluna da mensagem de boas-vindas -->
      <div
        class="col-4 d-flex justify-content-center align-items-center text-center p-0"
        style="background-color: #b84eff; height: 100vh"
      >
        <div>
          <h1 class="text-light">Welcome Back !</h1>
          <p class="mb-5 text-light">
            To keep connected with us, please <br />
            login with your personal info
          </p>
          <router-link :to="'/login'">
            <button type="button" class="btn btn-outline-light">SIGN IN</button>
          </router-link>
        </div>
      </div>

      <!-- Coluna de criação de conta -->
      <div class="col-8 d-flex justify-content-center align-items-center p-0">
        <div class="text-center w-50">
          <h1>Create Account</h1>
          <p class="mb-5">Use your email for registration</p>
          <input
            class="form-control mb-3"
            type="text"
            placeholder="Name"
            aria-label="default input example"
            v-model="name"
          />

          <input
            class="form-control mb-3"
            type="email"
            placeholder="Email"
            aria-label="default input example"
            v-model="email"
          />
          <input
            class="form-control mb-1"
            type="password"
            placeholder="Password"
            aria-label="default input example"
            v-model="password"
          />
          <div class="text-end mb-3">
            <span class="text-danger">{{ errorMessage }}</span>
          </div>

          <button @click="registerUser" class="btn btn-dark">SIGN UP</button>
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
      name: "",
      email: "",
      password: "",
      errorMessage: "",
    };
  },
  computed: {
    store() {
      return useUsersStore();
    },
  },
  methods: {
    registerUser() {
      if (this.name && this.email && this.password) {
        const userExists = this.store.users.some((u) => u.email === this.email);

        if (!userExists) {
          this.store.addUser(this.name, this.email, this.password);
          this.$router.push("/");
        } else {
          this.errorMessage = "The user already exists";
        }
      } else {
        this.errorMessage = "All fields are required!";
      }

      this.name = "";
      this.email = "";
      this.password = "";
    },
  },
};
</script>

<style lang="scss" scoped></style>
