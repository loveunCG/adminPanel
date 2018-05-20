<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col sm="12">
        <PermissionTable hover striped bordered small fixed caption="<i class='fa fa-align-justify'></i> Combined All Table"></PermissionTable>
      </b-col>
    </b-row>
  </div>
</template>
<script>
  import PermissionTable from '../../components/Role/Permission-Table.vue'
  export default {
    name: 'User',
    components: {PermissionTable}
  }
</script>
