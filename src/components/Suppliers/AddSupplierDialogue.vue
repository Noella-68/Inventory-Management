<template>
  <q-card style="min-width: 350px" class="q-pa-md">
    <q-form class="q-gutter-md" ref="addSuppliersFormRef">
      <q-input
        filled
        v-model="addSuppliersForm.name"
        label="Your name *"
        hint="Enter your name"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Please type something']"
      />

      <q-input
        filled
        v-model="addSuppliersForm.contact"
        label="Your Contacts*"
        hint="Enter your Contacts*"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Please type something']"
      />

      <q-input
        filled
        v-model="addSuppliersForm.address"
        label="Your Address*"
        hint="Enter your Address*"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Please type something']"
      />

    </q-form>

    <q-card-actions align="right" class="text-primary q-mt-lg">
      <q-btn flat label="Cancel" v-close-popup />
      <q-btn
        flat
        label="Add Supplier"
        :loading="submitting"
        :disabled="submitting"
        color="primary"
        @click="btnSaveSupplier(isEditing, emitSuccess)"
      />
    </q-card-actions>
  </q-card>
</template>

<script setup>
// Importing the return values from Product methods file

import suppliersMethods from "components/Suppliers/suppliersMethods";

const emits = defineEmits(['success'])
const emitSuccess = () => emits('success')   // event emitting from child to parent
const isEditing = false

const { submitting, btnSaveSupplier, addSuppliersFormRef, addSuppliersForm } =
  suppliersMethods();
</script>
