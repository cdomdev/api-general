import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
app.use(cors());

app.use(express.json())
import {dbConnect}  from './config/mongo.js';
app.use('/api/users', require('./app/routes'))
// import {} from './app/routes/index.js'
app.use('/', index) 


try {
  dbConnect();
} catch (error) {
  console.log(error);
}

const port = parseInt(process.env.PORT) || 3000;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});


app.get('/', (req, res) => {
  const name = process.env.NAME || 'World';
  res.send(`Hello ${name}!`);
});

