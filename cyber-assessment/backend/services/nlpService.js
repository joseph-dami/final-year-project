import natural from 'natural'
import compromise from 'compromise'

export const generateQuestions = (tweets) => {
  const questions = [];

  tweets.forEach((tweet) => {
    const doc = compromise(tweet);
    const keyTerms = doc.nouns().out('array');

    if (keyTerms.length > 1) {
      questions.push({
        text: `What does "${keyTerms[0]}" mean in cybersecurity?`,
        options: keyTerms.slice(0, 4),
        answer: keyTerms[0],
      });
    }
  });

  return questions;
};
