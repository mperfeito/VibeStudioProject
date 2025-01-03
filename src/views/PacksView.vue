<template> 
<h1 class="label">Buy Your Ticket Now, choose one of our packs !</h1>
  <div class="container my-5">
    <div class="row">
      <div class="col-md-3 mb-4" v-for="t in store.tickets" :key="t.id">
        <div class="card h-100">
          <!-- <img
            :src="t.image || 'https://via.placeholder.com/150'"
            class="card-img-top"
            alt="store Image"
          /> -->  
          <img :src="t.image" alt="Ticket Image" class="ticket-image" />
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">{{ t.name }}</h5>
            <p class="card-text"><strong>Price:</strong> {{ t.price }} €</p>
            <p class="card-text">
              <strong>Available:</strong> {{ t.availableTickets }}
            </p>
            <div class="d-flex">
              <div class="dropdown me-2">
                <button
                  v-if="t.id !== 4"
                  class="btn btn-secondary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Select day
                </button>
                <ul class="dropdown-menu">
                  <li>
                    <a
                      @click="store.setSelectedDay('Friday')"
                      class="dropdown-item"
                      href="#"
                      >Friday</a
                    >
                  </li>
                  <li>
                    <a
                      @click="store.setSelectedDay('Saturday')"
                      class="dropdown-item"
                      href="#"
                      >Saturday</a
                    >
                  </li>
                  <li>
                    <a
                      @click="store.setSelectedDay('Sunday')"
                      class="dropdown-item"
                      href="#"
                      >Sunday</a
                    >
                  </li>
                </ul>
              </div>
              <router-link
                v-if="t.id !== 4"
                :to="{ name: 'payment', params: { idPack: t.id } }"
              >
                <button class="btn btn-dark">Pay</button>
              </router-link>
              <router-link v-else :to="{ name: 'calendar' }">
                <button class="btn btn-secondary">See calendar</button>
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
      selectedDay: "",
      store: useTicketsStore(),
    };
  },
};
</script>

<style lang="css" scoped>  
.label{ 
  font-family: "Ysabeau Infant";
  font-weight: bolder;
  color: #000000;
  font-size: 50px;
  margin-top: 2%; 
  margin: 5%;
}
</style>
