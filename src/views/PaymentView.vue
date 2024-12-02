<template>
    <div class="container my-4">
      <div v-if="selectedEvent" class="card">
        <div class="card-body">
          <h2 class="card-title text-center mb-4">{{ selectedEvent.name }}</h2>
          <p class="card-text text-center mb-3">
            <strong>Price:</strong> {{ selectedEvent.price }}
          </p>
          <p class="card-text text-center mb-3">
            <strong>Total Tickets:</strong> {{ selectedEvent.totalTickets }}
          </p>
          <p class="card-text text-center mb-3">
            <strong>Available Tickets:</strong> {{ selectedEvent.availableTickets }}
          </p>
  
          <div class="text-center">
            <button @click="payTicket(selectedEvent.id)" class="btn btn-dark">
              Pay
            </button>
          </div>
        </div>
      </div>
  
      <div v-else class="text-center my-5">
        <p>Event not found or loading...</p>
      </div>
    </div>
  </template>
  
  <script>
  import { useTicketsStore } from "@/stores/tickets";
  
  export default {
    data() {
      return {
        eventId: null,
        store: useTicketsStore(),
        selectedEvent: null,
      };
    },
    mounted() {
      this.eventId = this.$route.params.idEvent;
      this.selectedEvent = this.store.tickets.find(
        (ticket) => ticket.id === Number(this.eventId)
      );
    },
    methods: {
      payTicket(id) {
        const success = this.store.buyTicket(id);
        if (success) {
          alert("Ticket purchased successfully!");
        } else {
          alert("No tickets available.");
        }
      },
    },
  };
  </script>
  
  <style lang="scss" scoped></style>
  