import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Favorites from "@/components/Favorites.vue";
import Peoples from "@/components/Peoples.vue";
import HeroCard from "@/components/HeroCard.vue";

const routes: Array<any> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/favorites",
    name: "favorites",
    component: Favorites,
  },
  {
    path: "/peoples",
    name: "peoples",
    component: Peoples,
  },
  {
    path: "/peoples/:id",
    name: "people",
    component: HeroCard,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
