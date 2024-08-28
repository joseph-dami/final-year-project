import express from 'express'
import { getQuestions, submitAnswers } from '../controllers/quizController'
const router = express.Router();

router.get('/questions', getQuestions);
router.post('/submit', submitAnswers);

module.exports = router;
