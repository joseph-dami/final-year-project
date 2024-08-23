import { TwitterApi } from 'twitter-api-v2'

const twitterClient = new TwitterApi({
  appKey: 'your_app_key',
  appSecret: 'your_app_secret',
  accessToken: 'your_access_token',
  accessSecret: 'your_access_secret',
});

export const getCyberSecurityTweets = async () => {
  const tweets = await twitterClient.v2.search('#cybersecurity', { max_results: 100 });
  return tweets.data.map(tweet => tweet.text);
};
