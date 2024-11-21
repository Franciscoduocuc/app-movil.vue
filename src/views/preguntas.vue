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
      </ion-toolbar>
    </ion-header>

    <ion-toolbar>
      <ion-breadcrumbs>
        <ion-breadcrumb href="/home">Inicio</ion-breadcrumb>
        <ion-breadcrumb href="/preguntas">preguntas</ion-breadcrumb>
      </ion-breadcrumbs>
    </ion-toolbar>

    <ion-content>
      <div class="faq-section">
        <h2>Preguntas Frecuentes</h2>
        <div v-for="(faq, index) in faqs" :key="index" class="faq">
          <div class="faq-question" @click="toggleFAQ(index)">
            <h4>{{ faq.question }}</h4>
            <ion-icon :icon="faq.show ? 'chevron-up-outline' : 'chevron-down-outline'" class="faq-icon"></ion-icon>
          </div>
          <div v-if="faq.show" class="faq-answer">
            <p>{{ faq.answer }}</p>
          </div>
        </div>
      </div>
    </ion-content>

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

    </ion-page>

</template>
  
<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { flameOutline, carOutline, busOutline, bedOutline, calendarNumberOutline, personCircleOutline, } from 'ionicons/icons';
import { IonDatetime, IonDatetimeButton, IonModal } from '@ionic/vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { IonContent, IonPage, IonFooter, IonTitle, IonToolbar  } from '@ionic/vue';

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

const faqs = ref([
  { question: '¿Cuál es el horario de check-in y check-out?', answer: 'El check-in es a las 3 PM y el check-out es a las 11 AM.', show: false },
  { question: '¿Se permite fumar en las habitaciones?', answer: 'No, todas las habitaciones son para no fumadores.', show: false },
  { question: '¿Ofrecen servicio de transporte al aeropuerto?', answer: 'Sí, ofrecemos servicio de transporte bajo petición.', show: false },
  { question: '¿Hay Wi-Fi disponible?', answer: 'Sí, ofrecemos Wi-Fi gratuito en todas las áreas.', show: false },
  { question: '¿Aceptan mascotas?', answer: 'No, no se permiten mascotas en las instalaciones.', show: false },
  { question: '¿Cuál es la política de cancelación?', answer: 'Puede cancelar su reserva hasta 24 horas antes de su llegada sin cargos.', show: false },
  { question: '¿Se puede cambiar la fecha de la reserva?', answer: 'Sí, puede cambiar la fecha de su reserva, sujeto a disponibilidad.', show: false },
  { question: '¿Qué actividades se pueden realizar en el hotel?', answer: 'Ofrecemos diversas actividades, incluyendo tours guiados, clases de cocina y deportes acuáticos.', show: false },
  { question: '¿Tienen descuentos para grupos?', answer: 'Sí, ofrecemos descuentos especiales para reservas de grupo. Contáctenos para más detalles.', show: false },
  { question: '¿Hay opciones de comida disponibles en el hotel?', answer: 'Sí, contamos con un restaurante que ofrece desayuno, almuerzo y cena, así como opciones de servicio a la habitación.', show: false },
  { question: '¿Cómo puedo contactar al servicio al cliente?', answer: 'Puede contactarnos a través de la sección de "Contacto" en la app o llamando al número proporcionado en su confirmación de reserva.', show: false },
  { question: '¿El hotel ofrece servicios para personas con discapacidad?', answer: 'Sí, nuestras instalaciones son accesibles y ofrecemos servicios especiales para garantizar su comodidad.', show: false },
  {question: '¿Cómo puedo gastar mis puntos acumulados?', answer: 'Puede gastar sus puntos acumulados en diversas opciones, como descuentos en futuras reservas, mejoras de habitación, o canjeándolos por servicios adicionales como excursiones o comidas. Simplemente dirígete a la sección "Mis Puntos" en la aplicación para ver las opciones disponibles y realizar tu canje.', show: false} 
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
  
<style>
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

/* Estilo de la sección de FAQ */
.faq-section {
  padding: 20px;
  background-color: #000; /* Fondo negro */
  color: #fff; /* Texto en blanco */
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-top: 20px; /* Espaciado superior */
}

.faq {
  margin: 15px 0;
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;
}

.faq-question {
  display: flex;
  justify-content: space-between;
  cursor: pointer;
}

</style>
  