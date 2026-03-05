import React, { useState } from "react";
import { generateAI } from "../services/api";
import "./AIForm.css";

function AIForm() {

  const [text, setText] = useState("");
  const [mode, setMode] = useState("explain");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {

    if (!text.trim()) {
      alert("Please enter some text");
      return;
    }

    setLoading(true);
    setResult(null);

    try {

      const res = await generateAI({
        prompt: text,
        mode: mode
      });

      if (mode === "mcq") {

        try {

          let cleaned = res.result
            .replace(/```json/g, "")
            .replace(/```/g, "")
            .trim();

          const parsed = JSON.parse(cleaned);
          setResult(parsed);

        } catch {
          setResult(res.result);
        }

      } else {

        setResult(res.result);

      }

    } catch (error) {

      console.error(error);
      setResult("Error generating response.");

    }

    setLoading(false);
  };

  const copyToClipboard = () => {

    if (!result) return;

    let textToCopy = "";

    if (typeof result === "string") {
      textToCopy = result;
    } else if (result.questions) {
      textToCopy = JSON.stringify(result, null, 2);
    }

    navigator.clipboard.writeText(textToCopy);
    alert("Response copied!");
  };

  return (

    <div className="container">

      <h2 className="title">AI Student Assistant</h2>

      <textarea
        rows="6"
        className="input-box"
        placeholder="Enter your question or topic..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <select
        className="dropdown"
        value={mode}
        onChange={(e) => setMode(e.target.value)}
      >
        <option value="explain">Explain Concept</option>
        <option value="mcq">Generate MCQs</option>
        <option value="summarize">Summarize Text</option>
        <option value="improve">Improve Writing</option>
      </select>

      <button className="generate-btn" onClick={handleSubmit}>
        Generate Response
      </button>

      {loading && (
        <div className="spinner-container">
          <div className="spinner"></div>
          <p>Generating AI response...</p>
        </div>
      )}

      <div className="result-box chat-response">

        {result && (
          <button className="copy-btn" onClick={copyToClipboard}>
            Copy Response
          </button>
        )}

        {mode === "mcq" && result?.questions ? (
          result.questions.map((q, index) => (
            <div key={index} className="question-block">

              <h4>{q.question}</h4>

              <ul>
                {q.options.map((opt, i) => (
                  <li key={i}>{opt}</li>
                ))}
              </ul>

              <p className="answer">Answer: {q.answer}</p>

            </div>
          ))
        ) : (
          <p>{typeof result === "string" ? result : ""}</p>
        )}

      </div>

    </div>

  );
}

export default AIForm;