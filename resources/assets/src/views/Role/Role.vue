<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col sm="12">
        <RoleTable hover striped bordered small fixed caption="<i class='fa fa-align-justify'></i> Combined All Table"></RoleTable>
      </b-col>
    </b-row>
  </div>
</template>
<script>
  import RoleTable from '../../components/Role/Role-Table.vue'
  export default {
    name: 'User',
    components: {RoleTable}
  }
</script>
