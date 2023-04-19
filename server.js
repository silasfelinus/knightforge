const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
app.use(cors());

app.get('/images', (req, res) => {
  const folderName = req.query.folderName || 'splash';

  const imagesPath = path.join(__dirname, 'src/assets/images', folderName);

  if (!fs.existsSync(imagesPath)) {
    res.status(404).send(`Folder not found: ${imagesPath}`);
    return;
  }

  fs.readdir(imagesPath, (err, files) => {
    if (err) {
      res.status(500).send(`Error reading folder: ${err.message}`);
      return;
    }

    const imageUrls = files.map(
      (file) => `/assets/images/${folderName}/${file}`
    );
    res.json(imageUrls);
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
