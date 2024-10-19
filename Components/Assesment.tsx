"use client"

// import React, { useEffect, useState } from 'react';
// import axios from 'axios'; // Axios to fetch data from the backend

// type Option = {
//   id: number;
//   text: string;
// };

// type Question = {
//   question: string;
//   options: Option[];
// };

// type Response = {
//   question: string;
//   answer: string; // Use string instead of number to store text
// };

// const Assessment: React.FC = () => {
//   const [selectedOption, setSelectedOption] = useState<string | null>(null);
//   const [responses, setResponses] = useState<Response[]>([]);
//   const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null); // Single question state
//   const [loading, setLoading] = useState<boolean>(true);

// const fetchQuestion = async (previousAnswer?: string) => {
//     try {
//         const response = await axios.post('http://localhost:5000/questions', { previousAnswer });
//         const questionData = response.data;
        
//         // Ensure questionData is an object and has the expected structure
//         if (questionData && questionData.question && Array.isArray(questionData.options)) {
//             const formattedQuestion: Question = {
//                 question: questionData.question,
//                 options: questionData.options.map((text: string, index: number) => ({
//                     id: index + 1,
//                     text,
//                 })),
//             };

//             setCurrentQuestion(formattedQuestion);
//         } else {
//             console.error("Unexpected question data structure:", questionData);
//         }
//     } catch (error) {
//         if (axios.isAxiosError(error)) {
//             console.error("Error fetching question:", error.response ? error.response.data : error);
//         } else {
//             console.error("Unexpected error:", error); // Handle unexpected errors
//         }
//     } finally {
//         setLoading(false);
//     }
// };

//   useEffect(() => {
//     // Fetch the first question on component mount
//     fetchQuestion();
//   }, []);

//   const handleOptionClick = (text: string) => {
//     setSelectedOption(text);
//   };

//   const handleSubmit = () => {
//     if (selectedOption) {
//       setResponses([...responses, { question: currentQuestion?.question || "", answer: selectedOption }]);
//       setSelectedOption(null);
//       setLoading(true);

//       // Fetch the next question based on the current answer
//       fetchQuestion(selectedOption);
//     }
//   };

//   if (loading || !currentQuestion) {
//     return <div>Loading...</div>; // Loading state while fetching
//   }

//   return (
//     <div className="flex items-center justify-center min-h-screen text-gray-600">
//       <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
//         <h2 className="mb-6 text-2xl font-bold text-gray-800">{currentQuestion.question}</h2>

//         <ul className="space-y-4">
//           {currentQuestion.options.map((option) => (
//             <li key={option.id}>
//               <button
//                 onClick={() => handleOptionClick(option.text)}
//                 className={`w-full py-3 px-4 text-left rounded-lg border ${
//                   selectedOption === option.text
//                     ? "bg-blue-500 text-white"
//                     : "bg-gray-200 text-gray-800 hover:bg-gray-300"
//                 }`}
//               >
//                 {option.text}
//               </button>
//             </li>
//           ))}
//         </ul>

//         <div className="mt-6">
//           <button
//             onClick={handleSubmit}
//             className="w-full px-4 py-3 font-extrabold text-white bg-blue-400 rounded-lg hover:bg-pink-800"
//           >
//             Next
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Assessment;



// import React, { useEffect, useState } from 'react';
// import axios from 'axios'; // Axios to fetch data from the backend

// type Option = {
//   id: number;
//   text: string;
// };

// type Question = {
//   question: string;
//   options: Option[];
// };

// type Response = {
//   question: string;
//   answer: string; // Use string instead of number to store text
// };

// const Assessment: React.FC = () => {
//   const [selectedOption, setSelectedOption] = useState<string | null>(null);
//   const [responses, setResponses] = useState<Response[]>([]);
//   const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null); // Single question state
//   const [loading, setLoading] = useState<boolean>(true);
//   const [questionCount, setQuestionCount] = useState(0); // New state to count answered questions

//   const fetchQuestion = async (previousAnswer?: string) => {
//     try {
//       const response = await axios.post('http://localhost:5000/questions', { previousAnswer });
//       const questionData = response.data;

//       // Ensure questionData is an object and has the expected structure
//       if (questionData && questionData.question && Array.isArray(questionData.options)) {
//         const formattedQuestion: Question = {
//           question: questionData.question,
//           options: questionData.options.map((text: string, index: number) => ({
//             id: index + 1,
//             text,
//           })),
//         };

//         setCurrentQuestion(formattedQuestion);
//       } else {
//         console.error("Unexpected question data structure:", questionData);
//       }
//     } catch (error) {
//       if (axios.isAxiosError(error)) {
//         console.error("Error fetching question:", error.response ? error.response.data : error);
//       } else {
//         console.error("Unexpected error:", error); // Handle unexpected errors
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     // Fetch the first question on component mount
//     fetchQuestion();
//   }, []);

//   const handleOptionClick = (text: string) => {
//     setSelectedOption(text);
//   };

//   const handleSubmit = () => {
//     if (selectedOption) {
//       // Update responses with the selected option
//       setResponses([...responses, { question: currentQuestion?.question || "", answer: selectedOption }]);
//       setSelectedOption(null);
//       setLoading(true);

//       // Increment question count
//       setQuestionCount((prevCount) => prevCount + 1);

//       if (questionCount < 5) {
//         // Fetch the next question if less than 15 questions have been answered
//         fetchQuestion(selectedOption);
//       } else {
//         // Send responses to the backend for analysis after 15 questions
//         axios.post('http://localhost:5000/analyze', { responses: [...responses, { question: currentQuestion?.question || "", answer: selectedOption }] })
//           .then((response) => {
//             // Handle the AI's analysis response here
//             console.log(response.data); // You can display it to the user
//           })
//           .catch((error) => {
//             console.error("Error analyzing responses", error);
//           });
//       }
//     }
//   };

//   if (loading || !currentQuestion) {
//     return <div>Loading...</div>; // Loading state while fetching
//   }

//   return (
//     <div className="flex items-center justify-center min-h-screen text-gray-600">
//       <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
//         <h2 className="mb-6 text-2xl font-bold text-gray-800">{currentQuestion.question}</h2>

//         <ul className="space-y-4">
//           {currentQuestion.options.map((option) => (
//             <li key={option.id}>
//               <button
//                 onClick={() => handleOptionClick(option.text)}
//                 className={`w-full py-3 px-4 text-left rounded-lg border ${
//                   selectedOption === option.text
//                     ? "bg-blue-500 text-white"
//                     : "bg-gray-200 text-gray-800 hover:bg-gray-300"
//                 }`}
//               >
//                 {option.text}
//               </button>
//             </li>
//           ))}
//         </ul>

//         <div className="mt-6">
//           <button
//             onClick={handleSubmit}
//             className="w-full px-4 py-3 font-extrabold text-white bg-blue-400 rounded-lg hover:bg-pink-800"
//           >
//             Next
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Assessment;









// import React, { useEffect, useState } from 'react';
// import axios from 'axios'; // Axios to fetch data from the backend

// type Option = {
//   id: number;
//   text: string;
// };

// type Question = {
//   question: string;
//   options: Option[];
// };

// type Response = {
//   question: string;
//   answer: string; // Use string instead of number to store text
// };

// const Assessment: React.FC = () => {
//   const [selectedOption, setSelectedOption] = useState<string | null>(null);
//   const [responses, setResponses] = useState<Response[]>([]);
//   const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null); // Single question state
//   const [loading, setLoading] = useState<boolean>(true);
//   const [questionCount, setQuestionCount] = useState(0); // State to count answered questions

//   const fetchQuestion = async (previousAnswer?: string) => {
//     setLoading(true); // Start loading before the request
//     try {
//       const response = await axios.post('http://localhost:5000/questions', { previousAnswer });
//       const questionData = response.data;

//       // Ensure questionData is an object and has the expected structure
//       if (questionData && questionData.question && Array.isArray(questionData.options)) {
//         const formattedQuestion: Question = {
//           question: questionData.question,
//           options: questionData.options.map((text: string, index: number) => ({
//             id: index + 1,
//             text,
//           })),
//         };

//         setCurrentQuestion(formattedQuestion);
//       } else {
//         console.error("Unexpected question data structure:", questionData);
//       }
//     } catch (error) {
//       if (axios.isAxiosError(error)) {
//         console.error("Error fetching question:", error.response ? error.response.data : error);
//       } else {
//         console.error("Unexpected error:", error); // Handle unexpected errors
//       }
//     } finally {
//       setLoading(false); // Stop loading after the request
//     }
//   };

//   useEffect(() => {
//     // Fetch the first question on component mount
//     fetchQuestion();
//   }, []);

//   const handleOptionClick = (text: string) => {
//     setSelectedOption(text);
//   };

//   const handleSubmit = () => {
//     if (selectedOption) {
//       // Update responses with the selected option
//       setResponses(prevResponses => [...prevResponses, { question: currentQuestion?.question || "", answer: selectedOption }]);
//       setSelectedOption(null);
//       setLoading(true);

//       // Increment question count
//       setQuestionCount(prevCount => prevCount + 1);

//       if (questionCount < 3) { // Change this to 14 for a total of 15 questions
//         // Fetch the next question if less than 15 questions have been answered
//         fetchQuestion(selectedOption);
//       } else {
//         // Send responses to the backend for analysis after 15 questions
//         axios.post('http://localhost:5000/analyze', { responses: [...responses, { question: currentQuestion?.question || "", answer: selectedOption }] })
//           .then((response) => {
//             // Handle the AI's analysis response here
//             console.log(response.data); // You can display it to the user
//           })
//           .catch((error) => {
//             console.error("Error analyzing responses", error);
//           });
//       }
//     }
//   };

//   if (loading || !currentQuestion) {
//     return <div>Loading...</div>; // Loading state while fetching
//   }

//   return (
//     <div className="flex items-center justify-center min-h-screen text-gray-600">
//       <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
//         <h2 className="mb-6 text-2xl font-bold text-gray-800">{currentQuestion.question}</h2>

//         <ul className="space-y-4">
//           {currentQuestion.options.map((option) => (
//             <li key={option.id}>
//               <button
//                 onClick={() => handleOptionClick(option.text)}
//                 className={`w-full py-3 px-4 text-left rounded-lg border ${
//                   selectedOption === option.text
//                     ? "bg-blue-500 text-white"
//                     : "bg-gray-200 text-gray-800 hover:bg-gray-300"
//                 }`}
//               >
//                 {option.text}
//               </button>
//             </li>
//           ))}
//         </ul>

//         <div className="mt-6">
//           <button
//             onClick={handleSubmit}
//             className="w-full px-4 py-3 font-extrabold text-white bg-blue-400 rounded-lg hover:bg-pink-800"
//           >
//             Next
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Assessment;







// import React, { useEffect, useState } from 'react';
// import axios from 'axios'; // Axios to fetch data from the backend

// type Option = {
//   id: number;
//   text: string;
// };

// type Question = {
//   question: string;
//   options: Option[];
// };

// type Response = {
//   question: string;
//   answer: string; // Use string instead of number to store text
// };

// const Assessment: React.FC = () => {
//   const [selectedOption, setSelectedOption] = useState<string | null>(null);
//   const [responses, setResponses] = useState<Response[]>([]);
//   const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null); // Single question state
//   const [loading, setLoading] = useState<boolean>(true);
//   const [questionCount, setQuestionCount] = useState(0); // New state to count answered questions

//   const fetchQuestion = async (previousAnswer?: string) => {
//     try {
//       const response = await axios.post('http://localhost:5000/questions', { previousAnswer });
//       const questionData = response.data;

//       // Ensure questionData is an object and has the expected structure
//       if (questionData && questionData.question && Array.isArray(questionData.options)) {
//         const formattedQuestion: Question = {
//           question: questionData.question,
//           options: questionData.options.map((text: string, index: number) => ({
//             id: index + 1,
//             text,
//           })),
//         };

//         setCurrentQuestion(formattedQuestion);
//       } else {
//         console.error("Unexpected question data structure:", questionData);
//       }
//     } catch (error) {
//       if (axios.isAxiosError(error)) {
//         console.error("Error fetching question:", error.response ? error.response.data : error);
//       } else {
//         console.error("Unexpected error:", error); // Handle unexpected errors
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     // Fetch the first question on component mount
//     fetchQuestion();
//   }, []);

//   const handleOptionClick = (text: string) => {
//     setSelectedOption(text);
//   };

//   const handleSubmit = () => {
//     if (selectedOption) {
//       // Update responses with the selected option
//       setResponses([...responses, { question: currentQuestion?.question || "", answer: selectedOption }]);
//       setSelectedOption(null);
//       setLoading(true);

//       // Increment question count
//       setQuestionCount((prevCount) => prevCount + 1);

//       if (questionCount < 1) { // Changed to 14 to allow for a total of 15 questions
//         // Fetch the next question if less than 15 questions have been answered
//         fetchQuestion(selectedOption);
//       } else {
//         // Send responses to the backend for analysis after 15 questions
//         axios.post('http://localhost:5000/analyze', {
//           responses: [...responses, { question: currentQuestion?.question || "", answer: selectedOption }]
//         })
//         .then((response) => {
//           // Handle the AI's analysis response here
//           console.log(response.data); // You can display it to the user
//         })
//         .catch((error) => {
//           console.error("Error analyzing responses", error);
//         });
//       }
//     }
//   };

//   if (loading || !currentQuestion) {
//     return <div>Loading...</div>; // Loading state while fetching
//   }

//   return (
//     <div className="flex items-center justify-center min-h-screen text-gray-600">
//       <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
//         <h2 className="mb-6 text-2xl font-bold text-gray-800">{currentQuestion.question}</h2>

//         <ul className="space-y-4">
//           {currentQuestion.options.map((option) => (
//             <li key={option.id}>
//               <button
//                 onClick={() => handleOptionClick(option.text)}
//                 className={`w-full py-3 px-4 text-left rounded-lg border ${
//                   selectedOption === option.text
//                     ? "bg-blue-500 text-white"
//                     : "bg-gray-200 text-gray-800 hover:bg-gray-300"
//                 }`}
//               >
//                 {option.text}
//               </button>
//             </li>
//           ))}
//         </ul>

//         <div className="mt-6">
//           <button
//             onClick={handleSubmit}
//             className="w-full px-4 py-3 font-extrabold text-white bg-blue-400 rounded-lg hover:bg-pink-800"
//           >
//             Next
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Assessment;









// import { useEffect, useState } from 'react';
// import axios from 'axios'; // Axios to fetch data from the backend

// type Option = {
//   id: number;
//   text: string;
// };

// type Question = {
//   question: string;
//   options: Option[];
// };

// type Response = {
//   question: string;
//   answer: string; // Use string instead of number to store text
// };

// const Assessment: React.FC = () => {
//   const [selectedOption, setSelectedOption] = useState<string | null>(null);
//   const [responses, setResponses] = useState<Response[]>([]);
//   const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null); // Single question state
//   const [loading, setLoading] = useState<boolean>(true);
//   const [questionCount, setQuestionCount] = useState(0); // State to count answered questions

//   const fetchQuestion = async (previousAnswer?: string) => {
//     try {
//       const response = await axios.post('http://localhost:5000/questions', { previousAnswer });
//       const questionData = response.data;

//       // Ensure questionData is an object and has the expected structure
//       if (questionData && questionData.question && Array.isArray(questionData.options)) {
//         const formattedQuestion: Question = {
//           question: questionData.question,
//           options: questionData.options.map((text: string, index: number) => ({
//             id: index + 1,
//             text,
//           })),
//         };

//         setCurrentQuestion(formattedQuestion);
//       } else {
//         console.error("Unexpected question data structure:", questionData);
//       }
//     } catch (error) {
//       if (axios.isAxiosError(error)) {
//         console.error("Error fetching question:", error.response ? error.response.data : error);
//       } else {
//         console.error("Unexpected error:", error); // Handle unexpected errors
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     // Fetch the first question on component mount
//     fetchQuestion();
//   }, []);

//   const handleOptionClick = (text: string) => {
//     setSelectedOption(text);
//   };

//   const handleSubmit = () => {
//     if (selectedOption) {
//       // Update responses with the selected option
//       const newResponse = { question: currentQuestion?.question || "", answer: selectedOption };
//       setResponses((prevResponses) => [...prevResponses, newResponse]);
//       setSelectedOption(null);
//       setLoading(true);

//       // Increment question count
//       setQuestionCount((prevCount) => {
//         const newCount = prevCount + 1;

//         if (newCount < 3) { // Allow for a total of 15 questions
//           fetchQuestion(selectedOption);
//         } else {
//           // Send responses to the backend for analysis after 15 questions
//           axios.post('http://localhost:5000/analyze', {
//             responses: [...responses, newResponse]
//           })
//           .then((response) => {
//             // Handle the AI's analysis response here
//             console.log(response.data); // You can display it to the user
//           })
//           .catch((error) => {
//             console.error("Error analyzing responses", error);
//           });
//         }
//         return newCount; // Update question count
//       });
//     }
//   };

//   if (loading || !currentQuestion) {
//     return <div>Loading...</div>; // Loading state while fetching
//   }

//   return (
//     <div className="flex items-center justify-center min-h-screen text-gray-600">
//       <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
//         <h2 className="mb-6 text-2xl font-bold text-gray-800">{currentQuestion.question}</h2>

//         <ul className="space-y-4">
//           {currentQuestion.options.map((option) => (
//             <li key={option.id}>
//               <button
//                 onClick={() => handleOptionClick(option.text)}
//                 className={`w-full py-3 px-4 text-left rounded-lg border ${
//                   selectedOption === option.text
//                     ? "bg-blue-500 text-white"
//                     : "bg-gray-200 text-gray-800 hover:bg-gray-300"
//                 }`}
//               >
//                 {option.text}
//               </button>
//             </li>
//           ))}
//         </ul>

//         <div className="mt-6">
//           <button
//             onClick={handleSubmit}
//             className="w-full px-4 py-3 font-extrabold text-white bg-blue-400 rounded-lg hover:bg-pink-800"
//           >
//             Next
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Assessment;













// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// type Option = {
//   id: number;
//   text: string;
// };

// type Question = {
//   question: string;
//   options: Option[];
// };

// type Response = {
//   question: string;
//   answer: string;
// };

// const Assessment: React.FC = () => {
//   const [selectedOption, setSelectedOption] = useState<string | null>(null);
//   const [responses, setResponses] = useState<Response[]>([]);
//   const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [questionCount, setQuestionCount] = useState(0);
//   const [error, setError] = useState<string | null>(null);
//   const [insights, setInsights] = useState<string | null>(null);

//   const fetchQuestion = async (previousAnswer?: string) => {
//     setLoading(true);
//     setError(null);
//     try {
//       const response = await axios.post('http://localhost:5000/questions', { previousAnswer });
//       const questionData = response.data;

//       if (questionData && questionData.question && Array.isArray(questionData.options)) {
//         setCurrentQuestion({
//           question: questionData.question,
//           options: questionData.options.map((text: string, index: number) => ({
//             id: index + 1,
//             text,
//           })),
//         });
//       } else {
//         throw new Error("Unexpected question data structure");
//       }
//     } catch (error) {
//       console.error("Error fetching question:", error);
//       setError("Failed to fetch question. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchQuestion();
//   }, []);

//   const handleOptionClick = (text: string) => {
//     setSelectedOption(text);
//   };

//   const handleSubmit = async () => {
//     if (selectedOption && currentQuestion) {
//       const newResponse = { question: currentQuestion.question, answer: selectedOption };
//       const updatedResponses = [...responses, newResponse];
//       setResponses(updatedResponses);
//       setSelectedOption(null);

//       const newCount = questionCount + 1;
//       setQuestionCount(newCount);

//       if (newCount < 3) {
//         await fetchQuestion(selectedOption);
//       } else {
//         setLoading(true);
//         try {
//           const response = await axios.post('http://localhost:5000/analyze', {
//             responses: updatedResponses
//           });
//           setInsights(response.data.insights);
//         } catch (error) {
//           console.error("Error analyzing responses", error);
//           setError("Failed to analyze responses. Please try again.");
//         } finally {
//           setLoading(false);
//         }
//       }
//     }
//   };

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   if (insights) {
//     return (
//       <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
//         <h2 className="mb-6 text-2xl font-bold text-gray-800">Analysis Results</h2>
//         <p>{insights}</p>
//       </div>
//     );
//   }

//   if (!currentQuestion) {
//     return <div>No question available.</div>;
//   }

//   return (
//     <div className="flex items-center justify-center min-h-screen text-gray-600">
//       <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
//         <h2 className="mb-6 text-2xl font-bold text-gray-800">{currentQuestion.question}</h2>

//         <ul className="space-y-4">
//           {currentQuestion.options.map((option) => (
//             <li key={option.id}>
//               <button
//                 onClick={() => handleOptionClick(option.text)}
//                 className={`w-full py-3 px-4 text-left rounded-lg border ${
//                   selectedOption === option.text
//                     ? "bg-blue-500 text-white"
//                     : "bg-gray-200 text-gray-800 hover:bg-gray-300"
//                 }`}
//               >
//                 {option.text}
//               </button>
//             </li>
//           ))}
//         </ul>

//         <div className="mt-6">
//           <button
//             onClick={handleSubmit}
//             disabled={!selectedOption}
//             className={`w-full py-3 px-4 ${
//               selectedOption
//                 ? "bg-blue-400 text-white font-extrabold hover:bg-pink-800"
//                 : "bg-gray-300 text-gray-500 cursor-not-allowed"
//             } rounded-lg`}
//           >
//             Next
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Assessment;





  // const fetchQuestion = useCallback(async (previousAnswer?: string) => {
  //   setLoading(true);
  //   setError(null);
  //   try {
  //     const response = await axios.post('http://localhost:5000/questions', { previousAnswer });
  //     const questionData = response.data;

  //     if (questionData && questionData.question && Array.isArray(questionData.options)) {
  //       setCurrentQuestion({
  //         question: questionData.question,
  //         options: questionData.options.map((text: string, index: number) => ({
  //           id: index + 1,
  //           text,
  //         })),
  //       });
  //     } else {
  //       throw new Error("Unexpected question data structure");
  //     }
  //   } catch (error) {
  //     console.error("Error fetching question:", error);
  //     setError("Failed to fetch question. Please try again.");
  //   } finally {
  //     setLoading(false);
  //   }
  // }, []);





import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';

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
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [responses, setResponses] = useState<Response[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [questionCount, setQuestionCount] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [insights, setInsights] = useState<string | null>(null);



  const fetchQuestion = useCallback(async (previousAnswer?: string) => {
  setLoading(true);
  setError(null);
  try {
    const response = await axios.post('http://localhost:5000/questions', { previousAnswer });
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
      setError(`Failed to fetch question. ${error.message}. ${error.response?.data?.error || ''}`);
    } else {
      setError(`Failed to fetch question. ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  } finally {
    setLoading(false);
  }
}, []);

  useEffect(() => {
    fetchQuestion();
  }, [fetchQuestion]);

  const handleOptionClick = useCallback((text: string) => {
    setSelectedOption(text);
  }, []);

  const handleSubmit = useCallback(async () => {
    if (selectedOption && currentQuestion) {
      const newResponse = { question: currentQuestion.question, answer: selectedOption };
      setResponses(prev => [...prev, newResponse]);
      setSelectedOption(null);

      setQuestionCount(prev => prev + 1);

      if (questionCount < 10) {
        await fetchQuestion(selectedOption);
      } else {
        setLoading(true);
        try {
          const response = await axios.post('http://localhost:5000/analyze', {
            responses: [...responses, newResponse]
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

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
     return (
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        <h2 className="mb-6 text-2xl font-bold text-gray-800">Error</h2>
        <p className="mb-4 text-red-500">{error}</p>
        <button
          onClick={() => fetchQuestion()}
          className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
        >
          Retry
        </button>
      </div>
    );
  }

  if (insights) {
    return (
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        <h2 className="mb-6 text-2xl font-bold text-gray-800">Analysis Results</h2>
        <p>{insights}</p>
      </div>
    );
  }

  if (!currentQuestion) {
    return <div>No question available.</div>;
  }

  return (
    <div className="flex items-center justify-center min-h-screen text-gray-600">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        <h2 className="mb-6 text-2xl font-bold text-gray-800">{currentQuestion.question}</h2>

        <ul className="space-y-4">
          {currentQuestion.options.map((option) => (
            <li key={option.id}>
              <button
                onClick={() => handleOptionClick(option.text)}
                className={`w-full py-3 px-4 text-left rounded-lg border ${
                  selectedOption === option.text
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
            disabled={!selectedOption}
            className={`w-full py-3 px-4 ${
              selectedOption
                ? "bg-blue-400 text-white font-extrabold hover:bg-pink-800"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            } rounded-lg`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Assessment;