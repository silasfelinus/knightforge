const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();

// Enable CORS for all routes
app.use(cors());

// Serve static files from the "src/assets" directory
app.use('/assets', express.static(path.join(__dirname, 'src/assets')));

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
