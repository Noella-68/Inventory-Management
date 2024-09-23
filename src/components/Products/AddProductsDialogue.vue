<template>
  <q-card style="min-width: 350px" class="q-pa-md">
    <q-form class="q-gutter-md" ref="addProductsFormRef">
      <q-input
        filled
        v-model="addProductsForm.arrivalDate"
        label="Arrival Date *"
        hint="Enter Arrival Date"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Please type something']"
      />

      <q-input
        filled
        v-model="addProductsForm.prodID"
        label="prodID*"
        hint="Enter prodID*"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Please type something']"
      />

      <q-input
        filled
        v-model="addProductsForm.name"
        label="Product name*"
        hint="Product name*"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Please type something']"
      />

      <q-input
        filled
        v-model="addProductsForm.category"
        label="Category*"
        hint="Enter category*"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Please type something']"
      />

      <q-input
        filled
        v-model="addProductsForm.originalPrice"
        label="Original Price*"
        hint="Enter originalPrice*"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Please type something']"
      />

      <q-input
        filled
        v-model="addProductsForm.qty"
        label="Quantity*"
        hint="Enter quantity*"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Please type something']"
      />

      <q-input
        filled
        v-model="addProductsForm.leftQty"
        label="leftQty*"
        hint="Enter Quantity left*"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Please type something']"
      />

      <q-input
        filled
        v-model="addProductsForm.expiryDate"
        label="Expiry Date*"
        hint="Enter Expiry Date*"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Please type something']"
      />

      <q-input
        filled
        v-model="addProductsForm.supplier"
        label="Supplier*"
        hint="Enter your Supplier*"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Please type something']"
      />
    </q-form>

    <q-card-actions align="right" class="text-primary q-mt-lg">
      <q-btn flat label="Cancel" v-close-popup />
      <q-btn
        flat
        label="Add Product"
        :loading="submitting"
        :disabled="submitting"
        color="primary"
        @click="btnSaveProduct(isEditing, emitSuccess)"
      />
    </q-card-actions>
  </q-card>
</template>

<script setup>
// Importing the return values from Product methods file

import productsMethods from "components/Products/productsMethods";

const emits = defineEmits(['success'])
const emitSuccess = () => emits('success')   // event emitting from child to parent
const isEditing = false

const { submitting, btnSaveProduct, addProductsFormRef, addProductsForm } =
  productsMethods();
</script>
