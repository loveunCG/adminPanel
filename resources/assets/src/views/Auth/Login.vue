<template>
  <div class="app flex-row align-items-center">
    <div class="container">
      <b-row class="justify-content-center">
        <b-col md="8">
          <b-card-group>
            <b-card no-body class="p-4">
              <b-card-body>
                <h1>Login</h1>
                <p class="text-muted">Sign In to your account</p>
                <b-alert
                variant="warning"
                dismissible
                     :max="10"
                     :value="0"
                     :show="this.$store.getters.loading"
                     @dismissed="showDismissibleAlert = false">

                  {{this.$store.getters.error?this.$store.getters.error:''}}
                </b-alert>
                <b-input-group class="mb-3">
                  <b-input-group-prepend><b-input-group-text><i class="icon-user"></i></b-input-group-text></b-input-group-prepend>
                  <input type="text"
                  v-model="loginForm.email"
                  class="form-control"
                  placeholder="Username">
                </b-input-group>
                <b-input-group class="mb-4">
                  <b-input-group-prepend><b-input-group-text><i class="icon-lock"></i></b-input-group-text></b-input-group-prepend>
                  <input type="password"
                  v-model="loginForm.password"
                  class="form-control"
                  placeholder="Password">
                </b-input-group>
                <b-row>
                  <b-col cols="6">
                    <b-button
                    v-on:click="onSubmit"
                    variant="primary"
                    class="px-4">Login</b-button>
                  </b-col>
                  <b-col cols="6" class="text-right">
                    <b-button variant="link" class="px-0">Forgot password?</b-button>
                  </b-col>
                </b-row>
              </b-card-body>
            </b-card>
            <b-card no-body class="text-white bg-primary py-5 d-md-down-none" style="width:44%">
              <b-card-body class="text-center">
                <div>
                  <h2>Sign up</h2>
                  <br>
                  <br>
                  <br>
                  <br>
                  <br>
                  <b-button variant="primary" @click="gotoSignUp" class="active mt-3">Register Now!</b-button>
                </div>
              </b-card-body>
            </b-card>
          </b-card-group>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      showDismissibleAlert: this.$store.getters.loading,
      loginForm: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    onSubmit () {
      this.$store.dispatch('login', this.loginForm)
    },
    gotoSignUp () {
      this.$router.push('/register')
    }
  }
}
</script>
