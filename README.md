# AI Powered Student Assistant (MERN + AI)

## Overview

AI Powered Student Assistant is a MERN-based web application that allows students to ask questions, generate MCQs, summarize text, and improve writing quality using AI.

The application demonstrates integration of an LLM API with a MERN stack and uses structured prompts to control AI responses.

---

## Features

* Explain academic concepts
* Generate MCQs
* Summarize long text
* Improve writing quality
* Structured AI prompts
* Loading animation
* Modern UI

---

## Tech Stack

Frontend

* React
* CSS

Backend

* Node.js
* Express

AI Integration

* Groq API (Llama Model)

---

## Project Structure

AI-Student-Assistant

```
client/
  src/
    components/
    services/

server/
  controllers/
  routes/
  services/
```

---

## API Endpoint

POST /api/ai/generate

Example Request:

```
{
 "prompt":"Explain JavaScript closures",
 "mode":"explain"
}
```

---

## Prompt Engineering Approach

Prompts are structured with:

* Role definition
* Task instructions
* Output constraints
* Guardrails to reduce hallucination

Example prompt:

You are an experienced university instructor.
Explain the following concept to a beginner student.
Use simple language and keep the explanation under 150 words.

Concept: JavaScript Closures

---

## Setup Instructions

Backend

```
cd server
npm install
node server.js
```

Frontend

```
cd client
npm install
npm start
```

---

## Environment Variables

server/.env

```
PORT=5000
GROQ_API_KEY=your_api_key
```

---

## Future Improvements

* Authentication
* Chat history
* Database storage
* Improved UI
