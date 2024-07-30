import React from 'react';
import FeatureSection from './FeatureSection';
import gemini from '../assets/gemini.jpg';
import Lottie from 'lottie-react';
import heart from '../assets/heart.json';
const ChatBot = () => {
  return (
    <FeatureSection
    title="AI Chatbot"
    description="An AI chatbot that leverages the Gemini API to provide data about medical situations,Our Medical AI Assistant enhances health monitoring by analyzing symptoms and health data to provide personalized insights,4
     diagnose conditions, and suggest treatments.."
  >
    <div className="flex flex-col lg:flex-row lg:items-start p-6 rounded-xl shadow-lg bg-WHITE bg-opacity-80 backdrop-blur-md border border-black border-opacity-30">
      <div className="w-full lg:w-1/2">
         <h2 className="text-2xl font-bold text-primary mb-4">have multiple user profiles</h2>
        <div className="mt-4 lg:mt-0 lg:mr-8">
          <Lottie animationData={heart} loop={true} autoplay={true} className="w-full max-w-xs mx-auto" />
        </div>
      
      </div>
      <div className="w-half lg:w-1/2 lg:ml-auto mt-8 lg:mt-0">
        <img
          src={gemini}
          alt="chatbot"
          className="block w-11/12 rounded-lg mx-auto md:w-3/4 lg:w-half xl:h-auto xl:w-full object-cover"
        />
      </div>
    </div>
  </FeatureSection>
  );
};

export default ChatBot;
