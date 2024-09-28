<template>
  <ion-menu content-id="main-content" side="start">
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>Catálogo</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list>
        <ion-item button detail href="/home">
          <ion-label><h4>Inicio</h4></ion-label>
        </ion-item>
        <ion-item button detail href="/categoria">
          <ion-label><h4>Categoría</h4></ion-label>
        </ion-item>
        <ion-item button detail href="#">
          <ion-label><h4>Ofertas</h4></ion-label>
        </ion-item>
        <ion-item button detail href="#">
          <ion-label><h4>Transporte</h4></ion-label>
        </ion-item>
        <ion-item button detail href="#">
          <ion-label><h4>Traslado</h4></ion-label>
        </ion-item>
        <ion-item button detail href="#">
          <ion-label><h4>Reserva</h4></ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-menu>

  <ion-page id="main-content">
    <ion-header>
      <ion-toolbar color="secondary">
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>Hotel Lux</ion-title>
        <ion-avatar slot="end" class="small-avatar" @click="goToLogin">
          <img alt="Avatar" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
        </ion-avatar>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <section class="form-login">
        <h4>Iniciar Sesión</h4>
        <form id="form" @submit.prevent="handleLogin">
          <input class="controls" type="email" name="correo" v-model="form.correo" required placeholder="Ingrese su Correo" />
          <input class="controls" type="password" name="password" v-model="form.password" required placeholder="Ingrese su Contraseña" />
          <p><a href="#">Términos y Condiciones</a></p>
          <p><a href="/join">Registrarse</a></p>
          <input class="botons" type="submit" value="Iniciar Sesión" />
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

// Función para manejar el envío del formulario
const handleLogin = () => {
  // Aquí puedes agregar la lógica para autenticar al usuario
  console.log('Inicio de sesión:', form.value);
};

// Redirigir al usuario a la página de inicio de sesión
const goToLogin = () => {
  router.push('/login');
};
</script>

<style scoped>
ion-content {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh; /* Asegura que ocupa toda la altura de la pantalla */
  background-color: #f0f0f0; /* Color de fondo opcional */
}

/* Estilo de inicio de sesión */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.form-login {
  width: 100%;
  max-width: 400px;
  padding: 30px;
  margin: 50px auto;
  border-radius: 8px;
  font-family: 'Calibri', sans-serif;
  color: white;
  background: #24303c;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.form-login h4 {
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;
}

.controls {
  width: 100%;
  padding: 12px;
  border-radius: 6px;
  margin-bottom: 16px;
  border: 1px solid #1f53c5;
  font-size: 16px;
  color: white;
  background: #344952;
}

.form-login p {
  text-align: center;
  font-size: 16px;
  margin: 10px 0;
}

.form-login a {
  color: #1f53c5;
  text-decoration: none;
}

.form-login a:hover {
  text-decoration: underline;
}

.botons {
  width: 100%;
  padding: 12px;
  border: none;
  background: #1f53c5;
  color: white;
  font-size: 16px;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.3s;
}

.botons:hover {
  background: #174a90;
}

.small-avatar {
  width: 40px;
  height: 40px;
}
</style>
