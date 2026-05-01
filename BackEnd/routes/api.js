const express = require('express');
const router = express.Router();
const { getTasks, createTask } = require('../controllers/taskController');
const { verifyToken, isAdmin } = require('../middleware/auth');

router.get('/tasks', verifyToken, getTasks);
router.post('/tasks', verifyToken, isAdmin, createTask);

module.exports = router;