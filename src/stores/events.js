import { defineStore } from "pinia";

export const useEventsStore = defineStore("events", {
  state: () => ({
    shows: [
      {
        id: 1,
        name: "Rhythm of the Streets",
        type: "Breakdance show",
        totalSeats: 78,
        availableSeats: 78,
      },
      {
        id: 2,
        name: "Urban Flow",
        type: "Hip-Hop show",
        totalSeats: 78,
        availableSeats: 78,
      },
      {
        id: 3,
        name: "Caribbean Heat",
        type: "Salsa show",
        totalSeats: 78,
        availableSeats: 78,
      },
      {
        id: 4,
        name: "Beats of the Heart",
        type: "Bachata show",
        totalSeats: 78,
        availableSeats: 78,
      },
      {
        id: 5,
        name: "Dream on Pointe",
        type: "Ballet show",
        totalSeats: 78,
        availableSeats: 78,
      },
      {
        id: 6,
        name: "Infinite Movements",
        type: "Contemporary show",
        totalSeats: 78,
        availableSeats: 78,
      },
    ],

    workshops: [
      {
        id: 1,
        name: "Freestyle",
        type: "Urban dance workshop",
        totalSeats: 23,
        availableSeats: 23,
      },
      {
        id: 2,
        name: "Popping & Locking",
        type: "Urban dance workshop",
        totalSeats: 23,
        availableSeats: 23,
      },
      {
        id: 3,
        name: "Rumba",
        type: "Latin dance workshop",
        totalSeats: 23,
        availableSeats: 23,
      },
      {
        id: 4,
        name: "Bachata",
        type: "Latin dance workshop",
        totalSeats: 23,
        availableSeats: 23,
      },
      {
        id: 5,
        name: "Classic technique",
        type: "Classic dance workshop",
        totalSeats: 23,
        availableSeats: 23,
      },
      {
        id: 6,
        name: "Improvisation contemporary",
        type: "Classic dance workshop",
        totalSeats: 23,
        availableSeats: 23,
      },
    ],
  }),

  persist: {
    storage: localStorage,
    pick: ["shows", "workshops"],
  },
});
