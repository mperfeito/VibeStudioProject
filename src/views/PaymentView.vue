<template>
  <PacksDisplay
    :selectedPack="selectedPack"
    @pay-pack="payPack"
    :message="packMessage"
  ></PacksDisplay>
  <EventsDisplay
    :selectedEvent="selectedEvent"
    @pay-event="payIndividualTicket"
    :message="ticketMessage"
  ></EventsDisplay>
</template>

<script>
import { useEventsStore } from "@/stores/events";
import { useTicketsStore } from "@/stores/tickets";
import PacksDisplay from "@/components/PacksDisplay.vue";
import EventsDisplay from "@/components/EventsDisplay.vue";

export default {
  components: {
    PacksDisplay,
    EventsDisplay,
  },
  data() {
    return {
      eventId: null,
      packId: null,
      eventsStore: useEventsStore(),
      ticketsStore: useTicketsStore(),
      selectedEvent: null,
      selectedPack: null,
      ticketMessage: "",
      packMessage: "",
    };
  },
  mounted() {
    this.eventId = this.$route.params.idEvent;
    this.selectedEvent = this.eventsStore.events.find(
      (e) => e.id === Number(this.eventId)
    );
    this.packId = this.$route.params.idPack;
    this.selectedPack = this.ticketsStore.tickets.find(
      (t) => t.id === Number(this.packId)
    );
  },
  methods: {
    payPack(idPack, quantity) {
      const sucess = this.ticketsStore.buyTicket(idPack, quantity);
      if (sucess) {
        this.packMessage =
          "Your tickets have been purchased successfully! Thank you.";
      } else {
        this.packMessage = "Purchase failed";
      }
    },

    payIndividualTicket(idEvent, quantity) {
      const sucess = this.eventsStore.buyIndividualEvent(idEvent, quantity);
      if (sucess) {
        this.ticketMessage =
          "Your tickets have been purchased successfully! Thank you.";
      } else {
        this.ticketMessage = "Purchase failed";
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
