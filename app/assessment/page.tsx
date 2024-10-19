"use client";

import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi"; // For icons

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
  answer: string;
};

const Assessment: React.FC = () => {
  const [startAssessment, setStartAssessment] = useState<boolean>(false); // New state for assessment start
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [responses, setResponses] = useState<Response[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [questionCount, setQuestionCount] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [insights, setInsights] = useState<string | null>(null);
  const [timer, setTimer] = useState(120); // 2 minutes for the timer

  const fetchQuestion = useCallback(async (previousAnswer?: string) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post("http://localhost:5000/questions", {
        previousAnswer,
      });
      const questionData = response.data;

      if (questionData && questionData.question && Array.isArray(questionData.options)) {
        setCurrentQuestion({
          question: questionData.question,
          options: questionData.options.map((text: string, index: number) => ({
            id: index + 1,
            text,
          })),
        });
      } else {
        throw new Error("Unexpected question data structure");
      }
    } catch (error) {
      console.error("Error fetching question:", error);
      if (axios.isAxiosError(error)) {
        setError(`Failed to fetch question. ${error.message}. ${error.response?.data?.error || ""}`);
      } else {
        setError(`Failed to fetch question. ${error instanceof Error ? error.message : "Unknown error"}`);
      }
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (startAssessment) {
      fetchQuestion();
    }
  }, [startAssessment, fetchQuestion]);

  useEffect(() => {
    if (timer > 0 && startAssessment) {
      const interval = setInterval(() => setTimer(timer - 1), 1000);
      return () => clearInterval(interval);
    }
  }, [timer, startAssessment]);

  const handleOptionClick = useCallback((text: string) => {
    setSelectedOption(text);
  }, []);

  const handleSubmit = useCallback(async () => {
    if (selectedOption && currentQuestion) {
      const newResponse = { question: currentQuestion.question, answer: selectedOption };
      setResponses((prev) => [...prev, newResponse]);
      setSelectedOption(null);

      setQuestionCount((prev) => prev + 1);

      if (questionCount < 3) {
        await fetchQuestion(selectedOption);
      } else {
        setLoading(true);
        try {
          const response = await axios.post("http://localhost:5000/analyze", {
            responses: [...responses, newResponse],
          });
          setInsights(response.data.insights);
        } catch (error) {
          console.error("Error analyzing responses", error);
          setError("Failed to analyze responses. Please try again.");
        } finally {
          setLoading(false);
        }
      }
    }
  }, [selectedOption, currentQuestion, questionCount, responses, fetchQuestion]);

  if (!startAssessment) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-pink-50 to-blue-50">
        <div className="w-full max-w-md p-8 text-center bg-white rounded-lg shadow-lg">
          <h2 className="mb-6 text-4xl font-extrabold text-gray-800">📝 Take Your Assessment</h2>
          <p className="mb-6 text-lg text-gray-600">
            Ready to begin? Start your test!
          </p>
          <button
            onClick={() => setStartAssessment(true)}
            className="px-6 py-3 font-semibold text-white transition duration-300 transform bg-blue-500 rounded-lg shadow-lg hover:bg-blue-600 hover:scale-105"
          >
            Start Assessment
          </button>
        </div>
      </div>
    );
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div className="w-full max-w-lg p-8 mx-auto mt-10 bg-white rounded-lg shadow-xl">
        <h2 className="mb-4 text-3xl font-bold text-gray-800">Oops, something went wrong</h2>
        <p className="mb-6 text-red-500">{error}</p>
        <button
          onClick={() => fetchQuestion()}
          className="px-6 py-3 font-semibold text-white bg-red-500 rounded-lg shadow hover:bg-red-600"
        >
          Retry
        </button>
      </div>
    );
  }

  if (insights) {
    return (
      <div className="w-full max-w-lg p-8 mx-auto mt-10 bg-white rounded-lg shadow-xl">
        <h2 className="mb-4 text-2xl font-bold text-gray-800">Your Insights</h2>
        <p className="font-medium text-gray-700">{insights}</p>
      </div>
    );
  }

  if (!currentQuestion) {
    return <div>No question available.</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-pink-50 to-blue-50">
      <div className="w-full max-w-5xl p-8 bg-white rounded-lg shadow-lg"> {/* Expanded card width */}
        {/* Header with back button, title, and timer */}
        <div className="flex items-center justify-between mb-6">
          <button className="text-gray-700">
            <FiArrowLeft size={24} />
          </button>
          <h2 className="text-xl font-semibold">Aptitude Test</h2>
          <div className="text-gray-500">{`${Math.floor(timer / 60)}:${timer % 60 < 10 ? `0${timer % 60}` : timer % 60}`}</div>
        </div>

        {/* Question Count */}
        <p className="mb-4 text-sm text-purple-500">Questions {questionCount + 1} of 5</p>

        {/* Question Title */}
        <h2 className="mb-6 text-2xl font-bold text-gray-800">{currentQuestion.question}</h2>

        {/* Options */}
        <div className="space-y-4">
          {currentQuestion.options.map((option) => (
            <div
              key={option.id}
              className={`relative flex items-center justify-between p-6 border rounded-lg cursor-pointer transition-all ${
                selectedOption === option.text
                  ? "bg-purple-100 border-purple-400"
                  : "bg-gray-50 hover:bg-gray-100"
              }`}
              onClick={() => handleOptionClick(option.text)}
            >
              <p className="text-gray-700">{option.text}</p>
              <span
                className={`w-6 h-6 border rounded-full flex items-center justify-center ${
                  selectedOption === option.text
                    ? "border-purple-600 bg-purple-500"
                    : "border-gray-400"
                }`}
              >
                {selectedOption === option.text && (
                  <span className="w-4 h-4 bg-white rounded-full"></span>
                )}
              </span>
            </div>
          ))}
        </div>

        {/* Next Button */}
        <div className="mt-8">
          <button
            onClick={handleSubmit}
            disabled={!selectedOption}
            className={`w-full py-3 text-lg font-semibold flex items-center justify-center rounded-lg transition-all ${
              selectedOption
                ? "bg-black text-white hover:bg-gray-800"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            Next <FiArrowRight className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Assessment;
