import Lottie from "lottie-react";
import { faKitMedical, faCommentMedical, faPrescriptionBottle, faChalkboard } from '@fortawesome/free-solid-svg-icons';
import { Benefits } from ".";
import AIIllustration from "../assets/ai-illustration.json";

export default function AIFeatureSection() {
    return (
        <section className="bg-secondary py-14 px-4 text-white lg:px-12">
            <div className="max-w-[1600px] mx-auto">
                <h2 className="text-center font-semibold text-lg lg:text-xl xl:text-2xl">Introducing Our Medical AI Assistant</h2>
                <p className="text-center text-sm mt-5 lg:text-lg lg:px-5 xl:text-base">Our cutting-edge Medical AI Assistant is designed to enhance your health monitoring experience by providing personalized medical insights and recommendations. By analyzing your symptoms and health data, the AI can diagnose potential conditions and suggest possible treatments. This intelligent assistant leverages the latest advancements in artificial intelligence to offer accurate and reliable health advice right at your fingertips.</p>

                <div className="mt-20 lg:flex lg:w-full lg:justify-between lg:items-center lg:mt-20 lg:px-5">
                    <article className="flex flex-col gap-14 md:gap-14 lg:w-1/2">
                        <div className="flex flex-col gap-14 text-center md:flex-row md:items-start md:text-left md:justify-between">
                            <Benefits
                                icon={faKitMedical}
                                title="First Aid and Emergency"
                                desc="Our AI provides immediate advice tailored to various scenarios. Simply input your situation, and receive step-by-step instructions to address the emergency effectively while waiting for professional help."
                            />
                            <Benefits
                                icon={faCommentMedical}
                                title="Treatment Suggestions"
                                desc="Based on the diagnosed conditions, our AI offers evidence-based treatment recommendations, including lifestyle changes, over-the-counter medications, and when to seek professional medical advice"
                            />
                        </div>
                        <div className="flex flex-col gap-14 text-center md:flex-row md:items-start md:text-left md:justify-between">
                            <Benefits
                                icon={faPrescriptionBottle}
                                title="OTC Prescriptions"
                                desc="Receive personalized suggestions for Over-The-Counter medications, including dosage and usage, to address common health issues."
                            />
                            <Benefits
                                icon={faChalkboard}
                                title="Continuous Learning"
                                desc="Our AI continuously learns from new data and medical research, improving its accuracy and the relevance of its recommendations over time"
                            />
                        </div>

                    </article>
                    <div className="mt-10 lg:w-2/5">
                        <Lottie animationData={AIIllustration} loop={true} autoplay={true} className="w-full block md:w-4/5 md:mx-auto md:mt-4 lg:w-full" />
                    </div>
                </div>
            </div>
        </section>
    )
}