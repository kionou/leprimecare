import { createRouter, createWebHistory } from 'vue-router'

import store from '../store'
import Dashboard from '../views/dashboard/index.vue'
import Accueil from '../views/dashboard/default.vue'

 import Employee from '../views/employee/employee.vue'
 import EmployeeDetail from '../views/employee/detail.vue'
 import EmployeeUpdate from '../views/employee/update.vue'
 import EmployeeAdd from '../views/employee/add.vue'


import Clients from '../views/clients/default.vue'
import Recruitment from '../views/dashboard/recruitment.vue'

import SignIn from '../views/account/signIn.vue'
import Employees from '../views/employees/add.vue'

import SchoolId from '../views/school/default.vue'

import Transportation from '../views/transportation/default.vue'

import Driver from '../views/Driving/default.vue'

import Duties from '../views/duties/default.vue'


import PayrollDefault from '../views/payroll/default.vue'

import Users from '../views/users/default.vue'

import Profil from '../views/profil/default.vue'

import Page404 from '../views/Page404.vue'







import Test from '../views/test.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: SignIn
    },
    // {
    //   path: '/register',
    //   name: 'register-employee',
    //   component: Employees
    // },
    {
      path: '/test',
      name: 'test',
       component: Test
    },
    { 
      path: '/:pathMatch(.*)',
      name: 'NotFound',
      component: Page404

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
          path: 'employee-update/:id',
          name: 'employee-update',
          meta: { requiresAuth: true },
          props:true,
           component: EmployeeUpdate
        },
        {
          path: 'employee-add',
          name: 'employee-add',
          meta: { requiresAuth: true },
          
           component: EmployeeAdd
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
        {
          path: 'duties-services',
          name: 'duties-services',
          meta: { requiresAuth: true },
           component: Duties
        },
        {
          path: 'user-managment',
          name: 'user-managment',
          meta: { requiresAuth: true },
           component: Users
        },

        {
          path: 'payroll',
          name: 'payroll',
          meta: { requiresAuth: true },
           component: PayrollDefault
        },

        {
          path: 'profil',
          name: 'profil',
          meta: { requiresAuth: true },
           component: Profil
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
   
    next("/");
  } else if (to.name === "login" && isAuthenticated) {
    
   
      next("/dashboard");
    
  } else {
    next();
  }
});

export default router
