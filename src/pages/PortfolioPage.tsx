
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const PortfolioPage = () => {
  const pageRef = useRef<HTMLDivElement>(null);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    window.scrollTo(0, 0);
    
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
    },
    {
      id: "mandiri-ai",
      title: "AI-Powered Customer Service for Bank Mandiri",
      description: "Developed an AI solution that improved customer service response times by 75% and increased satisfaction scores.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      category: "AI"
    },
    {
      id: "jakarta-smart-city",
      title: "Jakarta Smart City Traffic Management",
      description: "Implemented an integrated traffic management system with real-time analytics and predictive capabilities.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      category: "Smart City"
    },
    {
      id: "telkom-data-analytics",
      title: "Data Analytics Platform for Telkom Indonesia",
      description: "Created a comprehensive data analytics platform that processes millions of data points for business intelligence.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      category: "Data Analytics"
    },
    {
      id: "pertamina-infrastructure",
      title: "IT Infrastructure Modernization for Pertamina",
      description: "Overhauled the IT infrastructure for Indonesia's state-owned oil and natural gas corporation.",
      image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334",
      category: "Infrastructure"
    }
  ];

  const filteredItems = filter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category.toLowerCase() === filter.toLowerCase());

  const categories = ['all', ...new Set(portfolioItems.map(item => item.category.toLowerCase()))];

  return (
    <div ref={pageRef} className="overflow-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-28 pb-20 bg-gradient-to-r from-galactic-darkBlue to-galactic-navy">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 reveal">Our Portfolio</h1>
            <p className="text-lg md:text-xl opacity-90 mb-8 reveal">
              Explore our successful projects that have transformed businesses across Indonesia.
            </p>
          </div>
        </div>
      </div>

      {/* Portfolio Filter */}
      <section className="py-10">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-3 mb-12 reveal">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-md transition-all ${
                  filter === category
                    ? 'bg-galactic-blue text-white'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-10 pb-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 reveal">
            {filteredItems.map((item, index) => (
              <Link 
                key={index} 
                to={`/portfolio/${item.id}`}
                className="staggered-item group"
              >
                <div className="overflow-hidden rounded-xl shadow-sm h-full flex flex-col">
                  <div
                    className="h-64 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url(${item.image})` }}
                  ></div>
                  <div className="bg-white p-6 border border-gray-100 flex flex-col flex-grow">
                    <div className="text-sm font-medium text-galactic-blue mb-2">{item.category}</div>
                    <h3 className="text-xl font-bold text-galactic-darkBlue mb-2 group-hover:text-galactic-blue transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 mb-4 flex-grow">
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

          {filteredItems.length === 0 && (
            <div className="text-center py-12 text-gray-600">
              No portfolio items found for the selected category.
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50 reveal">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-galactic-darkBlue">
              Ready to Build Your Success Story?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Let's discuss how we can help your organization achieve its technological goals.
            </p>
            <Link to="/contact" className="btn-primary">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default PortfolioPage;
