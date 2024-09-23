import {useClientsStore} from "stores/clients";
import {ref, computed, watch} from "vue";
import {showNotification} from "src/Utilities/utils";
import {useQuasar} from "quasar";

export default function clientsMethods() {
  const clientsStore = useClientsStore();
  const $q = useQuasar();

  const addClientsFormRef = ref(null);

  //Holds Reactive Data (ref)
  const addClientsForm = ref({
    name: "",
    contact: "",
    address: "",
  });

  // Data variable that changes to true when submitting

  const submitting = ref(false);

  // Computed properties that hold data

  const loadingClients = computed(() => clientsStore.getFetchingClients);
  const clientsData = computed(() => clientsStore.getClients);

  // In store actions ( Fetches data from store / BE )

  const actionFetchClientsData = () => {
    clientsStore
      .fetchClients()
      .then()
      .catch((error) => {
        showNotification($q, "negative", "Error fetching Clients");
      });
  };

  //Validate function

  const btnSaveClient = (actionEdit = false, emitSuccess) => {
    addClientsFormRef.value?.validate().then((success) => {
      if (success) {
        submitting.value = true;

        if (actionEdit) {
          updateClientAction(emitSuccess);
        } else {
          addClientAction(emitSuccess);

        }
      } else {
        showNotification($q, "negative", "Please fill the form");
      }
    });
  };

  // Calling Add product function from store

  const addClientAction = (emitSuccess) => {
    clientsStore
      .addClients(addClientsForm.value)
      .then(() => {
        submitting.value = false;
        showNotification($q, "positive", "Client Saved");
        actionFetchClientsData();
        emitSuccess();
      })
      .catch((err) => {
        submitting.value = false;
        showNotification($q, "negative", "Error adding Clients");
      });
  };

  // Update Product function

  const updateClientAction = (emitSuccess) => {
    clientsStore
      .updateClients(addClientsForm.value)
      .then(() => {
        submitting.value = false;
        showNotification($q, "positive", "Client Updated");
        actionFetchClientsData();
        emitSuccess();
      })
      .catch((err) => {
        submitting.value = false;
        showNotification($q, "negative", "Error updating Clients");
      });
  };

  //Returns these functions to be used anywhere you import within vue component
  return {
   clientsData,
    loadingClients,
    actionFetchClientsData,
    addClientsFormRef,
    addClientsForm,
    btnSaveClient,
    submitting,
  };
}
