// // Components/CommunityChat.tsx
// import React, { useState, useEffect } from 'react';

// interface Message {
//   id: string;
//   user: string;
//   text: string;
//   timestamp: Date;
// }

// const CommunityChat: React.FC = () => {
//   const [messages, setMessages] = useState<Message[]>([]);
//   const [newMessage, setNewMessage] = useState('');

//   useEffect(() => {
//     // Fetch initial messages from your backend
//     // This is just a placeholder, replace with actual API call
//     const fetchMessages = async () => {
//       // const response = await fetch('/api/messages');
//       // const data = await response.json();
//       // setMessages(data);
//     };
//     fetchMessages();
//   }, []);

//   const handleSendMessage = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (newMessage.trim() === '') return;

//     const message: Message = {
//       id: Date.now().toString(),
//       user: 'Current User', // Replace with actual user info
//       text: newMessage,
//       timestamp: new Date(),
//     };

//     setMessages([...messages, message]);
//     setNewMessage('');

//     // Send message to your backend
//     // await fetch('/api/messages', {
//     //   method: 'POST',
//     //   body: JSON.stringify(message),
//     // });
//   };

//   return (
//     <div className="flex flex-col h-full">
//       <div className="flex-1 p-4 space-y-4 overflow-y-auto">
//         {messages.map((message) => (
//           <div key={message.id} className="p-3 bg-gray-100 rounded-lg">
//             <p className="font-bold">{message.user}</p>
//             <p>{message.text}</p>
//             <p className="text-xs text-gray-500">
//               {message.timestamp.toLocaleString()}
//             </p>
//           </div>
//         ))}
//       </div>
//       <form onSubmit={handleSendMessage} className="p-4 bg-white">
//         <div className="flex">
//           <input
//             type="text"
//             value={newMessage}
//             onChange={(e) => setNewMessage(e.target.value)}
//             className="flex-1 px-4 py-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             placeholder="Type a message..."
//           />
//           <button
//             type="submit"
//             className="px-4 py-2 text-white bg-blue-500 rounded-r-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           >
//             Send
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default CommunityChat;




// Components/CommunityChat.tsx
import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

interface Message {
  id: string;
  user: string;
  text: string;
  timestamp: Date;
}

const socket = io('http://your-backend-url'); // Replace with your actual backend URL

const CommunityChat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    // Listen for incoming messages 
    socket.on('message', (message: Message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    // Cleanup on component unmount
    return () => {
      socket.off('message');
    };
  }, []);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim() === '') return;

    const message: Message = {
      id: Date.now().toString(),
      user: 'Current User', // Replace with actual user info
      text: newMessage,
      timestamp: new Date(),
    };

    // Emit the message to the server
    socket.emit('sendMessage', message);

    setNewMessage('');
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 p-4 space-y-4 overflow-y-auto">
        {messages.map((message) => (
          <div key={message.id} className="p-3 bg-gray-100 rounded-lg">
            <p className="font-bold">{message.user}</p>
            <p>{message.text}</p>
            <p className="text-xs text-gray-500">
              {message.timestamp.toLocaleString()}
            </p>
          </div>
        ))}
      </div>
      <form onSubmit={handleSendMessage} className="p-4 bg-white">
        <div className="flex">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            className="flex-1 px-4 py-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Type a message..."
          />
          <button
            type="submit"
            className="px-4 py-2 text-white bg-blue-500 rounded-r-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default CommunityChat;