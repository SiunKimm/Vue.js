import { createWebHistory, createRouter } from "vue-router";
import ErrorPage from "@/components/ErrorPage"
import Home from "@/components/Home"
import About from "@/components/About"
import Names from "@/components/Names"
import User from "@/components/User"
import User2 from "@/components/User2"


const routes = [
    { path : "/", name : "Home", component : Home },
    { path : "/about", name : "About", component : About },
    { path : "/names", name : "Names", component : Names },
    { path : "/user/:name", name : "User", component : User },
    { path : "/user2/:name", name : "User2", component : User2, props: true },
    { path : "/:catchAll(.*)", name : "ErrorPage", component : ErrorPage},
]

const router = createRouter({
    history : createWebHistory(),
    routes : routes
});

export default router;