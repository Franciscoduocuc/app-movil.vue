import axios from 'axios';

export const apiService = {
  // Función para crear un nuevo usuario
  async createUser(username, email, password, rut, edad) {
    try {
      const response = await axios.post('http://localhost:3000/api/users', { 
        username, 
        email, 
        password, 
        rut, 
        edad 
      });
      console.log('User created:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error creating user:', error);
      throw error;
    }
  },

  // Función para obtener todos los usuarios
  async getUsers() {
    try {
      const response = await axios.get('http://localhost:3000/getUsers');
      console.log('Users:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error fetching users:', error);
      throw error;
    }
  },
};
