import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import PrivacyView from '../views/PrivacyView.vue'
import FeatureView from '../views/FeatureView.vue'
import ReportabuseView from '../views/ReportabuseView.vue'
import RegisterLogin from '../views/RegisterLogin.vue'
import HomeAdminView from '../views/AdminView/HomeAdminView.vue'
import AdminView from '../views/AdminView/AdminView.vue'
import SettingView from '../views/AdminView/SettingView.vue'
import AboutAdminView from '../views/AdminView/AboutAdminView.vue'
import FeatureAdminView from '../views/AdminView/FeatureAdminView.vue'
import PrivacyAdminView from '../views/AdminView/PrivacyAdminView.vue'
import ReportabuseAdminView from '../views/AdminView/ReportabuseAdminView.vue'
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
    name: 'home_admin',
    meta: {
      layout: "admin"
    },
    component: AdminView,
    children: [
      {
        path: '',
        name: 'home_admin_view',
        component: HomeAdminView
      },
      {
        path: 'settings',
        name: 'setting_view',
        component: SettingView
      },
      {
        path: 'about',
        name: 'about_admin_view',
        component: AboutAdminView
      },
      {
        path: 'features',
        name: 'feature_admin_view',
        component: FeatureAdminView
      },
      {
        path: 'privacy',
        name: 'privacy_admin_view',
        component: PrivacyAdminView
      },
      {
        path: 'reportabuse',
        name: 'reportabuse_admin_view',
        component: ReportabuseAdminView
      },
    ]
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
