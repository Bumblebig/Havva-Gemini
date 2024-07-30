import { useEffect, useRef } from "react";
import { Hero, Features, AISection, CTA } from "./components";

const Home = () => {
  const messagesEndRef = useRef(null);
  const scrollToTop = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToTop();
  }, []);
  return (
    <section className="w-full">
      <div ref={messagesEndRef} className="absolute top-0" />
      <Hero />
      <Features />
      <AISection />
      <CTA />
    </section>
  )
}

export default Home