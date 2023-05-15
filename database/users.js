// database/users.js
const db = require('./db');
const bcrypt = require('bcrypt');

const saltRounds = 10;

async function createUser(username, email, password) {
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  return new Promise((resolve, reject) => {
    db.run(
      'INSERT INTO users (username, email, password) VALUES (?, ?, ?)',
      [username, email, hashedPassword],
      function (err) {
        if (err) {
          reject(err);
        } else {
          resolve({ id: this.lastID, username, email });
        }
      }
    );
  });
}

async function findUserByUsername(username) {
  return new Promise((resolve, reject) => {
    db.get('SELECT * FROM users WHERE username = ?', [username], (err, row) => {
      if (err) {
        reject(err);
      } else {
        resolve(row);
      }
    });
  });
}

module.exports = {
  createUser,
  findUserByUsername,
};
