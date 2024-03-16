const ContactMessage = require('../models/review.model'); // Adjust the path as necessary

// Function to handle a POST request to create a new contact message
exports.create_Message = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const newMessage = new ContactMessage({ name, email, message });
    await newMessage.save();
    res.status(201).json({ success: true, message: 'Message saved successfully', data: newMessage });
  } catch (error) {
    console.error('Error saving message:', error);
    res.status(400).json({ success: false, message: 'Error saving message', error: error.message });
  }
};