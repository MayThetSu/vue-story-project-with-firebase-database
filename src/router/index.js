import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Detail from '../views/Detail.vue'
import Create from '../views/Create.vue'
import Tag from '../views/Tag.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path:'/stories/:id',
    name:'Detail',
    component:Detail,
    props:true
  },
  {
    path:'/create',
    name:'Create',
    component:Create
  },
  {
    path:'/tags/:type',
    name:'Type',
    component:Tag,
    props:true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
