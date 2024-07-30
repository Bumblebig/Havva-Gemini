import { useEffect, useRef } from "react";
import { PriceCard } from "./components";

export default function Pricing() {
  const trueState = true;
  const falseState = false;

  const messagesEndRef = useRef(null);
  const scrollToTop = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <section className="py-24 pt-32 px-8 w-full transition-all">
      <div ref={messagesEndRef} className="absolute top-0" />
      <div className="text-center">
        <h1 className="text-2xl font-semibold mb-3 text-secondary lg:text-3xl xl:mb-5">Choose Your Plan</h1>
        <p className="mx-w-[600px] text-lg text-gray-800 xl:text-xl">Find the perfect plan for your health monitoring needs.</p>
      </div>

      <div className="flex flex-col items-center gap-10 mt-12 lg:flex-row lg:items-start lg:justify-center lg:mt-20 xl:mt-24">
        <PriceCard
          type="Free Plan"
          price="0"
          features={["Up to 5 User Profiles", "Real-time Monitoring", "Basic AI Diagnostics", "Data Sharing",]}
          recommended={falseState}
        />

        <PriceCard
          type="Pro Plan"
          price="19.99"
          features={["Up to 10 User Profiles", "Advanced AI Diagnostics", "Emergency Alerts", "Priority Customer Support", "Data Sharing", "Offline Storage for 10 Tests"]}
          recommended={trueState}
        />

        <PriceCard
          type="Premium Plan"
          price="29.99"
          features={["Unlimited User Profiles", "Full AI Diagnostics Suite", "Personalized Health Insights", "Emergency Alerts", "24/7 Customer Support", "Unlimited Offline Storage"]}
          recommended={falseState}
        />
      </div>
    </section>
  )
}
