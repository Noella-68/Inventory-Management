<template>
  <div class="q-pa-md">
    <q-table
      flat
      bordered
      title="Suppliers"
      :rows="suppliersData"
      :columns="columns"
      row-key="name"
      :loading="loadingSuppliers"
    >
      <template v-slot:top-right>
        <q-btn
          @click="showAddSupplierDialogue = true"
          color="primary"
          label="Add Supplier"
        />
      </template>

      <template v-slot:body="props">
        <q-tr :props="props">
          <template v-for="col in props.cols">
            <q-td
              class="text-left"
              v-if="!skipColumns(col.name)"
              :key="col.name"
            >
              {{ props.row[col.field] }}
            </q-td>

            <q-td v-if="col.name === 'actions'" :key="col.name" width="40px">
              <q-btn
                class="q-pa-xs q-mr-sm"
                size="sm"
                outline
                color="accent"
                icon="edit"
                title="Edit"
                @click="btnShowEditSuppliersDialog(props.row)"
              />
              <q-btn
                class="q-pa-xs"
                size="sm"
                outline
                color="red-10"
                icon="delete"
                title="Delete"
                @click="btnDeleteSuppliers(props.row)"
              />
            </q-td>
          </template>
        </q-tr>
      </template>
    </q-table>

    <q-dialog v-model="showAddSupplierDialogue">
      <AddSupplierDialogue @success="showAddSupplierDialogue =false"> </AddSupplierDialogue>
    </q-dialog>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import AddSupplierDialogue from "components/Suppliers/AddSupplierDialogue.vue";
import suppliersMethods from "components/Suppliers/suppliersMethods";


const showAddSupplierDialogue = ref(false);

const columns = [
  {
    name: "name",
    align: "left",
    label: "Name",
    field: "name",
    sortable: false,
  },
  { name: "contact", label: "Contacts", align: "left", field: "contact" },
  {
    name: "address",
    label: "Address",
    align: "left",
    field: "address",
    sortable: true,
    sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
  },
];

const skipColumns = (columnName) => {
  const Columns = ["actions"];
  return Columns.includes(columnName);
};

const { suppliersData, loadingSuppliers, actionFetchSuppliersData } =
  suppliersMethods();

onMounted(() => {
  if (!suppliersData.value.length) {
    actionFetchSuppliersData();
  }
});
</script>
