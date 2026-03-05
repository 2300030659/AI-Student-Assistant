import React from "react";
import AIForm from "./components/AIForm";
import "./index.css";

function App() {
  return (
    <div className="app-wrapper">

      <h1 className="main-heading">
        AI Powered Student Assistant
      </h1>

      <p className="subtitle">
        Ask questions, summarize text, generate MCQs, or improve writing using AI
      </p>

      <AIForm />

    </div>
  );
}

export default App;