"use client";

import { useState } from "react";

export default function Page() {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  const [categories, setCategories] = useState("");
  const [translateText, setTranslateText] = useState("");

  const [isProcessing, setIsProcessing] = useState(false);
  const [isCategoring, setIsCategoring] = useState(false);
  const [isTranslating, setIsTranslating] = useState(false);

  const handleSubmit = async () => {
    setOutputText("");
    setCategories("");
    setTranslateText("");
    setIsProcessing(true);
    setIsCategoring(true);

    const response = await fetch("http://localhost:8000/process-text", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: inputText }),
    });

    const data = await response.json();
    setOutputText(data.processed_text);
    setIsProcessing(false);

    const responseCategories = await fetch("http://localhost:8000/categories", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: inputText }),
    });
    const dataCategories = await responseCategories.json();
    setCategories(dataCategories.categories);
    setIsCategoring(false);
  };

  const handleTranslateSubmit = async () => {
    setTranslateText("");
    setIsTranslating(true);

    const response = await fetch("http://localhost:8000/translation", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: outputText }),
    });

    const data = await response.json();
    setTranslateText(data.translate_text);
    setIsTranslating(false);
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


      {isProcessing ? (
        <div className="flex items-center space-x-2">
          <svg className="animate-spin h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
          </svg>
          <div>Processing... </div>
        </div>
        ) : (
          <div>
            {outputText && (
              <div>
                {isCategoring ? (
                  <div className="flex items-center space-x-2">
                    <svg className="animate-spin h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                    </svg>
                    <div>Categoring...</div>
                  </div>
                  ) : (
                  <div className="flex flex-wrap gap-2 my-2">
                    {categories.map((category, index) => (
                      <span
                        key={index}
                        className="bg-blue-100 text-blue-800 text-sm font-medium px-4 py-2 rounded-full border border-blue-300"
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                  )
                }
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
                <button
                    className="font-semibold my-2 py-1 px-8 rounded bg-green-400 hover:bg-green-500"
                    onClick={handleTranslateSubmit}
                  >
                    Translate
                </button>
                
                {isTranslating ? ( 
                  <div className="flex items-center space-x-2">
                    <svg className="animate-spin h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                    </svg>
                    <div>Translating... </div>
                  </div>
                  ) : (
                    <div>
                      { translateText && (
                      <div>
                        <label htmlFor="outputTranslation" className="block font-medium mb-2">Translate Text :</label>
                        <textarea
                          id="outputTranslation"
                          rows="5"
                          placeholder="Translate text ..."
                          className="w-full p-2 border border-gray-300 rounded bg-gray-100 focus:outline-none"
                          value={translateText}
                          disabled
                        />
                      </div>
                      )}
                    </div>
                  )}
              </div>
            )}
          </div>
        )}
    </div>
  );
}
