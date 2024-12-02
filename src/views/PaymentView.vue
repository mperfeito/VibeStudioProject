<template>
  <div class="container my-4">
    <div v-if="selectedEvent" class="card">
      <div class="card-body">
        <h2 class="card-title text-center mb-4">{{ selectedEvent.name }}</h2>

        <p class="card-text text-center mb-3">
          <strong>Hours:</strong>
          {{ selectedEvent.hours }}
        </p>
        <p class="card-text text-center mb-3">
          <strong>Total Price:</strong>
          {{ totalPrice() }} €
        </p>
        <p class="card-text text-center mb-3">
          <strong>Quantity:</strong>
          <i @click="addMoreTickets" class="bi bi-plus-square-fill"></i>
          {{ ticketsNumber }}
          <i @click="removeTickets" class="bi bi-dash-square-fill"></i>
        </p>
        <div class="text-center">
          <button
            @click="payEventTicket(selectedEvent.id)"
            class="btn btn-dark"
          >
            Pay
          </button>
       
        </div>
      </div>
    </div>
    <span>{{ paymentMessage }}</span>

 
  </div>
</template>

<script>
import { useEventsStore } from "@/stores/events";

export default {
  data() {
    return {
      eventId: null,
      store: useEventsStore(),
      selectedEvent: null,
      ticketsNumber: 0,
      paymentMessage: "",
    };
  },
  mounted() {
    this.eventId = this.$route.params.idEvent;
    this.selectedEvent = this.store.events.find(
      (ticket) => ticket.id === Number(this.eventId)
    );
  },
  methods: {
    payEventTicket(id) {
      const sucess = this.store.buyIndividualEvent(id, this.ticketsNumber);
      if (sucess) {
        this.paymentMessage =
          "Your tickets have been purchased successfully! Thank you.";
      } else {
        this.paymentMessage = "Purchase failed";
      }
    },
    addMoreTickets() {
      this.ticketsNumber++;
    },
    removeTickets() {
      if (this.ticketsNumber > 0) {
        this.ticketsNumber--;
      }
    },
    totalPrice() {
      return this.ticketsNumber * this.selectedEvent.price;
    },
  },
};
</script>

<style lang="scss" scoped></style>
