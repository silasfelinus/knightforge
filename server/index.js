const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mariadb = require('mariadb');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const pool = mariadb.createPool({
  host: '0.0.0.0:3001',
  user: 'silasfelinus',
  password: 'insecure',
  database: 'YOUR_MARIADB_DATABASE',
  connectionLimit: 5,
});

// Fetch all records
app.get('/api/records', async (req, res) => {
  let connection;
  try {
    connection = await pool.getConnection();
    const rows = await connection.query('SELECT * FROM your_table_name');
    res.send(rows);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  } finally {
    if (connection) {
      connection.release();
    }
  }
});

// Create a new record
app.post('/api/records', async (req, res) => {
  const { name, email } = req.body;
  let connection;
  try {
    connection = await pool.getConnection();
    await connection.query(
      'INSERT INTO your_table_name (name, email) VALUES (?, ?)',
      [name, email]
    );
    res.sendStatus(201);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  } finally {
    if (connection) {
      connection.release();
    }
  }
});

// Update a record
app.put('/api/records/:id', async (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  let connection;
  try {
    connection = await pool.getConnection();
    await connection.query(
      'UPDATE your_table_name SET name = ?, email = ? WHERE id = ?',
      [name, email, id]
    );
    res.sendStatus(200);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  } finally {
    if (connection) {
      connection.release();
    }
  }
});

// Delete a record
app.delete('/api/records/:id', async (req, res) => {
  const { id } = req.params;
  let connection;
  try {
    connection = await pool.getConnection();
    await connection.query('DELETE FROM your_table_name WHERE id = ?', [id]);
    res.sendStatus(200);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  } finally {
    if (connection) {
      connection.release();
    }
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
