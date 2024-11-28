<template>
  <div id="app" class="d-flex">
    <div
      class="d-flex flex-column align-items-center justify-content-center bg-light "
      style="width: 80px; height: 100vh"
    >
      <div class="my-3">
        <i
          class="bi bi-person fs-3"
          data-bs-toggle="tooltip"
          data-bs-title="User Icon"
           data-bs-offset="0,8"
        ></i>
      </div>
      <div class="my-3">
        <i
          class="bi bi-bookmark-star fs-3"
          data-bs-toggle="tooltip"
          data-bs-title="Bookmark Icon"
           data-bs-offset="0,8"
        ></i>
      </div>
      <div class="my-3">
        <i
          class="bi bi-journal fs-3"
          data-bs-toggle="tooltip"
          data-bs-title="Journal Icon"
          data-bs-offset="0,8"
        ></i>
      </div>
      <div class="my-3">
        <i
          class="bi bi-chat-dots fs-3"
          data-bs-toggle="tooltip"
          data-bs-title="Chat Icon"
           data-bs-offset="0,8"
        ></i>
      </div>
    </div>

    <div class="flex-grow-1 d-flex justify-content-center align-items-center">
      <UsersTable></UsersTable>
    </div>
  </div>
</template>


<script>
import UsersTable from "@/components/UsersTable.vue";
export default {
  components: {
    UsersTable,
  },
  mounted() {
   
    const tooltipTriggerList = document.querySelectorAll(
      '[data-bs-toggle="tooltip"]'
    );
    tooltipTriggerList.forEach(
      (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
    );
  },
};
</script>

<style lang="scss" scoped></style>
