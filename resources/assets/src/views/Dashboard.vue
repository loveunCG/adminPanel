<template>
  <b-row>
      <b-col sm="6" lg="3">
        <b-card no-body class="bg-primary">
          <b-card-body class="pb-0">
            <b-dropdown class="float-right" variant="transparent p-0" right>
              <template slot="button-content">
                <i class="icon-settings"></i>
              </template>
            </b-dropdown>
            <h4 class="mb-0">{{total}}</h4>
            <p>Total Members</p>
          </b-card-body>
        </b-card>
      </b-col>
  </b-row>
</template>
<script>
export default {
  name: 'dashboard',
  data () {
    return {
      selete_user_id: 1
    }
  },
  computed: {
    total: function () {
      return this.$store.getters.userList.length + 1
    }
  },
  methods: {
    modalOpen (userId) {
      if (userId) {
        this.$store.commit('setCurrentId', this.selete_user_id)
      } else {
        this.$store.commit('clearCurrentId')
      }
      this.$modal.show('UserModal')
    }
  },
  mounted () {
    this.$store.dispatch('getUserAll')
  }
}
</script>
