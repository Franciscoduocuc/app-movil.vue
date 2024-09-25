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
  
  <!--encabezado de pagina -->
  <ion-page id="main-content">
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>Hotel Lux</ion-title>
        <!-- Avatar -->
        <ion-avatar slot="end" class="small-avatar" @click="goTologin">
          <img alt="Avatar" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
        </ion-avatar>
      </ion-toolbar>
    </ion-header>
    
    <!--fin de encabezado de pagina-->
    <ion-content>
      <!-- El contenido de la página -->
      <ion-grid>
        <ion-row>
          <!-- Aquí van los íconos -->
          <ion-col>
            <ion-icon :icon="flameOutline"></ion-icon>
          </ion-col>
          <ion-col>
            <ion-icon :icon="carOutline"></ion-icon>
          </ion-col>
          <ion-col>
            <ion-icon :icon="busOutline"></ion-icon>
          </ion-col>
          <ion-col>
            <ion-icon :icon="bedOutline"></ion-icon>
          </ion-col>
          <ion-col>
            <ion-icon :icon="calendarNumberOutline"></ion-icon>
          </ion-col>
        </ion-row>
      </ion-grid>

      <!-- Contenedor para el calendario -->
      <div class="datetime-container">
        <ion-datetime value="2022-04-21T00:00:00" min="2022-03-01T00:00:00" max="2022-05-31T23:59:59"></ion-datetime>
      </div>

      <ion-grid>
        <ion-row>
          <!-- Tarjeta 1 -->
          <ion-col size="4" class="ion-padding">
            <ion-card class="card">
              <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
              <ion-card-header>
                <ion-card-title>zona 1</ion-card-title>
              </ion-card-header>
            </ion-card>
          </ion-col>

          <!-- Tarjeta 2 -->
          <ion-col size="4" class="ion-padding">
            <ion-card class="card">
              <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
              <ion-card-header>
                <ion-card-title>zona 2</ion-card-title>
              </ion-card-header>
            </ion-card>
          </ion-col>

          <!-- Tarjeta 3 -->
          <ion-col size="4" class="ion-padding">
            <ion-card class="card">
              <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
              <ion-card-header>
                <ion-card-title>zona 3</ion-card-title>
              </ion-card-header>
            </ion-card>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonCol, IonGrid, IonRow, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonDatetime, IonAvatar, IonIcon } from '@ionic/vue';
import { useRouter } from 'vue-router';
import { flameOutline, carOutline, busOutline, bedOutline, calendarNumberOutline } from 'ionicons/icons';

// Usamos Vue Router para la navegación
const router = useRouter();

const goTologin = () => {
  router.push('/login');
};
</script>

<style scoped>
.h4 {
    margin-left: 20px; /* Mueve todos los <h4> 20px hacia la derecha */
}
.normal {
    text-decoration: none;
    color: inherit;
    right: 10px;
}

/* Estilo de iconos */
ion-col {
  background-color: #135d54;
  border: solid 1px #fff;
  color: #fff;
  text-align: center;
}

/* Estilo para reducir el tamaño del avatar */
.small-avatar {
  width: 40px;
  height: 40px;
}

/* Estilos para centrar el ion-datetime */
.datetime-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin: 20px 0;
}

.card {
  background-color: transparent;
  border: 20px;
}
</style>
