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

### Frontend

* React
* CSS
* Axios

### Backend

* Node.js
* Express.js

### AI Integration

* Groq API (Llama Model)

### Deployment

* Frontend: Vercel

---

## Live Demo

Frontend:
https://ai-student-assistant-omega.vercel.app

---

## Project Structure

AI-Student-Assistant

client/

```
src/
  components/
  services/
```

server/

```
controllers/
routes/
services/
```

---

## API Endpoint

POST /api/ai/generate

Example Request

```
{
 "prompt": "Explain JavaScript closures",
 "mode": "explain"
}
```

---

# Prompt Design Explanation

## 1. How Prompts Are Structured

The application does not send raw user input directly to the AI model.
Instead, structured prompts are constructed in the backend before calling the AI API.

Each prompt includes:

* **Role Definition** – The AI is assigned a role such as a university instructor or writing assistant.
* **Task Context** – The prompt clearly defines what task the AI should perform.
* **Explicit Instructions** – Rules are provided to guide the AI output.
* **Output Constraints** – Limits such as word count or structured output format are enforced.

Example structured prompt:

You are an experienced university instructor.
Explain the following concept to a beginner student.
Use simple language and keep the explanation under 150 words.

Concept: JavaScript Closures

This structure ensures consistent and predictable AI responses.

---

## 2. How Different Modes Affect Prompt Generation

The backend dynamically modifies the prompt depending on the selected task mode.

### Explain Concept Mode

The AI is instructed to act as a teacher and explain concepts in simple terms.

Example instruction:

Explain the following concept to a beginner student using simple language and keep the explanation under 150 words.

---

### Generate MCQs Mode

The AI is instructed to generate multiple-choice questions and return them in a structured JSON format.

Example output structure:

```
{
 "questions":[
  {
   "question":"",
   "options":["A","B","C","D"],
   "answer":""
  }
 ]
}
```

This structure allows the frontend to parse and display questions properly.

---

### Summarize Text Mode

The AI is instructed to condense long text into a short summary while preserving the key information.

Rules include limiting the output to a small number of sentences.

---

### Improve Writing Mode

The AI acts as a writing assistant and improves grammar, clarity, and readability without changing the original meaning.

---

## 3. Why Prompt Constraints Were Chosen

Prompt constraints were included to improve response reliability and reduce hallucination.

These constraints help ensure:

* Clear and concise explanations
* Predictable AI responses
* Structured output for frontend display
* Reduced generation of incorrect information

Examples of constraints used:

* Word limits for explanations
* Structured JSON output for MCQs
* Instructions to avoid inventing unknown information

These constraints help maintain consistent AI behavior and improve the user experience.

---

## Setup Instructions

Clone the repository

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

Create `.env` inside the server folder

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
