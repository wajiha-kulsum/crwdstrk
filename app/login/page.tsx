"use client";
import { useState, ChangeEvent, FormEvent } from 'react';
import { Alert, AlertDescription } from '../../Components/ui/alert'; // Adjust path if necessary

const LoginForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setMessage('');
    setIsError(false);
    setIsLoading(true);

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        setMessage('Login successful! Redirecting...');
        // Here you would typically redirect to the dashboard or home page
        // For example: router.push('/dashboard');
      } else {
        setIsError(true);
        setMessage(data.message || 'An error occurred during login');
      }
    } catch (error) {
      setIsError(true);
      setMessage('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md px-8 py-6 bg-white rounded shadow-md">
        <h2 className="mb-6 text-2xl font-bold text-center text-black">Log In</h2>
        {message && (
          <Alert className={`mb-4 ${isError ? 'bg-red-100' : 'bg-green-100'}`}>
            <AlertDescription className="text-black">{message}</AlertDescription>
          </Alert>
        )}
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Username"
              className="w-full px-4 py-2 text-black border border-gray-300 rounded focus:outline-none focus:border-blue-500" // Text color set to black
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
              className="w-full px-4 py-2 text-black border border-gray-300 rounded focus:outline-none focus:border-blue-500" // Text color set to black
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 font-semibold text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none disabled:opacity-50"
            disabled={isLoading} onClick={()=>{window.location.href="http://localhost:3000/dashboard"}}
          >
            {isLoading ? 'Logging in...' : 'Log In'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
