import {useSuppliersStore} from "stores/suppliers";
import {ref, computed, watch} from "vue";
import {showNotification} from "src/Utilities/utils";
import {useQuasar} from "quasar";

export default function suppliersMethods() {
  const suppliersStore = useSuppliersStore();
  const $q = useQuasar();

  const addSuppliersFormRef = ref(null);

  //Holds Reactive Data (ref)
  const addSuppliersForm = ref({
    name: "",
    address: "",
    contact: "",
  });

  // Data variable that changes to true when submitting

  const submitting = ref(false);

  // Computed properties that hold data

  const loadingSuppliers = computed(() => suppliersStore.getFetchingSuppliers);
  const suppliersData = computed(() => suppliersStore.getSuppliers);

  // In store actions ( Fetches data from store / BE )

  const actionFetchSuppliersData = () => {
    suppliersStore
      .fetchSuppliers()
      .then()
      .catch((error) => {
        showNotification($q, "negative", "Error fetching Suppliers");
      });
  };

  //Validate function

  const btnSaveSupplier = (actionEdit = false, emitSuccess) => {
    addSuppliersFormRef.value?.validate().then((success) => {
      if (success) {
        submitting.value = true;

        if (actionEdit) {
          updateSupplierAction(emitSuccess);
        } else {
          addSupplierAction(emitSuccess);

        }
      } else {
        showNotification($q, "negative", "Please fill the form");
      }
    });
  };

  // Calling Add supplier function from store

  const addSupplierAction = (emitSuccess) => {
    suppliersStore
      .addSuppliers(addSuppliersForm.value)
      .then(() => {
        submitting.value = false;
        showNotification($q, "positive", "Supplier Saved");
        actionFetchSuppliersData();
        emitSuccess();
      })
      .catch((err) => {
        submitting.value = false;
        showNotification($q, "negative", "Error adding Suppliers");
      });
  };

  // Update Product function

  const updateSupplierAction = (emitSuccess) => {
    suppliersStore
      .updateSuppliers(addSuppliersForm.value)
      .then(() => {
        submitting.value = false;
        showNotification($q, "positive", "Supplier Updated");
        actionFetchSuppliersData();
        emitSuccess();
      })
      .catch((err) => {
        submitting.value = false;
        showNotification($q, "negative", "Error updating Suppliers");
      });
  };

  //Returns these functions to be used anywhere you import within vue component
  return {
    suppliersData,
    loadingSuppliers,
    actionFetchSuppliersData,
    addSuppliersFormRef,
    addSuppliersForm,
    btnSaveSupplier,
    submitting,
  };
}
