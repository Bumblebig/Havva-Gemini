import { Link } from "react-router-dom";

export default function CTA() {
    return (
        <section className="w-full h-auto relative py-16 bg-[#00000097] lg:py-20">
            <video autoPlay muted loop playsInline className="w-full object-cover absolute top-0 left-0 h-full -z-10">
                <source src="https://videos.pexels.com/video-files/6130551/6130551-hd_1280_720_30fps.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className="w-[85%] bg-white mx-auto md:flex md:items-start  md:gap-4 lg:w-full lg:max-w-[950px]">
                <img src="https://images.pexels.com/photos/8844903/pexels-photo-8844903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="doctor and patient" className="w-1/2 object-cover hidden md:block lg:w-[45%]" />
                <div className="max-w-[500px] py-8 px-8 md:pt-16 lg:pt-28">
                    <h2 className="text-primary font-semibold text-lg lg:text-xl">Ready to Take Control of Your Health?</h2>

                    <p className="text-sm mt-5 leading-normal lg:text-base lg:leading-relaxed">Join thousands of others who are monitoring their health in real-time with our Health Diagnostic Device.
                        Stay informed, stay healthy, and share your data with those who matter.</p>

                    <Link to="/login" className="text-sm inline-block mt-8 bg-primary text-white px-3 py-2 rounded hover:bg-[#002626dd] lg:text-base lg:mt-10">Get Started Today</Link>
                </div>
            </div>
        </section>
    )
}