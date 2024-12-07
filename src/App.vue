<template>
  <ion-app>
    <ion-router-outlet />
    <!-- Aquí colocas el componente UserComponent -->
    <UserComponent />
  </ion-app>
</template>

<script setup lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue';
</script>

<style>
/* Estilos generales */
</style>
