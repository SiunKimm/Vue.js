import { createWebHistory, createRouter } from "vue-router";
import PostList from "./views/Main.vue";
import PostDetail from "./views/PostDetail.vue";

const routes = [
  {
    path: "/",
    name: "Post List",
    component: Main,
  },
  {
    path: "/:title",
    name: "PostDetail",
    component: PostDetail,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;