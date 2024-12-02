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
    <span>{{ message }}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ticketsNumber: 0,
    };
  },
  props: {
    selectedEvent: Object,
    message: String,
  },
  methods: {
    payEventTicket(idEvent) {
      if (this.ticketsNumber > 0) {
        this.$emit("pay-event", idEvent, this.ticketsNumber);
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
