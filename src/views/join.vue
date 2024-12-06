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
        <ion-breadcrumb href="/login">Iniciar sesión</ion-breadcrumb>
        <ion-breadcrumb href="/join">Registrarse</ion-breadcrumb>
      </ion-breadcrumbs>
    </ion-toolbar>

    <ion-content>
      <section class="form-register">
        <h4>Registro</h4>
        <form id="form" @submit.prevent="handleSubmit">
          <input class="controls" type="text" name="rut" v-model="form.rut" required placeholder="Ingrese su RUT" />
          <input class="controls" type="text" name="nombre" v-model="form.nombre" required placeholder="Ingrese su Nombre" />
          <input class="controls" type="number" name="edad" v-model="form.edad" required placeholder="Ingrese su Edad" min="18" max="100" />
          <input class="controls" type="email" name="correo" v-model="form.correo" required placeholder="Ingrese su Correo" />
          <input class="controls" type="password" name="password" v-model="form.password" required placeholder="Ingrese Contraseña" minlength="6" />
          <p>Estoy de acuerdo con <a href="#">Términos y Condiciones</a></p>
          <input class="botons" type="submit" value="Registrar" />
        </form>
      </section>
    </ion-content>

    <ion-footer class="footer">
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
import { flameOutline, busOutline, bedOutline, calendarNumberOutline, personCircleOutline } from 'ionicons/icons';
import { dbService } from '../database/dbService'; // Asegúrate de que la ruta sea correcta

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

// Definir la referencia reactiva 'form'
const form = ref({
  rut: '',
  nombre: '',
  password: '',
  edad: '',
  correo: '',
});

// Función para manejar el envío del formulario
const handleSubmit = async () => {
  const { nombre, correo } = form.value; // Extrae los valores necesarios
  try {
    // Llama a dbService.createUser para guardar los datos en SQLite
    await dbService.createUser(nombre, correo);

    // Limpia el formulario después de guardar los datos
    form.value = {
      rut: '',
      nombre: '',
      password: '',
      edad: '',
      correo: '',
    };

    // Muestra una notificación de éxito
    alert('Registro completado con éxito.');
  } catch (error) {
    // Manejo de errores
    console.error('Error al registrar:', error);
    alert('Ocurrió un error al registrar los datos.');
  }
};

// Inicializa la base de datos al cargar el componente
const initializeDatabase = async () => {
  try {
    await dbService.initializeDatabase();
    console.log('Base de datos inicializada.');
  } catch (error) {
    console.error('Error al inicializar la base de datos:', error);
  }
};
initializeDatabase();
</script>




<style scoped>
ion-content {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0; /* Color de fondo opcional */
}

/* Estilo de registro */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.form-register {
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

.form-register h4 {
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

.form-register p {
  text-align: center;
  font-size: 16px;
  margin: 10px 0;
}

.form-register a {
  color: #1f53c5;
  text-decoration: none;
}

.form-register a:hover {
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
</style>