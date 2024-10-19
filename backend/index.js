// import Groq from "groq-sdk";
// import 'dotenv/config';
// import express from "express"; // Using Express to create an API
// import cors from 'cors'

// const app = express();
// app.use(cors())
// const port = 5000; // Use any port
// const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

// export async function getGroqChatCompletion() {
//   const response = await groq.chat.completions.create({
//     messages: [
//       {
//         role: "user",
//         content: `Generate a mental health-related multiple-choice question with 4 options in the following JSON format:
//         {
//           "question": "Your question here",
//           "options": [
//             "Option 1",
//             "Option 2",
//             "Option 3",
//             "Option 4"
//           ]
//         }
//         No need for a correct option. The question should be open-ended and each option should provide a valid perspective on mental health.`
//       }
//     ],
//     model: "llama-3.2-3b-preview"
//   });

//   return response.choices[0]?.message?.content;
// }

// app.get("/questions", async (req, res) => {
//   try {
//     const questionData = await getGroqChatCompletion();
//     res.json(JSON.parse(questionData)); // Ensure the response is in JSON format
//   } catch (error) {
//     res.status(500).send("Error fetching questions");
//   }
// });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });




// import Groq from "groq-sdk";
// import 'dotenv/config';
// import express from "express"; // Using Express to create an API
// import cors from 'cors';

// const app = express();
// app.use(cors()); // Allow CORS
// app.use(express.json()); // Middleware to parse JSON request bodies

// const port = 5000; // Use any port
// const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

// // Function to get a question from Groq, with an optional previous answer to generate a follow-up question
// export async function getGroqChatCompletion(previousAnswer) {
//   const contextMessage = previousAnswer
//     ? `Based on the previous answer "${previousAnswer}", generate a follow-up mental health-related question that is empathetic and therapeutic in nature, specifically aimed at identifying symptoms related to the user's mental health. The output must be in JSON format only:
//         {
//           "question": "Your question here",
//           "options": [
//             "Option 1",
//             "Option 2",
//             "Option 3",
//             "Option 4"
//           ]
//         }`
//     : `Generate a mental health-related multiple-choice question that reflects a therapeutic approach, with a focus on identifying symptoms of potential mental health issues. The output must be in JSON format only, without any additional content:
//         {
//           "question": "Your question here",
//           "options": [
//             "Option 1",
//             "Option 2",
//             "Option 3",
//             "Option 4"
//           ]
//         }
//         No need for a correct option. The question should be open-ended and each option should provide a valid perspective on mental health.`;

//   const response = await groq.chat.completions.create({
//     messages: [
//       {
//         role: "user",
//         content: contextMessage
//       }
//     ],
//     model: "llama-3.2-3b-preview"
//   });

//   return response.choices[0]?.message?.content;
// }

// app.post("/questions", async (req, res) => {
//     const { previousAnswer } = req.body; // Extract previousAnswer from the request body

//     try {
//         const questionData = await getGroqChatCompletion(previousAnswer);

//         // Try parsing the response; if it fails, send a descriptive error message
//         try {
//             const parsedData = JSON.parse(questionData);
//             res.json(parsedData); // Return question in JSON format
//         } catch (parseError) {
//             console.error("JSON parsing error:", parseError);
//             console.error("Raw question data received:", questionData);
//             res.status(500).send("Error parsing question data");
//         }
//     } catch (error) {
//         console.error(error);
//         res.status(500).send("Error fetching questions");
//     }
// });

// // Endpoint to analyze user responses
// app.post("/analyze", async (req, res) => {
//     const { responses } = req.body; // Extract responses from the request body

//     try {
//         // Process the responses to provide an analysis
//         // For simplicity, you could concatenate responses and analyze them in one go
//         const userInsights = await getInsightsFromResponses(responses);

//         res.json({ insights: userInsights }); // Return insights in JSON format
//     } catch (error) {
//         console.error("Error analyzing responses:", error);
//         res.status(500).send("Error analyzing responses");
//     }
// });

// // Function to get insights based on user responses
// async function getInsightsFromResponses(responses) {
//     const userResponsesText = responses.map(r => r.answer).join(", ");

//     const contextMessage = `Based on the following user responses, please analyze and provide insights into what the user might be experiencing: ${userResponsesText}`;

//     const response = await groq.chat.completions.create({
//         messages: [
//             {
//                 role: "user",
//                 content: contextMessage
//             }
//         ],
//         model: "llama-3.2-3b-preview"
//     });

//     return response.choices[0]?.message?.content; // Return the analysis
// }


// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });








// import Groq from "groq-sdk";
// import 'dotenv/config';
// import express from "express"; // Using Express to create an API
// import cors from 'cors';

// const app = express();
// app.use(cors()); // Allow CORS
// app.use(express.json()); // Middleware to parse JSON request bodies

// const port = 5000; // Use any port
// const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

// // Function to get a question from Groq, with an optional previous answer to generate a follow-up question
// export async function getGroqChatCompletion(previousAnswer) {
//   const contextMessage = previousAnswer
//     ? `Based on the previous answer "${previousAnswer}", generate a follow-up mental health-related question that is empathetic and therapeutic in nature, specifically aimed at identifying symptoms related to the user's mental health. The output must be in JSON format only, without any additional content:
//         {
//           "question": "Your question here",
//           "options": [
//             "Option 1",
//             "Option 2",
//             "Option 3",
//             "Option 4"
//           ]
//         }`
//     : `Generate a mental health-related multiple-choice question that reflects a therapeutic approach, with a focus on identifying symptoms of potential mental health issues. The output must be in JSON format only, without any additional content:
//         {
//           "question": "Your question here",
//           "options": [
//             "Option 1",
//             "Option 2",
//             "Option 3",
//             "Option 4"
//           ]
//         }
//         No need for a correct option. The question should be open-ended and each option should provide a valid perspective on mental health.`;

//   const response = await groq.chat.completions.create({
//     messages: [
//       {
//         role: "user",
//         content: contextMessage
//       }
//     ],
//     model: "llama-3.2-3b-preview"
//   });

//   return response.choices[0]?.message?.content;
// }

// app.post("/questions", async (req, res) => {
//     const { previousAnswer } = req.body; // Extract previousAnswer from the request body

//     try {
//         const questionData = await getGroqChatCompletion(previousAnswer);

//         // Try parsing the response; if it fails, send a descriptive error message
//         try {
//             const parsedData = JSON.parse(questionData);
//             res.json(parsedData); // Return question in JSON format
//         } catch (parseError) {
//             console.error("JSON parsing error:", parseError);
//             console.error("Raw question data received:", questionData);
//             res.status(500).send("Error parsing question data: Invalid JSON format");
//         }
//     } catch (error) {
//         console.error("Error fetching question:", error);
//         res.status(500).send("Error fetching question from Groq");
//     }
// });

// // Endpoint to analyze user responses
// app.post("/analyze", async (req, res) => {
//     const { responses } = req.body; // Extract responses from the request body

//     try {
//         const userInsights = await getInsightsFromResponses(responses);
//         res.json({ insights: userInsights }); // Return insights in JSON format
//     } catch (error) {
//         console.error("Error analyzing responses:", error);
//         res.status(500).send("Error analyzing responses");
//     }
// });

// // Function to get insights based on user responses
// async function getInsightsFromResponses(responses) {
//     const userResponsesText = responses.map(r => r.answer).join(", ");

//     const contextMessage = `Based on the following user responses, please analyze and provide insights into what the user might be experiencing: ${userResponsesText}`;

//     const response = await groq.chat.completions.create({
//         messages: [
//             {
//                 role: "user",
//                 content: contextMessage
//             }
//         ],
//         model: "llama-3.2-3b-preview"
//     });

//     return response.choices[0]?.message?.content || "No insights available"; // Return the analysis or a fallback message
// }

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });







// import Groq from "groq-sdk";
// import 'dotenv/config';
// import express from "express"; // Using Express to create an API
// import cors from 'cors';

// const app = express();
// app.use(cors()); // Allow CORS
// app.use(express.json()); // Middleware to parse JSON request bodies

// const port = 5000; // Use any port
// const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

// // Function to get a question from Groq, with an optional previous answer to generate a follow-up question
// export async function getGroqChatCompletion(previousAnswer) {
//   const contextMessage = previousAnswer
//     ? `Based on the previous answer "${previousAnswer}", only generate a follow-up mental health-related question that is empathetic and therapeutic in nature, specifically aimed at identifying symptoms related to the user's mental health. The output must be in JSON format only, remember JSON only no matter what:
//         {
//           "question": "Your question here",
//           "options": [
//             "Option 1",
//             "Option 2",
//             "Option 3",
//             "Option 4"
//           ]
//         }`
//     : `Only generate a mental health-related multiple-choice question that reflects a therapeutic approach, with a focus on identifying symptoms of potential mental health issues. The output must be in JSON format only, without any additional content, remember JSON only, no matter what:
//         {
//           "question": "Your question here",
//           "options": [
//             "Option 1",
//             "Option 2",
//             "Option 3",
//             "Option 4"
//           ]
//         }
//         No need for a correct option. The question should be open-ended and each option should provide a valid perspective on mental health.`;

//   const response = await groq.chat.completions.create({
//     messages: [
//       {
//         role: "user",
//         content: contextMessage
//       }
//     ],
//     model: "llama-3.2-3b-preview"
//   });

//   return response.choices[0]?.message?.content;
// }

// app.post("/questions", async (req, res) => {
//     const { previousAnswer } = req.body; // Extract previousAnswer from the request body

//     try {
//         const questionData = await getGroqChatCompletion(previousAnswer);

//         // Try parsing the response; if it fails, send a descriptive error message
//         try {
//             const parsedData = JSON.parse(questionData);
//             res.json(parsedData); // Return question in JSON format
//         } catch (parseError) {
//             console.error("JSON parsing error:", parseError);
//             console.error("Raw question data received:", questionData);
//             res.status(500).send("Error parsing question data");
//         }
//     } catch (error) {
//         console.error(error);
//         res.status(500).send("Error fetching questions");
//     }
// });

// // Endpoint to analyze user responses
// app.post("/analyze", async (req, res) => {
//     const { responses } = req.body; // Extract responses from the request body

//     // Check if responses are provided and is an array
//     if (!responses || !Array.isArray(responses)) {
//         return res.status(400).json({ error: "Invalid responses: must be an array" });
//     }

//     try {
//         // Process the responses to provide an analysis
//         const userInsights = await getInsightsFromResponses(responses);

//         res.json({ insights: userInsights }); // Return insights in JSON format
//     } catch (error) {
//         console.error("Error analyzing responses:", error);
//         res.status(500).send("Error analyzing responses");
//     }
// });

// // Function to get insights based on user responses
// async function getInsightsFromResponses(responses) {
//     const userResponsesText = responses.map(r => r.answer).join(", ");

//     const contextMessage = `Based on the following user responses, please analyze and provide insights into what the user might be experiencing: ${userResponsesText}`;

//     const response = await groq.chat.completions.create({
//         messages: [
//             {
//                 role: "user",
//                 content: contextMessage
//             }
//         ],
//         model: "llama-3.2-3b-preview"
//     });

//     return response.choices[0]?.message?.content; // Return the analysis
// }

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });


// import Groq from "groq-sdk";
// import 'dotenv/config';
// import express from "express";
// import cors from 'cors';

// const app = express();
// app.use(cors());
// app.use(express.json());

// const port = process.env.PORT || 5000;
// const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

// async function getGroqChatCompletion(previousAnswer) {
//   const contextMessage = previousAnswer
//     ? `Based on the previous answer "${previousAnswer}", only generate a follow-up mental health-related question that is empathetic and therapeutic in nature, specifically aimed at identifying symptoms related to the user's mental health. The output must be in JSON format only, remember JSON only no matter what:
//         {
//           "question": "Your question here",
//           "options": [
//             "Option 1",
//             "Option 2",
//             "Option 3",
//             "Option 4"
//           ]
//         }`
//     : `Only generate a mental health-related multiple-choice question that reflects a therapeutic approach, with a focus on identifying symptoms of potential mental health issues. The output must be in JSON format only, without any additional content, remember JSON only, no matter what:
//         {
//           "question": "Your question here",
//           "options": [
//             "Option 1",
//             "Option 2",
//             "Option 3",
//             "Option 4"
//           ]
//         }
//         No need for a correct option. The question should be open-ended and each option should provide a valid perspective on mental health.`;

//   const response = await groq.chat.completions.create({
//     messages: [
//       {
//         role: "user",
//         content: contextMessage
//       }
//     ],
//     model: "llama-3.2-3b-preview"
//   });

//   return response.choices[0]?.message?.content;
// }

// app.post("/questions", async (req, res) => {
//   const { previousAnswer } = req.body;

//   try {
//     const questionData = await getGroqChatCompletion(previousAnswer);
//     const parsedData = JSON.parse(questionData);
//     res.json(parsedData);
//   } catch (error) {
//     console.error("Error in /questions:", error);
//     res.status(500).json({ error: "Error fetching or parsing question data" });
//   }
// });

// app.post("/analyze", async (req, res) => {
//   const { responses } = req.body;

//   if (!responses || !Array.isArray(responses)) {
//     return res.status(400).json({ error: "Invalid responses: must be an array" });
//   }

//   try {
//     const userInsights = await getInsightsFromResponses(responses);
//     res.json({ insights: userInsights });
//   } catch (error) {
//     console.error("Error in /analyze:", error);
//     res.status(500).json({ error: "Error analyzing responses" });
//   }
// });

// async function getInsightsFromResponses(responses) {
//   const userResponsesText = responses.map(r => `Q: ${r.question}, A: ${r.answer}`).join("; ");

//   const contextMessage = `Based on the following user responses, please analyze and provide insights into what the user might be experiencing: ${userResponsesText}`;

//   try {
//     const response = await groq.chat.completions.create({
//       messages: [{ role: "user", content: contextMessage }],
//       model: "llama-3.2-3b-preview"
//     });

//     return response.choices[0]?.message?.content;
//   } catch (error) {
//     console.error("Error in getInsightsFromResponses:", error);
//     throw error;
//   }
// }

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });






// import Groq from "groq-sdk";
// import 'dotenv/config';
// import express from "express";
// import cors from 'cors';

// const app = express();
// app.use(cors());
// app.use(express.json());

// const port = process.env.PORT || 5000;
// const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

// async function getGroqChatCompletion(previousAnswer) {
//   const basePrompt = `Only generate a mental health-related multiple-choice question that reflects a therapeutic approach, with a focus on identifying symptoms of potential mental health issues. The output must be in JSON format only, without any additional content. The JSON structure should be:
//         {
//           "question": "Your question here",
//           "options": [
//             "Option 1",
//             "Option 2",
//             "Option 3",
//             "Option 4"
//           ]
//         }
//         No need for a correct option. The question should be open-ended and each option should provide a valid perspective on mental health.

//         Example:
//         {
//           "question": "How often do you feel overwhelmed?",
//           "options": [
//             "Rarely",
//             "Sometimes",
//             "Often",
//             "Always"
//           ]
//         }`;

//   const contextMessage = previousAnswer
//     ? `${basePrompt} Based on the previous answer "${previousAnswer}", generate a follow-up question.`
//     : basePrompt;

//   const response = await groq.chat.completions.create({
//     messages: [
//       {
//         role: "user",
//         content: contextMessage
//       }
//     ],
//     model: "llama-3.2-3b-preview"
//   });

//   return response.choices[0]?.message?.content;
// }

// app.post("/questions", async (req, res) => {
//   const { previousAnswer } = req.body;

//   try {
//     const questionData = await getGroqChatCompletion(previousAnswer);
//     const parsedData = JSON.parse(questionData);
//     res.json(parsedData);
//   } catch (error) {
//     console.error("Error in /questions:", error);
//     if (error instanceof SyntaxError) {
//       console.error("JSON parsing error:", error);
//       res.status(500).json({ error: "Error parsing question data" });
//     } else {
//       res.status(500).json({ error: "Error fetching question data" });
//     }
//   }
// });

// app.post("/analyze", async (req, res) => {
//   const { responses } = req.body;

//   if (!responses || !Array.isArray(responses)) {
//     return res.status(400).json({ error: "Invalid responses: must be an array" });
//   }

//   try {
//     const userInsights = await getInsightsFromResponses(responses);
//     res.json({ insights: userInsights });
//   } catch (error) {
//     console.error("Error in /analyze:", error);
//     res.status(500).json({ error: "Error analyzing responses" });
//   }
// });

// async function getInsightsFromResponses(responses) {
//   const userResponsesText = responses.map(r => `Q: ${r.question}, A: ${r.answer}`).join("; ");

//   // const contextMessage = `Based on the following user responses, please analyze and provide insights into what the user might be experiencing: ${userResponsesText}`;
//   const contextMessage = `Give one word for users symptom: ${userResponsesText}`;

//   try {
//     const response = await groq.chat.completions.create({
//       messages: [{ role: "user", content: contextMessage }],
//       model: "llama-3.2-3b-preview"
//     });

//     return response.choices[0]?.message?.content;
//   } catch (error) {
//     console.error("Error in getInsightsFromResponses:", error);
//     throw error;
//   }
// }

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });








// import Groq from "groq-sdk";
// import 'dotenv/config';
// import express from "express";
// import cors from 'cors';

// const app = express();
// app.use(cors());
// app.use(express.json());

// const port = process.env.PORT || 5000;
// const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

// async function getGroqChatCompletion(previousAnswers) {
//   const basePrompt = `Act as a therapist conducting an initial assessment. Generate a mental health-related question that helps identify potential mental health issues. The question should be appropriate based on the previous answers. Start with general questions and progressively ask more specific questions as you gather more information. Output must be in JSON format only, without any additional content. The JSON structure should be:
//     {
//       "question": "Your question here",
//       "options": [
//         "Option 1",
//         "Option 2",
//         "Option 3",
//         "Option 4"
//       ]
//     }
//     No need for a correct option. Each option should provide a valid response related to mental health.`;

//   const contextMessage = previousAnswers.length > 0
//     ? `${basePrompt} Previous answers: ${JSON.stringify(previousAnswers)}. Based on these, generate an appropriate follow-up question.:
//     `
//     : basePrompt;

//   const response = await groq.chat.completions.create({
//     messages: [
//       {
//         role: "user",
//         content: contextMessage
//       }
//     ],
//     model: "llama-3.2-3b-preview"
//   });

//   return response.choices[0]?.message?.content;
// }

// app.post("/questions", async (req, res) => {
//   const { previousAnswers } = req.body;

//   try {
//     const questionData = await getGroqChatCompletion(previousAnswers || []);
//     const parsedData = JSON.parse(questionData);
//     res.json(parsedData);
//   } catch (error) {
//     console.error("Error in /questions:", error);
//     if (error instanceof SyntaxError) {
//       console.error("JSON parsing error:", error);
//       res.status(500).json({ error: "Error parsing question data" });
//     } else {
//       res.status(500).json({ error: "Error fetching question data" });
//     }
//   }
// });

// app.post("/analyze", async (req, res) => {
//   const { responses } = req.body;

//   if (!responses || !Array.isArray(responses)) {
//     return res.status(400).json({ error: "Invalid responses: must be an array" });
//   }

//   try {
//     const userInsights = await getInsightsFromResponses(responses);
//     res.json({ insights: userInsights });
//   } catch (error) {
//     console.error("Error in /analyze:", error);
//     res.status(500).json({ error: "Error analyzing responses" });
//   }
// });

// async function getInsightsFromResponses(responses) {
//   const userResponsesText = responses.map(r => `Q: ${r.question}, A: ${r.answer}`).join("; ");

//   const contextMessage = `Based on the following user responses from a therapy session, analyze and provide a JSON object with potential mental health conditions the user might be experiencing. Include a confidence level for each condition. The output should be in this format:
//   {
//     "potentialConditions": [
//       {
//         "condition": "condition name",
//         "confidence": "low/medium/high"
//       }
//     ]
//   }
//   User responses: ${userResponsesText}`;

//   try {
//     const response = await groq.chat.completions.create({
//       messages: [{ role: "user", content: contextMessage }],
//       model: "llama-3.2-3b-preview"
//     });

//     return response.choices[0]?.message?.content;
//   } catch (error) {
//     console.error("Error in getInsightsFromResponses:", error);
//     throw error;
//   }
// }

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });












// import Groq from "groq-sdk";
// import 'dotenv/config';
// import express from "express";
// import cors from 'cors';

const Groq = require('groq-sdk')
require('dotenv').config()
const express = require('express')
const cors = require('cors')


const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5000;
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

async function getGroqChatCompletion(previousAnswers) {
  // const basePrompt = `Act as a therapist conducting an initial assessment. Generate a mental health-related question that helps identify potential mental health issues. The question should be appropriate based on the previous answers. Start with general questions and progressively ask more specific questions as you gather more information. Output must be in JSON format only, without any additional content. The JSON structure should be:
  //   {
  //     "question": "Your question here",
  //     "options": [
  //       "Option 1",
  //       "Option 2",
  //       "Option 3",
  //       "Option 4"
  //     ]
  //   }
  //   No need for a correct option. Each option should provide a valid response related to mental health.`;

  const basePrompt = `Act as a therapist conducting an initial assessment. Generate a single mental health-related question that helps identify potential mental health issues. The question should be appropriate based on the previous answers. Start with general questions and progressively ask more specific questions as you gather more information. Output must be in JSON format only, without any additional content. The JSON structure should be:
{
  "question": "Your question here",
  "options": [
    "Option 1",
    "Option 2",
    "Option 3",
    "Option 4"
  ]
}
No need for a correct option. Each option should provide a valid response related to mental health. Generate only one question per request.`;

  const contextMessage = previousAnswers.length > 0
    ? `${basePrompt} Previous answers: ${JSON.stringify(previousAnswers)}. Based on these, generate an appropriate short and precise follow-up question, follow the instructions strictly.`
    : basePrompt;

  try {
    const response = await groq.chat.completions.create({
      messages: [
        {
          role: "user",
          content: contextMessage
        }
      ],
      // model: "llama-3.2-3b-preview"
      model: "llama-3.1-70b-versatile"
    });

    console.log("Full Groq API response:", JSON.stringify(response, null, 2)); // Add this line

    const content = response.choices[0]?.message?.content;

    const match = content.match(/\{[\s\S]*?\}/);
    if (match) {
      return match[0];
    } else {
      throw new Error("No valid JSON object found in the response");
    }

  } catch (error) {
    console.error("Error in getGroqChatCompletion:", error);
    throw error;
  }
}

// app.post("/questions", async (req, res) => {
//   const { previousAnswer } = req.body;

//   try {
//     const questionData = await getGroqChatCompletion(previousAnswer ? [previousAnswer] : []);
//     const parsedData = JSON.parse(questionData);
//     res.json(parsedData);
//   } catch (error) {
//     console.error("Error in /questions:", error);
//     if (error instanceof SyntaxError) {
//       console.error("JSON parsing error:", error);
//       res.status(500).json({ error: "Error parsing question data" });
//     } else {
//       res.status(500).json({ error: "Error fetching question data" });
//     }
//   }
// });


// app.post("/questions", async (req, res) => {
//   const { previousAnswer } = req.body;

//   try {
//     const questionData = await getGroqChatCompletion(previousAnswer ? [previousAnswer] : []);
//     console.log("Raw question data:", questionData); // Add this line
//     const parsedData = JSON.parse(questionData);
//     res.json(parsedData);
//   } catch (error) {
//     console.error("Error in /questions:", error);
//     if (error instanceof SyntaxError) {
//       console.error("JSON parsing error:", error);
//       res.status(500).json({ error: "Error parsing question data: " + error.message });
//     } else {
//       res.status(500).json({ error: "Error fetching question data: " + error.message });
//     }
//   }
// });


app.post("/questions", async (req, res) => {
  const { previousAnswer } = req.body;

  try {
    const questionData = await getGroqChatCompletion(previousAnswer ? [previousAnswer] : []);
    console.log("Raw question data:", questionData);
    const parsedData = JSON.parse(questionData);
    res.json(parsedData);
  } catch (error) {
    console.error("Error in /questions:", error);
    if (error instanceof SyntaxError) {
      console.error("JSON parsing error:", error);
      res.status(500).json({ error: "Error parsing question data: " + error.message });
    } else {
      res.status(500).json({ error: "Error fetching question data: " + error.message });
    }
  }
});

app.post("/analyze", async (req, res) => {
  const { responses } = req.body;

  if (!responses || !Array.isArray(responses)) {
    return res.status(400).json({ error: "Invalid responses: must be an array" });
  }

  try {
    const userInsights = await getInsightsFromResponses(responses);
    res.json({ insights: userInsights });
  } catch (error) {
    console.error("Error in /analyze:", error);
    res.status(500).json({ error: "Error analyzing responses" });
  }
});

// async function getInsightsFromResponses(responses) {
//   const userResponsesText = responses.map(r => `Q: ${r.question}, A: ${r.answer}`).join("; ");

//   const contextMessage = `Based on the following user responses from a therapy session, analyze and provide a JSON object with potential mental health conditions the user might be experiencing. Include a confidence level for each condition. The output should be in this format:
//   {
//     "potentialConditions": [
//       {
//         "condition": "condition name",
//         "confidence": "low/medium/high"
//       }
//     ]
//   }
//   User responses: ${userResponsesText}`;

//   try {
//     const response = await groq.chat.completions.create({
//       messages: [{ role: "user", content: contextMessage }],
//       model: "llama-3.2-3b-preview"
//     });

//     return response.choices[0]?.message?.content;
//   } catch (error) {
//     console.error("Error in getInsightsFromResponses:", error);
//     throw error;
//   }
// }


// async function getInsightsFromResponses(responses) {
//   const userResponsesText = responses.map(r => `Q: ${r.question}, A: ${r.answer}`).join("; ");

//   const contextMessage = `Based on the following user responses from a therapy session, analyze and provide a JSON object with potential mental health conditions the user might be experiencing. Include a confidence level as a percentage for each condition. The output should be in this format:
//   {
//     "potentialConditions": [
//       {
//         "condition": "condition name",
//         "confidence": 75 // Percentage between 0 and 100
//       }
//     ]
//   }
//   Provide at least 3 potential conditions, even if some have low confidence. Ensure the confidence levels are integers between 0 and 100.
//   User responses: ${userResponsesText}`;

//   try {
//     const response = await groq.chat.completions.create({
//       messages: [{ role: "user", content: contextMessage }],
//       model: "llama-3.2-3b-preview"
//     });

//     const content = response.choices[0]?.message?.content;
    
//     // Try to extract and parse the JSON object from the content
//     const jsonMatch = content.match(/\{[\s\S]*\}/);
//     if (jsonMatch) {
//       const jsonStr = jsonMatch[0];
//       try {
//         const parsedData = JSON.parse(jsonStr);
        
//         // Validate the structure and confidence values
//         if (Array.isArray(parsedData.potentialConditions)) {
//           parsedData.potentialConditions = parsedData.potentialConditions.map(condition => ({
//             ...condition,
//             confidence: Math.min(Math.max(Math.round(condition.confidence), 0), 100)
//           }));
//         }
        
//         return JSON.stringify(parsedData);
//       } catch (parseError) {
//         console.error("JSON parsing error:", parseError);
//         throw new Error("Invalid JSON in API response");
//       }
//     } else {
//       throw new Error("No valid JSON object found in the response");
//     }
//   } catch (error) {
//     console.error("Error in getInsightsFromResponses:", error);
//     throw error;
//   }
// }

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

async function getInsightsFromResponses(responses) {
  const userResponsesText = responses.map(r => `Q: ${r.question}, A: ${r.answer}`).join("; ");

  const contextMessage = `Based on the following user responses from a therapy session, analyze and provide a JSON object with potential mental health conditions the user might be experiencing. Include a confidence level as a percentage for each condition. The output should be in this format:
  {
    "potentialConditions": [
      {
        "condition": "condition name",
        "confidence": 75 // Percentage between 0 and 100
      }
    ]
  }
  Provide at least 3 potential conditions, even if some have low confidence. Ensure the confidence levels are integers between 0 and 100.
  User responses: ${userResponsesText}`;

  try {
    const response = await groq.chat.completions.create({
      messages: [{ role: "user", content: contextMessage }],
      model: "llama-3.2-3b-preview"
    });

    const content = response.choices[0]?.message?.content;
    
    // Try to extract and parse the JSON object from the content
    const jsonMatch = content.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      const jsonStr = jsonMatch[0];
      try {
        const parsedData = JSON.parse(jsonStr);
        
        // Validate the structure and format the output
        if (Array.isArray(parsedData.potentialConditions)) {
          const readableConditions = parsedData.potentialConditions.map(condition => {
            const confidence = Math.min(Math.max(Math.round(condition.confidence), 0), 100);
            return `${condition.condition} (Confidence: ${confidence}%)`;
          }).join('\n');

          return `Potential mental health conditions based on your responses:\n${readableConditions}`;
        }
        
        throw new Error("Invalid structure for potential conditions");
      } catch (parseError) {
        console.error("JSON parsing error:", parseError);
        throw new Error("Invalid JSON in API response");
      }
    } else {
      throw new Error("No valid JSON object found in the response");
    }
  } catch (error) {
    console.error("Error in getInsightsFromResponses:", error);
    throw error;
  }
}

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
