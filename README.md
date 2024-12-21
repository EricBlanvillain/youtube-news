# YouTube News - Lex Fridman Video Transcripts

Automated system to fetch and summarize Lex Fridman's YouTube videos transcripts.

## Features
- Fetches latest videos from Lex Fridman's channel
- Extracts video transcripts
- Provides easy-to-use API endpoints

## Setup
1. Install dependencies:
```bash
npm install
```

2. Configure environment:
- Copy `.env.example` to `.env`
- Add your YouTube API key

3. Run the server:
```bash
npm run dev
```

## API Endpoints
- GET /api/latest-video: Get latest video with transcript

## Stack
- Node.js
- Express
- YouTube API
- YouTube Transcript API