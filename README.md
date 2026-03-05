# AI Powered Student Assistant (MERN + AI Integration)

## Project Overview

AI Powered Student Assistant is a MERN-based web application that allows users to input questions or text and receive AI-generated responses based on different task modes.

The application demonstrates integration of an AI service into a MERN stack and uses structured prompts to control AI output.

---

## Features

* Explain academic concepts
* Generate Multiple Choice Questions (MCQs)
* Summarize long text
* Improve writing quality
* Loading animation while AI generates responses
* Structured AI prompts for reliable responses
* Modern responsive UI

---

## Tech Stack

Frontend

* React
* CSS
* Axios

Backend

* Node.js
* Express.js

AI Integration

* Groq API (Llama Model)

Deployment

* Frontend: Vercel

---

## Live Demo

Frontend:
https://ai-student-assistant-omega.vercel.app

---

## Project Structure

AI-Student-Assistant

client/

```id="struct01"
src/
components/
services/
```

server/

```id="struct02"
controllers/
routes/
services/
```

---

## API Endpoint

POST /api/ai/generate

Example Request:

```id="req01"
{
 "prompt": "Explain JavaScript closures",
 "mode": "explain"
}
```

---

## Prompt Engineering Approach

The application does not send raw user input directly to the AI model.

Each prompt includes:

* Role definition
* Context for the AI
* Output constraints
* Guardrails to reduce hallucination

Example structured prompt:

You are an experienced university instructor.
Explain the following concept to a beginner student.
Use simple language and keep the explanation under 150 words.

Concept: JavaScript Closures

---

## Setup Instructions

Clone the repository:

```
git clone https://github.com/2300030659/AI-Student-Assistant.git
```

### Backend Setup

```
cd server
npm install
node server.js
```

### Frontend Setup

```
cd client
npm install
npm start
```

---

## Environment Variables

Create `.env` inside server folder.

```
PORT=5000
GROQ_API_KEY=your_api_key
```

---

## Future Improvements

* Chat interface for AI responses
* User authentication
* Save query history
* Database integration
* Backend deployment
