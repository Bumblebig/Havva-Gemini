import { useState, useEffect, lazy, Suspense } from "react";
import Navbar from "./components/navigation/Navbar";
import Footer from "./components/navigation/Footer";
import Chatbot from "./components/navigation/Chatbot";
import Loader from "./components/ui/Loader";
import { Navigate, Route, Routes } from "react-router-dom";
import { auth } from "./firebase";
import { SharedNavStateProvider } from "./context/SharedNavState";

// lazy loaded components
const Home = lazy(() => import("./pages/home/Home"));
const About = lazy(() => import("./pages/about/About"));
const Contact = lazy(() => import("./pages/contact/Contact"));
const Dashboard = lazy(() => import("./pages/dashboard/Dashboard"));
const Product = lazy(() => import("./pages/product/Product"));
const Features = lazy(() => import("./pages/features/Features"));
const Pricing = lazy(() => import("./pages/pricing/Pricing"));
const Login = lazy(() => import("./pages/auth/Login"));
const Chat = lazy(() => import("./pages/chat/Chat"));
const Content = lazy(() => import('./pages/features/content'));

function App() {
  const [user, setUser] = useState();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  }, []);

  return (
    <div className="app font-body relative w-full transition-all">
      <Suspense fallback={<Loader />}>
        <SharedNavStateProvider>
          <Navbar />
          <div className="layout transition-all">
            <>
              <Routes>
                <Route element={<Home />} path="/" />
                <Route element={<About />} path="/about-us" />
                <Route element={<Contact />} path="/contact" />
                <Route element={<Dashboard />} path="/dashboard" />
                <Route element={<Product />} path="/product" />
                <Route element={<Features />} path="/features" />
                <Route element={<Pricing />} path="/pricing" />
                <Route element={user ? <Navigate to="/chat" /> : <Login />} path="/login" />
                <Route element={user ? <Chat /> : <Navigate to="/login" />} path="/chat" />
                <Route path="/other" element={<Content />} />
             </Routes>
            </>
          </div>
          <Footer />
          <Chatbot />
        </SharedNavStateProvider>
      </Suspense>
    </div>
  );
}

export default App;

