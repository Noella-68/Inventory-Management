<template>
  <div class="q-pa-md">
    <q-table
      flat
      bordered
      title="Clients"
      :rows="clientsData"
      :columns="columns"
      row-key="name"
      :loading="loadingClients"
    >
      <template v-slot:top-right>
        <q-btn
          @click="showAddClientsDialogue = true"
          color="primary"
          label="Add Client"
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
                @click="btnShowEditClientsDialog(props.row)"
              />
              <q-btn
                class="q-pa-xs"
                size="sm"
                outline
                color="red-10"
                icon="delete"
                title="Delete"
                @click="btnDeleteClients(props.row)"
              />
            </q-td>
          </template>
        </q-tr>
      </template>
    </q-table>

    <q-dialog v-model="showAddClientsDialogue">
      <AddClientsDialogue @success="showAddClientsDialogue =false"> </AddClientsDialogue>
    </q-dialog>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import AddClientsDialogue from "components/Clients/AddClientsDialogue.vue";
import clientsMethods from "components/Clients/clientsMethods";

const showAddClientsDialogue = ref(false);

const columns = [
  {
    name: "Name",
    align: "left",
    label: "Name",
    field: "name",
    sortable: false,
  },
  { name: "Contacts", label: "Contacts", align: "left", field: "contact" },
  {
    name: "Address",
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

const { clientsData, loadingClients, actionFetchClientsData } =
  clientsMethods();

onMounted(() => {
  if (!clientsData.value.length) {
    actionFetchClientsData();
  }
});
</script>
