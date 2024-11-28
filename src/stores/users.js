import { defineStore } from "pinia";

export const useUsersStore = defineStore("users", {
  state: () => ({
    users: [
      {
        id: 0,
        name: "Administrador",
        email: "admin@gmail.com",
        password: "admin123",
        blocked: false,
      },
      {
        id: 1,
        name: "Mariana",
        email: "mperfeito.08@gmail.com",
        password: "mariana123",
        blocked: false,
      },
      {
        id: 2,
        name: "Isabel",
        email: "isabelmagalhães.08@gmail.com",
        password: "isabel123",
        blocked: false,
      },
    ],
  }),

  actions: {
    addUser(name, email, password) {
      const newUser = {
        id: this.idUser(),
        name: name,
        email: email,
        password: password,
        blocked: false,
      };
      this.users.push(newUser);
    },
    idUser() {
      if (this.users.length === 0) {
        return 1;
      }
      return this.users[this.users.length - 1].id + 1;
    },
    deleteUser(id) {
      this.users = this.users.filter((u) => u.id !== id);
    },
    blockUser(id) {
      const user = this.users.find((u) => u.id == id);
      if (user) {
        user.blocked = true;
      }
    },
  },

  persist: {
    storage: localStorage,
    pick: ["users"],
  },
});
