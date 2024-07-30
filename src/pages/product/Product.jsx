import React from 'react';
import { useNavigate } from 'react-router-dom';
import gemini from './assets/gemini.jpg';

const products = [
  {
    title: 'A VITAL SIGNS MONITOR',
    description: 'Cras ac sapien eget arcu faucibus tempor ac sit amet tortor. Integer iaculis ultricies velit id tempor. Phasellus dignissim tellus ac lorem convallis...',
    image: gemini,
  },
  {
    title: 'A GEMINI LEVERAGING AI MEDICAL CHATBOT',
    description: 'Donec ac sapien eget arcu faucibus tempor ac sit amet tortor. Integer iaculis ultricies velit id tempor. Phasellus dignissim tellus ac lorem convallis...',
    image: gemini,
  },
  {
    title: 'INSURANCE',
    description: 'COMING SOON',
    image: gemini,
  },
];

const Product = () => {
  return (
    <div className="min-h-screen relative bg-white px-4 sm:px-8 lg:px-16 py-8 pt-32">
      <div className='w-full h-screen fixed top-0 left-0 bg-[#0000005e] backdrop-blur-sm'>
        <p className="text-white text-center text-2xl lg:text-3xl font-bold relative top-1/2 -translate-y-1/2">IN PROGRESS...</p>
      </div>
      <header className="text-center mb-12">
        <h1 className="text-3xl lg:text-5xl font-bold text-darkGreen">Our Products</h1>
      </header>
      <div className="space-y-12">
        {products.map((product, index) => (
          <div key={index} className="flex flex-col lg:flex-row items-center gap-6">
            <img
              src={product.image}
              alt={product.title}
              className="w-full lg:w-1/3 h-64 object-cover rounded-lg"
            />
            <div className="hidden lg:block w-px h-64 bg-gray-300"></div> {/* Vertical line */}
            <div className="lg:w-2/3">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{product.title}</h3>
              <p className="text-gray-600">{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
