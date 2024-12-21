const axios = require('axios');

const API_KEY = 'AIzaSyCEEE-i0R1fHWhGv78cD_YE8Qce8doqHOI';
const CHANNEL_ID = 'UCSHZKyawb77ixDdsGog4iWA';

async function quickTest() {
  try {
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&maxResults=1&order=date&type=video&key=${API_KEY}`;
    
    console.log('Testing YouTube API connection...');
    const response = await axios.get(url);
    
    if (response.data.items && response.data.items.length > 0) {
      const video = response.data.items[0];
      console.log('\nSuccess! Latest video found:');
      console.log('Title:', video.snippet.title);
      console.log('Video ID:', video.id.videoId);
      console.log('Published at:', video.snippet.publishedAt);
    } else {
      console.log('No videos found');
    }
  } catch (error) {
    console.error('Error testing API:', error.response?.data || error.message);
  }
}

quickTest();