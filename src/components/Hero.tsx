
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    const heroEl = heroRef.current;
    if (heroEl) {
      const elements = heroEl.querySelectorAll('.reveal');
      elements.forEach(el => observer.observe(el));
    }

    return () => {
      if (heroEl) {
        const elements = heroEl.querySelectorAll('.reveal');
        elements.forEach(el => observer.unobserve(el));
      }
    };
  }, []);

  return (
    <div ref={heroRef} className="relative min-h-screen flex items-center bg-gradient-to-r from-galactic-darkBlue to-galactic-navy overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute w-96 h-96 rounded-full bg-galactic-blue opacity-10 -top-20 -left-20"></div>
      <div className="absolute w-96 h-96 rounded-full bg-galactic-skyBlue opacity-5 bottom-0 -right-20"></div>
      
      <div className="container-custom relative z-10 pt-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7 text-white">
            <h1 className="reveal text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Transforming Indonesia Through Technology Innovation
            </h1>
            <p className="reveal text-xl opacity-90 mb-8 delay-75">
              Empowering industries with AI, IoT, Digital Twin, and infrastructure excellence.
            </p>
            <div className="reveal flex flex-wrap gap-4 delay-150">
              <Link to="/solutions" className="btn-primary group">
                Discover Our Solutions
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link to="/about" className="btn-outline text-white border-white hover:bg-white hover:text-galactic-darkBlue">
                About GLC
              </Link>
            </div>
          </div>
          
          <div className="md:col-span-5 reveal">
            <div className="relative">
              <div className="absolute inset-0 bg-galactic-blue rounded-lg opacity-20 blur-xl transform -translate-y-4 translate-x-4"></div>
              <div className="relative bg-gradient-to-br from-gray-900 to-galactic-darkBlue rounded-lg p-6 border border-white/10">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                    <div className="text-galactic-skyBlue text-4xl font-bold">AI</div>
                    <div className="text-white/80 text-sm mt-2">Enterprise Solutions</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                    <div className="text-galactic-skyBlue text-4xl font-bold">IoT</div>
                    <div className="text-white/80 text-sm mt-2">Connected Ecosystems</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                    <div className="text-galactic-skyBlue text-4xl font-bold">DT</div>
                    <div className="text-white/80 text-sm mt-2">Digital Twin Services</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                    <div className="text-galactic-skyBlue text-4xl font-bold">DC</div>
                    <div className="text-white/80 text-sm mt-2">Data Center Solutions</div>
                  </div>
                </div>
                <div className="mt-4 text-center text-white/70 text-sm">
                  End-to-end technology services
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
