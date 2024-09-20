import express from 'express'
import { getQuestions, insertQuestions, dropQuestions } from '../controllers/quizController.js'
const router = express.Router();

router.route('/').get(getQuestions).post(insertQuestions).delete(dropQuestions)

export default router;
