<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<template>
  <modal name="RoleModal"
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
                v-model="Role.name"
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
                v-model="Role.display_name"
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
                     v-model="Role.description"
                     placeholder="description"
                     :rows="3"
                     :max-rows="6">
                </b-form-textarea>
              </b-input-group>
            </b-form-group>
            <b-form-group>
              <label class="typo__label">Permission</label>
              <multiselect v-model="Role.permission" :options="permissions" :multiple="true" :close-on-select="false" :clear-on-select="false" :hide-selected="true" :preserve-search="true" placeholder="" label="name" track-by="name" :preselect-first="false">
                <template slot="tag" slot-scope="props"><span class="custom__tag"><span>{{ props.option.language }}</span><span class="custom__remove" @click="props.remove(props.option)">❌</span></span></template>
              </multiselect>
            </b-form-group>
            <div class="form-group form-actions">
              <b-button type="submit" class="pull-left" @click="onSubmit" variant="success">{{button}}</b-button>
              <b-button type="button" class="pull-right" @click="$modal.hide('RoleModal')" variant="info">Close</b-button>
            </div>
          </b-form>
        </b-card>
      </b-col>
    </b-row>
  </modal>
</template>
<script>
import {saveRole, GetRole, getPermissionAll} from '../../api/'
import Multiselect from 'vue-multiselect'
export default {
  name: 'Role-Modal',
  components: {
    Multiselect
  },
  data () {
    return {
      Role: {
        name: '',
        display_name: '',
        description: '',
        permission: []
      },
      permissions: [],
      button: '',
      isEdit: false,
      title: ''
    }
  },
  methods: {
    beforeOpen (event) {
      let roleId = this.$store.getters.roleId
      console.log('this is ', roleId)
      if (roleId && !isNaN(roleId)) {
        this.title = 'Role Edit'
        this.button = 'Save'
        GetRole({id: roleId}).then(res => {
          console.log('that is role', res.data.data)
          console.log('that is perm', this.permissions)
          if (res.data.response_code) {
            this.Role = res.data.data
          }
        }).catch(err => {
          console.log(err)
        })
      } else {
        this.title = 'Role Add'
        this.button = 'Add'
        this.initRole()
      }
    },
    beforeClose (event) {
      this.$store.commit('clearRoleId')
      this.$store.dispatch('getRoleAll')
      this.initRole()
      this.isEdit = false
    },
    initRole () {
      for (const key in this.Role) {
        this.Role[key] = ''
      }
    },
    onSubmit (evt) {
      evt.preventDefault()
      console.log(this.permissions)
      console.log(this.Role)
      saveRole(this.Role).then(data => {
        console.log(data.data)
        this.$msg(data.data.message)
        if (data.data.response_code) {
          this.$modal.hide('RoleModal')
        }
      })
    },
    loadPermission () {
      getPermissionAll().then(data => {
        if (data.data.response_code) {
          let perms = data.data.data
          let permArr = []
          for (const key in perms) {
            permArr.push({id: perms[key].id, name: perms[key].name, language: perms[key].language})
          }
          this.permissions = permArr
        }
      })
    }
  },
  mounted () {
    this.loadPermission()
  }
}
</script>
<style>

.custom__tag{
  position: relative;
  display: inline-block;
  padding: 4px 26px 4px 10px;
  border-radius: 5px;
  margin-right: 10px;
  color: #fff;
  line-height: 1;
  background: #41b883;
  margin-bottom: 5px;
  white-space: nowrap;
  overflow: hidden;
  max-width: 100%;
  text-overflow: ellipsis;
  cursor: pointer;
}
</style>
