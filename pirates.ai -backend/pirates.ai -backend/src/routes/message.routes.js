// contactMessageRoutes.js
const express = require('express');
const router = express.Router();
const MessageController = require('../controllers/message.controller'); // Adjust the path as necessary

// POST route for creating a new contact message
router.post('/messages', MessageController.create_Message);

module.exports = router;
