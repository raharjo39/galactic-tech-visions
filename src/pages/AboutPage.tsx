
import { useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            
            // Staggered animation for items
            const items = entry.target.querySelectorAll('.staggered-item');
            items.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add('active');
              }, 100 * index);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    const page = pageRef.current;
    if (page) {
      const elements = page.querySelectorAll('.reveal');
      elements.forEach(el => observer.observe(el));
    }

    return () => {
      if (page) {
        const elements = page.querySelectorAll('.reveal');
        elements.forEach(el => observer.unobserve(el));
      }
    };
  }, []);

  const values = [
    {
      title: "Innovation-Driven",
      description: "We leverage cutting-edge technology to solve complex challenges facing Indonesian businesses and government agencies. Our solutions are forward-thinking and designed to keep our clients ahead of the curve in a rapidly evolving digital landscape."
    },
    {
      title: "Local Expertise",
      description: "With deep knowledge of Indonesian markets, regulations, and business environments, we create solutions that are perfectly tailored to local needs. Our team understands the unique challenges and opportunities in the Indonesian context."
    },
    {
      title: "End-to-End Solutions",
      description: "GLC provides comprehensive technology solutions from initial consultation and planning through implementation, training, and ongoing maintenance. Our holistic approach ensures seamless integration and maximum value for our clients."
    }
  ];

  return (
    <div ref={pageRef} className="overflow-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-28 pb-20 bg-gradient-to-r from-galactic-darkBlue to-galactic-navy">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 reveal">About GLC Indonesia</h1>
            <p className="text-lg md:text-xl opacity-90 mb-8 reveal">Innovation-driven, rooted in Indonesian expertise, and offering complete technology solutions from consultation to maintenance.</p>
          </div>
        </div>
      </div>

      {/* Company Introduction */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-5 reveal">
              <div className="relative">
                <div className="absolute inset-0 bg-galactic-blue rounded-lg opacity-20 blur-xl transform -translate-y-4 translate-x-4"></div>
                <img 
                  src="https://images.unsplash.com/photo-1531297484001-80022131f5a1" 
                  alt="GLC Team" 
                  className="rounded-lg relative z-10 w-full"
                />
              </div>
            </div>
            
            <div className="md:col-span-7 reveal">
              <h2 className="section-heading">Our Company</h2>
              <p className="text-lg text-gray-600 mb-6">
                PT. Galactic Indonesia Perkasa (GLC) is a leading Indonesian technology solutions provider that combines innovation, local expertise, and end-to-end capabilities to solve the most complex technological challenges for businesses and government agencies across Indonesia.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Founded with a vision to transform Indonesia through technology innovation, GLC specializes in integrated AI, IoT, Digital Twin, Drone, and Infrastructure solutions that are tailored to meet the unique needs of the Indonesian market.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our team of experts brings together deep technical knowledge and practical experience across multiple industries, allowing us to deliver solutions that drive real business value and technological advancement throughout Indonesia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50 reveal">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="section-heading">Our Core Values</h2>
            <p className="text-lg text-gray-600">
              What makes GLC different is our approach to technology solutions, guided by three fundamental principles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="staggered-item bg-white p-8 rounded-xl shadow-sm border border-gray-100 card-hover"
              >
                <h3 className="text-2xl font-bold text-galactic-darkBlue mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 reveal">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-7">
              <h2 className="section-heading">Why Choose GLC Indonesia</h2>
              <p className="text-lg text-gray-600 mb-8">
                We deliver value through our commitment to excellence, understanding of the local market, and technological expertise.
              </p>
              
              <div className="space-y-6">
                {[
                  "Proven track record with major Indonesian enterprises and government projects",
                  "Comprehensive service portfolio covering all technological needs",
                  "Dedicated support and maintenance teams",
                  "Scalable solutions that grow with your business",
                  "Deep understanding of Indonesian regulatory requirements",
                  "Focus on sustainable and environmentally friendly solutions"
                ].map((item, index) => (
                  <div key={index} className="flex staggered-item">
                    <CheckCircle className="h-6 w-6 text-galactic-blue mr-3 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-10">
                <Link to="/solutions" className="btn-primary group">
                  Explore Our Solutions
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
            
            <div className="md:col-span-5 staggered-item">
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81" 
                    alt="GLC Work" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1487887235947-a955ef187fcc" 
                    alt="GLC Technology" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085" 
                    alt="GLC AI" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6" 
                    alt="GLC Digital" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-galactic-darkBlue text-white reveal">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Let's discuss how our technologies can help you achieve your goals.
            </p>
            <Link to="/contact" className="btn-primary bg-white text-galactic-darkBlue hover:bg-galactic-blue hover:text-white">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default AboutPage;
