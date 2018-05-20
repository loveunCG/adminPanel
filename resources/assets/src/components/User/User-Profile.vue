<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<template>
  <modal name="ProfileModal"
         height="auto"
         :resizable="true"
         @before-open="beforeOpen"
         @before-close="beforeClose">
    <b-row>
     <b-col sm="12">
        <b-card>
          <div class="col-sm-12 toppad">
              <div class="panel panel-info">
                  <div class="panel-heading">
                      <h3 class="panel-title">{{User.name}}</h3>
                  </div>
                  <div class="panel-body">
                      <div class="row">
                          <div class="col-md-3 col-lg-3 " align="center">
                              <img alt="User Pic" src="../../../static/img/avatars/6.jpg" class="img-circle img-responsive"> </div>
                          <div class=" col-md-9 col-lg-9 ">
                              <table class="table table-user-information">
                                  <tbody>
                                      <tr>
                                          <td>Name:</td>
                                          <td>{{User.name}}</td>
                                      </tr>
                                      <tr>
                                          <td>Email</td>
                                          <td>{{User.email}}</td>
                                      </tr>
                                      <tr>
                                          <td>Role</td>
                                          <td v-if="User.role !== null">{{User.role.name}}</td>
                                      </tr>

                                      <tr>
                                          <tr>
                                              <td>Permission</td>
                                              <td>
                                                <b-row v-if="User.permission !== []">
                                                  <b-col sm="6"
                                                  v-for="(perm, index) in User.permission" :key="index">
                                                    <b-button class="btn-outline btn-sm" variant="default">{{perm.name}}</b-button>
                                                  </b-col>
                                                </b-row>
                                              </td>
                                          </tr>
                                      </tr>
                                  </tbody>
                              </table>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        </b-card>
      </b-col>
    </b-row>
  </modal>
</template>
<script>
import {getSelfInfo} from '../../api/'
export default {
  name: 'Profile-Modal',
  data () {
    return {
      User: {
        name: '',
        email: '',
        role: '',
        permission: []
      }
    }
  },
  methods: {
    beforeOpen (event) {
      getSelfInfo().then(res => {
        console.log(res.data)
        if (res.data.response_code) {
          this.User = res.data.data
        }
        this.$msg(res.data.message)
      }).catch(err => {
        console.log(err)
      })
    },
    beforeClose (event) {
    }
  },
  mounted () {
  }
}
</script>
<style>
.user-row {
    margin-bottom: 14px;
}
.user-row:last-child {
    margin-bottom: 0;
}
.dropdown-user {
    margin: 13px 0;
    padding: 5px;
    height: 100%;
}
.dropdown-user:hover {
    cursor: pointer;
}

.table-user-information > tbody > tr {
    border-top: 1px solid rgb(221, 221, 221);
}

.table-user-information > tbody > tr:first-child {
    border-top: 0;
}
.table-user-information > tbody > tr > td {
    border-top: 0;
}
.toppad
{
  margin-top:20px;
}
</style>
