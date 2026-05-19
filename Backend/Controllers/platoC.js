const db = require('../Database/db');

exports.todoPlato = (req, res) => {
  const sql = 'SELECT * FROM plato';

  db.query(sql, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    res.json(results);
  });
};

 exports.platoID = (req, res) => {
  const id = req.params.id;

  const sql = 'SELECT * FROM plato WHERE id = ?';

  db.query(sql, [id], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err });
    }

    if (results.length === 0) {
      return res.status(404).json({ mensaje: 'Plato no encontrado' });
    }

    res.json(results[0]);
  });
};

exports.crearPlato = (req, res) => {
  const {nombre, precio, descripcion, restaurante_id  } = req.body;

  const sql = 'INSERT INTO plato (nombre, precio, descripcion, restaurante_id) VALUES (?, ?, ?, ?)';

  db.query(sql, [nombre, precio, descripcion, restaurante_id ], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err });
    }

    res.json({
      mensaje: 'Plato creado correctamente',
      id: result.insertId
    });
  });
};

exports.actualizarPlato = (req, res) => {
  const id = req.params.id;
  const { nombre, precio, descripcion, restaurante_id } = req.body;

  const sql = `
    UPDATE plato 
    SET nombre = ?, precio = ?, descripcion = ?, restaurante_id = ?
    WHERE id = ?
  `;

  db.query(sql, [nombre, precio, descripcion, restaurante_id, id], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err });
    }

    res.json({ mensaje: 'Plato actualizado correctamente' });
  });
};

exports.eliminarPlato = (req, res) => {
  const id = req.params.id;

  const sql = 'DELETE FROM plato WHERE id = ?';

  db.query(sql, [id], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err });
    }

    res.json({ mensaje: 'Plato eliminado correctamente' });
  });
};