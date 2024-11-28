<template>
    <div class="d-flex">
      <table class="table table-hover">
        <thead>
          <tr>
            <th>id</th>
            <th>pack</th>
            <th>price</th>
            <th>total tickets</th>
            <th>available</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="t in store.tickets" :key="t.id">
            <td>{{ t.id }}</td>
            <td>{{ t.name }}</td>
            <td>{{ t.price }}</td>
            <td>{{ t.totalTickets }}</td>
            <td>{{ t.availableTickets }}</td>
          </tr>
        </tbody>
      </table>
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
