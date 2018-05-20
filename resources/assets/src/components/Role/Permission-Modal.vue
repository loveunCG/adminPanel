<template>
  <modal name="PermissionModal"
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
                  <b-input-group-text><i class="fa fa-credit-card"></i></b-input-group-text>
                </b-input-group-prepend>
                <b-form-input
                type="text"
                required
                v-model="Permission.name"
                placeholder="name"
                ></b-form-input>
              </b-input-group>
            </b-form-group>
            <b-form-group>
              <b-input-group>
                <b-input-group-prepend>
                  <b-input-group-text><i class="fa fa-window-restore"></i></b-input-group-text>
                </b-input-group-prepend>
                <b-form-input type="text"
                required
                v-model="Permission.display_name"
                placeholder="display name"
                >
                </b-form-input>
              </b-input-group>
            </b-form-group>
            <b-form-group>
              <b-input-group>
                <b-input-group-prepend>
                  <b-input-group-text><i class="fa fa-keyboard-o"></i></b-input-group-text>
                </b-input-group-prepend>
                <b-form-textarea id="textarea1"
                     v-model="Permission.description"
                     placeholder="description"
                     :rows="3"
                     :max-rows="6">
                </b-form-textarea>
              </b-input-group>
            </b-form-group>
            <div class="form-group form-actions">
              <b-button type="submit" class="pull-left" @click="onSubmit" variant="success">{{button}}</b-button>
              <b-button type="button" class="pull-right" @click="$modal.hide('PermissionModal')" variant="info">Close</b-button>
            </div>
          </b-form>
        </b-card>
      </b-col>
    </b-row>
  </modal>
</template>
<script>
import {savePermission, getPermissionAll} from '../../api/'

export default {
  props: ['Permission_id'],
  name: 'Permission-Modal',
  data () {
    return {
      Permission: {
        name: '',
        display_name: '',
        description: ''
      },
      button: '',
      isEdit: false,
      title: ''
    }
  },
  methods: {
    beforeOpen (event) {
      let PermissionId = this.$store.getters.permissionId
      console.log('this is ', PermissionId)
      if (PermissionId && !isNaN(PermissionId)) {
        this.title = 'Permission Edit'
        this.button = 'Save'
        getPermissionAll({id: PermissionId}).then(res => {
          console.log(res.data.response_code)
          if (res.data.response_code) {
            this.Permission = res.data.data
          }
        }).catch(err => {
          console.log(err)
        })
      } else {
        this.title = 'Permission Add'
        this.isEdit = true
        this.button = 'Add'
      }
    },
    beforeClose (event) {
      this.$store.commit('clearPermissionId')
      this.$store.dispatch('getPermission')
      this.initPermission()
      this.isEdit = false
    },
    initPermission () {
      for (const key in this.Permission) {
        this.Permission[key] = ''
      }
    },
    onSubmit (evt) {
      evt.preventDefault()
      savePermission(this.Permission).then(data => {
        console.log(this.Permission)
        console.log(data.data)
        this.$msg(data.data.message)
        if (data.data.response_code) {
          this.$modal.hide('PermissionModal')
        }
      })
    }
  },
  mounted () {

  }
}
</script>
