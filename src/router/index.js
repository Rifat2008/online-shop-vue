import { createRouter, createWebHistory } from 'vue-router';
import Catalog from '../components/catalog/Catalog'
import Cart from '../components/cart/Cart' 


const routes = [
  {
    path: '/',
    name: 'catalog',
    component: Catalog
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
