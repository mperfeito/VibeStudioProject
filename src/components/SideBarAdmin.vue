<template>
  <div class="container-fluid d-flex">
    <div
      class="d-flex flex-column align-items-center justify-content-center bg-light p-3"
      style="width: 80px; height: 100vh"
    >
      <div class="text-start my-4">
        <i
          class="bi bi-person fs-3"
          data-bs-toggle="tooltip"
          data-bs-title="Users"
          data-bs-offset="0,8"
          @click="setContent('users')"
        ></i>
      </div>
      <div class="my-4">
        <i
          class="bi bi-bookmark-star fs-3"
          data-bs-toggle="tooltip"
          data-bs-title="Events"
          data-bs-offset="0,8"
          @click="setContent('events')"
        ></i>
      </div>
      <div class="my-4">
        <i
          class="bi bi-ticket-perforated fs-3"
          data-bs-toggle="tooltip"
          data-bs-title="Tickets"
          data-bs-offset="0,8"
          @click="setContent('tickets')"
        ></i>
      </div>
      <div class="my-4">
        <i
          class="bi bi-chat-dots fs-3"
          data-bs-toggle="tooltip"
          data-bs-title="Message"
          data-bs-offset="0,8"
          @click="setContent('notifications')"
        ></i>
      </div>
    </div>

    <div class="flex-grow-1 d-flex justify-content-center align-items-center">
      <component :is="currentComponent" />
    </div>
  </div>
</template>

<script>
import UsersTable from "@/components/UsersTable.vue";
import EventsTable from "@/components/EventsTable.vue";
import TicketsTable from "@/components/TicketsTable.vue";
import NotfForm from "@/components/NotfForm.vue";

export default {
  components: {
    UsersTable,
    EventsTable,
    TicketsTable,
    NotfForm,
  },
  data() {
    return {
      currentComponent: "UsersTable",
    };
  },
  mounted() {
    const tooltipTriggerList = document.querySelectorAll(
      '[data-bs-toggle="tooltip"]'
    );
    tooltipTriggerList.forEach(
      (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
    );
  },
  methods: {
    setContent(contentType) {
      switch (contentType) {
        case "users":
          this.currentComponent = "UsersTable";
          break;
        case "events":
          this.currentComponent = "EventsTable";
          break;
        case "tickets":
          this.currentComponent = "TicketsTable";
          break;
        case "notifications":
          this.currentComponent = "NotfForm";
          break;
        default:
          this.currentComponent = null;
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
