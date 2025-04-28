
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Ai, Database, Cloud, Drone, Server } from 'lucide-react';

const SolutionsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            
            // Staggered animation for solution items
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

  const solutions = [
    {
      icon: <Ai className="h-10 w-10 text-galactic-blue" />,
      title: "AI SaaS Suite",
      description: "Enterprise-grade AI solutions tailored for Indonesian businesses.",
      link: "/solutions/ai"
    },
    {
      icon: <Cloud className="h-10 w-10 text-galactic-blue" />,
      title: "Digital Twin as a Service",
      description: "Virtual replicas for real-time monitoring and simulation.",
      link: "/solutions/digital-twin"
    },
    {
      icon: <Database className="h-10 w-10 text-galactic-blue" />,
      title: "IoT as a Service",
      description: "Connected device ecosystems with comprehensive analytics.",
      link: "/solutions/iot"
    },
    {
      icon: <Drone className="h-10 w-10 text-galactic-blue" />,
      title: "Aerial Mapping & Drone Solutions",
      description: "Precision mapping services for multiple industry applications.",
      link: "/solutions/drone"
    },
    {
      icon: <Server className="h-10 w-10 text-galactic-blue" />,
      title: "Data Center Build & Rebuild",
      description: "Modern, scalable infrastructure solutions for your business.",
      link: "/solutions/data-center"
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 reveal" id="solutions">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-heading">Our Solutions</h2>
          <p className="text-lg text-gray-600">
            Comprehensive technology solutions designed to transform Indonesian businesses and government agencies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, index) => (
            <Link 
              key={index} 
              to={solution.link}
              className="staggered-item group bg-white p-8 rounded-xl shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md hover:-translate-y-1 flex flex-col"
            >
              <div className="p-3 rounded-full bg-galactic-blue bg-opacity-10 inline-block mb-4">
                {solution.icon}
              </div>
              <h3 className="text-xl font-bold text-galactic-darkBlue mb-3 group-hover:text-galactic-blue transition-colors">
                {solution.title}
              </h3>
              <p className="text-gray-600 flex-grow">
                {solution.description}
              </p>
              <div className="mt-6 text-galactic-blue font-medium group-hover:underline">
                Learn more
              </div>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-12 reveal">
          <Link to="/solutions" className="btn-primary">
            Explore All Solutions
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
