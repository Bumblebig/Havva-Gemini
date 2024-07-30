import { useNavigate } from "react-router-dom";
import Button from "../../../components/ui/Button";

const CTA = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-gray-100  py-12 mt-12 border-t border-gray-300 text-center">
      <div className="flex flex-col items-center w-11/12 max-w-screen-xl mx-auto gap-5 lg:flex-row lg:justify-between lg:text-left">
        <div className="max-w-lg mb-8 lg:mb-0">
          <h1 className="text-4xl mb-4 text-primary font-semibold">Got a question?</h1>
          <p className="text-xl mb-6 text-gray-600">Or want to learn more about what we offer and how you can get involved?</p>
          <Button size={'xl'} onClick={() => navigate('/contact')} variant={'btn-primary'}>
            Contact Us
          </Button>
        </div>
        <div className="flex-1 w-full h-64 bg-cover bg-center " style={{ backgroundImage: 'url("https://giraffesconsulting.com/wp-content/uploads/2023/12/pexels-resume-genius-18848927-1024x683-1024x585.jpg")' }}>
        </div>
      </div>
    </section>
  );
};

export default CTA;
