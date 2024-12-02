<template>
  
  <div class="container my-4">
    <h2 class="text-center mb-4">Shows</h2>
    <div class="row">
      <div v-for="show in shows" :key="show.id" class="col-md-4 mb-4">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{{ show.name }}</h5>
            <p class="card-text">Type: {{ show.type }}</p>
            <p class="card-text">Seats Available: {{ show.availableSeats }}</p>
          </div>
          <div class="text-end me-2 mb-2">
            <router-link
              :to="{ name: 'payment', params: { idEvent: show.id } }"
            >
              <i class="bi bi-plus-square-fill"></i>
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <h2 class="text-center mb-4 mt-5">Workshops</h2>
    <div class="row">
      <div
        v-for="workshop in workshops"
        :key="workshop.id"
        class="col-md-4 mb-4"
      >
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{{ workshop.name }}</h5>
            <p class="card-text">Type: {{ workshop.type }}</p>
            <p class="card-text">
              Seats Available: {{ workshop.availableSeats }}
            </p>
          </div>
          <div class="text-end me-2 mb-2">
            <router-link
              :to="{ name: 'payment', params: { idEvent: workshop.id } }"
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
      shows: [],
      workshops: [],
    };
  },
  created() {
    this.filterEvents();
  },
  methods: {
    filterEvents() {
      this.shows = this.store.events.filter((event) =>
        event.type.includes("show")
      );
      this.workshops = this.store.events.filter((event) =>
        event.type.includes("workshop")
      );
    },
  },
};
</script>

<style scoped></style>
