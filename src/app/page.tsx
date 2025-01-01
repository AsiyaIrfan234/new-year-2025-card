"use client";
import React, { useState } from "react";

const Home = () => {
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div
        className="relative w-[500px] h-[500px] bg-cover bg-center rounded-xl shadow-2xl overflow-hidden"
        style={{ backgroundImage: "url('/image/bg-fire.jpg')" }}
      >
        {!submitted ? (
          <div className="flex items-center justify-center h-full">
            <div className="bg-white bg-opacity-80 p-8 rounded-xl shadow-lg text-center w-4/5 backdrop-blur-md">
              <h1 className="text-3xl font-extrabold text-blue-600 mb-6">Enter Your Name</h1>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border-2 border-gray-300 rounded-lg px-6 py-3 mb-4 w-full text-lg focus:outline-none focus:ring-4 focus:ring-blue-500 focus:border-blue-500 transition"
                placeholder="Your Name"
              />
              <button
                onClick={handleSubmit}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition"
              >
                Submit
              </button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center text-center">
            <h1 className="text-4xl font-bold text-white mb-5 mt-12">Happy New Year 2025!</h1>
            <h2 className="text-4xl font-bold text-white">{name}</h2>
            <p className="text-xl text-white mt-16 drop-shadow-lg">
              "May this new year bring endless happiness, success, and the best of health to your life. May your dreams come true, and may every day of your life bring joy, love, and success. My prayers are that your every moment be filled with happiness, and may your heart always be at peace. Wishing you a prosperous, blissful, and blessed year ahead!"
            </p>
            <div className="text-sm text-white mt-6">
              <p className="italic font-semibold hover:text-yellow-300">
                Created with ❤️ by Asiya Irfan
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;





