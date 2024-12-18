<template>
  <button
    class="btn btn-outline-dark"
    type="button"
    data-bs-toggle="offcanvas"
    data-bs-target="#offcanvasRight"
    aria-controls="offcanvasRight"
  >
    <i class="bi bi-bell-fill"></i>
  </button>

  <div
    class="offcanvas offcanvas-end"
    tabindex="-1"
    id="offcanvasRight"
    aria-labelledby="offcanvasRightLabel"
  >
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="offcanvasRightLabel">Inbox</h5>
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <div class="offcanvas-body">
      <ol class="list-group list-group-numbered">
        <li
          class="list-group-item d-flex justify-content-between align-items-start"
          v-for="(n, index) in notifications"
          :key="index"
        >
          <div class="ms-2 me-auto">
            <div class="fw-bold">Notification</div>
            {{ n }}
          </div>
          <span class="badge text-bg-dark rounded-pill">{{
            index + 1
          }}</span>
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
import { useUsersStore } from "@/stores/users.js";
export default {
  data() {
    return {
      store: useUsersStore(),
      notifications: [],
    };
  },
  methods: {
    loadNotifications() {
      const currentUser = this.store.currentUser;

      if (currentUser) {
        this.notifications = currentUser.notifications || [];
      } else {
        console.warn("No user is currently logged in.");
      }
    },
  },
  mounted() {
    this.loadNotifications();
  },
};
</script>

<style lang="scss" scoped></style>
