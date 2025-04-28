
import { useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Ai, Database, Cloud, Drone, Server, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const SolutionsPage = () => {
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

  const solutions = [
    {
      id: "ai",
      icon: <Ai className="h-10 w-10 text-galactic-blue" />,
      title: "AI SaaS Suite",
      description: "Our AI SaaS Suite offers enterprise-grade artificial intelligence solutions specifically tailored for Indonesian businesses. From natural language processing that understands Bahasa Indonesia to computer vision systems designed for local infrastructures, our AI tools help organizations automate processes, gain insights from data, and make smarter decisions.",
      features: [
        "Bahasa Indonesia natural language processing",
        "Computer vision for local infrastructure monitoring",
        "Predictive analytics for business intelligence",
        "Machine learning models tailored to Indonesian market conditions",
        "Custom AI solution development"
      ],
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
    },
    {
      id: "digital-twin",
      icon: <Cloud className="h-10 w-10 text-galactic-blue" />,
      title: "Digital Twin as a Service",
      description: "Our Digital Twin platform creates virtual replicas of physical assets, systems, or processes that enable real-time monitoring, simulation, and optimization. By creating a digital mirror of your operations, you can test scenarios, predict outcomes, and make data-driven decisions without disrupting actual operations.",
      features: [
        "Real-time 3D visualization of facilities and assets",
        "IoT integration for live data synchronization",
        "Predictive maintenance capabilities",
        "Scenario planning and simulation tools",
        "Mobile access to digital twin interfaces"
      ],
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984"
    },
    {
      id: "iot",
      icon: <Database className="h-10 w-10 text-galactic-blue" />,
      title: "IoT as a Service",
      description: "Our IoT solutions create connected device ecosystems with comprehensive analytics capabilities. From agricultural monitoring to urban infrastructure management, we design, deploy, and manage IoT networks that collect and analyze data from the physical world to drive efficiency, sustainability, and innovation.",
      features: [
        "Custom IoT sensor networks design and deployment",
        "Edge computing capabilities for real-time analytics",
        "Cloud-based IoT data management platform",
        "Integration with existing business systems",
        "Ongoing monitoring and maintenance services"
      ],
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475"
    },
    {
      id: "drone",
      icon: <Drone className="h-10 w-10 text-galactic-blue" />,
      title: "Aerial Mapping & Drone Solutions",
      description: "Our drone-based services provide precision mapping and aerial data collection for multiple industry applications. From construction site monitoring to agricultural analysis, our drone solutions capture detailed imagery and data that help businesses make better decisions about their physical assets and operations.",
      features: [
        "High-resolution orthomosaic mapping",
        "3D terrain modeling and volumetric calculations",
        "Thermal imaging for infrastructure inspection",
        "Agricultural crop health monitoring",
        "Regular site progress documentation"
      ],
      image: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc"
    },
    {
      id: "data-center",
      icon: <Server className="h-10 w-10 text-galactic-blue" />,
      title: "Data Center Build & Rebuild",
      description: "We design, build, and modernize data center infrastructures that are scalable, efficient, and resilient. Our solutions incorporate the latest technologies in cooling, power management, and security to create facilities that meet the growing demands of digital businesses while optimizing energy use and operational costs.",
      features: [
        "Energy-efficient data center design",
        "Advanced cooling solutions for tropical climates",
        "Redundant power and network systems",
        "Physical and cyber security integration",
        "Modular designs for future expansion"
      ],
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31"
    }
  ];

  return (
    <div ref={pageRef} className="overflow-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-28 pb-20 bg-gradient-to-r from-galactic-darkBlue to-galactic-navy">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 reveal">Our Solutions</h1>
            <p className="text-lg md:text-xl opacity-90 mb-8 reveal">
              Comprehensive technology solutions designed to transform Indonesian businesses and government agencies.
            </p>
          </div>
        </div>
      </div>

      {/* Solutions Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16 reveal">
            <h2 className="section-heading">Technology Solutions</h2>
            <p className="text-lg text-gray-600">
              GLC offers a comprehensive suite of technology solutions tailored for Indonesian businesses and government agencies.
            </p>
          </div>

          <div className="space-y-24">
            {solutions.map((solution, index) => (
              <div 
                key={solution.id} 
                id={solution.id}
                className={`grid grid-cols-1 md:grid-cols-12 gap-8 items-center reveal ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className={`md:col-span-7 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <div className="p-3 rounded-full bg-galactic-blue bg-opacity-10 inline-block mb-4">
                    {solution.icon}
                  </div>
                  <h3 className="text-3xl font-bold text-galactic-darkBlue mb-4">
                    {solution.title}
                  </h3>
                  <p className="text-lg text-gray-600 mb-6">
                    {solution.description}
                  </p>
                  
                  <h4 className="text-xl font-semibold text-galactic-darkBlue mb-3">
                    Key Features:
                  </h4>
                  <ul className="space-y-2 mb-8">
                    {solution.features.map((feature, i) => (
                      <li key={i} className="flex staggered-item">
                        <ArrowRight className="h-5 w-5 text-galactic-blue mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link to={`/solutions/${solution.id}`} className="btn-outline">
                    Learn More
                  </Link>
                </div>
                
                <div className={`md:col-span-5 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  <div className="relative">
                    <div className="absolute inset-0 bg-galactic-blue rounded-lg opacity-20 blur-lg transform -translate-y-4 translate-x-4"></div>
                    <img 
                      src={solution.image}
                      alt={solution.title} 
                      className="rounded-lg relative z-10 w-full h-80 object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
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
              Contact us to discuss how our solutions can help you achieve your technological goals.
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

export default SolutionsPage;
