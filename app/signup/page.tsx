"use client"
import { useState, ChangeEvent, FormEvent } from 'react';
import { Alert, AlertDescription } from '@/components/ui/alert';
interface FormData {
  name: string;
  email: string;
  username: string;
  password: string;
  DOB: string;
  Bio: string;
}

const SignupForm = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    username: '',
    password: '',
 DOB:'',
    Bio: ''
  });
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const handleSignup = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setMessage('');
    setIsError(false);

    try {
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          username: formData.username,
          password: formData.password,
          DOB: formData.DOB,
          Bio: formData.Bio
        }),
      });

      const data = await res.json();
      if (res.ok) {
        setMessage('Signup successful! Redirecting to login...');
        // Here you would typically redirect to the login page or dashboard
      } else {
        setIsError(true);
        setMessage(data.message || 'An error occurred during signup');
      }
    } catch (error) {
      setIsError(true);
      setMessage('An error occurred. Please try again.');
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded px-8 py-6 max-w-md w-full">
        <h2 className="text-2xl font-bold text-center mb-6 text-black">Sign Up</h2>
        {message && (
          <Alert className={`mb-4 ${isError ? 'bg-red-100' : 'bg-green-100'} text-black`}>
            <AlertDescription>{message}</AlertDescription>
          </Alert>
        )}
        <form onSubmit={handleSignup}>
          <div className="mb-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 text-black"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 text-black"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Username"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 text-black"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 text-black"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="date"
              name="DOB"
              value={formData.DOB}
              onChange={handleChange}
              placeholder="Password"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 text-black"
              required
            />
          </div>
       
       
          <div className="mb-4">
            <textarea
              name="Bio"
              value={formData.Bio}
              onChange={handleChange}
              placeholder="Short bio (optional)"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 text-black"
              rows={3}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded focus:outline-none"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
