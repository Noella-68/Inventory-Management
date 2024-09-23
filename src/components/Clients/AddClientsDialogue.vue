<template>
  <q-card style="min-width: 350px" class="q-pa-md">
    <q-form class="q-gutter-md" ref="addClientsFormRef">
      <q-input
        filled
        v-model="addClientsForm.name"
        label="Name*"
        hint="Enter Your Name"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Please type something']"
      />

      <q-input
        filled
        v-model="addClientsForm.contact"
        label="Contacts*"
        hint="Enter Your Contacts*"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Please type something']"
      />

      <q-input
        filled
        v-model="addClientsForm.address"
        label="Address*"
        hint="Enter Your Address*"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Please type something']"
      />

    </q-form>

    <q-card-actions align="right" class="text-primary q-mt-lg">
      <q-btn flat label="Cancel" v-close-popup />
      <q-btn
        flat
        label="Add Client"
        :loading="submitting"
        :disabled="submitting"
        color="primary"
        @click="btnSaveClient(isEditing, emitSuccess)"
      />
    </q-card-actions>
  </q-card>
</template>

<script setup>
// Importing the return values from Product methods file

import clientsMethods from "components/Clients/clientsMethods";

const emits = defineEmits(['success'])
const emitSuccess = () => emits('success')   // event emitting from child to parent
const isEditing = false

const { submitting, btnSaveClient, addClientsFormRef, addClientsForm } =
  clientsMethods();
</script>
