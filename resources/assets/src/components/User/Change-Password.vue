<template>
  <modal name="changePassword"
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
                  <b-input-group-text><i class="fa fa-key"></i></b-input-group-text>
                </b-input-group-prepend>
                <b-form-input type="password" v-model="User.old_password" placeholder="Old Password"></b-form-input>
              </b-input-group>
            </b-form-group>
            <b-form-group>
              <b-input-group>
                <b-input-group-prepend>
                  <b-input-group-text><i class="fa fa-key"></i></b-input-group-text>
                </b-input-group-prepend>
                <b-form-input type="password" v-model="User.password" placeholder="Password"></b-form-input>
              </b-input-group>
            </b-form-group>
            <b-form-group>
              <b-input-group>
                <b-input-group-prepend>
                  <b-input-group-text><i class="fa fa-key"></i></b-input-group-text>
                </b-input-group-prepend>
                <b-form-input type="password" v-model="User.rpassword" placeholder="Confirm Password"></b-form-input>
              </b-input-group>
            </b-form-group>
            <div class="form-group form-actions">
              <b-button type="submit" class="pull-left" @click="onSubmit" variant="success">{{button}}</b-button>
              <b-button type="button" class="pull-right" @click="$modal.hide('changePassword')" variant="info">Close</b-button>
            </div>
          </b-form>
        </b-card>
      </b-col>
    </b-row>
  </modal>
</template>
<script>
import {changePass} from '../../api/'

export default {
  name: 'Change-Password',
  data () {
    return {
      User: {
        password: '',
        old_password: '',
        id: '',
        rpassword: ''
      },
      button: 'Reset',
      isEdit: false,
      title: 'Change Password'
    }
  },
  methods: {
    beforeOpen (event) {
    },
    beforeClose (event) {
      this.initUser()
    },
    onSubmit (evt) {
      evt.preventDefault()
      if (this.User.password !== this.User.rpassword) {
        this.$msg('The passwords do not match.')
        return
      } else if (this.User.password === '' || this.old_password === '') {
        this.$msg('Please Input new password!')
        return
      }
      changePass(this.User).then(data => {
        console.log(data.data)
        this.$msg(data.data.message)
        if (data.data.response_code) {
          this.$modal.hide('changePassword')
        }
      })
    },
    initUser () {
      for (const key in this.User) {
        this.User[key] = ''
      }
    }
  },
  mounted () {
  }
}
</script>
