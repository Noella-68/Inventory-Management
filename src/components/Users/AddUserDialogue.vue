<template>
  <q-card style="min-width: 350px" class="q-pa-md">
    <q-form class="q-gutter-md" ref="addUsersFormRef">
      <q-input
        filled
        v-model="addUsersForm.name"
        label="Your name *"
        hint="Enter your name"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Please type something']"
      />

      <q-input
        filled
        v-model="addUsersForm.username"
        label="Your Username*"
        hint="Enter your Username*"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Please type something']"
      />

      <q-input
        filled
        v-model="addUsersForm.gender"
        label="Your Gender*"
        hint="Enter your Gender*"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Please type something']"
      />

      <q-input
        filled
        v-model="addUsersForm.Contacts"
        label="Your Contact*"
        hint="Enter your Contacts*"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Please type something']"
      />
    </q-form>

    <q-card-actions align="right" class="text-primary q-mt-lg">
      <q-btn flat label="Cancel" v-close-popup />
      <q-btn
        flat
        label="Add Users"
        :loading="submitting"
        :disabled="submitting"
        color="primary"
        @click="btnSaveUser(isEditing, emitSuccess)"
      />
    </q-card-actions>
  </q-card>
</template>

<script setup>

import userMethods from "components/Users/userMethods";

const emits = defineEmits(['success'])
const emitSuccess = () => emits('success')   // event emitting from child to parent
const isEditing = false

const { submitting, btnSaveUser, addUsersFormRef, addUsersForm } =
  userMethods();

</script>
