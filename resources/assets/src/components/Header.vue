<template>
  <header class="app-header navbar">
    <button class="navbar-toggler mobile-sidebar-toggler d-lg-none" type="button" @click="mobileSidebarToggle">
      <span class="navbar-toggler-icon"></span>
    </button>
    <b-link class="navbar-brand" to="#"></b-link>
    <button class="navbar-toggler sidebar-toggler d-md-down-none mr-auto" type="button" @click="sidebarToggle">
      <span class="navbar-toggler-icon"></span>
    </button>
    <b-navbar-nav class="d-md-down-none">
    </b-navbar-nav>
     <b-navbar-nav class="ml-auto">
      <HeaderDropdown/>
    </b-navbar-nav>
    <v-dialog
    draggable="true"
    />
    <UserProfile/>
    <ChangePassword/>
  </header>
</template>
<script>
import HeaderDropdown from './HeaderDropdown.vue'
import ChangePassword from '../components/User/Change-Password'
import UserProfile from '../components/User/User-Profile'
export default {
  name: 'c-header',
  components: {
    HeaderDropdown,
    UserProfile,
    ChangePassword
  },
  data () {
    return {
      duration: 5000
    }
  },
  methods: {
    sidebarToggle (e) {
      e.preventDefault()
      document.body.classList.toggle('sidebar-hidden')
    },
    sidebarMinimize (e) {
      e.preventDefault()
      document.body.classList.toggle('sidebar-minimized')
    },
    mobileSidebarToggle (e) {
      e.preventDefault()
      document.body.classList.toggle('sidebar-mobile-show')
    },
    asideToggle (e) {
      e.preventDefault()
      document.body.classList.toggle('aside-menu-hidden')
    }
  }
}
</script>
