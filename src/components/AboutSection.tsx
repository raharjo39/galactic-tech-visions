
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Database, Layers, Map } from 'lucide-react';

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
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

    const section = sectionRef.current;
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const values = [
    {
      icon: <Layers className="h-10 w-10 text-galactic-blue" />,
      title: "Innovation-Driven",
      description: "Cutting-edge technology to solve complex problems across industries."
    },
    {
      icon: <Map className="h-10 w-10 text-galactic-blue" />,
      title: "Local Expertise",
      description: "Deep understanding of Indonesian business needs and market conditions."
    },
    {
      icon: <Database className="h-10 w-10 text-galactic-blue" />,
      title: "End-to-End Solutions",
      description: "Complete support from planning and execution to maintenance."
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50 reveal" id="about">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-heading">About GLC</h2>
          <p className="text-lg text-gray-600">
            GLC combines innovation, local expertise, and end-to-end solutions to solve Indonesia's most complex challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {values.map((value, index) => (
            <div 
              key={index}
              className="staggered-item bg-white p-8 rounded-xl shadow-sm border border-gray-100 card-hover"
            >
              <div className="mb-4">{value.icon}</div>
              <h3 className="text-xl font-bold text-galactic-darkBlue mb-3">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center staggered-item">
          <Link to="/about" className="btn-outline">
            Learn More About Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
