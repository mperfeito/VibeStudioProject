<template>
  <div class="container my-5">
    <div class="row">
      <div class="col-md-3 mb-4" v-for="t in store.tickets" :key="t.id">
        <div class="card h-100">
          <!-- <img
            :src="t.image || 'https://via.placeholder.com/150'"
            class="card-img-top"
            alt="store Image"
          /> -->
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">{{ t.name }}</h5>
            <p class="card-text"><strong>Price:</strong> {{ t.price }} €</p>
            <p class="card-text">
              <strong>Available:</strong> {{ t.availableTickets }}
            </p>
            <div class="d-flex">
              <div class="dropdown me-2">
                <button
                  class="btn btn-secondary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Select day
                </button>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Friday</a></li>
                  <li><a class="dropdown-item" href="#">Saturday</a></li>
                  <li>
                    <a class="dropdown-item" href="#">Sunday</a>
                  </li>
                </ul>
              </div>
              <router-link
                :to="{ name: 'payment', params: { idPack: t.id } }"
              >
                <button class="btn btn-dark">Pay</button>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useTicketsStore } from "@/stores/tickets.js";
export default {
  data() {
    return {
    
      store: useTicketsStore(),
    
    };
  },

};
</script>

<style lang="scss" scoped></style>
