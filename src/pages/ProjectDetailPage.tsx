
import { useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ProjectDetailPage = () => {
  const pageRef = useRef<HTMLDivElement>(null);
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();
  
  const projects = {
    "palm-oil-iot": {
      title: "IoT System for Palm Oil Plantation - 3000Ha",
      client: "Major Indonesian Agricultural Company",
      location: "East Kalimantan",
      year: "2022",
      category: "IoT",
      image: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc",
      gallery: [
        "https://images.unsplash.com/photo-1487887235947-a955ef187fcc",
        "https://images.unsplash.com/photo-1500382017468-9049fed747ef",
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b"
      ],
      overview: "We implemented a connected ecosystem improving irrigation, crop health monitoring, and sustainability across a 3000-hectare palm oil plantation.",
      highlights: [
        "Network of 5,000+ soil moisture and nutrient sensors",
        "Drone-based aerial monitoring system",
        "Automated irrigation management system",
        "Real-time pest and disease detection",
        "Weather station integration for microclimate monitoring",
        "Comprehensive analytics dashboard for plantation managers"
      ],
      description: "For this major agricultural project, GLC deployed one of Indonesia's largest IoT networks in an agricultural setting. Spanning 3000 hectares of palm oil plantation in East Kalimantan, the system revolutionized how the client monitors and manages their operations. The comprehensive solution includes soil sensors, environmental monitors, automated irrigation systems, and drone-based imaging. Since implementation, the plantation has seen a 15% reduction in water usage, a 20% decrease in fertilizer application, and a 12% increase in yield. The system also supports the client's sustainability initiatives by providing detailed environmental impact data and optimizing resource use. This project demonstrates how advanced IoT technology can transform traditional agricultural practices in Indonesia, improving both productivity and environmental stewardship."
    },
    "smartfren-cctv": {
      title: "Utility CCTV & Visitor Management System for Smartfren",
      client: "Smartfren",
      location: "Jakarta",
      year: "2021",
      category: "Security Systems",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
      gallery: [
        "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
        "https://images.unsplash.com/photo-1568115141060-e3eefe061e20",
        "https://images.unsplash.com/photo-1555952517-a0d2eeaad9c6"
      ],
      overview: "We deployed a smart CCTV network and visitor management system to enhance security and operational efficiency at Smartfren.",
      highlights: [
        "Network of 200+ AI-enabled security cameras",
        "Facial recognition and biometric access control",
        "Automated visitor registration and tracking",
        "Integration with building management systems",
        "Mobile security alerts and notifications",
        "Comprehensive data analytics for security patterns"
      ],
      description: "Smartfren, one of Indonesia's leading telecommunications providers, needed a comprehensive security and visitor management solution for their facility. GLC delivered an integrated system that combines advanced CCTV technology with intelligent visitor management capabilities. The solution incorporates AI-powered analytics for anomaly detection, facial recognition for access control, and automated visitor processing to streamline entry procedures. Since implementation, security incidents have decreased by 35%, and visitor processing time has been reduced by 75%. The system also provides valuable operational insights through its analytics dashboard, helping Smartfren optimize facility usage and resource allocation. This project showcases GLC's ability to combine various technologies into a cohesive solution that addresses multiple organizational needs."
    }
  };

  // Handle invalid project ID
  useEffect(() => {
    if (projectId && !Object.keys(projects).includes(projectId)) {
      navigate('/portfolio');
    }
  }, [projectId, navigate]);

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

  if (!projectId || !projects[projectId as keyof typeof projects]) {
    return null;
  }

  const project = projects[projectId as keyof typeof projects];

  return (
    <div ref={pageRef} className="overflow-hidden">
      <Navbar />
      
      {/* Hero Banner */}
      <div 
        className="pt-28 pb-20 bg-cover bg-center relative"
        style={{ 
          backgroundImage: `linear-gradient(rgba(26, 31, 44, 0.85), rgba(26, 31, 44, 0.85)), url(${project.image})` 
        }}
      >
        <div className="container-custom relative z-10">
          <Link to="/portfolio" className="inline-flex items-center text-white hover:text-galactic-blue mb-8 transition-colors reveal">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Portfolio
          </Link>
          
          <div className="max-w-3xl">
            <div className="text-galactic-blue font-medium mb-3 reveal">{project.category}</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white reveal">{project.title}</h1>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-8 text-white reveal">
              <div>
                <div className="text-sm text-gray-300 mb-1">Client</div>
                <div className="font-medium">{project.client}</div>
              </div>
              <div>
                <div className="text-sm text-gray-300 mb-1">Location</div>
                <div className="font-medium">{project.location}</div>
              </div>
              <div>
                <div className="text-sm text-gray-300 mb-1">Year</div>
                <div className="font-medium">{project.year}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project Overview */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8 reveal">
              <h2 className="section-heading">Project Overview</h2>
              <p className="text-lg text-gray-600 mb-8">
                {project.overview}
              </p>
              
              <h3 className="text-2xl font-bold text-galactic-darkBlue mb-4">The Challenge</h3>
              <p className="text-gray-600 mb-8">
                {project.description}
              </p>
              
              <h3 className="text-2xl font-bold text-galactic-darkBlue mb-4">Project Highlights</h3>
              <div className="space-y-3 mb-8">
                {project.highlights.map((highlight, index) => (
                  <div key={index} className="flex staggered-item">
                    <CheckCircle className="h-5 w-5 text-galactic-blue mr-3 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">{highlight}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:col-span-4 reveal">
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-galactic-darkBlue mb-4">Project Information</h3>
                
                <div className="space-y-4">
                  <div>
                    <div className="text-sm font-medium text-gray-500 mb-1">Client</div>
                    <div className="font-medium text-gray-900">{project.client}</div>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-500 mb-1">Location</div>
                    <div className="font-medium text-gray-900">{project.location}</div>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-500 mb-1">Year</div>
                    <div className="font-medium text-gray-900">{project.year}</div>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-500 mb-1">Category</div>
                    <div className="font-medium text-gray-900">{project.category}</div>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h4 className="font-medium text-gray-900 mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Technology", "Innovation", "IoT", "AI", "Digital Twin"].map((tag, index) => (
                      <span 
                        key={index}
                        className="bg-galactic-blue bg-opacity-10 text-galactic-blue text-sm px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-10 pb-20 bg-gray-50 reveal">
        <div className="container-custom">
          <h2 className="section-heading mb-8">Project Gallery</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {project.gallery.map((image, index) => (
              <div key={index} className="staggered-item overflow-hidden rounded-lg shadow-sm">
                <img 
                  src={image} 
                  alt={`${project.title} - ${index + 1}`}
                  className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 reveal">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-galactic-darkBlue">
              Interested in Similar Solutions?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Contact us to discuss how we can help your organization with a similar project.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn-primary">
                Get in Touch
              </Link>
              <Link to="/portfolio" className="btn-outline">
                View More Projects
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ProjectDetailPage;
