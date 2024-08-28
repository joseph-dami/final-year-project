import Question from '../models/Question'

export const getQuestions = async (req, res) => {
  const questions = await Question.find().limit(10);
  res.json(questions);
};

export const submitAnswers = async (req, res) => {
  const { answers } = req.body;
  let score = 0;

  for (const answer of answers) {
    const question = await Question.findById(answer.questionId);
    if (question.answer === answer.selected) {
      score++;
    }
  }

  res.json({ score });
};
