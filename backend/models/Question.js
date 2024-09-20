import mongoose from 'mongoose'

const QuestionSchema = new mongoose.Schema({
  questions: { type: Array, default: [] },
  answers: { type: Array, default: []  },
  createdAt: { type: Date, default: Date.now},
});

const Question = new mongoose.model("Question", QuestionSchema)

export default Question

