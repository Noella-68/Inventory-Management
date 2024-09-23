import {defineStore} from "pinia";
import {api} from "boot/axios";
import {appendEditForm, appendForm} from "src/Utilities/formhelpers";

export const useUsersStore = defineStore("users", {
  state: () => ({
    users: [], //State (holds data)
    fetchingUsers: false, // Boolean state
  }),

  // Returns data in the state
  getters: {
    getUsers: (state) => state.users,
    getFetchingUsers: (state) => state.fetchingUsers,
  },

  // Actions are interactions with BE ie get , Post
  actions: {
    fetchUsers() {
      this.fetchingUsers = true;
      return new Promise((resolve, reject) => {
        //function for loading data that takes time is promise
        api
          .get("users/get")
          .then((response) => {
            this.users = response.data;
            this.fetchingUsers = false;
            resolve(response);
          })
          .catch((error) => {
            this.fetchingUsers = false;
            reject(error);
          });
      });
    },

    addUsers(form) {
      return new Promise((resolve, reject) => {
        api
          .post("users/add", appendForm(form))
          .then((response) => resolve(response))
          .catch((error) => reject(error));
      });
    },

    updateUsers(form) {
      return new Promise((resolve, reject) => {
        api
          .post(`users/set/${form.id}`, appendEditForm(form))
          .then((response) => resolve(response))
          .catch((error) => reject(error));
      });
    },
  },
});




