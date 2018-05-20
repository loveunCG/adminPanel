<template>
  <modal name="restPassword"
         height="auto"
         :resizable="true"
         @before-open="beforeOpen"
         @before-close="beforeClose">
    <b-row>
     <b-col sm="12">
        <b-card>
          <div slot="header">
            {{title}}
          </div>
          <b-form
          @submit="onSubmit"
          validated
          >
            <b-form-group>
              <b-input-group>
                <b-input-group-prepend>
                  <b-input-group-text><i class="fa fa-asterisk"></i></b-input-group-text>
                </b-input-group-prepend>
                <b-form-input type="password" v-model="User.password" placeholder="Password"></b-form-input>
              </b-input-group>
            </b-form-group>
            <b-form-group>
              <b-input-group>
                <b-input-group-prepend>
                  <b-input-group-text><i class="fa fa-asterisk"></i></b-input-group-text>
                </b-input-group-prepend>
                <b-form-input type="password" v-model="User.rpassword" placeholder="Confirm Password"></b-form-input>
              </b-input-group>
            </b-form-group>
            <div class="form-group form-actions">
              <b-button type="submit" class="pull-left" @click="onSubmit" variant="success">{{button}}</b-button>
              <b-button type="button" class="pull-right" @click="$modal.hide('restPassword')" variant="info">Close</b-button>
            </div>
          </b-form>
        </b-card>
      </b-col>
    </b-row>
  </modal>
</template>
<script>
import {resetPassword} from '../../api/'

export default {
  name: 'Reset-Password',
  data () {
    return {
      User: {
        password: '',
        id: '',
        rpassword: ''
      },
      button: 'Reset',
      isEdit: false,
      title: 'Reset Password'
    }
  },
  methods: {
    beforeOpen (event) {
      let userId = this.$store.getters.currentId
      this.User.id = userId
    },
    beforeClose (event) {
      this.$store.commit('clearCurrentId')
      this.$store.dispatch('getUserAll')
    },
    onSubmit (evt) {
      evt.preventDefault()
      if (this.User.password !== this.User.rpassword) {
        this.$msg('The passwords do not match.')
        return
      } else if (this.User.password === '') {
        this.$msg('Please Input new password.')
        return
      }
      resetPassword(this.User).then(data => {
        this.$msg(data.data.message)
        if (data.data.response_code) {
          this.$modal.hide('restPassword')
        }
      })
    }
  },
  mounted () {
  }
}
</script>
