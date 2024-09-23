import { defineStore } from "pinia";
import { api } from "boot/axios";
import { appendEditForm, appendForm } from "src/Utilities/formhelpers";

export const useSuppliersStore = defineStore("suppliers", {
  state: () => ({
    suppliers: [], //State (holds data)
    fetchingSuppliers: false, // Boolean state
  }),

  // Returns data in the state
  getters: {
    getSuppliers: (state) => state.suppliers,
    getFetchingSuppliers: (state) => state.fetchingSuppliers,
  },

  // Actions are interactions with BE ie get , Post
  actions: {
    fetchSuppliers() {
      this.fetchingSuppliers = true;
      return new Promise((resolve, reject) => {
        //function for loading data that takes time is promise
        api
          .get("suppliers/get")
          .then((response) => {
            this.suppliers = response.data;
            this.fetchingSuppliers = false;
            resolve(response);
          })
          .catch((error) => {
            this.fetchingSuppliers = false;
            reject(error);
          });
      });
    },

    addSuppliers(form) {
      return new Promise((resolve, reject) => {
        api
          .post("suppliers/add", appendForm(form))
          .then((response) => resolve(response))
          .catch((error) => reject(error));
      });
    },

    updateSuppliers(form) {
      return new Promise((resolve, reject) => {
        api
          .post(`suppliers/set/${form.id}`, appendEditForm(form))
          .then((response) => resolve(response))
          .catch((error) => reject(error));
      });
    },
  },
});

//entire store calls the endpoint
