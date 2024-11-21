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

      <!-- Barra de navegación secundaria -->
      <ion-toolbar>
        <ion-breadcrumbs>
          <ion-breadcrumb href="/home">Inicio</ion-breadcrumb>
          <ion-breadcrumb href="/categoria">Categoría</ion-breadcrumb>
          <ion-breadcrumb href="/producto">Categoría</ion-breadcrumb>
        </ion-breadcrumbs>
      </ion-toolbar>


      <!-- Sección del calendario -->
      <ion-datetime-button datetime="datetime" class="datetime-container"></ion-datetime-button>
      <ion-modal :keep-contents-mounted="true">
        <ion-datetime id="datetime"></ion-datetime>
      </ion-modal>


      <!-- Sección de imágenes -->
      <div class="image-section">
        <img class="large-image" src="https://ionicframework.com/docs/img/demos/card-media.png" alt="Imagen Grande" />
        <div class="small-images">
          <img class="small-image" src="https://ionicframework.com/docs/img/demos/card-media.png" alt="Imagen Pequeña 1" />
          <img class="small-image" src="https://ionicframework.com/docs/img/demos/card-media.png" alt="Imagen Pequeña 2" />
        </div>
      </div>

      <!-- Sección de detalles de la zona y habitación -->
      <div class="details-section">
        <div class="zone-details">
          <h4>Zona 1</h4>
          <ion-icon name="star" style="color: yellow;"></ion-icon>
          <ion-icon name="star" style="color: yellow;"></ion-icon>
          <ion-icon name="star" style="color: yellow;"></ion-icon>
          <ion-icon name="star" style="color: yellow;"></ion-icon>
          <ion-icon name="star-outline" style="color: yellow;"></ion-icon>
        </div>
        <div class="room-details">
          <h4>$120 / noche</h4>
          <ion-select placeholder="Tipo de habitación" interface="popover">
            <ion-select-option value="simple">Simple</ion-select-option>
            <ion-select-option value="doble">Doble</ion-select-option>
            <ion-select-option value="king">King</ion-select-option>
            <ion-select-option value="dos-camas">2 camas</ion-select-option>
          </ion-select>
        </div>
      </div>

      <!-- Sección de servicios que ofrecemos -->
      <div class="destinations-section">
        <h3>Lo que ofrecemos</h3>
      </div>

      <!-- Iconos de servicios -->
      <ion-grid>
        <ion-row>
          <ion-col size="2" class="ion-padding icon-col" v-for="icon in icons" :key="icon.name">
            <ion-icon :icon="icon.icon" 
                      :class="{'disabled-icon': icon.disabled, 'default-icon': !icon.disabled}" 
                      style="font-size: 30px;">
            </ion-icon>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>

    <!--footer down-->
    <ion-footer class="footer" translucent>
      <ion-toolbar>
        <ion-title>
          <ion-grid>
            <ion-row>
              <ion-col size="2" class="ion-padding icon-col" v-for="icon in icons_1" :key="icon.name">
                <ion-icon :icon="icon.icon_1" @click="iconClick(icon.name)"></ion-icon>
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
import { busOutline, wifi, barbell, cellular,  wine  } from 'ionicons/icons';
import { flameOutline, carOutline, bedOutline, calendarNumberOutline, personCircleOutline, } from 'ionicons/icons';
import { IonContent, IonPage, IonFooter, IonTitle, IonToolbar, IonLabel  } from '@ionic/vue';


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
const icons_1 = [
  { name: 'Flame', icon_1: flameOutline },
  { name: 'Bus', icon_1: busOutline },
  { name: 'Bed', icon_1: bedOutline },
  { name: 'Calendar', icon_1: calendarNumberOutline },
  { name: 'Person', icon_1: personCircleOutline }
];

// Rango de años para el ion-datetime
const currentYear = new Date().getFullYear();
const minDate = `${currentYear}-01-01`; // Fecha mínima (año actual)
const maxDate = `${currentYear + 5}-12-31`; // Fecha máxima (5 años en el futuro)

// Lista de iconos con estado de habilitado/deshabilitado
const icons = [
  { name: 'Bus', icon: busOutline, disabled: false },
  { name: 'wifi', icon: wifi, disabled: true },
  { name: 'barbell', icon: barbell, disabled: false },
  { name: 'cellular', icon: cellular, disabled: true },
  { name: 'wine', icon: wine, disabled: false },
];
</script>

<style scoped>
/* Estilo del menú */
ion-header {
  background-color: #1b77ce;
}

/* Estilo de la sección de calendario */
.datetime-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
}

/* Estilo de la sección de imágenes */
.image-section {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin: 20px 0;
}

.large-image {
  width: 60%; /* Ajusta el tamaño de la imagen grande */
  border-radius: 10px;
}

.small-images {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 35%;
}

.small-image {
  width: 50%;
  margin: 5px 0;
  border-radius: 10px;
}

/* Estilo de la sección de detalles */
.details-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  padding: 0 10px;
}

.zone-details {
  display: flex;
  align-items: center;
}

.room-details {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

ion-icon {
  margin-left: 5px;
}

/* Estilo de la sección de "Lo que ofrecemos" */
.destinations-section {
  padding: 15px;
  text-align: center;
  background-color: #000; /* Fondo negro */
  color: #fff; /* Texto en blanco */
  border-radius: 20px; /* Bordes redondeados */
  margin: 20px 0; /* Margen superior e inferior */
}

.destinations-section h3 {
  font-size: 1.2rem; /* Tamaño de texto reducido */
}

/* Estilo para los iconos deshabilitados */
.disabled-icon {
  color: gray;
  opacity: 0.5;
  pointer-events: none; /* Deshabilitar interacción */
}

.default-icon {
  color: #ffd700; /* Color dorado para iconos habilitados */
}

/* Iconos de servicios */
.icon-col {
  text-align: center;
}

ion-content {
  background-color: #000;
  color: #fff;
}
</style>
