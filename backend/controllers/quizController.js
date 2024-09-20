import Question from '../models/Question.js'
import questions, { answers } from '../data/questions.js'

export const getQuestions = async (req, res) => {
  try {
    const q = await Question.find();
    res.json(q)
} catch (error) {
    res.json({ error })
}
};

/** insert all questinos */
export const insertQuestions = async (req, res) => {
  try {
      const data = await Question.insertMany({ questions, answers })

      res.json({ msg: "Data Saved Successfully...!", data})
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

/** Delete all Questions */
export const dropQuestions =  async (req, res) => {
  try {
       await Question.deleteMany();
       res.json({ msg: "Questions Deleted Successfully...!"});
  } catch (error) {
       res.json({ error })
  }
}
