import React from 'react';

type Response = {
  question: string;
  answer: string;
};

type ResultsDisplayProps = {
  insights: string | null;
  responses: Response[];
};

const ResultsDisplay: React.FC<ResultsDisplayProps> = ({ insights, responses }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h2 className="mb-4 text-2xl font-bold text-gray-800">Your Assessment Results</h2>

      {insights && (
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-gray-700">Insights:</h3>
          <p className="text-gray-600">{insights}</p>
        </div>
      )}

      <div>
        <h3 className="text-xl font-semibold text-gray-700">Your Responses:</h3>
        <ul className="mt-2 space-y-2">
          {responses.map((response, index) => (
            <li key={index} className="p-4 bg-gray-100 border rounded-lg">
              <p className="font-medium text-gray-800">{response.question}</p>
              <p className="text-gray-600">Your Answer: {response.answer}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ResultsDisplay;
