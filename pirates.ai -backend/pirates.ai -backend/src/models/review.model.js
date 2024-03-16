const mongoose = require('mongoose');

// Define schema
const contactMessageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: false
  },
  email: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: false
  },
}, {
  timestamps: true, // Optional: adds createdAt and updatedAt fields automatically
});

const ContactMessage = mongoose.model('ContactMessage', contactMessageSchema);

module.exports = ContactMessage;
