import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link, useLocation } from "react-router-dom";



const Footer = () => {
  const curDate = new Date().getFullYear();
  const location = useLocation();

  const shouldHide = location.pathname === "/chat";

  if (shouldHide) {
    return null;
  }
  return (
    <footer className="bg-primary text-white pt-12 lg:pt-20">
      <div className="flex flex-wrap justify-center mx-auto px-4 md:mx-0 md:justify-between items-start md:w-full md:px-8 lg:px-10">
        {/* Company Logo and Social Media */}
        <div className="w-full flex flex-col items-center md:items-start mb-6 md:mb-0 md:w-max">
          <h1 className="text-3xl font-semibold cursor-pointer lg:text-5xl"><Link to="/">HAVVA</Link></h1>
          <div className="flex items-center gap-5 mb-5 mt-4 lg:mt-6">
            <a href="#"><FontAwesomeIcon icon={faFacebook} className='w-5 inline-block h-auto' /></a>
            <a href="#"><FontAwesomeIcon icon={faXTwitter} className='w-5 inline-block h-auto' /></a>
            <a href="#" ><FontAwesomeIcon icon={faLinkedin} className='w-5 inline-block h-auto' /></a>
            <a href="#" ><FontAwesomeIcon icon={faInstagram} className='w-5 inline-block h-auto' /></a>
          </div>
        </div>

        {/* Links Sections */}
        <div className="w-full md:w-3/4 flex flex-wrap justify-around md:justify-end md:gap-16 lg:gap-20">
          <div className="flex flex-col  md:items-start mb-4 md:mb-0">
            <h4 className="font-semibold text-secondary mb-4 xl:text-lg">Company</h4>
            <span className="cursor-pointer hover:text-alt mb-4 text-sm">
              <Link to="/about-us">About Us</Link>
            </span>
            <span className="cursor-pointer hover:text-alt mb-4 text-sm">
              <Link to="/contact">Contact</Link>
            </span>
            <span className="cursor-pointer hover:text-alt mb-4 text-sm">
              <Link to="#">Team</Link>
            </span>
          </div>

          <div className="flex flex-col  md:items-start mb-4 md:mb-0">
            <h4 className="font-semibold text-secondary mb-4 xl:text-lg">Products</h4>
            <span className="cursor-pointer hover:text-alt mb-4 text-sm">
              <Link to="/product">Product</Link>
            </span>
            <span className="cursor-pointer hover:text-alt mb-4 text-sm">
              <Link to="/features">Features</Link>
            </span>
            <span className="cursor-pointer hover:text-alt mb-4 text-sm">
              <Link to="/pricing">Pricing</Link>
            </span>
          </div>

          <div className="flex flex-col  md:items-start mb-4 md:mb-0">
            <h4 className="font-semibold text-secondary mb-4 xl:text-lg">Resources</h4>
            <span className="cursor-pointer hover:text-alt mb-4 text-sm">
              <Link to="#">Developer Docs</Link>
            </span>
            <span className="cursor-pointer hover:text-alt mb-4 text-sm">
              <Link to="/contact">Support</Link>
            </span>
            <span className="cursor-pointer hover:text-alt mb-4 text-sm">
              <Link to="#">FAQ</Link>
            </span>
          </div>

        </div>
      </div>


      <div className=" flex flex-wrap justify-center mt-8 pb-10 md:justify-between md:px-6 md:mt-20">
        <div className="text-center w-full text-sm md:w-auto mb-4 md:mb-0">
          © {curDate} Mcgeorge Consulting. All Rights Reserved.
        </div>
        <div className="flex items-center justify-center gap-2  w-full md:w-auto">
          <Link to="/privacy" className="hover:text-alt text-sm">Privacy policy</Link>
          <h6>|</h6>
          <Link to="/terms" className="hover:text-alt text-sm">Terms of use</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;