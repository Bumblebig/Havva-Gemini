import React from 'react';
import FeatureSection from './FeatureSection';
import Lottie from 'lottie-react';
import heart from '../assets/heart.json';
const DataSharing = () => {
  return (
    <FeatureSection
    title="Data Sharing"
    description="Securely share your vital sign readings with healthcare providers or family members for better communication and support."
  >
    <div className="flex flex-col lg:flex-row lg:items-start p-6 rounded-xl shadow-lg bg-WHITE bg-opacity-80 backdrop-blur-md border border-black border-opacity-30">
      <div className="w-full lg:w-1/2">
        <ul className="text-lg text- mb-4">
          <li>Temperature</li>
          <li>Pulse Rate</li>
          <li>Blood Pressure</li>
        </ul>
        
        <div className="mt-4 lg:mt-0 lg:mr-8">
          <Lottie animationData={heart} loop={true} autoplay={true} className="w-full max-w-xs mx-auto" />
        </div>
      
      </div>
      <div className="w-half lg:w-1/2 lg:ml-auto mt-8 lg:mt-0">
        <img
          src="https://images.pexels.com/photos/5327653/pexels-photo-5327653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="data sharing"
          className="block w-11/12 rounded-lg mx-auto md:w-3/4 lg:w-half xl:h-auto xl:w-full object-cover"
        />
      </div>
    </div>
  </FeatureSection>
  );
};

export default DataSharing;
