'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:8000/hello')
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((err) => setMessage('Error fetching message: ' + err.message));
  }, []);

  return (
    <main>
      <h1>Frontend</h1>
      <p>Backend says: {message}</p>
    </main>
  );
}