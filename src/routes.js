import Authenticator from './components/LoginCognito.vue'
import Home from './components/ListPeople.vue'

export const routes = [
  {
    path: '',
    component: Home,
    name: 'home',
    meta: { requiresAuth: true }
  },
  {
    path: '/login',
    component: Authenticator,
    name: 'login'
  },
  {
    path: '*',
    redirect: {name: 'home'}
  }
]
