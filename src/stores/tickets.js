import { defineStore } from "pinia";

export const useTicketStore = defineStore("tickets", {
  state: () => ({
    tickets: [
      {
        id: 1,
        name: "Pack 1 - Shows",
        image: "",
        price: 55,
        totalTickets: 70,
        availableTickets: 70,
      },
      {
        id: 2,
        name: "Pack 2 - Workshops",
        image: "",
        price: 55,
        totalTickets: 70,
        availableTickets: 70,
      },
      {
        id: 3,
        name: "Pack 3 - Full Day",
        image: "",
        price: 48,
        totalTickets: 70,
        availableTickets: 70,
      },
      {
        id: 4,
        name: "Pack 4 - Individual",
        image: "",
        price: 15,
        totalTickets: 100,
        availableTickets: 100,
      },
    ],
  }),

  actions: {
    buyTicket(ticketId) {
      const ticket = this.tickets.find((t) => t.id === ticketId);
      if (ticket && availableTickets > 0) {
        ticket.availableTickets--;
        return true;
      }
      return false;
    },
  },
});
