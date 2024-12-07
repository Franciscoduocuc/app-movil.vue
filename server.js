// server.js
import express from 'express';
import sqlite3 from 'sqlite3';
import cors from 'cors';

const app = express();
const db = new sqlite3.Database('./userdb.db');  // Base de datos SQLite en el servidor

app.use(express.json());  // Para poder manejar JSON
app.use(cors());  // Permite solicitudes de otros dominios (útil para frontend)

app.post('/createUser', (req, res) => {
  const { username, email } = req.body;
  const query = 'INSERT INTO users (username, email) VALUES (?, ?)';
  
  db.run(query, [username, email], function (err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ id: this.lastID, username, email });
  });
});

app.get('/getUsers', (req, res) => {
  const query = 'SELECT * FROM users';
  
  db.all(query, [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(200).json(rows);
  });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
