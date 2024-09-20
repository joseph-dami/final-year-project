import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import morgan from 'morgan';
import cors from 'cors'
import connectDB from './config/db.js'
import authRoutes from './routes/auth.js'
import quizRoutes from './routes/quiz.js'
import generateQuestions from './services/nlpService.js';

const app = express();
connectDB();

app.use(express.json())
app.use(morgan('tiny'));
app.use(cors())

app.use('/api/result', authRoutes);
app.use('/api/questions', quizRoutes);

app.get('/generate-questions', async (req, res) => {
  try {
    const questions = await generateQuestions();
    res.json(questions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
