import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className="min-h-screen bg-blue-100 flex items-center justify-center px-6">
      <div className="text-center max-w-md bg-white p-8 rounded-2xl shadow-lg">
        <div className="text-6xl mb-4">❄️☃️</div>
        <h1 className="text-4xl font-bold text-blue-700 mb-2">Brrr! Page Not Found</h1>
        <p className="text-gray-700 mb-6">
          It looks like you've wandered off the snowy path. Maybe the wind blew the page away? 🧊
        </p>
        <Link to="/" className="inline-block bg-blue-500 text-white px-5 py-2 rounded-full hover:bg-blue-600 transition">
          ❄️ Back to Safety
        </Link>
        <div className="mt-6 text-sm text-gray-500">
          Error code: <span className="font-mono bg-blue-50 px-2 py-1 rounded">404</span>
        </div>
      </div>
    </div>
  );
};

export default Error;
