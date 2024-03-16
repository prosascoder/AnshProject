require('dotenv').config();
const jwt = require('jsonwebtoken');
const SECRET_KEY = process.env.SECRET_KEY; // Fixed the typo here

const generateToken = (userId) => {
    const token = jwt.sign({ userId }, SECRET_KEY, { expiresIn: '1h' })
    return token;
}

const getUserIdFromToken = (token) => {
    const decodedToken = jwt.verify(token, SECRET_KEY)
    return decodedToken.userId
}

module.exports = { generateToken, getUserIdFromToken };
