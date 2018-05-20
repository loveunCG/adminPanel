<template>
  <b-nav-item-dropdown right no-caret>
    <template slot="button-content">
      <img src="static/img/avatars/1.jpg" class="img-avatar" alt="admin@bootstrapmaster.com">
    </template>
    <b-dropdown-item v-on:click = "openProfile"><i class="fa fa-user"></i> Profile</b-dropdown-item>
    <b-dropdown-item v-on:click = "restPassword"><i class="fa fa-key"></i> Reset Password</b-dropdown-item>
    <b-dropdown-item v-on:click = "logout"><i class="fa fa-sign-out"></i> Logout</b-dropdown-item>
  </b-nav-item-dropdown>
</template>
<script>
  export default {
    name: 'header-dropdown',
    data: () => {
      return { itemsCount: 42 }
    },
    methods: {
      logout () {
        this.$modal.show('dialog', {
          title: 'Alert!',
          text: 'Are you sure log out?',
          buttons: [
            {
              title: 'Ok',
              handler: () => {
                this.$store.commit('clearUser')
                this.$router.push('/login')
              }
            },
            {
              title: 'Cancel',
              default: true,
              handler: () => {
                this.$modal.hide('dialog')
              }
            }
          ]
        })
      },
      openProfile () {
        this.$modal.show('ProfileModal')
      },
      restPassword () {
        this.$modal.show('changePassword')
      }
    }
  }
</script>

