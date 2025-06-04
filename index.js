const express = require('express');
const taskRoutes = require('./routes/taskRoutes');
const colors=require('colors')
const cors=require('cors')

const app = express();
const dotenv=require('dotenv')

app.use(express.json())
app.use(cors())
dotenv.config();


app.use('/task', taskRoutes);


app.get('/', (req, res) => {
  res.send('Osumare Task API is running!');
});


let port = process.env.PORT;
app.listen(port, () => {
console.log(`Server is running on port Number: ${port}`.black.bgWhite);
});
