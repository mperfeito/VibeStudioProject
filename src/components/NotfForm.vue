<template>
  <div class="w-75">
    <div class="mb-3">
      <label for="exampleFormControlInput1" class="form-label">Email</label>
      <div class="dropdown">
        <button
          class="btn btn-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Select users
        </button>
        <ul class="dropdown-menu p-2">
          <li>
            <input
              type="checkbox"
              class="form-check-input"
              id="selectAll"
              @change="toggleSelectAll"
              :checked="isAllSelected"
            />
            <label class="form-check-label ms-2" for="selectAll">All</label>
          </li>
          <li><hr class="dropdown-divider" /></li>

          <li v-for="user in store.users" :key="user.id">
            <input
              type="checkbox"
              class="form-check-input"
              :id="'user-' + user.id"
              :value="user.id"
              v-model="selectedUsers"
            />
            <label class="form-check-label ms-2" :for="'user-' + user.id">
              {{ user.email }}
            </label>
          </li>
        </ul>
      </div>
    </div>

    <div class="mb-3">
      <label for="exampleFormControlTextarea1" class="form-label"
        >Message</label
      >
      <textarea
        class="form-control mb-1"
        id="exampleFormControlTextarea1"
        rows="7"
        v-model="message"
      ></textarea>
      <div class="text-end">
      <span  class="text-danger">{{ errorMessage }}</span>
    </div>
    </div>
    <div class="text-end">
    <button class="btn btn-secondary" @click="sendNotification">
      Send notification
    </button>
  </div>
  </div>
</template>

<script>
import { useUsersStore } from "@/stores/users.js";

export default {
  data() {
    return {
      store: useUsersStore(),
      message: "",
      selectedUsers: [],
      errorMessage: "",
    
    };
  },
  computed: {
    isAllSelected() {
      return this.selectedUsers.length === this.store.users.length;
    },
  },
  methods: {
    toggleSelectAll(event) {
      if (event.target.checked) {
        this.selectedUsers = this.store.users.map((user) => user.id);
      } else {
        this.selectedUsers = [];
      }
    },
    sendNotification() {
      if (this.selectedUsers.length === 0) {
        this.errorMessage = "Por favor, selecione pelo menos um usuário.";
        return;
      }

      const selectedEmails = this.store.users
        .filter((user) => this.selectedUsers.includes(user.id))
        .map((user) => user.email);

      const success = this.store.sendNotification(selectedEmails, this.message);

      if (success) {
        this.errorMessage = "";
        this.message = ""; 
        this.selectedUsers = []; 
        this.errorMessage = "Notificação enviada com sucesso!";
      } else {
        this.errorMessage = "Erro ao enviar a notificação.";
      }
    },
  },
};
</script>


<style lang="scss" scoped></style>
