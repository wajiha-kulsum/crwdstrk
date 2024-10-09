"use client";
import React, { useState } from 'react';

const MentalHealthAssessment = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [responses, setResponses] = useState([]);

  const questions = [
    {
      question: "How often have you felt anxious in the past two weeks?",
      options: [
        { id: 1, text: "Never" },
        { id: 2, text: "Sometimes" },
        { id: 3, text: "Often" },
        { id: 4, text: "Always" },
      ],
    },
    {
      question: "How would you rate your overall mood in the past month?",
      options: [
        { id: 1, text: "Very low" },
        { id: 2, text: "Low" },
        { id: 3, text: "Neutral" },
        { id: 4, text: "Positive" },
      ],
    },
    {
      question: "How often do you struggle with sleep?",
      options: [
        { id: 1, text: "Never" },
        { id: 2, text: "Sometimes" },
        { id: 3, text: "Often" },
        { id: 4, text: "Always" },
      ],
    },
    {
      question: "Do you feel supported by friends and family?",
      options: [
        { id: 1, text: "Not at all" },
        { id: 2, text: "Sometimes" },
        { id: 3, text: "Mostly" },
        { id: 4, text: "Always" },
      ],
    },
  ];

  const currentQuestion = questions[currentQuestionIndex];

  const handleOptionClick = (id) => {
    setSelectedOption(id);
  };

  const handleSubmit = () => {
    if (selectedOption !== null) {
      setResponses([...responses, { question: currentQuestion.question, answer: selectedOption }]);
      setSelectedOption(null);
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        alert("Assessment completed!"); // Replace this with end-of-assessment logic
        console.log("Responses:", responses);
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen text-gray-600">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">{currentQuestion.question}</h2>

        <ul className="space-y-4">
          {currentQuestion.options.map((option) => (
            <li key={option.id}>
              <button
                onClick={() => handleOptionClick(option.id)}
                className={`w-full py-3 px-4 text-left rounded-lg border ${
                  selectedOption === option.id
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                }`}
              >
                {option.text}
              </button>
            </li>
          ))}
        </ul>

        <div className="mt-6">
          <button
            onClick={handleSubmit}
            className="w-full py-3 px-4 bg-blue-400 text-white font-extrabold rounded-lg hover:bg-pink-800"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default MentalHealthAssessment;
