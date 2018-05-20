<template>
  <div class="app flex-row align-items-center">
    <div class="container">
      <b-row class="justify-content-center">
        <b-col md="6">
          <div class="clearfix">
            <h1 class="float-left display-3 mr-4">500</h1>
            <h4 class="pt-3">Hi, we have a problem in Server!</h4>
            <p class="text-muted">The page you are looking for is temporarily unavailable.</p>
          </div>
          <b-input-group>
            <b-input-group-prepend>
              <b-input-group-text>
                <i class="fa fa-search"></i>
              </b-input-group-text>
            </b-input-group-prepend>
            <input id="prependedInput" class="form-control" size="16" type="text" placeholder="What are you looking for?">
            <b-input-group-append>
              <b-button variant="danger" @click="signOut" class="justify-content-right"><i class="fa fa-sign-out"></i>&nbsp; Sign out</b-button>
            </b-input-group-append>
          </b-input-group>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Page500',
  methods: {
    signOut () {
      this.$store.dispatch('logout')
    }
  }
}
</script>
