import {useUsersStore} from "stores/users";
import {ref, computed, watch} from "vue";
import {showNotification} from "src/Utilities/utils";
import {useQuasar} from "quasar";

export default function userMethods() {
  const usersStore = useUsersStore();
  const $q = useQuasar();

  const addUsersFormRef = ref(null);

  //Holds Reactive Data (ref)
  const addUsersForm = ref({
    name: "",
    username: "",
    gender: "",
    Contacts: "",
  });

  // Data variable that changes to true when submitting

  const submitting = ref(false);

  // Computed properties that hold data

  const loadingUsers = computed(() => usersStore.getFetchingUsers);
  const usersData = computed(() => usersStore.getUsers);

  // In store actions ( Fetches data from store / BE )

  const actionFetchUsersData = () => {
    usersStore
      .fetchUsers()
      .then()
      .catch((error) => {
        showNotification($q, "negative", "Error fetching Users");
      });
  };

  //Validate function

  const btnSaveUser = (actionEdit = false, emitSuccess) => {
    addUsersFormRef.value?.validate().then((success) => {
      if (success) {
        submitting.value = true;

        if (actionEdit) {
          updateUserAction(emitSuccess);
        } else {
          addUserAction(emitSuccess);

        }
      } else {
        showNotification($q, "negative", "Please fill the form");
      }
    });
  };

  // Calling Add user function from store

  const addUserAction = (emitSuccess) => {
    usersStore
      .addUsers(addUsersForm.value)
      .then(() => {
        submitting.value = false;
        showNotification($q, "positive", "Users Saved");
        actionFetchUsersData();
        emitSuccess();
      })
      .catch((err) => {
        submitting.value = false;
        showNotification($q, "negative", "Error adding Users");
      });
  };

  // Update Product function

  const updateUserAction = (emitSuccess) => {
    usersStore
      .updateUsers(addUsersForm.value)
      .then(() => {
        submitting.value = false;
        showNotification($q, "positive", "Users Updated");
        actionFetchUsersData();
        emitSuccess();
      })
      .catch((err) => {
        submitting.value = false;
        showNotification($q, "negative", "Error updating Users");
      });
  };

  //Returns these functions to be used anywhere you import within vue component
  return {
    usersData,
    loadingUsers,
    actionFetchUsersData,
    addUsersFormRef,
    addUsersForm,
    btnSaveUser,
    submitting,
  };
}
