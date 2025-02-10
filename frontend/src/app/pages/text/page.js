"use client";

import { useState } from "react";

export default function Page() {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");

  const handleSubmit = async () => {
    const response = await fetch("http://localhost:8000/process-text", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: inputText }),
    });

    const data = await response.json();
    setOutputText(data.processed_text);
  };

  return (
    <div>
      <div className="mb-4">
        <label htmlFor="input" className="block font-medium mb-2">Article Text :</label>
        <textarea
          id="input"
          rows="8"
          placeholder="Text"
          className="w-full p-2 border border-gray-300 rounded bg-gray-100"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button
          className="font-semibold my-2 py-1 px-8 rounded bg-blue-400 hover:bg-blue-500"
          onClick={handleSubmit}
        >
          Process
        </button>
      </div>
      
      <div>
        <label htmlFor="output" className="block font-medium mb-2">Processed Text :</label>
        <textarea
          id="output"
          rows="10"
          placeholder="Processed text ..."
          className="w-full p-2 border border-gray-300 rounded bg-gray-100 focus:outline-none"
          value={outputText}
          disabled
        />
      </div>
    </div>
  );
}
