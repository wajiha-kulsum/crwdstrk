// import React, { useState, useRef, useEffect } from 'react';
// import axios from 'axios';
// import { PaperAirplaneIcon } from '@heroicons/react/24/solid';

// function App() {
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const messagesEndRef = useRef(null);

//   const scrollToBottom = () => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   useEffect(scrollToBottom, [messages]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!input.trim()) return;

//     const userMessage = { role: 'user', content: input };
//     setMessages(prev => [...prev, userMessage]);
//     setInput('');
//     setIsLoading(true);

//     try {
//       const response = await axios.post('http://localhost:5000/chat', { message: input }, {
//         responseType: 'stream'
//       });

//       let assistantMessage = { role: 'assistant', content: '' };
      
//       const reader = response.data.getReader();
//       const decoder = new TextDecoder();

//       while (true) {
//         const { value, done } = await reader.read();
//         if (done) break;
        
//         const chunk = decoder.decode(value);
//         const lines = chunk.split('\n\n');
        
//         for (const line of lines) {
//           if (line.startsWith('data: ')) {
//             const data = JSON.parse(line.slice(6));
//             if (data.content) {
//               assistantMessage.content += data.content;
//               setMessages(prev => [...prev.slice(0, -1), assistantMessage]);
//             }
//             if (data.done) {
//               break;
//             }
//           }
//         }
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="flex flex-col h-screen bg-gray-100">
//       <header className="p-4 text-center text-white bg-blue-600">
//         <h1 className="text-2xl font-bold">AI Therapist Chat</h1>
//       </header>
//       <main className="flex-grow p-4 overflow-auto">
//         <div className="max-w-2xl mx-auto">
//           {messages.map((message, index) => (
//             <div key={index} className={`mb-4 ${message.role === 'user' ? 'text-right' : 'text-left'}`}>
//               <div className={`inline-block p-3 rounded-lg ${message.role === 'user' ? 'bg-blue-500 text-white' : 'bg-white text-gray-800'}`}>
//                 {message.content}
//               </div>
//             </div>
//           ))}
//           {isLoading && (
//             <div className="text-center">
//               <div className="inline-block p-3 bg-gray-200 rounded-lg">
//                 Thinking...
//               </div>
//             </div>
//           )}
//           <div ref={messagesEndRef} />
//         </div>
//       </main>
//       <footer className="p-4 bg-white border-t">
//         <form onSubmit={handleSubmit} className="flex max-w-2xl mx-auto">
//           <input
//             type="text"
//             value={input}
//             onChange={(e) => setInput(e.target.value)}
//             placeholder="Type your message..."
//             className="flex-grow p-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           <button
//             type="submit"
//             disabled={isLoading}
//             className="p-2 text-white bg-blue-500 rounded-r-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           >
//             <PaperAirplaneIcon className="w-6 h-6" />
//           </button>
//         </form>
//       </footer>
//     </div>
//   );
// }

// export default App;








// import React, { useState, useRef, useEffect } from 'react';
// import axios from 'axios';
// import { PaperAirplaneIcon } from '@heroicons/react/24/solid';

// interface Message {
//   role: 'user' | 'assistant';
//   content: string;
// }

// const Chatbot: React.FC = () => {
//   const [messages, setMessages] = useState<Message[]>([]);
//   const [input, setInput] = useState<string>('');
//   const [isLoading, setIsLoading] = useState<boolean>(false);
//   const messagesEndRef = useRef<HTMLDivElement>(null);

//   const scrollToBottom = (): void => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   useEffect(scrollToBottom, [messages]);

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
//     e.preventDefault();
//     if (!input.trim()) return;

//     const userMessage: Message = { role: 'user', content: input };
//     setMessages(prev => [...prev, userMessage]);
//     setInput('');
//     setIsLoading(true);

//     try {
//       const response = await axios.post<ReadableStream>('http://localhost:5000/chat', { message: input }, {
//         responseType: 'stream'
//       });

//       let assistantMessage: Message = { role: 'assistant', content: '' };
      
//       const reader = response.data.getReader();
//       const decoder = new TextDecoder();

//       while (true) {
//         const { value, done } = await reader.read();
//         if (done) break;
        
//         const chunk = decoder.decode(value);
//         const lines = chunk.split('\n\n');
        
//         for (const line of lines) {
//           if (line.startsWith('data: ')) {
//             const data = JSON.parse(line.slice(6));
//             if (data.content) {
//               assistantMessage.content += data.content;
//               setMessages(prev => [...prev.slice(0, -1), assistantMessage]);
//             }
//             if (data.done) {
//               break;
//             }
//           }
//         }
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="flex flex-col h-screen bg-gray-100">
//       <header className="p-4 text-center text-white bg-blue-600">
//         <h1 className="text-2xl font-bold">AI Therapist Chat</h1>
//       </header>
//       <main className="flex-grow p-4 overflow-auto">
//         <div className="max-w-2xl mx-auto">
//           {messages.map((message, index) => (
//             <div key={index} className={`mb-4 ${message.role === 'user' ? 'text-right' : 'text-left'}`}>
//               <div className={`inline-block p-3 rounded-lg ${message.role === 'user' ? 'bg-blue-500 text-white' : 'bg-white text-gray-800'}`}>
//                 {message.content}
//               </div>
//             </div>
//           ))}
//           {isLoading && (
//             <div className="text-center">
//               <div className="inline-block p-3 bg-gray-200 rounded-lg">
//                 Thinking...
//               </div>
//             </div>
//           )}
//           <div ref={messagesEndRef} />
//         </div>
//       </main>
//       <footer className="p-4 bg-white border-t">
//         <form onSubmit={handleSubmit} className="flex max-w-2xl mx-auto">
//           <input
//             type="text"
//             value={input}
//             onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value)}
//             placeholder="Type your message..."
//             className="flex-grow p-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           <button
//             type="submit"
//             disabled={isLoading}
//             className="p-2 text-white bg-blue-500 rounded-r-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           >
//             <PaperAirplaneIcon className="w-6 h-6" />
//           </button>
//         </form>
//       </footer>
//     </div>
//   );
// }

// export default Chatbot;








// Chatbot.tsx
// import React, { useState, useRef, useEffect } from 'react';
// import { PaperAirplaneIcon } from '@heroicons/react/24/solid';

// interface Message {
//   role: 'user' | 'assistant';
//   content: string;
// }

// const Chatbot: React.FC = () => {
//   const [messages, setMessages] = useState<Message[]>([]);
//   const [input, setInput] = useState<string>('');
//   const [isLoading, setIsLoading] = useState<boolean>(false);
//   const messagesEndRef = useRef<HTMLDivElement>(null);

//   const scrollToBottom = (): void => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   useEffect(scrollToBottom, [messages]);

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
//     e.preventDefault();
//     if (!input.trim()) return;

//     const userMessage: Message = { role: 'user', content: input };
//     setMessages(prev => [...prev, userMessage]);
//     setInput('');
//     setIsLoading(true);

//     try {
//       const response = await fetch('http://localhost:5000/chat', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ message: input }),
//       });

//       const reader = response.body!.getReader();
//       const decoder = new TextDecoder();

//       let assistantMessage: Message = { role: 'assistant', content: '' };

//       while (true) {
//         const { value, done } = await reader.read();
//         if (done) break;
        
//         const chunk = decoder.decode(value);
//         const lines = chunk.split('\n\n');
        
//         for (const line of lines) {
//           if (line.startsWith('data: ')) {
//             try {
//               const data = JSON.parse(line.slice(5));
//               if (data.content) {
//                 assistantMessage.content += data.content;
//                 setMessages(prev => [...prev.slice(0, -1), { ...assistantMessage }]);
//               }
//               if (data.done) {
//                 setMessages(prev => [...prev, { ...assistantMessage }]);
//                 break;
//               }
//             } catch (error) {
//               console.error('Error parsing JSON:', error);
//             }
//           }
//         }
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="flex flex-col h-screen bg-gray-100">
//       <header className="p-4 text-center text-white bg-blue-600">
//         <h1 className="text-2xl font-bold">AI Therapist Chat</h1>
//       </header>
//       <main className="flex-grow p-4 overflow-auto">
//         <div className="max-w-2xl mx-auto">
//           {messages.map((message, index) => (
//             <div key={index} className={`mb-4 ${message.role === 'user' ? 'text-right' : 'text-left'}`}>
//               <div className={`inline-block p-3 rounded-lg ${message.role === 'user' ? 'bg-blue-500 text-white' : 'bg-white text-gray-800'}`}>
//                 {message.content}
//               </div>
//             </div>
//           ))}
//           {isLoading && (
//             <div className="text-center">
//               <div className="inline-block p-3 bg-gray-200 rounded-lg">
//                 Thinking...
//               </div>
//             </div>
//           )}
//           <div ref={messagesEndRef} />
//         </div>
//       </main>
//       <footer className="p-4 bg-white border-t">
//         <form onSubmit={handleSubmit} className="flex max-w-2xl mx-auto">
//           <input
//             type="text"
//             value={input}
//             onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value)}
//             placeholder="Type your message..."
//             className="flex-grow p-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           <button
//             type="submit"
//             disabled={isLoading}
//             className="p-2 text-white bg-blue-500 rounded-r-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           >
//             <PaperAirplaneIcon className="w-6 h-6" />
//           </button>
//         </form>
//       </footer>
//     </div>
//   );
// }

// export default Chatbot;









// import React, { useState, useRef, useEffect, FormEvent, ChangeEvent } from 'react';
// import { PaperAirplaneIcon } from '@heroicons/react/24/solid';

// interface Message {
//   role: 'user' | 'assistant';
//   content: string;
// }

// const Chatbot: React.FC = () => {
//   const [messages, setMessages] = useState<Message[]>([]);
//   const [input, setInput] = useState<string>('');
//   const [isLoading, setIsLoading] = useState<boolean>(false);
//   const messagesEndRef = useRef<HTMLDivElement | null>(null);

//   const scrollToBottom = (): void => {
//     messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
//   };

//   useEffect(scrollToBottom, [messages]);

//   const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
//     e.preventDefault();
//     if (!input.trim()) return;

//     const userMessage: Message = { role: 'user', content: input };
//     setMessages(prev => [...prev, userMessage]);
//     setInput('');
//     setIsLoading(true);

//     try {
//       const response = await fetch('http://localhost:5000/chat', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ message: input }),
//       });

//       const reader = response.body?.getReader();
//       const decoder = new TextDecoder();

//       let assistantMessage: Message = { role: 'assistant', content: '' };
//       setMessages(prev => [...prev, assistantMessage]);

//       if (reader) {
//         while (true) {
//           const { value, done } = await reader.read();
//           if (done) break;

//           const chunk = decoder.decode(value);
//           const lines = chunk.split('\n\n');

//           for (const line of lines) {
//             if (line.startsWith('data: ')) {
//               try {
//                 const data = JSON.parse(line.slice(5));
//                 if (data.content) {
//                   assistantMessage.content += data.content;
//                   setMessages(prev => [...prev.slice(0, -1), { ...assistantMessage }]);
//                 }
//                 if (data.done) {
//                   break;
//                 }
//               } catch (error) {
//                 console.error('Error parsing JSON:', error);
//               }
//             }
//           }
//         }
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="flex flex-col h-screen bg-gray-100">
//       <header className="p-4 text-center text-white bg-blue-600">
//         <h1 className="text-2xl font-bold">AI Therapist Chat</h1>
//       </header>
//       <main className="flex-grow p-4 overflow-auto">
//         <div className="max-w-2xl mx-auto">
//           {messages.map((message, index) => (
//             <div key={index} className={`mb-4 ${message.role === 'user' ? 'text-right' : 'text-left'}`}>
//               <div className={`inline-block p-3 rounded-lg ${message.role === 'user' ? 'bg-blue-500 text-white' : 'bg-white text-gray-800'}`}>
//                 {message.content}
//               </div>
//             </div>
//           ))}
//           {isLoading && (
//             <div className="text-center">
//               <div className="inline-block p-3 bg-gray-200 rounded-lg">
//                 Thinking...
//               </div>
//             </div>
//           )}
//           <div ref={messagesEndRef} />
//         </div>
//       </main>
//       <footer className="p-4 bg-white border-t">
//         <form onSubmit={handleSubmit} className="flex max-w-2xl mx-auto">
//           <input
//             type="text"
//             value={input}
//             onChange={(e: ChangeEvent<HTMLInputElement>) => setInput(e.target.value)}
//             placeholder="Type your message..."
//             className="flex-grow p-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           <button
//             type="submit"
//             disabled={isLoading}
//             className="p-2 text-white bg-blue-500 rounded-r-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           >
//             <PaperAirplaneIcon className="w-6 h-6" />
//           </button>
//         </form>
//       </footer>
//     </div>
//   );
// };

// export default Chatbot;






// import React, { useState, useRef, useEffect, FormEvent, ChangeEvent } from 'react';
// import { PaperAirplaneIcon } from '@heroicons/react/24/solid';

// interface Message {
//   role: 'user' | 'assistant';
//   content: string;
// }

// const Chatbot: React.FC = () => {
//   const [messages, setMessages] = useState<Message[]>([]);
//   const [input, setInput] = useState<string>('');
//   const [isLoading, setIsLoading] = useState<boolean>(false);
//   const messagesEndRef = useRef<HTMLDivElement | null>(null);

//   const scrollToBottom = (): void => {
//     messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
//   };

//   useEffect(scrollToBottom, [messages]);

//   const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
//     e.preventDefault();
//     if (!input.trim()) return;

//     const userMessage: Message = { role: 'user', content: input };
//     setMessages(prev => [...prev, userMessage]);
//     setInput('');
//     setIsLoading(true);

//     try {
//       const response = await fetch('http://localhost:5000/chat', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ message: input }),
//       });

//       const reader = response.body?.getReader();
//       const decoder = new TextDecoder();

//       let assistantMessage: Message = { role: 'assistant', content: '' };
//       setMessages(prev => [...prev, assistantMessage]);

//       if (reader) {
//         while (true) {
//           const { value, done } = await reader.read();
//           if (done) break;

//           const chunk = decoder.decode(value);
//           const lines = chunk.split('\n\n');

//           for (const line of lines) {
//             if (line.startsWith('data: ')) {
//               try {
//                 const data = JSON.parse(line.slice(5));
//                 if (data.content) {
//                   assistantMessage.content += data.content;
//                   setMessages(prev => [...prev.slice(0, -1), { ...assistantMessage }]);
//                 }
//                 if (data.done) {
//                   break;
//                 }
//               } catch (error) {
//                 console.error('Error parsing JSON:', error);
//               }
//             }
//           }
//         }
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="flex flex-col h-screen bg-gray-50">
//       <header className="p-4 text-center bg-transparent border-b border-gray-200">
//         <h1 className="text-xl font-semibold text-gray-800">AI Therapist Chat</h1>
//       </header>
//       <main className="flex-grow p-4 overflow-auto">
//         <div className="max-w-2xl mx-auto">
//           {messages.map((message, index) => (
//             <div key={index} className={`mb-4 ${message.role === 'user' ? 'text-right' : 'text-left'}`}>
//               <div className={`inline-block p-3 rounded-lg shadow-sm ${message.role === 'user' ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-800'}`}>
//                 {message.content}
//               </div>
//             </div>
//           ))}
//           {isLoading && (
//             <div className="text-center">
//               <div className="inline-block p-3 text-gray-600 bg-gray-100 rounded-lg shadow-sm">
//                 Thinking...
//               </div>
//             </div>
//           )}
//           <div ref={messagesEndRef} />
//         </div>
//       </main>
//       <footer className="p-4 bg-white border-t border-gray-200">
//         <form onSubmit={handleSubmit} className="flex max-w-2xl mx-auto">
//           <input
//             type="text"
//             value={input}
//             onChange={(e: ChangeEvent<HTMLInputElement>) => setInput(e.target.value)}
//             placeholder="Type your message..."
//             className="flex-grow p-2 bg-gray-100 border border-gray-300 rounded-l-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
//           />
//           <button
//             type="submit"
//             disabled={isLoading}
//             className="p-2 text-white bg-gray-800 rounded-r-lg shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-600"
//           >
//             <PaperAirplaneIcon className="w-5 h-5" />
//           </button>
//         </form>
//       </footer>
//     </div>
//   );
// };

// export default Chatbot;








import React, { useState, useRef, useEffect, FormEvent, ChangeEvent } from 'react'
import { Send } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface Message {
  role: 'user' | 'assistant'
  content: string
}

export default function Component() {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const messagesEndRef = useRef<HTMLDivElement | null>(null)

  const scrollToBottom = (): void => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(scrollToBottom, [messages])

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()
    if (!input.trim()) return

    const userMessage: Message = { role: 'user', content: input }
    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsLoading(true)

    try {
      const response = await fetch('http://localhost:5000/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: input }),
      })

      const reader = response.body?.getReader()
      const decoder = new TextDecoder()

      let assistantMessage: Message = { role: 'assistant', content: '' }
      setMessages(prev => [...prev, assistantMessage])

      if (reader) {
        while (true) {
          const { value, done } = await reader.read()
          if (done) break

          const chunk = decoder.decode(value)
          const lines = chunk.split('\n\n')

          for (const line of lines) {
            if (line.startsWith('data: ')) {
              try {
                const data = JSON.parse(line.slice(5))
                if (data.content) {
                  assistantMessage.content += data.content
                  setMessages(prev => [...prev.slice(0, -1), { ...assistantMessage }])
                }
                if (data.done) {
                  break
                }
              } catch (error) {
                console.error('Error parsing JSON:', error)
              }
            }
          }
        }
      }
    } catch (error) {
      console.error('Error:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card className="w-full max-w-3xl mx-auto h-[600px] flex flex-col bg-gradient-to-br from-purple-50 to-blue-50">
      <CardHeader className="border-b border-purple-100">
        <CardTitle className="text-2xl font-bold text-center text-purple-700">AI Therapist Chat</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow p-4 space-y-4 overflow-auto">
        {messages.map((message, index) => (
          <div key={index} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`flex items-end space-x-2 ${message.role === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
              <Avatar className={message.role === 'user' ? 'bg-purple-500' : 'bg-blue-500'}>
                <AvatarFallback>{message.role === 'user' ? 'U' : 'AI'}</AvatarFallback>
              </Avatar>
              <div className={`max-w-md p-3 rounded-2xl shadow-md ${
                message.role === 'user' 
                  ? 'bg-purple-500 text-white rounded-br-none' 
                  : 'bg-white text-gray-800 rounded-bl-none'
              }`}>
                {message.content}
              </div>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="flex items-center space-x-2">
              <Avatar className="bg-blue-500">
                <AvatarFallback>AI</AvatarFallback>
              </Avatar>
              <div className="max-w-md p-3 text-gray-800 bg-white rounded-bl-none shadow-md rounded-2xl">
                <div className="flex space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </CardContent>
      <CardFooter className="p-4 border-t border-purple-100">
        <form onSubmit={handleSubmit} className="flex w-full space-x-2">
          <Input
            type="text"
            value={input}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-grow bg-white border-purple-200 focus:ring-purple-400"
          />
          <Button type="submit" disabled={isLoading} className="text-white bg-purple-500 hover:bg-purple-600">
            <Send className="w-5 h-5" />
          </Button>
        </form>
      </CardFooter>
    </Card>
  )
}