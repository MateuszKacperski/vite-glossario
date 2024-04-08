//web routes
import { createRouter, createWebHistory } from "vue-router";
//importo le pagine che mi servono
import HomePage from "../components/pages/HomePage.vue";
import NotFoundPage from "../components/pages/NotFoundPage.vue";
import WordDetailPage from "../components/pages/WordDetailPage.vue";

//definisco le rotte
const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: "active",
  linkExactActiveClass: "active",
routes: [
    { path: "/", component: HomePage, name: "home" },
    {
      path: "/words/:id",
      component: WordDetailPage,
      name: "word-detail",
    },
    { path: "/not-found", component: NotFoundPage, name: "not-found" },
    { path: "/:pathMatch(.*)*", redirect: "not-found" },
  ],
});
//lo esporto
export {router}