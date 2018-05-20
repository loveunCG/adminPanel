<template>
  <b-card>
    <div slot="header">
       {{name}}
    </div>
     <b-col md="3" class="pull-right add_button">
        <b-form-group horizontal class="mb-0">
          <b-input-group>
            <b-form-input v-model="filter" placeholder="Type to Search" />
            <b-input-group-append>
              <b-btn :disabled="!filter" @click="filter = ''">Clear</b-btn>
            </b-input-group-append>
          </b-input-group>
        </b-form-group>
    </b-col>
    <b-button variant="primary" class="add_button float-right"  v-show = "can('user_add')" v-on:click="onEditModel"><i class="fa fa-plus"></i></b-button>

    <b-table :hover="hover"
    :striped="striped"
    :bordered="bordered"

    :small="small"
    :busy.sync="isBusy"
    responsive="sm"
    :items="items"
    :fields="fields"
    :current-page="currentPage"
    :filter="filter"
    :per-page="perPage">
      <template slot="index" slot-scope="data">
        {{data.index + 1}}
      </template>
      <template slot="role" slot-scope="data">
        <b-badge>{{getRoleName(data.item.role)}}</b-badge>
      </template>
      <template slot="id" slot-scope="data">
        <b-button variant="primary"  v-show = "can('user_edit')" v-on:click="onEditModel(data.item.id)"><i class="fa fa-edit"></i></b-button>
        <b-button variant="success"  v-show = "can('user_password')" v-on:click="onChangePassword(data.item.id)"><i class="fa fa-key"></i></b-button>
        <b-button variant="danger"  v-show = "can('user_delete')" v-on:click="onDeleteModal(data.item.id)"><i class="fa fa-trash"></i></b-button>
      </template>
    </b-table>
    <nav>
      <b-pagination :total-rows="getRowCount(items)" :per-page="perPage" v-model="currentPage" prev-text="Prev" next-text="Next" hide-goto-end-buttons/>
    </nav>
    <UserModal/>
    <ResetPassword/>
  </b-card>
</template>
<script>
  import {deleteUser} from '../../api/'
  import UserModal from '../../components/User/User-Modal.vue'
  import ResetPassword from '../../components/User/Reset-Password.vue'
  export default {
    name: 'UserTable',
    props: {
      caption: {
        type: String,
        default: 'Table'
      },
      hover: {
        type: Boolean,
        default: false
      },
      striped: {
        type: Boolean,
        default: false
      },
      bordered: {
        type: Boolean,
        default: false
      },
      small: {
        type: Boolean,
        default: false
      },
      fixed: {
        type: Boolean,
        default: false
      }
    },
    components: {
      UserModal,
      ResetPassword
    },
    data: () => {
      return {
        name: 'User Table',
        filter: null,
        active: [
          { value: 1, text: 'On' },
          { value: 2, text: 'Off' }
        ],
        iseditmodal: false,
        isBusy: false,
        fields: [
          {key: 'index', 'class': 'text-center', sortable: true},
          {key: 'name', 'class': 'text-center'},
          {key: 'email', 'class': 'text-center'},
          {key: 'role', 'class': 'text-center'},
          {key: 'created_at', sortable: true, 'class': 'text-center'},
          {key: 'id', 'class': 'text-center', label: 'action'}
        ],
        currentPage: 1,
        perPage: 10,
        totalRows: 0
      }
    },
    methods: {
      can (param) {
        let perms = JSON.parse(localStorage.getItem('permission'))
        let isHide = false
        for (const key in perms) {
          if (perms[key]['name'] === param) {
            isHide = true
          }
        }
        return isHide
      },
      getRoleName (param) {
        return param['name']
      },
      onEditModel (param) {
        console.log(param)
        if (param) {
          this.$store.commit('setCurrentId', param)
        } else {
          this.$store.commit('clearCurrentId')
        }
        this.$modal.show('UserModal')
      },
      onDeleteModal (param) {
        this.$modal.show('dialog', {
          title: 'Alert!',
          text: 'Are you sure remove this account?',
          buttons: [
            {
              title: 'Ok',
              handler: () => {
                deleteUser({id: param}).then(data => {
                  this.$msg(data.data.message)
                  if (data.data.response_code) {
                    this.$modal.hide('dialog')
                    this.$store.dispatch('getUserAll')
                  }
                })
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
      getRowCount (items) {
        return items.length
      },
      onChangePassword (param) {
        if (param) {
          this.$store.commit('setCurrentId', param)
        } else {
          this.$store.commit('clearCurrentId')
        }
        this.$modal.show('restPassword')
      },
      loadUserInfo () {
        this.$store.dispatch('getUserAll')
      }
    },
    mounted () {
      this.loadUserInfo()
    },
    computed: {
      items: function () {
        return this.$store.getters.userList
      },
      sortOptions () {
        return this.fields.filter(f => f.sortable).map(f => { return { text: f.label, value: f.key } })
      }
    }
  }
</script>

<style>
.add_button {
		margin-bottom: 15px;
}
</style>

