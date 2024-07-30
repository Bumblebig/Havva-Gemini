import React from 'react';
import FeatureSection from '../components/FeatureSection';
import heart from '../assets/heart.json';
import Lottie from 'lottie-react';
const MultiUserProfiles = () => {
  return (
<FeatureSection
        title="Multi-User Profiles "
        description="Create and manage up to five individual profiles under one account,perfect for families, keeping personal health data separate and secure."
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
          src="https://images.pexels.com/photos/1128317/pexels-photo-1128317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"  
          alt="lady-checks-bp"
          className="block w-11/12 rounded-lg mx-auto md:w-3/4 lg:w-half xl:h-auto xl:w-full object-cover"
        />
      </div>
    </div>
      </FeatureSection>
      )
      }
export default MultiUserProfiles;
