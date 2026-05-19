const db = require('../Database/db');

exports.todoRestaurante = (req, res) => {
  const sql = 'SELECT * FROM restaurante';

  db.query(sql, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    res.json(results);
  });
};

exports.restauranteID = (req, res) => {
  const id = req.params.id;

  const sql = 'SELECT * FROM restaurante WHERE id = ?';

  db.query(sql, [id], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err });
    }

    if (results.length === 0) {
      return res.status(404).json({ mensaje: 'Restaurante no encontrado' });
    }

    res.json(results[0]);
  });
};

exports.crearRestaurante = (req, res) => {
  const {nombre, direccion, telefono, categoria_id} = req.body;

  const sql = 'INSERT INTO restaurante (nombre, direccion, telefono, categoria_id) VALUES (?, ?, ?, ?)';

  db.query(sql, [nombre, direccion, telefono, categoria_id], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err });
    }

    res.json({
      mensaje: 'Restaurante creado correctamente',
      id: result.insertId
    });
  });
};

exports.actualizarRestaurante = (req, res) => {
  const id = req.params.id;
  const { nombre, direccion, telefono, categoria_id } = req.body;

  const sql = `
    UPDATE restaurante 
    SET nombre = ?, direccion = ?, telefono = ?, categoria_id = ?
    WHERE id = ?
  `;

  db.query(sql, [nombre, direccion, telefono, categoria_id, id], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err });
    }

    res.json({ mensaje: 'Restaurante actualizado correctamente' });
  });
};

exports.eliminarRestaurante = (req, res) => {
  const id = req.params.id;

  const sql = 'DELETE FROM restaurante WHERE id = ?';

  db.query(sql, [id], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err });
    }

    res.json({ mensaje: 'Restaurante eliminado correctamente' });
  });
};

exports.platosPorRestaurante = (req, res) => {
  const id = req.params.id; 
  const sql = 'SELECT * FROM plato WHERE restaurante_id = ?';

  db.query(sql, [id], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    res.json(results);
  });
};