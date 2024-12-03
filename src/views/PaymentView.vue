<template>
  <PacksDisplay
    :slectedDay="selectedDay"
    :selectedPack="selectedPack"
    @pay-pack-1="payPack1"
    @pay-pack-2="payPack2"
    @pay-pack-3="payPack3"
    @pay-pack-4="payIndividualTicket"
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
import PacksDisplay from "@/components/PayPacksDisplay.vue";
import EventsDisplay from "@/components/PayEventsDisplay.vue";

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
      selectedDay: "",
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
    this.selectedDay = this.ticketsStore.selectedDay;
  },

  methods: {
    payPack1(idPack, quantity) {
      let success = false;
      if (idPack === 1) {
        success = this.eventsStore.removeSeatsByShows(
          quantity,
          this.selectedDay
        );
        this.ticketsStore.buyTicket(idPack, quantity);
      }
      if (success) {
        this.packMessage =
          "Your tickets have been purchased successfully! Thank you.";
      } else {
        this.packMessage = "Purchase failed";
      }
    },

    payPack2(idPack, quantity) {
      let success = false;
      if (idPack === 2) {
        success = this.eventsStore.removeSeatsByWorkshops(
          quantity,
          this.selectedDay
        );
        this.ticketsStore.buyTicket(idPack, quantity);
      }
      if (success) {
        this.packMessage =
          "Your tickets have been purchased successfully! Thank you.";
      } else {
        this.packMessage = "Purchase failed";
      }
    },

    payPack3(idPack, quantity) {
      let success = false;
      if (idPack === 3) {
        success = this.eventsStore.removeSeatsByDay(quantity, this.selectedDay);
        this.ticketsStore.buyTicket(idPack, quantity);
      }
      if (success) {
        this.packMessage =
          "Your tickets have been purchased successfully! Thank you.";
      } else {
        this.packMessage = "Purchase failed";
      }
    },

    payIndividualTicket(idEvent, quantity) {
      let sucess = false;
      sucess = this.eventsStore.buyIndividualEvent(idEvent, quantity);
      if (sucess) {
        this.ticketMessage =
          "Your tickets have been purchased successfully! Thank you.";
      } else {
        this.ticketMessage = "Purchase failed";
      }
      const pack = this.ticketsStore.tickets.find((t) => t.id === 4);
      if (pack) {
        pack.availableTickets -= quantity;
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
