import { useEffect, useState } from "react";

const Form = () => {
  const [countries, setCountries] = useState([])
  const getCountries = async () => {
    try {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const data = await response.json();
      const formatted = data.map(item => {
        return (item.name.common)
      }).sort((a, b) => a.localeCompare(b))
      setCountries(formatted)
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    getCountries()
  }, [])

  return (
    <form className="md:w-1/2 bg-[#f8f9fa] p-6 rounded-xl shadow-lg bg-opacity-0 backdrop-blur-md border border-black border-opacity-30 mt-6 md:mt-0 border-primary shadow-md hover:shadow-lg transition-shadow duration-200">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <input type="text" placeholder="First Name" className="p-3 bg-white border border-black-600 rounded-xl focus:outline-none focus:ring-2 bg-opacity-15 backdrop-blur-md border border-primary " />
        <input type="text" placeholder="Last Name" className="p-3 bg-[#f8f9fa] border border-gray-600 rounded-xl focus:outline-none focus:ring-2 bg-opacity-15 backdrop-blur-md border border-primary " />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <input type="email" placeholder="Email" className="p-3 bg-[#f8f9fa] border border-primary-600 rounded-xl focus:outline-none focus:ring-2 bg-opacity-15 backdrop-blur-md border border-primary" />
        <input type="tel" placeholder="Phone" className="p-3 bg-[#f8f9fa] border border-gray-600 rounded-xl focus:outline-none focus:ring-2 bg-opacity-15 backdrop-blur-md border border-primary " />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <select className="p-3 bg-[#f8f9fa] border border-gray-600 rounded-xl focus:outline-none focus:ring-2 bg-opacity-15 backdrop-blur-md border border-primary ">
          <option value="">Country</option>
          {countries.map((country) => {
            return <option value={country}>{country}</option>
          })}
        </select>
        <select className="p-3 bg-[#f8f9fa] border border-gray-600 rounded-xl focus:outline-none focus:ring-2 bg-opacity-15 backdrop-blur-md border border-primary ">
          <option value="">Contact Reason</option>
          <option value="tech_support">Tech Support</option>
          <option value="data_loss">Data Loss</option>
          <option value="doctor_data_abuse">Doctor Data Abuse</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <textarea placeholder="Message" className="p-3 w-full rounded-lg h-40 bg-[#f8f9fa] border border-gray-600 rounded-xl focus:outline-none focus:ring-2 bg-opacity-15 backdrop-blur-md border border-white border-opacity-10 mb-6"></textarea>
      <button type="submit" className="w-full p-4 bg-secondary rounded-full text-white font-semibold rounded-md hover:bg-primary transition-colors">Submit</button>
    </form>

  );
};

export default Form;