import Home from "../views/Home.vue"
import Photo from "../views/Photo.vue"
import Favorites from "../views/Favorites.vue"

import { createRouter, createWebHistory } from "vue-router"

const routes = [
  { path: "/", component: Home },
  { path: "/favs", component: Favorites },
  { path: "/:id", component: Photo }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router