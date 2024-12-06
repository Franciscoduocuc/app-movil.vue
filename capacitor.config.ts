import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'app_1',
  webDir: 'dist',
  plugins:{
    CapacitorSQLite: {
      androidDatabaseLocation: 'default',
    },
  },
};

export default config;
