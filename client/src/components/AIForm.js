import React, { useState } from "react";
import { generateAI } from "../services/api";

function AIForm() {

  const [text, setText] = useState("");
  const [mode, setMode] = useState("explain");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {

    setLoading(true);

    const res = await generateAI({
      prompt: text,
      mode: mode
    });

    setResult(res.result);

    setLoading(false);
  };

  return (

    <div>

      <textarea
        placeholder="Enter your text"
        onChange={(e) => setText(e.target.value)}
      />

      <br/>

      <select onChange={(e) => setMode(e.target.value)}>

        <option value="explain">Explain Concept</option>
        <option value="mcq">Generate MCQs</option>
        <option value="summarize">Summarize</option>
        <option value="improve">Improve Writing</option>

      </select>

      <br/>

      <button onClick={handleSubmit}>Submit</button>

      {loading && <p>Generating response...</p>}

      <h3>AI Response</h3>

      <p>{result}</p>

    </div>

  );
}

export default AIForm;