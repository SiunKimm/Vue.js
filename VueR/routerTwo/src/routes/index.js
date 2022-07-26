// routes/index.js

const Main = () => import(/* webpackChunkName: "group-default" */ '@/pages/Main.vue')
const Product = () => import(/* webpackChunkName: "group-default" */ '@/pages/Product.vue')
const Support = () => import(/* webpackChunkName: "group-default" */ '@/pages/Support.vue')
const Contact = () => import(/* webpackChunkName: "group-default" */ '@/pages/Contact.vue')

const routes = [
  { path: '/', component: Main },
  { path: '/product', component: Product },
  { path: '/support', component: Support },
  { path: '/contact', component: Contact },
]

export default routes