import React from 'react';
import Lottie from 'lottie-react';
import heart from '../assets/heart.json'; 
import FeatureSection from '../components/FeatureSection';
import { Link } from 'react-router-dom';

const VitalSigns = () => {
  return (   
   <FeatureSection
    title="Vital Sign Readings"
    description="Instant readings of pulse rate, temperature, and blood pressure ensure you're always up-to-date on your health status.">
     <div className="flex flex-col lg:flex-row lg:items-start p-6 rounded-xl shadow-lg bg-WHITE bg-opacity-80 backdrop-blur-md border border-black border-opacity-30">
      <div className="w-full lg:w-1/2">
        <ul className="text-lg font-bold text-primary mb-4">
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
          src="https://navarro-medical.com/images/blood-pressure-monitoring-at-home.jpg"
          alt="lady-checks-bp"
          className="block w-11/12 rounded-lg mx-auto md:w-3/4 lg:w-half xl:h-auto xl:w-full object-cover"
        />
      </div>
    </div>
    <div>
      <Link to="/other#vitals">Explore More</Link>
    </div>
    </FeatureSection>
  );
};

export default VitalSigns;
