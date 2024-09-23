import { defineStore } from "pinia";
import { api } from "boot/axios";
import { appendEditForm, appendForm } from "src/Utilities/formhelpers";

export const useClientsStore = defineStore("clients", {
  state: () => ({
    clients: [], //State (holds data)
    fetchingClients: false, // Boolean state
  }),

  // Returns data in the state
  getters: {
    getClients: (state) => state.clients,
    getFetchingClients: (state) => state.fetchingClients,
  },

  // Actions are interactions with BE ie get , Post
  actions: {
    fetchClients() {
      this.fetchingClients = true;
      return new Promise((resolve, reject) => {
        //function for loading data that takes time is promise
        api
          .get("clients/get")
          .then((response) => {
            this.clients = response.data;
            this.fetchingClients = false;
            resolve(response);
          })
          .catch((error) => {
            this.fetchingClients = false;
            reject(error);
          });
      });
    },

    addClients(form) {
      return new Promise((resolve, reject) => {
        api
          .post("clients/add", appendForm(form))
          .then((response) => resolve(response))
          .catch((error) => reject(error));
      });
    },

    updateClients(form) {
      return new Promise((resolve, reject) => {
        api
          .post(`clients/set/${form.id}`, appendEditForm(form))
          .then((response) => resolve(response))
          .catch((error) => reject(error));
      });
    },
  },
});

//entire store calls the endpoint
