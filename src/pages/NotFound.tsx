
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="overflow-hidden">
      <Navbar />
      
      <div className="min-h-screen flex items-center justify-center">
        <div className="container-custom text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-9xl font-bold text-galactic-blue mb-6">404</h1>
            <h2 className="text-4xl font-bold text-galactic-darkBlue mb-6">Page Not Found</h2>
            <p className="text-xl text-gray-600 mb-8">
              The page you're looking for doesn't exist or has been moved.
            </p>
            <Link to="/" className="btn-primary">
              Return to Home
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;
