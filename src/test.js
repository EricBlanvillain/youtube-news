const axios = require('axios');

async function testAPI() {
  try {
    console.log('Testing API...');
    const response = await axios.get('http://localhost:3000/api/latest-video');
    
    console.log('\nLatest Video Info:');
    console.log('Title:', response.data.data.video.title);
    console.log('Video ID:', response.data.data.video.id);
    console.log('Published at:', response.data.data.video.publishedAt);
    
    console.log('\nTranscript Preview (first 3 segments):');
    const transcript = response.data.data.transcript.slice(0, 3);
    transcript.forEach((segment, index) => {
      console.log(`\nSegment ${index + 1}:`);
      console.log('Text:', segment.text);
      console.log('Start time:', segment.start);
      console.log('Duration:', segment.duration);
    });
  } catch (error) {
    console.error('Test failed:', error.response?.data || error.message);
  }
}

testAPI();