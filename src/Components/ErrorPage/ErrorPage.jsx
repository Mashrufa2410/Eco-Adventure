import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center">
      <div>
        <h1 className="text-8xl mb-5 font-bold">Ooops</h1>
        <h2 className="text-xl mb-2 font-medium text-gray-700">Oops! The page you're looking for doesn't exist.</h2>
        <p className="text-lg text-gray-500">It might have been moved, deleted, or never existed.</p>
      </div>
        <Link
          to="/" 
          className="btn bg-[#30636b] text-white py-2 px-4 mt-3 rounded-md transition duration-300"
        >
          Go to Homepage
        </Link>
    </div>
    );
};

export default ErrorPage;