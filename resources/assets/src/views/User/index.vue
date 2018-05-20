<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col sm="12">
        <UserTable hover striped bordered small fixed caption="<i class='fa fa-align-justify'></i> Combined All Table"></UserTable>
      </b-col>
    </b-row>
  </div>
</template>
<script>
  import UserTable from '../../components/User/User-Table.vue'
  export default {
    name: 'User',
    components: {UserTable}
  }
</script>
