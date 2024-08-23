import express from 'express'
import bodyParser from 'body-parser'
import connectDB from './config/db.js'

const app = express();
connectDB();

app.use(bodyParser.json());

app.use('/api/auth', require('./routes/auth'));
app.use('/api/quiz', require('./routes/quiz'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
