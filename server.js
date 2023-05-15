const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');
const auth = require('./database/auth');
require('dotenv').config();
const https = require('https');

const app = express();

// Enable CORS for all routes
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || process.env.NODE_ENV === 'development') {
        // Allow all origins in development mode
        callback(null, true);
      } else if (
        origin === 'https://cafepurr.com' ||
        origin === 'http://192.168.5.231:9000'
      ) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    credentials: true,
  })
);
app.use(bodyParser.json());

// Middleware for token verification
function isAuthenticated(req, res, next) {
  const token = req.headers.authorization?.split(' ')[1];

  if (token) {
    const decoded = auth.verifyToken(token);
    if (decoded) {
      req.user = decoded;
      next();
    } else {
      res.status(401).json({ message: 'Invalid token' });
    }
  } else {
    res.status(401).json({ message: 'No token provided' });
  }
}

const userData = {
  name: 'Silas the Amazing',
  startPage: 'welcome',
};

app.get('/userData', (req, res) => {
  res.json(userData);
});

// Sample data for demonstration purposes
const messages = [
  {
    id: 1,
    username: 'serendipity',
    content: 'Hello!',
    timestamp: '2023-05-02T10:00:00Z',
  },
  {
    id: 2,
    username: 'silasfelinus',
    content: 'Hi, User1!',
    timestamp: '2023-05-02T10:01:00Z',
  },
];

// Function to generate a unique ID for new messages
function generateMessageId() {
  return Math.max(...messages.map((message) => message.id)) + 1;
}

// GET /messages endpoint to fetch all messages
app.get('/messages', isAuthenticated, (req, res) => {
  res.json(messages);
});

// POST /messages endpoint to send a new message
app.post('/messages', isAuthenticated, (req, res) => {
  const newMessage = {
    id: generateMessageId(),
    username: req.body.username,
    content: req.body.content,
    timestamp: new Date().toISOString(),
  };

  messages.push(newMessage);
  res
    .status(201)
    .json({ message: 'Message sent successfully', data: newMessage });
});

// Serve static files from the "src/assets" directory
app.use('/assets', express.static(path.join(__dirname, 'src/assets')));

// GET /gallery-folders endpoint to fetch the list of gallery folders
app.get('/gallery-folders', (req, res) => {
  const imagesPath = path.join(__dirname, 'src/assets/images');

  // Read the images directory
  fs.readdir(imagesPath, { withFileTypes: true }, (err, files) => {
    if (err) {
      res.status(500).send(`Error reading folder: ${err.message}`);
      return;
    }

    try {
      // Filter out the directories and return their names
      const folderNames = files
        .filter((file) => file.isDirectory())
        .map((folder) => folder.name);
      res.json(folderNames);
    } catch (error) {
      console.error('Error while sending JSON response:', error);
      res
        .status(500)
        .send(`Error while sending JSON response: ${error.message}`);
    }
  });
});

app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;
  const result = await auth.authenticate(username, password);
  if (result) {
    res.status(200).json({ user: result.user, token: result.token });
  } else {
    res.status(401).json({ message: 'Invalid username or password' });
  }
});

app.post('/api/register', async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const result = await auth.register(username, email, password);
    res.status(200).json({ user: result.user, token: result.token });
  } catch (error) {
    res.status(500).json({ message: 'Error registering user' });
  }
});

// GET /wildcards/:listName endpoint to fetch a random item from a specified text file
app.get('/wildcards/:listName', (req, res) => {
  const listName = req.params.listName;
  const filePath = path.join(
    __dirname,
    'src/assets/wildcards',
    `${listName}.txt`
  );

  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
      console.error(`Error reading file ${filePath}:`, err);
      res.status(500).send('Error: Unable to fetch random item');
    } else {
      const lines = data.trim().split('\n');
      const randomLine = lines[Math.floor(Math.random() * lines.length)];
      res.send(randomLine);
    }
  });
});
app.get('/project-list', (req, res) => {
  const filePath = path.resolve(__dirname, 'src/assets/projects.json');

  fs.readFile(filePath, 'utf-8', (err, data) => {
    try {
      if (err) throw err;
      res.status(200).header('Content-Type', 'application/json').send(data);
    } catch (err) {
      console.error('Error reading project list:', err);
      res.status(500).send({ error: 'Error reading project list' });
    }
  });
});

// GET /wildcards endpoint to fetch the list of wildcard text files
app.get('/wildcards', (req, res) => {
  const wildcardsPath = path.join(__dirname, 'src/assets/wildcards');

  fs.readdir(wildcardsPath, (err, files) => {
    if (err) {
      res.status(500).send(`Error reading folder: ${err.message}`);
      return;
    }

    try {
      // Filter out the text files and return their names without the extension
      const txtFiles = files
        .filter((file) => path.extname(file) === '.txt')
        .map((file) => path.basename(file, '.txt'));
      res.json(txtFiles);
    } catch (error) {
      console.error('Error while sending JSON response:', error);
      res
        .status(500)
        .send(`Error while sending JSON response: ${error.message}`);
    }
  });
});

// GET /images endpoint to fetch the list of images in a specified folder
app.get('/images', (req, res) => {
  const folderName = req.query.folderName || 'splash';

  const imagesPath = path.join(__dirname, 'src/assets/images', folderName);

  // Check if the folder exists
  if (!fs.existsSync(imagesPath)) {
    res.status(404).send(`Folder not found: ${imagesPath}`);
    return;
  }

  fs.readdir(imagesPath, (err, files) => {
    if (err) {
      res.status(500).send(`Error reading folder: ${err.message}`);
      return;
    }

    try {
      // Just return the file names
      res.json(files);
    } catch (error) {
      console.error('Error while sending JSON response:', error);
      res
        .status(500)
        .send(`Error while sending JSON response: ${error.message}`);
    }
  });
});

// Read the SSL certificate files
const privateKey = fs.readFileSync('./keys/privkey4.pem', 'utf8');
const certificate = fs.readFileSync('./keys/fullchain4.pem', 'utf8');

// Create a passphrase for your private key (use the one you entered when generating the key)
const passphrase = process.env.SECRET_KEY;

// Create an HTTPS service with the provided credentials
const credentials = { key: privateKey, cert: certificate, passphrase };
const httpsServer = https.createServer(credentials, app);

const PORT = process.env.PORT || 3000;
httpsServer.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
