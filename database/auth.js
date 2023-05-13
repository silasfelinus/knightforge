// server/auth.js
const jwt = require('jsonwebtoken');
const users = require('../database/users');
const bcrypt = require('bcrypt');

const secretKey = 'your-secret-key';

async function authenticate(username, password) {
  const user = await users.findUserByUsername(username);
  if (user && (await bcrypt.compare(password, user.password))) {
    const token = jwt.sign(
      { id: user.id, username: user.username },
      secretKey,
      { expiresIn: '1h' }
    );
    return { user, token };
  } else {
    return null;
  }
}

async function register(username, email, password) {
  const user = await users.createUser(username, email, password);
  const token = jwt.sign({ id: user.id, username: user.username }, secretKey, {
    expiresIn: '1h',
  });
  return { user, token };
}

function verifyToken(token) {
  try {
    return jwt.verify(token, secretKey);
  } catch (err) {
    return null;
  }
}

module.exports = {
  authenticate,
  register,
  verifyToken,
};
