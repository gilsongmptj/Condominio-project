<!-- eslint-disable vue/no-parsing-error -->
<template>
  <div class="container">
    <div class="buttons">
      <q-btn
        color="primary"
        label="Botão 1"

      />

      <q-btn
        color="secondary"
        label="Historico de Encomendas"
       @click="$router.push({ name:'historico'})"
      />
    </div>
  </div>
</template>

<style scoped>
.container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.buttons {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}
</style>
// eslint-disable-next-line max-len, vue/no-parsing-error

<template>
  <div class="container">
    <div class="buttons">
      <q-btn
        color="primary"
        label="Botão 1"

      />

      <q-btn
        color="secondary"
       @click="$router.push({ name:'historico'})"
      />
    </div>
  </div>
</template>

<style scoped>
.container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.buttons {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}
</style>
