<template>
  <div>
    <div>
      <table class="table table-hover">
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>email</th>
            <th>status</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in store.users" :key="user.id">
            <td>{{ user.id }}</td>
            <td>{{ user.name }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.blocked ? "blocked" : "unblocked" }}</td>
            <td>
              <i class="bi bi-gear-fill" @click="openModal(user.id)"></i>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div
      class="modal fade"
      :class="{ show: showModal }"
      tabindex="-1"
      aria-hidden="true"
      v-if="showModal"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">User Settings</h5>
            <button
              type="button"
              class="btn-close"
              @click="closeModal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body d-flex flex-column">
            <span> Delete User </span>
            <button
              @click="deleteUser()"
              class="btn btn-outline-danger d-grid gap-2 col-6 mb-2"
            >
              <i class="bi bi-x-circle"></i>
            </button>
            <span> Block User </span>
            <button
              @click="blockUser()"
              class="btn btn-outline-warning d-grid gap-2 col-6"
            >
              <i class="bi bi-ban"></i>
            </button>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-dark" @click="closeModal()">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="modal-backdrop" v-if="showModal" @click="closeModal"></div>
  </div>
</template>

<script>
import { useUsersStore } from "@/stores/users.js";

export default {
  data() {
    return {
      store: useUsersStore(),
      showModal: false,
      selectedId: -1,
    };
  },
  methods: {
    openModal(idUser) {
      this.selectedId = idUser;
      this.showModal = true;
    },
    deleteUser() {
      this.store.deleteUser(this.selectedId);
    },
    blockUser() {
      this.store.blockUser(this.selectedId);
    },
    closeModal() {
      this.showModal = false;
      this.selectedId = -1;
    },
  },
};
</script>

<style lang="scss" scoped>
.modal.show {
  display: block;
}

.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1040;
}
</style>
