import { defineStore } from "pinia";

export const useTicketsStore = defineStore("tickets", {
  state: () => ({
    tickets: [
      {
        id: 1, 
        image:"/src/assets/packs/pack1.png",
        name: "Pack 1 - Shows",
        image: "",
        price: 55,
        profit:0,
        totalTickets: 70,
        availableTickets: 70,
      },
      {
        id: 2,
        name: "Pack 2 - Workshops",
        image: "",
        price: 55,
        profit:0,
        totalTickets: 70,
        availableTickets: 70,
      },
      {
        id: 3,
        name: "Pack 3 - Full Day",
        image: "",
        price: 48,
        profit:0,
        totalTickets: 70,
        availableTickets: 70,
      },
      {
        id: 4,
        name: "Pack 4 - Individual",
        image: "",
        price: 15,
        profit:0,
        totalTickets: 100,
        availableTickets: 100,
      },
    ],
    selectedDay: "",
  }),

  actions: {
    buyTicket(ticketId, quantity) {
      const ticket = this.tickets.find((t) => t.id === ticketId);
      if (ticket && ticket.availableTickets > 0) {
        ticket.availableTickets -= quantity;
      }
    },

    editPack() {
      const selectedPack = this.store.tickets.find(
        (t) => t.id === this.selectedId
      );

      if (selectedPack) {
        if (this.name && this.name !== selectedPack.name) {
          selectedPack.name = this.name;
        }
        if (this.price && this.price !== selectedPack.price) {
          selectedPack.price = this.price;
        }
        if (this.number && this.number !== selectedPack.totalTickets) {
          selectedPack.totalTickets = this.number;
        }
      }
    },

    setSelectedDay(day) {
      this.selectedDay = day;
    },
   
  },
  persist: {
    storage: localStorage,
    pick: ["tickets"],
  },
});
