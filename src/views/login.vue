<template>
    <ion-menu content-id="main-content" side="start">
      <ion-header>
        <ion-toolbar>
          <ion-title>Catálogo</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content>
      <!-- Contenido del menú -->
      <h4><a href="/home" class="normal">inicio</a></h4>
      <h4><a href="#" class="normal">ofertas</a></h4>
      <h4><a href="#" class="normal">transporte</a></h4>
      <h4><a href="#" class="normal">traslado</a></h4>
      <h4><a href="#" class="normal">reserva</a></h4>
    </ion-content>
    </ion-menu>
    
    <!-- Encabezado de la página -->
    <ion-page id="main-content">
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-menu-button></ion-menu-button>
          </ion-buttons>
          <ion-title>Hotel Lux</ion-title>
          <!-- Avatar -->
          <ion-avatar slot="end" class="small-avatar" @click="goToLogin">
            <img alt="Avatar" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
          </ion-avatar>
        </ion-toolbar>
      </ion-header>
  
      <ion-content>
        <section class="form-register">
          <h4>Iniciar sesion</h4>
          <form id="form">
            <input class="controls" type="email" name="correo" v-model="form.correo" required placeholder="Ingrese su Correo" />
            <input class="controls" type="password" name="password" v-model="form.password" required placeholder="Ingrese su contraseña" />
            <p><a href="#">Términos y Condiciones</a></p>
            <p><a href="/join">Registrarse</a></p>
            <input class="botons" type="submit" value="Registrar" />
          </form>
        </section>
      </ion-content>
    </ion-page>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  const router = useRouter();
  
  const form = ref({
    correo: '',
    password: ''
  });

  const goToLogin = () => {
  router.push('/login');
};
  </script>
  
  <style scoped>
  
  .normal {
    text-decoration: none;
    color: inherit;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  .form-register {
    width: 100%;
    max-width: 400px;
    height: auto;
    background: #24303c;
    padding: 30px;
    margin: auto;
    margin-top: 50px;
    border-radius: 4px;
    font-family: 'calibri';
    color: white;
    box-shadow: 7px 13px 37px #000;
  }
  
  .form-register h4 {
    font-size: 22px;
    margin-bottom: 20px;
  }
  
  .controls {
    width: 100%;
    background: #24303c;
    padding: 10px;
    border-radius: 4px;
    margin-bottom: 16px;
    border: 1px solid #1f53c5;
    font-family: 'calibri';
    font-size: 18px;
    color: white;
  }
  
  .form-register p {
    height: 40px;
    text-align: center;
    font-size: 18px;
    line-height: 40px;
  }
  
  .form-register a {
    color: white;
    text-decoration: none;
  }
  
  .form-register a:hover {
    color: white;
    text-decoration: underline;
  }
  
  .form-register .botons {
    width: 100%;
    background: #1f53c5;
    border: none;
    padding: 12px;
    color: white;
    margin: 16px 0;
    font-size: 16px;
  }
  .small-avatar {
  width: 40px;
  height: 40px;
}
  </style>
  