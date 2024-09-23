<template>
  <div class="q-pa-md">
    <q-table
      flat
      bordered
      title="Products"
      :rows="productsData"
      :columns="columns"
      row-key="name"
      :loading="loadingProducts"
    >
      <template v-slot:top-right>
        <q-btn
          @click="showAddProductsDialogue = true"
          color="primary"
          label="Add Product"
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
                @click="btnShowEditProductsDialog(props.row)"
              />
              <q-btn
                class="q-pa-xs"
                size="sm"
                outline
                color="red-10"
                icon="delete"
                title="Delete"
                @click="btnDeleteProducts(props.row)"
              />
            </q-td>
          </template>
        </q-tr>
      </template>
    </q-table>

    <q-dialog v-model="showAddProductsDialogue">
      <AddProductsDialogue @success="showAddProductsDialogue =false"> </AddProductsDialogue>
    </q-dialog>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import AddProductsDialogue from "components/Products/AddProductsDialogue.vue";
import productsMethods from "components/Products/productsMethods";

const showAddProductsDialogue = ref(false);

const columns = [
  {
    name: "Product ID",
    align: "left",
    label: "Product ID",
    field: "prodID",
    sortable: false,
  },
  { name: "Product", label: "Product", align: "left", field: "name", sortable: true },
  { name: "Arrival Date", label: "Arrival Date",  align: "left", field: "arrivalDate" },
  { name: "Category", label: "Category", align: "left", field: "category" },
  { name: "Original Price", label: "Original Price", align: "left", field: "originalPrice" },
  { name: "Quantity", label: "Quantity", align: "left", field: "qty" },
  { name: "Left quantity", label: "Left quantity",  align: "left", field: "leftQty" },
  { name: "Expiry Date", label: "Expiry Date", align: "left", field: "expiryDate" },
  {
    name: "Supplier",
    label: "Supplier",
    align: "left",
    field: "supplier",
    sortable: true,
    sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
  },
];

const skipColumns = (columnName) => {
  const Columns = ["actions"];
  return Columns.includes(columnName);
};

const { productsData, loadingProducts, actionFetchProductsData } =
  productsMethods();

onMounted(() => {
  if (!productsData.value.length) {
    actionFetchProductsData();
  }
});
</script>
