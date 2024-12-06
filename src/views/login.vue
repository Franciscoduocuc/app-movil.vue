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
      </ion-toolbar>
    </ion-header>


    <ion-toolbar>
      <ion-breadcrumbs>
        <ion-breadcrumb href="/home">Inicio</ion-breadcrumb>
        <ion-breadcrumb href="/login">iniciar sesión</ion-breadcrumb>
      </ion-breadcrumbs>
    </ion-toolbar>

    <ion-content>
      <section class="form-login">
        <h4>Iniciar Sesión</h4>
        <form id="form">
          <input class="controls" type="email" name="correo" v-model="form.correo" required placeholder="Ingrese su Correo" />
          <input class="controls" type="password" name="password" v-model="form.password" required placeholder="Ingrese su Contraseña" />
          <p><a href="#">Términos y Condiciones</a></p>
          <p><a href="/join">Registrarse</a></p>
          <input class="botons" type="submit" value="Iniciar Sesión" />
        </form>
      </section>
    </ion-content>

    <!--footer-->
    <ion-footer class="footer" translucent>
      <ion-toolbar>
        <ion-title>
          <ion-grid>
            <ion-row>
              <ion-col size="2" class="ion-padding icon-col" v-for="icon in icons" :key="icon.name">
                <ion-icon :icon="icon.icon" @click="iconClick(icon.name)"></ion-icon>
              </ion-col>
            </ion-row>
         </ion-grid>
       </ion-title>
      </ion-toolbar>
    </ion-footer>
  </ion-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { flameOutline, busOutline, bedOutline, calendarNumberOutline, personCircleOutline, } from 'ionicons/icons';
import { IonContent, IonPage, IonFooter, IonTitle, IonToolbar  } from '@ionic/vue';

// Usamos Vue Router para la navegación
const router = useRouter();

// Manejar el clic en los iconos
const iconClick = (iconName: string) => {
  switch (iconName) {
    case 'Bed':
      router.push('/categoria');
      break;
      
    case 'Person':
      router.push('/login');
      break;
      
    case 'Flame':
      router.push('/home');
      break;
      
    // Añade más casos aquí si es necesario

    default:
      console.log('Icono no reconocido');
  }
};
// Datos de los iconos
const icons = [
  { name: 'Flame', icon: flameOutline },
  { name: 'Bus', icon: busOutline },
  { name: 'Bed', icon: bedOutline },
  { name: 'Calendar', icon: calendarNumberOutline },
  { name: 'Person', icon: personCircleOutline }
];


const form = ref({
  correo: '',
  password: ''
});


</script>

<style scoped>
ion-content {
  display: flex;
  justify-content: center;
  align-items: center;
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
