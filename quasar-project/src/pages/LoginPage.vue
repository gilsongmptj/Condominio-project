<!-- eslint-disable no-unused-vars -->
<template>
    <div class="container">
        <div class="content">
            <img class="logo" src="../assets/logo-app.svg"/>
            <div class="header">
            <h2 style="color: #CB4335">LOGIN</h2>
            <p style="color: #CB4335">Bem-vindo Morador</p>
            </div>
            <q-form class="form">
                <div class="mt-3">
                <q-label style="color: #CB4335">CPF</q-label>
                <input type="number" class="input"/>
                </div>
                <div class="mt-3">
                <q-label style="color: #CB4335">Nº APARTAMENTO</q-label>
                <input type="number" class="input" />
                </div>
                <q-btn
                  color="secondary"
                  label="Inicar"
                  class="button"
                 />
            </q-form>
        </div>
    </div>
    </template>
<script setup>
// const axios = require('axios').default;
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
