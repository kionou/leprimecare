import { createRouter, createWebHistory } from 'vue-router'

import store from '../store'
import Dashboard from '../views/dashboard/index.vue'
import Accueil from '../views/dashboard/default.vue'

 import Employee from '../views/employee/employee.vue'
 import EmployeeDetail from '../views/employee/detail.vue'


import Clients from '../views/clients/default.vue'
import Recruitment from '../views/dashboard/recruitment.vue'

import SignIn from '../views/account/signIn.vue'
import Employees from '../views/employees/add.vue'

import SchoolId from '../views/school/default.vue'

import Transportation from '../views/transportation/default.vue'

import Driver from '../views/Driving/default.vue'




import Test from '../views/test.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: SignIn
    },
    {
      path: '/register',
      name: 'register-employee',
      component: Employees
    },
    {
      path: '/test',
      name: 'test',
       component: Test
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
        {
          path: 'employee',
          name: 'employee',
          meta: { requiresAuth: true },
           component: Employee
        },
        {
          path: 'employee-details/:id',
          name: 'employee-details',
          meta: { requiresAuth: true },
          props:true,
           component: EmployeeDetail
        },
        {
          path: 'clients',
          name: 'clients',
          meta: { requiresAuth: true },
           component: Clients
        },
        {
          path: 'recruitment',
          name: 'recruitment',
           component: Recruitment
        },
         {
          path: 'school-level',
          name: 'school-level',
          meta: { requiresAuth: true },
           component: SchoolId
        },
        {
          path: 'means-transportations',
          name: 'means-transportations',
          meta: { requiresAuth: true },
           component: Transportation
        },
        {
          path: 'driving-issue-state',
          name: 'driving-issue-state',
          meta: { requiresAuth: true },
           component: Driver
        },

        
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
    next("/");
  } else if (to.name === "login" && isAuthenticated) {
    // Si l'utilisateur est connecté et essaie d'accéder aux pages d'inscription ou de connexion,
    // redirigez-le vers la page mon_espace
   
      next("/dashboard");
    
  } else {
    next();
  }
});

export default router
