const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();

// Enable CORS for all routes
app.use(cors());

const userData = {
  name: 'Silas the Amazing',
  startPage: 'welcome',
};

app.get('/userData', (req, res) => {
  res.json(userData);
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

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
