import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { CapacitorSQLite } from '@capacitor-community/sqlite';
import { IonicVue } from '@ionic/vue';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/* Theme variables */
import '@ionic/vue/css/palettes/dark.system.css';


const initializeSQLite = async () => {
  try {
    // Comprueba si SQLite está disponible en el entorno actual
    const isAvailable = await CapacitorSQLite.isAvailable();
    console.log('SQLite is available:', isAvailable);

    if (isAvailable && CapacitorSQLite.isWebStore) {
      // Inicializa el almacenamiento web si estás trabajando en un navegador
      await CapacitorSQLite.initWebStore();
      console.log('Web store initialized successfully.');
    }
  } catch (error) {
    console.error('Failed to initialize SQLite:', error);
  }
};

// Crea la aplicación Vue
const app = createApp(App)
  .use(IonicVue)
  .use(router);

// Inicializa SQLite y luego monta la aplicación
initializeSQLite().then(() => {
  router.isReady().then(() => {
    app.mount('#app');
  });
});
