# AI-Powered Student Assistant (MERN + AI Integration)

## Project Overview

The AI-Powered Student Assistant is a MERN-based web application that allows users to submit a question or text and receive an AI-generated response based on the selected task mode.

The application demonstrates how to integrate a Large Language Model (LLM) API into a MERN stack application and control the output using structured prompts.

Users can:

* Explain a concept
* Generate multiple-choice questions
* Summarize text
* Improve writing quality

The application uses **React for the frontend**, **Node.js + Express for the backend**, and integrates an **LLM API (Groq / Llama model)**.

---

## Technologies Used

* React.js
* Node.js
* Express.js
* Groq AI API (Llama 3 model)
* Axios
* dotenv

---

## Project Structure

```
AI-Student-Assistant
│
├── client
│   └── src
│       ├── components
│       ├── pages
│       └── services
│
└── server
    ├── routes
    ├── controllers
    ├── services
    │     ai.service.js
    ├── app.js
    ├── server.js
    └── .env
```

---

## Features

* User input via textarea
* Task mode selection using dropdown
* AI-generated responses
* Loading indicator while response is generated
* Structured prompts for controlled AI output
* Secure environment variable handling for API keys

---

## API Endpoint

### Generate AI Response

```
POST /api/ai/generate
```

Example Request Body:

```json
{
  "prompt": "Explain JavaScript closures",
  "mode": "explain"
}
```

Example Response:

```
JavaScript closures allow a function to access variables from its outer scope even after the outer function has finished executing.
```

---

## Setup Instructions

### 1. Clone Repository

```
git clone <your-repository-url>
cd AI-Student-Assistant
```

---

### 2. Install Backend Dependencies

```
cd server
npm install
```

---

### 3. Add Environment Variables

Create `.env` inside **server folder**

```
PORT=5000
GROQ_API_KEY=your_api_key_here
```

---

### 4. Start Backend Server

```
node server.js
```

Server will run on:

```
http://localhost:5000
```

---

### 5. Install Frontend Dependencies

```
cd client
npm install
```

---

### 6. Run React Frontend

```
npm start
```

Application will open at:

```
http://localhost:3000
```

---

# AI Integration

The application integrates the **Groq AI API** using the Llama model.

The backend sends structured prompts to the model through a dedicated service file:

```
server/services/ai.service.js
```

The AI response is then returned to the frontend via an API endpoint.

---

# Prompt Engineering Approach

To control the behavior of the AI model, structured prompts are used instead of sending raw user input directly.

Each prompt includes:

1. **Role definition**
   The AI is instructed to behave as a university instructor or writing assistant.

2. **Context**
   The AI is told what task it needs to perform.

3. **Explicit rules and constraints**

   * Limit explanation length
   * Preserve meaning
   * Produce structured output
   * Avoid hallucinating unknown information

4. **Output formatting instructions**
   For MCQ generation, the output must follow a strict JSON format.

Example structured prompt:

```
You are an experienced university instructor.

Explain the following concept to a beginner student.

Rules:
- Use simple language
- Keep explanation under 150 words
- If unsure, say you are unsure

Concept: JavaScript closures
```

This approach ensures reliable and consistent responses from the AI model.

---

# Future Improvements

* Add authentication for users
* Store past queries in a database
* Improve UI with Tailwind CSS
* Deploy the application online

---

# Conclusion

This project demonstrates how to integrate AI services into a MERN stack application and control AI output using prompt engineering techniques.
