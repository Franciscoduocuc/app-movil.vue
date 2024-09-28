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
        <ion-avatar slot="end" class="small-avatar" @click="goTologin">
          <img alt="Avatar" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
        </ion-avatar>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button></ion-back-button>
        </ion-buttons>
        <ion-breadcrumbs>
          <ion-breadcrumb href="/home">Inicio</ion-breadcrumb>
          <ion-breadcrumb href="/categoria">Categoría</ion-breadcrumb>
          <ion-breadcrumb>Detalle</ion-breadcrumb>
        </ion-breadcrumbs>
      </ion-toolbar>

      <!-- Iconos en la parte superior -->
      <ion-grid>
        <ion-row>
          <ion-col size="2" class="ion-padding icon-col" v-for="icon in icons" :key="icon.name">
            <ion-icon :icon="icon.icon" @click="iconClick(icon.name)"></ion-icon>
          </ion-col>
        </ion-row>
      </ion-grid>

      <div class="datetime-container">
        <ion-datetime 
          presentation="date" 
          :prefer-wheel="true" 
          :min="minDate" 
          :max="maxDate">
        </ion-datetime>
      </div>

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

      <!-- Sección de Preguntas Frecuentes -->
      <div class="faq-section">
        <h2>Preguntas Frecuentes</h2>
        <ion-list>
          <div class="faq" v-for="(faq, index) in faqs" :key="index">
            <div class="faq-question" @click="toggleFAQ(index)">
              <h4>{{ faq.question }}</h4>
              <ion-icon :icon="faq.show ? 'chevron-up-outline' : 'chevron-down-outline'"></ion-icon>
            </div>
            <div v-if="faq.show" class="faq-answer">
              <p>{{ faq.answer }}</p>
            </div>
          </div>
        </ion-list>
      </div>

      <!-- Sección de Contacto -->
      <div class="contact-section">
        <h2>Contacto</h2>
        <a href="mailto:example@gmail.com" class="contact-link">
          <ion-icon icon="mail-outline"></ion-icon>
          <span>example@gmail.com</span>
        </a>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { flameOutline, carOutline, busOutline, bedOutline, calendarNumberOutline } from 'ionicons/icons';

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
  if (iconName === 'Bed') {
    router.push('/categoria');
  }
};

// Datos de los iconos
const icons = [
  { name: 'Flame', icon: flameOutline },
  { name: 'Car', icon: carOutline },
  { name: 'Bus', icon: busOutline },
  { name: 'Bed', icon: bedOutline },
  { name: 'Calendar', icon: calendarNumberOutline },
];

// Datos de las zonas
const zones = [
  { title: 'Zona 1', image: 'https://ionicframework.com/docs/img/demos/card-media.png' },
  { title: 'Zona 2', image: 'https://ionicframework.com/docs/img/demos/card-media.png' },
  { title: 'Zona 3', image: 'https://ionicframework.com/docs/img/demos/card-media.png' },
];

// Datos de preguntas frecuentes
const faqs = ref([
  { question: '¿Cuál es el horario de check-in y check-out?', answer: 'El check-in es a las 3 PM y el check-out es a las 11 AM.', show: false },
  { question: '¿Se permite fumar en las habitaciones?', answer: 'No, todas las habitaciones son para no fumadores.', show: false },
  { question: '¿Ofrecen servicio de transporte al aeropuerto?', answer: 'Sí, ofrecemos servicio de transporte bajo petición.', show: false },
  { question: '¿Hay Wi-Fi disponible?', answer: 'Sí, ofrecemos Wi-Fi gratuito en todas las áreas.', show: false },
  { question: '¿Aceptan mascotas?', answer: 'No, no se permiten mascotas en las instalaciones.', show: false },
]);

// Rango de años para el ion-datetime
const currentYear = new Date().getFullYear();
const minDate = `${currentYear}-01-01`; // Fecha mínima (año actual)
const maxDate = `${currentYear + 5}-12-31`; // Fecha máxima (5 años en el futuro)

// Función para alternar la visibilidad de la respuesta de las preguntas frecuentes
const toggleFAQ = (index: number) => {
  faqs.value[index].show = !faqs.value[index].show;
};
</script>

<style scoped>
/* Estilo del menú */
ion-header {
  background-color: #1b77ce;
}

/* Estilo de iconos */
.icon-col {
  background-color: #135d54;
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
  margin: 20px 0;
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

/* Estilo de la sección de FAQ */
.faq-section {
  padding: 20px;
  background-color: #000; /* Fondo negro */
  color: #fff; /* Texto en blanco */
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 20px 0; /* Margen superior e inferior */
}

.faq-question {
  display: flex;
  justify-content: space-between;
  cursor: pointer;
}

/* Estilo de contacto */
.contact-section {
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 20px 0; /* Margen superior e inferior */
}
</style>
