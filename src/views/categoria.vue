<template>
  <!-- Menú lateral de navegación -->
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

  <!-- Página principal con contenido y footer -->
  <ion-page id="main-content">
    <!-- Encabezado de la página -->
    <ion-header>
      <ion-toolbar color="secondary">
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>Hotel Lux</ion-title>
      </ion-toolbar>
    </ion-header>

    <!-- Footer con iconos de navegación -->
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

    <ion-content>
      <!-- Barra de navegación secundaria -->
      <ion-toolbar>
        <ion-breadcrumbs>
          <ion-breadcrumb href="/home">Inicio</ion-breadcrumb>
          <ion-breadcrumb href="/categoria">Categoría</ion-breadcrumb>
        </ion-breadcrumbs>
      </ion-toolbar>


      <ion-datetime-button datetime="datetime" class="datetime-container"></ion-datetime-button>
      <ion-modal :keep-contents-mounted="true">
        <ion-datetime id="datetime"></ion-datetime>
      </ion-modal>

      <!-- Sección de destinos destacados -->
      <div class="destinations-section">
        <h2>Destinos</h2>
      </div>
      <!-- Grilla de destinos -->
      <ion-grid>
        <ion-row>
          <ion-col size="12" size-md="6" size-lg="4" class="ion-padding" v-for="zone in zones" :key="zone.title">
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
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { flameOutline, busOutline, bedOutline, calendarNumberOutline, personCircleOutline } from 'ionicons/icons';
import { IonDatetime, IonDatetimeButton, IonModal } from '@ionic/vue';
import { IonContent, IonPage, IonFooter, IonTitle, IonToolbar, IonLabel  } from '@ionic/vue';


// Configuración de Vue Router para la navegación
const router = useRouter();

// Función para navegar a la página de detalles del producto
const viewProduct = () => {
  router.push('/producto');
};

// Maneja el clic en los íconos del footer
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

    default:
      console.log('Icono no reconocido');
  }
};

// Lista de íconos para el footer
const icons = [
  { name: 'Flame', icon: flameOutline },
  { name: 'Bus', icon: busOutline },
  { name: 'Bed', icon: bedOutline },
  { name: 'Calendar', icon: calendarNumberOutline },
  { name: 'Person', icon: personCircleOutline }
];

// Datos de los destinos populares
const zones = [
  { title: 'VILLARICA', image: 'https://ionicframework.com/docs/img/demos/card-media.png' },
  { title: 'PUERTO FUY', image: 'https://ionicframework.com/docs/img/demos/card-media.png' },
  { title: 'SANTIAGO', image: 'https://ionicframework.com/docs/img/demos/card-media.png' }
];
</script>


<style scoped>
/* Estilos para el menú de navegación */
ion-header {
  background-color: #1b77ce;
}

/* Estilos del footer */
.footer {
  --ion-background-color: var(--ion-color-light);
  border-radius: 150px;
  border: 2px solid transparent;
}

/* Estilo de los íconos en el footer */
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

/* Estilos de las tarjetas de destinos */
.card {
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.card img {
  width: 100%;
  height: auto;
  border-bottom: 2px solid #135d54;
  ;
}


/* Sección de destinos destacados */
.destinations-section {
  padding: 20px;
  text-align: center;
  background-color: #000; /* Fondo negro para resaltar el texto */
  color: #fff; /* Texto en blanco para contrastar con el fondo negro */
  border-radius: 10px;
  margin: 20px 0; /* Margen superior e inferior */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5); /* Sombra para dar profundidad */
}

/* Ajustes responsivos para la sección de destinos */
@media (max-width: 768px) {
  .destinations-section h2 {
    font-size: 24px; /* Tamaño de fuente más pequeño en pantallas pequeñas */
  }
}
</style>
