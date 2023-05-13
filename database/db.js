// database/db.js
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./cafepurr.db');

db.serialize(() => {
  db.run(
    'CREATE TABLE if not exists users (id INTEGER PRIMARY KEY, username TEXT UNIQUE, email TEXT UNIQUE, password TEXT)'
  );
});

module.exports = db;
