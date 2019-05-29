import Vue from 'vue'
import VueRouter from 'vue-router'
import { routes } from './routes'
import { Auth } from 'aws-amplify'

Vue.use(VueRouter)

export const router = new VueRouter({mode: 'history', routes})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    (async () => {
      await Auth.currentSession()
        .then(() => {
          next()
        })
        .catch(() => {
          next({
            name: "login"
          })
        })

    })()
  } else {
    next() // make sure to always call next()!
  }
})
