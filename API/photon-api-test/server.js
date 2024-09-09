const express = require('express');
const axios = require('axios');
const cors = require('cors');  
const app = express();
const port = 3000;

app.use(cors());

app.use(express.json());

app.get('/api/search-place', async (req, res) => {
  const query = req.query.q;
  if (!query) {
    return res.status(400).send('Falta el parámetro de búsqueda');
  }

  try {
    const response = await axios.get(`https://photon.komoot.io/api/?q=${encodeURIComponent(query)}`);
    res.json(response.data);
  } catch (error) {
    console.error('Error al buscar en Photon:', error);
    res.status(500).send('Error al buscar en Photon');
  }
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
