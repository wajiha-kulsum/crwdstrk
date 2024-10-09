'use client';

import { useEffect, useState } from 'react';

export default function Slash() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch('/api/auth')  // Fetch from the correct API route
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);
  
  
  return (
    <div>
      <h1>Root API Response:</h1>
      {data ? <p>{data.message}</p> : <p>Loading...</p>}
    </div>
  );
}
