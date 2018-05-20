import Vue from 'vue'
import Router from 'vue-router'
// Containers
import Full from '@/containers/Full'
// Views
import Dashboard from '@/views/Dashboard'
import Login from '@/views/Auth/Login'
import Register from '@/views/Auth/Register'
import UserTable from '@/views/User/index'
import RoleTable from '@/views/Role/Role'
import PermissionTable from '@/views/Role/Permission'
import AuthGuard from './auth-guard'
import Error from '../views/error/Page500'
Vue.use(Router)
export default new Router({
  mode: 'hash',
  linkActiveClass: 'open active',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      redirect: '/dashboard',
      beforeEnter: AuthGuard,
      name: 'Home',
      component: Full,
      children: [
        {
          path: 'dashboard',
          name: 'Dashboard',
          component: Dashboard
        },
        {
          path: 'user',
          name: 'User',
          component: UserTable
        },
        {
          path: 'role',
          name: 'Role',
          component: RoleTable
        },
        {
          path: 'permission',
          name: 'Permission',
          component: PermissionTable
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/error',
      name: 'Error',
      component: Error
    }
  ]
})
