import axios from 'axios';

// Function to fetch tweets with specific keywords
export async function fetchCybersecurityTweets() {
  try {
    const query = 'cybersecurity';
    const url = `https://api.twitter.com/2/tweets/search/recent?query=${query}&max_results=10`;

    // Make a request to Twitter API v2
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${process.env.TWITTER_BEARER_TOKEN}`,
      },
    });

    // Extract tweet texts
    const tweetTexts = response.data.data.map(tweet => tweet.text).join(' ');

    return tweetTexts;

  } catch (error) {
    console.error('Error fetching tweets:', error.message);
    throw error;
  }
}
