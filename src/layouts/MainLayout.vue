<template>
  <q-layout view="hHh Lpr fFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> Inventory Management </q-toolbar-title>
        <dIv>
          <q-icon name="notifications" class="q-ma-sm" size="md" />
          <q-icon name="person" class="q-ma-sm" size="md" />
          Noella
        </dIv>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> </q-item-label>

        <EssentialLink
          v-for="link in linksList"
          :key="link.title"
          v-bind="link"
        />

        <q-item clickable tag="a">
          <q-item-section avatar>
            <q-icon name="logout" />
          </q-item-section>

          <q-item-section>
            <q-item-label>logout </q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";

defineOptions({
  name: "MainLayout",
});

const linksList = [
  {
    title: "Dashboard",
    // caption: 'quasar.dev',
    icon: "dashboard",
    link: "dashboard",
  },
  {
    title: "Products",
    // caption: 'github.com/quasarframework',
    icon: "inventory",
    link: "products",
  },
  {
    title: "Suppliers",
    // caption: 'chat.quasar.dev',
    icon: "group",
    link: "suppliers",
  },
  {
    title: "Clients",
    // caption: '@quasarframework',
    icon: "analytics",
    link: "clients",
  },
  {
    title: "Users",
    // caption: 'forum.quasar.dev',
    icon: "person",
    link: "users",
  },

  {
    title: "Help",
    // caption: '@QuasarFramework',
    icon: "help",
    link: "help",
  },
  // {
  //   title: 'Log out',
  //   // caption: 'Community Quasar projects',
  //   icon: 'logout'
  // }
];

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>
