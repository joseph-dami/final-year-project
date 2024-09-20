import OpenAI from 'openai';
import { fetchCybersecurityTweets } from './socialMediaService.js';

// Initialize OpenAI GPT client
const openai = new OpenAI({
  apiKey: 'sk-sDmPl2Fb6Iu7U3H4FqIbAs6LBoUZzfAl_QVlDgR4TvT3BlbkFJg5n628tPlTVWD8MguiWkhsEKbG-iZKv31dh_Tb8UIA',
});

export default async function generateQuestions() {
  try {
    // Fetch tweets related to cybersecurity
    const tweetTexts = await fetchCybersecurityTweets();

    // Generate a prompt for GPT based on the fetched tweets
    const prompt = `Based on the following tweets about cybersecurity, generate a set of multiple-choice questions along with three options each:
    \n\n${tweetTexts}`;

    console.log('Sending request to OpenAI with prompt:', prompt);

    // Request GPT to generate questions
    const response = await openai.completions.create({
      model: 'text-davinci-003',
      prompt: prompt,
      max_tokens: 300,
      n: 1,
      stop: null,
      temperature: 0.7,
    });

    const generatedText = response.data.choices[0].text.trim();

    // Format the generated text into an array of questions
    const questions = formatQuestions(generatedText);

    console.log('Generated Questions:', questions);

    return questions;

  } catch (error) {
    console.error('Error generating questions:', error.message);
    throw error;
  }
}

// Helper function to format GPT's response into the desired structure
function formatQuestions(gptText) {
  const lines = gptText.split('\n').filter(line => line.trim() !== '');
  const questions = [];

  for (let i = 0; i < lines.length; i += 4) {
    const question = {
      id: (i / 4) + 1,
      question: lines[i],
      options: [lines[i + 1], lines[i + 2], lines[i + 3]],
    };
    questions.push(question);
  }

  return questions;
}
