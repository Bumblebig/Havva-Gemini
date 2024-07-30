import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FeatureSection from "./components/FeatureSection";
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function Content() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);

  return (  
      <div id="vitals" className=" mt-20 my-8 p-6 bg-white rounded-lg border-primary shadow-md hover:shadow-lg transition-shadow duration-200 text-left border lg:h-[547px]
  max-h-100 sm:max-h-150 md:max-h-150 lg:max-h-[547px] xl:max-h-[48rem] overflow-auto">
        <h1>VitalSigns</h1>
      </div>

  );
}

export default Content;
