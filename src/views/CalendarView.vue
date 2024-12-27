<template> 
  <div class="container my-4">
    <div class="row">
      <div v-for="event in store.events" :key="event.id" class="col-md-4 mb-4">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{{ event.name }}</h5>
            <p class="card-text">Type: {{ event.type }}</p>
            <p class="card-text">Seats Available: {{ event.availableSeats }}</p>
          </div>
          <div class="text-end me-2 mb-2">
            <router-link
              :to="{ name: 'payment', params: { idEvent: event.id } }"
            >
              <i class="bi bi-plus-square-fill"></i>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useEventsStore } from "@/stores/events";

export default {
  data() {
    return {
      store: useEventsStore(),
    };
  },
};
</script>

<style scoped></style>
