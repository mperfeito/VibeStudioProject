<template>
  <div class="container my-4">
    <div v-if="selectedPack" class="card">
      <div class="card-body">
        <h2 class="card-title text-center mb-4">{{ selectedPack.name }}</h2>
        <div class="text-center">
          <p class="card-text text-center mb-3">
            <strong>Total Price:</strong>
            {{ totalPrice() }} €
          </p>
          <p class="card-text text-center mb-3">
            <strong>Quantity:</strong>
            <i @click="addPacks" class="bi bi-plus-square-fill"></i>
            {{ packsNumber }}
            <i @click="removePacks" class="bi bi-dash-square-fill"></i>
          </p>
          <button @click="payPack(selectedPack.id)" class="btn btn-dark">
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
      packsNumber: 0,
    };
  },
  props: {
    selectedPack: Object,
    message: String,
  },
  methods: {
    payPack(idPack) {
      if (this.packsNumber > 0) {
        this.$emit("pay-pack", idPack, this.packsNumber);
      }
    },
    addPacks() {
      this.packsNumber++;
    },
    removePacks() {
      if (this.packsNumber > 0) {
        this.packsNumber--;
      }
    },
    totalPrice() {
      return this.packsNumber * this.selectedPack.price;
    },
  },
};
</script>

<style lang="scss" scoped></style>
