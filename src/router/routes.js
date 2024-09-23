const routes = [
  { path: "", name: "home", component: () => import("pages/LandingPage.vue") },

  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "dashboard",
        name: "dashboard",
        component: () => import("pages/DashboardPage.vue"),
      },
      {
        path: "help",
        name: "help",
        component: () => import("pages/HelpPage.vue"),
      },
      {
        path: "products",
        name: "products",
        component: () => import("pages/ProductsPage.vue"),
      },
      {
        path: "clients",
        name: "clients",
        component: () => import("pages/ClientsPage.vue"),
      },
      {
        path: "suppliers",
        name: "suppliers",
        component: () => import("pages/SuppliersPage.vue"),
      },
      {
        path: "users",
        name: "users",
        component: () => import("pages/UsersPage.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
