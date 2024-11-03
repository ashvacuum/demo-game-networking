const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK' });
});

router.get('/users', userController.getUsers);
router.post('/users', userController.createUser);

module.exports = router;