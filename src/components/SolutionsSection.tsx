
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Brain, Database, Cloud, Plane, Server } from 'lucide-react';

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
      icon: <Brain className="h-10 w-10 text-galactic-blue" />,
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
      icon: <Plane className="h-10 w-10 text-galactic-blue" />,
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
    <section ref={sectionRef} className="py-32 bg-white reveal" id="solutions">
      <div className="container-custom">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="text-[2.5rem] leading-tight font-bold text-gray-900 mb-6">
            Solutions that drive innovation
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to transform Indonesian businesses and government agencies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <Link 
              key={index} 
              to={solution.link}
              className="staggered-item group bg-white hover:bg-gray-50 p-8 rounded-none border-b-4 border-transparent hover:border-galactic-blue transition-all duration-300 flex flex-col"
            >
              <div className="p-3 rounded-none bg-gray-50 inline-block mb-6 w-16 h-16 flex items-center justify-center">
                {solution.icon}
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 group-hover:text-galactic-blue transition-colors">
                {solution.title}
              </h3>
              <p className="text-gray-600 text-lg flex-grow mb-6">
                {solution.description}
              </p>
              <div className="text-galactic-blue font-medium group-hover:underline inline-flex items-center">
                Learn more 
                <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-16 reveal">
          <Link 
            to="/solutions" 
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-galactic-blue hover:bg-galactic-navy transition-colors duration-300"
          >
            Explore All Solutions
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
