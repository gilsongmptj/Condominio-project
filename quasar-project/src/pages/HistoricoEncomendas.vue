<template>
  <div class="q-pa-md">
    <q-table
      title="Historico Encomendas"
      :rows="rows"
      :columns="columns"
      row-key="name"
    />
  </div>
</template>
<script>
const columns = [
  {
    name: 'name',
    required: true,

    align: 'left',
    field: (row) => row.name,
    format: (val) => `${val}`,
    sortable: true,
  },
  { name: 'Nome', label: 'Nome ' },
  { name: 'Destinatario', label: 'Destinatario' },
  { name: 'Coletor', label: 'Coletor' },
  { name: 'Data_De_Recebimento', label: 'Data de recebimento' },

];

const rows = [
  {
    name: '',
  },
];
export default {
  setup() {
    return {
      columns,
      rows,
      encomendas: [],
    };
  },
};

</script>
