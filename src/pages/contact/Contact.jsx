import { useEffect, useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons/faPhone';
import { faMapLocationDot } from '@fortawesome/free-solid-svg-icons/faMapLocationDot';
import Form from './components/form'
const Contact = () => {
  const messagesEndRef = useRef(null);
  const scrollToTop = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <div className="relative min-h-screen bg-white px-4 sm:px-8 lg:px-50 py-8 pt-32">
      <div ref={messagesEndRef} className="absolute top-0" />
      <div className="absolute inset-0 bg-cover bg-center"></div>
      <div className="relative max-w-7xl xl:max-w-[1600px] mx-auto text-black pt-20">
        <div className="flex flex-col md:flex-row justify-between mb-8">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl font-bold">Reach out <span className="text-[black]">→</span></h1>
            <p className="text-lg">Have a question or need assistance? Reach out to our dedicated support team. We're here to help with any inquiries you may have.</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Personalized assistance</li>
              <li>Timely response</li>
              <li>Comprehensive support</li>
            </ul>
            <div className="flex space-x-4 text-3xl">
              <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
              <a href="#"><FontAwesomeIcon icon={faXTwitter} /></a>
              <a href="https://www.linkedin.com/in/havva-medical-a324a2319/" target="_blank" ><FontAwesomeIcon icon={faLinkedin} /></a>
              <a href="https://www.instagram.com/havvamedic/" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a>
            </div>
          </div>
          <Form />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10">
          <div className="bg-white bg-opacity-80 p-6 rounded-xl shadow-lg bg-opacity-10 backdrop-blur-md border border-white border-opacity-10 border-primary shadow-md hover:shadow-lg transition-shadow duration-200">
            <a href="mailto:havvamedic@gmail.com"><FontAwesomeIcon icon={faEnvelope} /></a>
            <h4 className="font-semibold mb-2">Email Us</h4>
            <a href="mailto:havvamedic@gmail.com">havvamedic@gmail.com</a>
          </div>
          <div className="bg-white bg-opacity-80 p-6 rounded-xl shadow-lg bg-opacity-10 backdrop-blur-md border border-white border-opacity-10 border-primary shadow-md hover:shadow-lg transition-shadow duration-200">
            <a href="tel:+2348100445404"><FontAwesomeIcon icon={faPhone} /></a>
            <h4 className="font-semibold mb-2">Call Us</h4>
            <a href="tel:+2348100445404">+2348100445404</a>
          </div>
          <div className="bg-white bg-opacity-80 p-6 rounded-xl shadow-lg bg-opacity-10 backdrop-blur-md border border-white border-opacity-10 border-primary shadow-md hover:shadow-lg transition-shadow duration-200">
            <a href=""><FontAwesomeIcon icon={faMapLocationDot} /></a>
            <h4 className="font-semibold mb-2">Our Location</h4>
            <p>Nigeria</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
