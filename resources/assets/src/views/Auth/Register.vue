<template>
  <div class="app flex-row align-items-center">
    <div class="container">
      <b-form
        @submit="onSubmit"
      >
        <b-row class="justify-content-center">
          <b-col md="6" sm="8">
            <b-card no-body class="mx-4">
              <b-card-body class="p-4">
                <h1>Register</h1>
                <p class="text-muted">Create your account</p>
                <b-input-group class="mb-3">
                  <b-input-group-prepend>
                    <b-input-group-text><i class="icon-user"></i></b-input-group-text>
                  </b-input-group-prepend>
                  <input type="text" v-model="User.name" required class="form-control" placeholder="Username">
                </b-input-group>

                <b-input-group class="mb-3">
                  <b-input-group-prepend>
                    <b-input-group-text>@</b-input-group-text>
                  </b-input-group-prepend>
                  <input type="email"  v-model="User.email" required class="form-control" placeholder="Email">
                </b-input-group>

                <b-input-group class="mb-3">
                  <b-input-group-prepend>
                    <b-input-group-text><i class="icon-lock"></i></b-input-group-text>
                  </b-input-group-prepend>
                  <input type="password"  v-model="User.password" required class="form-control" placeholder="Password">
                </b-input-group>

                <b-input-group class="mb-4">
                  <b-input-group-prepend>
                    <b-input-group-text><i class="icon-lock"></i></b-input-group-text>
                  </b-input-group-prepend>
                  <input type="password"  v-model="User.password_confirmation" required class="form-control" placeholder="Repeat password">
                </b-input-group>

                <b-button type="submit" variant="success" block>Create Account</b-button>
              </b-card-body>
              <!-- <b-card-footer class="p-4">
                <b-row>
                  <b-col cols="6">
                    <b-button block class="btn btn-facebook"><span>facebook</span></b-button>
                  </b-col>
                  <b-col cols="6">
                    <b-button block class="btn btn-twitter" type="button"><span>twitter</span></b-button>
                  </b-col>
                </b-row>
              </b-card-footer> -->
            </b-card>
          </b-col>
        </b-row>
      </b-form>
    </div>
  </div>
</template>

<script>
import {registerUser} from '../../api/'

export default {
  name: 'Register',
  data () {
    return {
      User: {
        name: '',
        password: '',
        email: '',
        password_confirmation: ''
      }
    }
  },
  methods: {
    onSubmit () {
      if (this.User.password === '') {
        this.$msg('Please input correctly password')
        return
      } else if (this.User.password !== this.User.password_confirmation) {
        this.$msg('Please input correctly password')
        return
      }
      registerUser(this.User).then(res => {
        if (res.data.response_code) {
          this.$store.dispatch('login', this.User)
        }
        this.$msg(res.data.message)
      })
    }
  }
}
</script>
