// src/controllers/userController.js
const pool = require('../config/database');

exports.getUsers = async (req, res, next) => {
  try {
    const result = await pool.query('SELECT * FROM users');
    res.status(200).json(result.rows);
  } catch (error) {
    next(error);
  }
};

exports.createUser = async (req, res, next) => {
  const { name, email } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *',
      [name, email]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    next(error);
  }
};