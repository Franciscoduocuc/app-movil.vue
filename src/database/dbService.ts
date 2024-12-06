import { CapacitorSQLite, SQLiteDBConnection } from '@capacitor-community/sqlite';

export const dbService = {
  sqlite: CapacitorSQLite,

  async initializeDatabase() {
    try {
      // Crear la conexión con la base de datos
      const dbConnection : SQLiteDBConnection = await this.sqlite.createConnection({
        database: 'userdb',
        encrypted: false,
        mode: 'no-encryption',
        version: 1,
        readonly: false,
      });

      // Abre la base de datos
      await dbConnection.open();

      // Crea la tabla si no existe
      await dbConnection.execute(`
        CREATE TABLE IF NOT EXISTS users (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          username TEXT NOT NULL,
          email TEXT NOT NULL
        )
      `);

      // Cierra la conexión
      await dbConnection.close();

      // Libera la conexión
      await this.sqlite.closeConnection('userdb');
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : String(error);
      throw new Error('Database initialization failed: ' + errorMessage);
    }
  },

  async createUser(username: string, email: string) {
    try {
      // Crea la conexión usando un objeto de configuración
      const dbConnection: SQLiteDBConnection = await this.sqlite.createConnection({
        database: 'userdb',
        encrypted: false,
        mode: 'no-encryption',
        version: 1,
        readonly: false, // Especifica si la conexión es solo lectura
      });

      // Abre la base de datos
      await dbConnection.open();

      // Inserta un nuevo usuario
      await dbConnection.run('INSERT INTO users (username, email) VALUES (?, ?)', [username, email]);

      // Cierra la conexión
      await dbConnection.close();

      // Libera la conexión
      await this.sqlite.closeConnection('userdb');
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : String(error);
      throw new Error('Error creating user: ' + errorMessage);
    }
  },
};
