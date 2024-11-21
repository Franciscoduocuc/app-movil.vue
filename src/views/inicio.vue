<template>
  <ion-menu content-id="main-content" side="start">
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>Inicio</ion-title>
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
      </ion-toolbar>
    </ion-header>

    <!--footer down-->
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

    <!--start content-->
    <ion-content>
      <ion-breadcrumb>
        <ion-breadcrumb-item href="/home">Inicio</ion-breadcrumb-item>
      </ion-breadcrumb>

      <swiper>
        <swiper-slide><ion-img src="https://ionicframework.com/docs/img/demos/card-media.png"></ion-img></swiper-slide>
        <swiper-slide><ion-img src="https://ionicframework.com/docs/img/demos/card-media.png"></ion-img></swiper-slide>
        <swiper-slide><ion-img src="https://ionicframework.com/docs/img/demos/card-media.png"></ion-img></swiper-slide>
        <swiper-slide><ion-img src="https://ionicframework.com/docs/img/demos/card-media.png"></ion-img></swiper-slide>
        <swiper-slide><ion-img src="https://ionicframework.com/docs/img/demos/card-media.png"></ion-img></swiper-slide>
      </swiper>

      <!-- Sección de Destinos Más Buscados -->
      <div class="destinations-section">
        <h2>Destinos Más Buscados</h2>
      </div>

      <ion-grid>
        <ion-row>
          <ion-col size="4" class="ion-padding" v-for="zone in zones" :key="zone.title">
            <ion-card class="card">
              <ion-img :src="zone.image" alt="Zona"></ion-img>
              <ion-card-header>
                <ion-card-title>{{ zone.title }}</ion-card-title>
              </ion-card-header>
              <ion-card-content>
                <ion-button expand="full" color="primary" @click="viewProduct">Ver Más</ion-button>
              </ion-card-content>
            </ion-card>
          </ion-col>
        </ion-row>
      </ion-grid>
      <!-- Sección de Contacto -->
      <div class="contact-section">
        <h2>Contacto</h2>
        <ion-label class="contact-item">
          <a href="mailto:example@gmail.com" class="contact-link">
            <span>example@gmail.com</span>
          </a>
        </ion-label>
        <ion-label class="contact-item">
          <a href="/preguntas" class="contact-link">
            <span>Preguntas frecuentes</span>
          </a>
        </ion-label>
      </div>
    </ion-content>
  </ion-page>
</template>






<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { flameOutline, carOutline, busOutline, bedOutline, calendarNumberOutline, personCircleOutline, } from 'ionicons/icons';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { IonContent, IonPage, IonFooter, IonTitle, IonToolbar, IonLabel  } from '@ionic/vue';

import 'swiper/css';
import '@ionic/vue/css/ionic-swiper.css';

// Usamos Vue Router para la navegación
const router = useRouter();
const goTologin = () => {
  router.push('/login');
};

// Navegar a la página del producto
const viewProduct = () => {
  router.push('/producto');
};

// Manejar el clic en los iconos
const iconClick = (iconName: string) => {
  switch (iconName) {
    case 'Bed':
      router.push('/categoria');
      break;
      
    case 'Person':
     goTologin();
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

// Datos de las zonas
const zones = [
  { title: 'Zona 1', image: 'https://ionicframework.com/docs/img/demos/card-media.png' },
  { title: 'Zona 2', image: 'https://ionicframework.com/docs/img/demos/card-media.png' },
  { title: 'Zona 3', image: 'https://ionicframework.com/docs/img/demos/card-media.png' },
];
</script>




<style scoped>
/* Estilo del menú */
ion-header {
  background-color: #1b77ce;
}

/* style of footer  */
.footer {
  border-radius: 150px; /* Bordes redondeados */
  border: 2px solid transparent; /* Borde de 2px negro */
  background-color: transparent;
}


/* Estilo de iconos */
.icon-col {
  color: #fff;
  text-align: center;
  border-radius: 10px;
  padding: 10px;
  margin: 5px;
  transition: transform 0.3s;
}

.icon-col:hover {
  transform: scale(1.1);
}

.card {
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.card img {
  width: 100%;
  height: auto;
  border-bottom: 2px solid #135d54;
}

ion-toolbar {
  padding: 10px;
}

/* Estilo de la sección de destinos */
.destinations-section {
  padding: 20px;
  text-align: center;
  background-color: #000; /* Fondo negro */
  color: #fff; /* Texto en blanco */
  border-radius: 10px;
  margin: 20px 0; /* Margen superior e inferior */
}


.contact-section {
  display: flex;
  flex-direction: column;
  gap: 10px; /* Espacio entre los elementos */
  padding: 20px;
  background-color: #1b77ce;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 20px 0; /* Margen superior e inferior */
}

.contact-item {
  display: block; /* Asegura que cada elemento se muestre como bloque */
}

.contact-link {
  text-decoration: none;
  color: var(--ion-color-primary); /* O cualquier color deseado */
}

.contact-link span {
  font-weight: bold;
}
</style>
