<template>
  <div>
    <table class="table table-hover">
      <thead>
        <tr>
          <th>id</th>
          <th>event</th>
          <th>type</th>
          <th>total seats</th>
          <th>available</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="e in store.events" :key="e.id">
          <td>{{ e.id }}</td>
          <td>{{ e.name }}</td>
          <td>{{ e.type }}</td>
          <td>{{ e.totalSeats }}</td>
          <td>{{ e.availableSeats }}</td>
        </tr>
      
      </tbody>
    </table>
  </div>
</template>

<script>
import { useEventsStore } from "@/stores/events.js";
export default {
  data() {
    return {
      store: useEventsStore(),
    };
  },
};
</script>

<style lang="scss" scoped></style>
