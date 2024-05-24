import { createRouter, createWebHistory } from 'vue-router'

import store from '../store'
import Dashboard from '../views/dashboard/index.vue'
import Accueil from '../views/dashboard/default.vue'

import SignIn from '../views/account/signIn.vue'
import Employees from '../views/employees/add.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: SignIn
    },
    {
      path: '/',
      name: 'register-employee',
      component: Employees
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
      meta: { requiresAuth: true },
      children:[
        {
          path: '',
          name: 'dashboard-home',
          meta: { requiresAuth: true },
           component: Accueil
        },
        // {
        //   path: 'user',
        //   name: 'admin-user',
        //    component: User
        // },
      ]
    }
    
  ]
})


router.beforeEach((to, from, next) => {
  const requiresAuth = to.meta.requiresAuth;
  const isAuthenticated = store.getters["auth/isAuthenticated"];
  const authenticatedUser = store.getters["auth/myAuthenticatedUser"];
  console.log("isAuthenticated", isAuthenticated);
  console.log(authenticatedUser);
  if (requiresAuth && !isAuthenticated) {
    // Si la route nécessite une authentification et l'utilisateur n'est pas connecté,
    // redirigez-le vers la page de connexion
    next("/login");
  } else if (to.name === "login" && isAuthenticated) {
    // Si l'utilisateur est connecté et essaie d'accéder aux pages d'inscription ou de connexion,
    // redirigez-le vers la page mon_espace
   
      next("/dashboard");
    
  } else {
    next();
  }
});

export default router
