const express = require('express');
const restauranteR = require('./Routes/restauranteR');
const platoR = require('./Routes/platoR');


const app = express();
const port = 3000;

app.use(express.json());

app.use('/restaurantes', restauranteR);
app.use('/platos', platoR);

app.get('/', (req, res) => {
  res.send('El Gloriosos Backend "La Ruta del Sabor" funcionando correctamente');
});

app.use((req, res) => {
  res.status(404).json({ mensaje: 'Ruta no encontrada' });
});

app.listen(port, () => {
  console.log(`Servidor corriendo exitosamente en http://localhost:${port}`);
});