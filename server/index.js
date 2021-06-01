const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
require('dotenv').config();

const userRoutes = require('./routes/userRoutes');

const authMiddleware = require('./middleware/authMiddleware');
const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());

app.use(express.static('public'));

app.use('/api/v1/users', userRoutes);
// fetch('http://localhost:3002/api/v1/register', {Method: 'POST', body: {} })
//app.get('/hello', authMiddleware, (req, res) => res.sendStatus(200)) //console.log(req.user)


app.listen(process.env.PORT || 3001, () => 
  console.log(` Connected to port ${process.env.PORT || 3001}`)
);