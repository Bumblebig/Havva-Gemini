const FeatureSection = ({ title, description, children }) => (
  <div className="my-8 p-6 bg-white rounded-lg border-primary shadow-md hover:shadow-lg transition-shadow duration-200 text-left border lg:h-[547px]
  max-h-100 sm:max-h-150 md:max-h-150 lg:max-h-[547px] xl:max-h-[48rem] overflow-auto">
    <h2 className="text-2xl font-semibold text-darkGreen mb-4">{title}</h2>
    <p className="text-gray-700 mb-6">{description}</p>
    {children}
  </div>
);

export default FeatureSection;




