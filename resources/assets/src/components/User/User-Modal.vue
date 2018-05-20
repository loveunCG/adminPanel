<template>
  <modal name="UserModal"
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
                  <b-input-group-text><i class="fa fa-user"></i></b-input-group-text>
                </b-input-group-prepend>
                <b-form-input
                type="text"
                required
                v-model="User.name"
                placeholder="Username"
                ></b-form-input>
              </b-input-group>
            </b-form-group>
            <b-form-group>
              <b-input-group>
                <b-input-group-prepend>
                  <b-input-group-text><i class="fa fa-envelope"></i></b-input-group-text>
                </b-input-group-prepend>
                <b-form-input type="email"
                required
                v-model="User.email"
                placeholder="Email"
                >
                </b-form-input>
              </b-input-group>
            </b-form-group>
            <b-form-group v-if="isEdit">
              <b-input-group>
                <b-input-group-prepend>
                  <b-input-group-text><i class="fa fa-asterisk"></i></b-input-group-text>
                </b-input-group-prepend>
                <b-form-input type="password" v-model="User.password" placeholder="Password"></b-form-input>
              </b-input-group>
            </b-form-group>
            <b-form-group v-if="isEdit">
              <b-input-group>
                <b-input-group-prepend>
                  <b-input-group-text><i class="fa fa-asterisk"></i></b-input-group-text>
                </b-input-group-prepend>
                <b-form-input type="password" v-model="User.rpassword" placeholder="Confirm Password"></b-form-input>
              </b-input-group>
            </b-form-group>
            <b-form-group
              label="Role"
              label-for="basicSelect"
              :label-cols="1"
              :horizontal="true">
              <b-form-select id="basicSelect"
                :plain="true"
                v-model="User.role"
                :options="role"
                value="Please select">
              </b-form-select>
            </b-form-group>
            <div class="form-group form-actions">
              <b-button type="submit" class="pull-left" @click="onSubmit" variant="success">{{button}}</b-button>
              <b-button type="button" class="pull-right" @click="$modal.hide('UserModal')" variant="info">Close</b-button>
            </div>
          </b-form>
        </b-card>
      </b-col>
    </b-row>
  </modal>
</template>
<script>
import {UserInfoDetail, GetRole, SubmitUser} from '../../api/'

export default {
  props: ['user_id'],
  name: 'User-Modal',
  data () {
    return {
      User: {
        name: '',
        email: '',
        password: '',
        rpassword: '',
        role: ''
      },
      role: [],
      button: '',
      isEdit: false,
      title: ''
    }
  },
  methods: {
    beforeOpen (event) {
      let userId = this.$store.getters.currentId
      if (userId && !isNaN(userId)) {
        this.title = 'User Edit'
        this.button = 'Save'
        console.log('this is ', userId)
        UserInfoDetail({user_id: userId}).then(res => {
          if (Array.isArray(res.data.data)) {
            this.isEdit = true
          } else {
            this.User = res.data.data
            this.User.role = res.data.data.role.id
          }
        }).catch(err => {
          console.log(err)
        })
      } else {
        this.title = 'User Add'
        this.isEdit = true
        this.button = 'Add'
      }
    },
    beforeClose (event) {
      this.$store.commit('clearCurrentId')
      this.$store.dispatch('getUserAll')
      this.initUser()
      this.isEdit = false
    },
    getRole () {
      GetRole().then(response => {
        if (response.data.response_code) {
          this.role = this.optionValue(response.data.data)
        } else {
          this.role = []
        }
      })
    },
    initUser () {
      for (const key in this.User) {
        this.User[key] = ''
      }
    },
    optionValue (param) {
      let val = []
      for (const key in param) {
        val.push({'value': param[key].id, 'text': param[key].name})
      }
      return val
    },
    onSubmit (evt) {
      evt.preventDefault()
      if (this.isEdit) {
        if (this.User.password !== this.User.rpassword) {
          this.$msg('The passwords do not match.')
          return
        }
      }
      SubmitUser(this.User).then(data => {
        this.$msg(data.data.message)
        if (data.data.response_code) {
          this.$modal.hide('UserModal')
        }
      })
    }
  },
  mounted () {
    this.getRole()
  }
}
</script>
