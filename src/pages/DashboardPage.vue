<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-card">
      <q-card-section class="bg-primary text-white">
        <div class="text-h6">Total Products</div>
        <div class="text-subtitle2">30</div>
      </q-card-section>

      <q-separator />

      <q-card-actions align="around">
        <q-btn flat  href="products">View</q-btn>
      </q-card-actions>
    </q-card>

    <q-card class="my-card">
      <q-card-section class="bg-purple text-white">
        <div class="text-h6">Total Suppliers</div>
        <div class="text-subtitle2">20</div>
      </q-card-section>

      <q-card-actions align="around">
        <q-btn flat href="suppliers">View</q-btn>
      </q-card-actions>
    </q-card>

    <q-card class="my-card">
      <q-card-section class="bg-teal text-white">
        <div class="text-h6">Total Clients</div>
        <div class="text-subtitle2">50</div>
      </q-card-section>

      <q-card-actions align="around">
        <q-btn flat href="Clients">View</q-btn>
      </q-card-actions>
    </q-card>

    <q-card class="my-card">
      <q-card-section class="bg-grey-8 text-white">
        <div class="text-h6">Total Users</div>
        <div class="text-subtitle2">15</div>
      </q-card-section>

      <q-card-actions align="around">
        <q-btn flat href="users">View</q-btn>
      </q-card-actions>
    </q-card>
  </div>
</template>

<script>
export default {
  setup () {
    return {
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
  }
}
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 250px
</style>
