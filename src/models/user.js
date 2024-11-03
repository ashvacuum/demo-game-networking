const pool = require('../config/database');

const userSchema = `
  CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
  );
`;

const initializeUserTable = async () => {
  try {
    await pool.query(userSchema);
    console.log('Users table initialized');
  } catch (error) {
    console.error('Error initializing users table:', error);
    throw error;
  }
};

module.exports = {
  initializeUserTable
};