
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const PortfolioSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            
            // Staggered animation for portfolio items
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

  const portfolioItems = [
    {
      id: "palm-oil-iot",
      title: "IoT System for Palm Oil Plantation - 3000Ha",
      description: "Implemented a connected ecosystem improving irrigation, crop health monitoring, and sustainability across a 3000-hectare plantation.",
      image: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc",
      category: "IoT"
    },
    {
      id: "smartfren-cctv",
      title: "Utility CCTV & Visitor Management System for Smartfren",
      description: "Deployed a smart CCTV network and visitor system to enhance security and operational efficiency at Smartfren.",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
      category: "Security Systems"
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50 reveal" id="portfolio">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-heading">Our Portfolio</h2>
          <p className="text-lg text-gray-600">
            Explore our successful projects that have transformed businesses across Indonesia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioItems.map((item, index) => (
            <Link 
              key={index} 
              to={`/portfolio/${item.id}`}
              className="staggered-item group"
            >
              <div className="overflow-hidden rounded-xl shadow-sm">
                <div
                  className="h-64 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url(${item.image})` }}
                ></div>
                <div className="bg-white p-6 border border-gray-100">
                  <div className="text-sm font-medium text-galactic-blue mb-2">{item.category}</div>
                  <h3 className="text-xl font-bold text-galactic-darkBlue mb-2 group-hover:text-galactic-blue transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {item.description}
                  </p>
                  <div className="flex items-center text-galactic-blue font-medium">
                    <span className="mr-2">View Project</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-12 staggered-item">
          <Link to="/portfolio" className="btn-outline">
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
