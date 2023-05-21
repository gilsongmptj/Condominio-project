<template>
  <div class="q-pa-md">
    <h1>Cadastrar Encomendas</h1>
    <q-form @submit="onSubmit" class="q-gutter-md q-mt-xl">
      <q-input
        filled
        v-model="productDescription"
        label="Qual o produto"
        hint="Tipo do Produto"
        lazy-rules
        :rules="[
          (val) => (val.trim() && val.length > 0) || 'O campo é obrigatório.',
          ,
          ,
        ]"
      />

      <q-select
        filled
        v-model="apartment"
        :options="apartmentData"
        hint="Selecione o apartamento"
        :rules="[(val) => val.trim() !== '' || 'O campo é obrigatório.']"
      />

      <q-input
        filled
        v-model="recipient"
        label="Recebedor"
        hint="Quem recebeu o produto?"
      />
      <q-input
        filled
        v-model="receiptDate"
        label="Data de Recebimento"
        hint="Quando foi recebido?"
      />
      <div class="flex flex-center q-mt">
        <q-btn type="submit" color="primary" label="Cadastrar" />
      </div>
    </q-form>
  </div>
</template>
<script setup>
import { Notify } from 'quasar';
import { ref, onMounted } from 'vue';
import { api } from 'src/boot/axios';

export default {
  setup() {
    const productDescription = ref('');
    const apartment = ref('');
    const recipient = ref('');
    const receiptDate = ref('');
    const user = ref({});

    const sendOrders = () => {
      api
        .post('/encomendas', {
          productDescription: productDescription.value,
          apartment: apartment.value,
          recipient: recipient.value,
          receiptDate: receiptDate.value,
        })
        .then(() => {
          Notify.create({
            type: 'positive',
            message: 'Cadastro Realizado',
          });
        })
        .catch((error) => {
          alert(error);
        });
    };

    const getApartment = async () => {
      try {
        const res = await api.get('/usuarios');
        user.value = res.data;
        validateData();
      } catch (error) {
        Notify.create({
          type: 'negative',
        });
      }
    };

    const validateData = () => {
      const apartmentsFound = user.value
        .flatMap((user) => user.apartamentos)
        .flat();
      console.log(apartmentsFound);
    };

    onMounted(() => {
      sendOrders();
    });

    return {
      productDescription,
      apartment,
      recipient,
      receiptDate,
      user,
      getApartment,
    };
  },
};
</script>

<script setup>
import { Notify } from 'quasar';
import { ref, onMounted } from 'vue';
import { api } from 'src/boot/axios';

export default {
  setup() {
    const productDescription = ref('');
    const apartment = ref('');
    const recipient = ref('');
    const receiptDate = ref('');
    const user = ref({});

    const sendOrders = () => {
      api
        .post('/encomendas', {
          productDescription: productDescription.value,
          apartment: apartment.value,
          recipient: recipient.value,
          receiptDate: receiptDate.value,
        })
        .then(() => {
          Notify.create({
            type: 'positive',
            message: 'Cadastro Realizado',
          });
        })
        .catch((error) => {
          alert(error);
        });
    };

    const getApartment = async () => {
      try {
        const res = await api.get('/usuarios');
        user.value = res.data;
        validateData();
      } catch (error) {
        Notify.create({
          type: 'negative',
        });
      }
    };

    const validateData = () => {
      const apartmentsFound = user.value
        .flatMap((user) => user.apartamentos)
        .flat();
      console.log(apartmentsFound);
    };

    onMounted(() => {
      sendOrders();
    });

    return {
      productDescription,
      apartment,
      recipient,
      receiptDate,
      user,
      getApartment,
    };
  },
};
</script>
