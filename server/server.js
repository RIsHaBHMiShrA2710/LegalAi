require('dotenv').config();
const express = require('express');
const mongooseConnection = require('./config/mongooseConfig');
const { PORT } = require('./config/dotenvConfig');
const isAuthenticated = require('./middleware/isAuthenticated');
const authController = require('./controllers/authController');
const messageController = require('./controllers/messageController');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/register', authController.registerUser);
app.post('/login', authController.loginUser);


app.post('/generate-response', isAuthenticated, messageController.generateResponse);
app.delete('/delete-response', isAuthenticated, messageController.deleteResponse);
app.get('/get-messages', isAuthenticated, messageController.getMessages);

app.listen(PORT, () => {
  console.log(`Server listening at ${PORT}`);


  mongooseConnection.once('open', () => {
    console.log('Connected to MongoDB');
  });
});
