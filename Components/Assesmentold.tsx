"use client";
import Link from 'next/link';
import React, { useState } from 'react';

// Define types for question and option
type Option = {
  id: number;
  text: string;
};

type Question = {
  question: string;
  options: Option[];
};

type Response = {
  question: string;
  answer: number;
};

const Assesment: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [responses, setResponses] = useState<Response[]>([]);

  const questions: Question[] = [
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

  const handleOptionClick = (id: number) => {
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
    <div className="flex items-center justify-center w-full min-h-screen text-gray-600 bg-white">
      <div className="w-full max-w-2xl p-6 mt-8 bg-white border border-gray-300 rounded-lg shadow-lg"> {/* Increased width to max-w-2xl */}
        {/* Parent Card with Logo and Question Number */}
        <div className="mb-6">
          <img src="/images/instructions/honest.png" alt="Logo" className="w-1/3 ml-48 mr-4 h-1/3" /> {/* Replace with your logo path */}
          <h1 className='ml-4 text-xl font-bold'>
            <i>Mental Health is not a destination but a process. It's about how you drive, not where you're going.</i>
          </h1>
        </div>

        <div className="w-full max-w-full p-6 mt-6 bg-white border border-gray-300 rounded-lg shadow-lg"> {/* Child container with full width */}
          <h1 className="text-xl font-bold text-gray-800">Question {currentQuestionIndex + 1}</h1>
          <h2 className="mt-4 mb-6 text-xl font-bold text-gray-800">{currentQuestion.question}</h2>

          <ul className="flex flex-col items-center space-y-4"> {/* Centering options */}
            {currentQuestion.options.map((option) => (
              <li key={option.id} className="flex justify-center w-full"> {/* Center button */}
                <button
                  onClick={() => handleOptionClick(option.id)}
                  className={`w-full py-3 px-4 text-left rounded-lg border-2 transition-all duration-300 ${
                    selectedOption === option.id
                      ? "bg-gray-900 text-white border-gray-900 text-xl"
                      : "bg-gray-100 text-gray-800 border-gray-600 text-xl hover:bg-gray-600 hover:shadow-lg"
                  }`}
                >
                  {option.text}
                </button>
              </li>
            ))}
          </ul>

          <div className="flex justify-center mt-6"> {/* Center button */}
            <button
              onClick={handleSubmit}
              className="px-4 py-3 text-xl font-bold text-white transition-transform duration-300 transform bg-gray-900 border-2 border-gray-900 rounded-lg w-96 hover:bg-gray-800 hover:scale-105"
            >
              Next
            </button>
          </div>
          <Link href="/home" passHref>
            <span className='relative text-gray-900 cursor-pointer hover:underline top-3'>Go back home? Click here.</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Assesment;
