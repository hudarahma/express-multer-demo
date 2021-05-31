const express = require('express');
const helmet = require('helmet');
const cors = require('cors');



const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());



app.listen(process.env.PORT || 3001, () => 
    console.log(` Connected to port ${process.env.PORT || 3001}`)
);