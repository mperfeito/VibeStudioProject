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
        registerDate: new Date().toISOString(),
        tickets: [],
        notifications: [],
      },
      {
        id: 1,
        name: "Mariana",
        email: "mperfeito.08@gmail.com",
        password: "mariana123",
        blocked: false,
        registerDate: new Date().toISOString(),
        tickets: [],
        notifications: [],
      },
      {
        id: 2,
        name: "Isabel",
        email: "isabelmagalhães.08@gmail.com",
        password: "isabel123",
        blocked: false,
        registerDate: new Date().toISOString(),
        tickets: [],
        notifications: [],
      },
    ],
    currentUser: null,
  }),

  actions: {
    addUser(name, email, password) {
      const newUser = {
        id: this.idUser(),
        name: name,
        email: email,
        password: password,
        blocked: false,
        registerDate: new Date().toISOString(),
        tickets: [],
        notifications: [],
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
      if (id !== 0) {
        this.users = this.users.filter((u) => u.id !== id);
      }
    },
    blockUser(id) {
      const user = this.users.find((u) => u.id == id);
      if (user) {
        user.blocked = true;
      }
    },
    unBlockUser(id) {
      const user = this.users.find((u) => u.id == id);
      if (user) {
        user.blocked = false;
      }
    },
    login(email, password) {
      const user = this.users.find(
        (u) => u.email === email && u.password === password
      );
      if (user) {
        this.currentUser = user;
        return true;
      }
      return false;
    },
    loginWithGoogle(googleUser) {
      const user = {
        id: googleUser.getId(),
        name: googleUser.getBasicProfile().getName(),
        email: googleUser.getBasicProfile().getEmail(),
        blocked: false,
        registerDate: new Date().toISOString(),
      };
      this.currentUser = user;
    },
    logout() {
      this.currentUser = null;
      localStorage.clear();
    },
    sendNotification(userEmails, message) {
      let success = false;
      userEmails.forEach((email) => {
        const user = this.users.find((u) => u.email === email);
        if (user) {
          if (!user.notifications) {
            user.notifications = [];
          }
          user.notifications.push(message);
          success = true;
        }
      });
      return success;
    },
    
  
  },

  persist: {
    storage: localStorage,
    pick: ["users"],
  },
});
