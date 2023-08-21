import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import PrivacyView from '../views/PrivacyView.vue'
import FeatureView from '../views/FeatureView.vue'
import ReportabuseView from '../views/ReportabuseView.vue'
import RegisterLogin from '../views/RegisterLogin.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/privacy',
    name: 'privacy',
    component: PrivacyView
  },
  {
    path: '/features',
    name: 'features',
    component: FeatureView
  },
  {
    path: '/reportabuse',
    name: 'reportabuse',
    component: ReportabuseView
  },
  {
    path: '/create_account',
    name: 'create_account',
    component: RegisterLogin
  },
  {
    path: '/home',
    name: 'homeAdmin',
    meta: {
      layout: "admin"
    },
    component: RegisterLogin
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
