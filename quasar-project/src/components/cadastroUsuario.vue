<template>
  <div class="cadastro q-pa-md">
    <q-form @submit="onSubmit" class="q-gutter-md">
      <h1>
        CADASTRO DE ENCOMENDAS
      </h1>

      <q-input
        filled
        v-model="identification"
        label="Nome para Encomenda *"
        color="teal"
        lazy-rules
        :rules="[
          (val) =>
            (val && val.length > 0) || 'Por favor digite o nome do objeto',
        ]"
      />

      <q-input
        filled
        color="teal"
        v-model="receptor"
        label="Nome do recebedor *"
        lazy-rules
        :rules="[
          (val) =>
            (val && val.length > 0) ||
            'Por favor digite o responsavel pela encomenda',
        ]"
      />

      <q-select
        preenchido
        v-model="apartment"
        label=" Apartamento"
        color="teal"
        :options="apartment"
        estilo=" largura : 250px "
        comportamento=" menu "
        :rules="[
          (val) =>
            (val && val.length > 0) || 'Por favor selecione um apartamento',
        ]"
      />

      <q-input
        filled
        type="date"
        color="teal"
        v-model="receptDate"
        label="Data do Recebimento *"
        lazy-rules
        :rules="[
          (val) => (val !== null && val !== '') || 'Por favor selecione a data',
        ]"
      />

      <q-btn label="Cadastrar" color="teal" type="submit" />
    </q-form>
  </div>
</template>

<script>
import useQuasar from 'quasar/src/composables/use-quasar.js';
import { ref, defineComponent } from 'vue';

export default defineComponent({
  setup() {
    // eslint-disable-next-line no-unused-vars
    const $q = useQuasar();

    const identification = ref(null);
    const apartment = ref(null);
    const receptor = ref(null);
    // eslint-disable-next-line camelcase
    const receptDate = ref(null);

    return {
      identification,
      apartment,
      receptor,
      // eslint-disable-next-line camelcase
      receptDate,
    };
  },
  onSubmit() {},
  apartment() {},
});
</script>
