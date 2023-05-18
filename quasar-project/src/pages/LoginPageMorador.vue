<!-- eslint-disable vue/no-parsing-error -->
<!-- eslint-disable no-unused-vars -->
<template>
    <q-layout class="container">

      <q-form
        ref="formRef"
        @submit="onSubmit"
        @reset="onReset"
        class="q-gutter-md"
        >
      <img class="logo" src="../assets/logo-app.svg"/>
      <h2 style="color: #CB4335">
        LOGIN
      </h2>
      <div class="row flex-center">
        <q-toogle
          class="text-h5"
          v-model="Admin"
          label="Modo Sindico/Porteiro"
        />
      </div>
      <q-input
        filled
        v-model="cpf"
        label="Insira o CPF"
        lazy-rules:
        rules="[
        (val) => (val && val.length >0) || 'Campo obrigatório',
        ]"
        />
      <q-input
        v-if="!Admin"
        filled
        type="number"
        v-model="apartmento"
        label="Insira o número apartamento"
        lazy-rules
        :rules="[
          (val) => (val && val.length > 0) || 'campo obrigatório',
        ]"
      />
      <q-input
        v-else
        filled
        type="string"
        v-model="codeAcess"
        label="Insira o codigo de acesso"
        lazy-rules
        :rules="[
          (val) => (val && val.length > 0) || 'O campo não pode ser vazio',
        ]"
      />
        <q-btn
          color="secondary"
          label="Entrar"
          class="button"
        />

    </q-form>
  </q-layout>
</template>
<script>
import { ref } from 'vue';
import { api } from 'boot/axios';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const router = useRouter();
    const Admin = ref(false);
    const formRef = ref(null);
    const dataLogin = ref({
      cpf: '',
      apartment: '',
      codeAcess: '',
    });

    // eslint-disable-next-line no-unused-vars
    const onSubmit = () => {
      const { cpf, apartment, codeAcess } = dataLogin.value;

      if (Admin.value) {
        api.get(`/apartments?cpf=${cpf}&id=${apartment}&_expand=user`)
          .then((response) => {
            console.log(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        api.get(`/users?cpf=${cpf}&codeAcess=${codeAcess}`)
          .then((response) => {
            if (response.data.length === 0) {
              throw new Error('Request failed');
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    };

    return {
      Admin,
      formRef,
      dataLogin,
      router,

    };
  },
};
</script>
    <style>
    .container{
        height: 100vh;
        margin: auto;
        padding: 1rem;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 100%;
    }
    .logo {
        width: 150px;
        display: block;
        margin: 0 auto;
    }
    .h2{
      justify-content: center;
      align-items: center;
    }
    .content{
        padding: 1rem;
        width: 40%;
    }

    .form{
        margin: auto;
    }

    .input{
        width: 100%;
    }

    .button{
        width: 100%;
    }

    .header{
        margin: 0 auto;
        text-align: center;
    }

    .mt-3{
     margin-bottom: 1rem;
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    </style>
