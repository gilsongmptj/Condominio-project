<template>
  <div class="tabela bg-white">
    <form class="encomendas-form">
      <h5 class="titulo">RASTREAMENTO</h5>
      <div class="encomendas-list">
        <q-list dense bordered class="rounded-borders">
          <q-item v-for="item in itens" :key="item.id" clickable>
            <q-item-section>
              {{ item.texto }}
              <span v-if="item.entregue" class="status-entregue">Entregue</span>
              <span v-else class="status-pendente">Pendente</span>
            </q-item-section>
            <q-icon name="directions" size="30px"/>
          </q-item>
        </q-list>
      </div>
    </form>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'EncomendasRecebidasPage',
  data() {
    return {
      itens: [],
    };
  },
});
</script>

<style>

</style>
