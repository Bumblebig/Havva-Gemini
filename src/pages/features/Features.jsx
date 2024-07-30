import { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import Slider from 'react-slick';
import VitalSigns from './components/VitalSigns';
import MultiUserProfiles from './components/MultiUserProfiles';
import DataSharing from './components/DataSharing';
import EmergencyFeature from './components/EmergencyFeature';
import ChatBot from './components/ChatBot';
import { CTA } from "./components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FeatureSection from "./components/FeatureSection";
// import content from './content';


const FeaturesPage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const messagesEndRef = useRef(null);
  const scrollToTop = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <div className="min-h-screen relative bg-white px-4 sm:px-8 lg:px-50 py-8 pt-32">
      <div className='w-full h-screen fixed top-0 left-0 bg-[#0000005e] backdrop-blur-sm'>
        <p className="text-white text-center text-2xl lg:text-3xl font-bold relative top-1/2 -translate-y-1/2">IN PROGRESS...</p>
      </div>
      <div ref={messagesEndRef} className="absolute top-0" />
      <header className="text-center mb-12">
        <h1 className="text-3xl lg:text-5xl px-25 font-bold text-darkGreen">Our Features</h1>
      </header>
      <FeatureSection>
        <div className="mb-12 text-3xl lg:text-5xl px-25 font-bold text-darkGreen" >
          <h1>
            display content till we get something
          </h1>
        </div>
      </FeatureSection>
      <div className="lg:hidden space-y-12">
        <VitalSigns />
        <MultiUserProfiles />
        <DataSharing />
        <EmergencyFeature />
        <ChatBot />
        <CTA />
      </div>
      <div className="hidden md:block lg:block">
        <Slider {...settings}>
          <div className="px-4">
            <VitalSigns />
          </div>
          <div className="px-4">
            <MultiUserProfiles />
          </div>
          <div className="px-4">
            <DataSharing />
          </div>
          <div className="px-4">
            <EmergencyFeature />
          </div>
          <div className="px-4">
            <ChatBot />
          </div>
        </Slider>
        <div className="px-4">
          <CTA />
        </div>
      </div>
    </div>
  );
};

export default FeaturesPage;

