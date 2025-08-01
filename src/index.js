import './index.css'; // Add this at the very top

const { useState, useEffect } = React;

function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'glass-effect py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <div className="w-10 h-10 bg-gradient-to-r from-sky-400 to-cyan-500 rounded-lg flex items-center justify-center">
              <i className="fas fa-microchip text-white text-lg"></i>
            </div>
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full pulse-ring"></div>
          </div>
          <h1 className="text-2xl font-bold text-gradient">AM - Sensor</h1>
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="#home" className="hover:text-sky-400 transition-colors duration-300 relative group">
            Home
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sky-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#features" className="hover:text-sky-400 transition-colors duration-300 relative group">
            Features
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sky-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#about" className="hover:text-sky-400 transition-colors duration-300 relative group">
            About
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sky-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#contact" className="hover:text-sky-400 transition-colors duration-300 relative group">
            Contact
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sky-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>
        <button className="md:hidden text-2xl">
          <i className="fas fa-bars"></i>
        </button>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden gradient-bg">
      <div className="absolute inset-0 tech-grid opacity-30"></div>
      <div className="absolute inset-0 circuit-pattern"></div>
      
      <div className="absolute top-20 left-10 w-4 h-4 bg-sky-400 rounded-full floating opacity-60"></div>
      <div className="absolute top-40 right-20 w-6 h-6 bg-cyan-400 rounded-full floating opacity-40" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-40 left-20 w-3 h-3 bg-blue-400 rounded-full floating opacity-50" style={{animationDelay: '4s'}}></div>
      
      <div className="container mx-auto text-center px-6 py-20 relative z-10">
        <div className="mb-8">
          <div className="inline-flex items-center px-4 py-2 bg-sky-500/10 border border-sky-500/20 rounded-full mb-6">
            <i className="fas fa-rocket text-sky-400 mr-2"></i>
            <span className="text-sky-400 text-sm font-medium">Revolutionary Arduino Companion</span>
          </div>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight">
          <span className="text-gradient">AM - Sensor</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed">
          Your Complete Arduino Sensor & Project Companion. 
          <span className="text-sky-400 font-medium"> Explore, Learn, Build</span> with the most comprehensive Arduino guide.
        </p>
        
        <div className="glass-effect rounded-3xl p-8 md:p-12 max-w-5xl mx-auto mb-12 relative">
          <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-r from-sky-400 to-cyan-500 rounded-2xl flex items-center justify-center rotate-12">
            <i className="fas fa-code text-white text-lg"></i>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-left">
              <h3 className="text-2xl font-bold mb-6 text-gradient">Key Features</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <div className="w-8 h-8 bg-green-500/20 border border-green-500/30 rounded-lg flex items-center justify-center mr-4">
                    <i className="fas fa-search text-green-400 text-sm"></i>
                  </div>
                  <span><strong className="text-sky-400">Sensor Explorer:</strong> Comprehensive sensor database with wiring diagrams</span>
                </li>
                <li className="flex items-center">
                  <div className="w-8 h-8 bg-purple-500/20 border border-purple-500/30 rounded-lg flex items-center justify-center mr-4">
                    <i className="fas fa-cube text-purple-400 text-sm"></i>
                  </div>
                  <span><strong className="text-sky-400">3D Arduino Viewer:</strong> Interactive 3D board visualization</span>
                </li>
                <li className="flex items-center">
                  <div className="w-8 h-8 bg-orange-500/20 border border-orange-500/30 rounded-lg flex items-center justify-center mr-4">
                    <i className="fas fa-project-diagram text-orange-400 text-sm"></i>
                  </div>
                  <span><strong className="text-sky-400">Project Library:</strong> Step-by-step projects with code samples</span>
                </li>
                <li className="flex items-center">
                  <div className="w-8 h-8 bg-cyan-500/20 border border-cyan-500/30 rounded-lg flex items-center justify-center mr-4">
                    <i className="fas fa-download text-cyan-400 text-sm"></i>
                  </div>
                  <span><strong className="text-sky-400">Offline Access:</strong> Work anywhere without internet</span>
                </li>
              </ul>
            </div>
            
            <div className="relative">
              <div className="w-64 h-64 mx-auto relative">
                <div className="absolute inset-0 bg-gradient-to-r from-sky-400 to-cyan-500 rounded-3xl opacity-20 rotating"></div>
                <div className="absolute inset-4 glass-effect rounded-2xl flex items-center justify-center">
                  <i className="fas fa-microchip text-6xl text-sky-400"></i>
                </div>
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-green-400 rounded-full flex items-center justify-center">
                  <i className="fas fa-check text-white text-sm"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a href="#features" className="group relative px-8 py-4 bg-gradient-to-r from-sky-500 to-cyan-500 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-sky-500/25 transition-all duration-300 transform hover:scale-105">
            <span className="relative z-10 flex items-center">
              <i className="fas fa-rocket mr-3"></i>
              Explore Features
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-sky-600 to-cyan-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
          
          <a href="#about" className="group px-8 py-4 glass-effect rounded-2xl font-semibold text-lg border-2 border-transparent hover:border-sky-400/50 transition-all duration-300">
            <span className="flex items-center">
              <i className="fas fa-play mr-3 text-sky-400"></i>
              Watch Demo
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ title, description, icon, color, index }) {
  return (
    <div className={`feature-card glass-effect rounded-3xl p-8 hover:scale-105 transition-all duration-500 border border-white/10 hover:border-${color}-400/30 group`} 
         style={{animationDelay: `${index * 0.1}s`}}>
      <div className={`w-16 h-16 bg-gradient-to-r from-${color}-500 to-${color}-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
        <i className={`${icon} text-white text-2xl`}></i>
      </div>
      <h3 className="text-2xl font-bold mb-4 text-gradient group-hover:text-white transition-all duration-300">{title}</h3>
      <p className="text-slate-300 leading-relaxed group-hover:text-white transition-colors duration-300">{description}</p>
      
      <div className="mt-6 flex items-center text-sky-400 group-hover:text-white transition-colors duration-300">
        <span className="text-sm font-medium">Learn More</span>
        <i className="fas fa-arrow-right ml-2 transform group-hover:translate-x-2 transition-transform duration-300"></i>
      </div>
    </div>
  );
}

function Features() {
  const features = [
    {
      title: "Sensor Explorer",
      description: "Browse and learn about a wide range of Arduino-compatible sensors and modules. Each sensor includes detailed descriptions, wiring diagrams, specifications, and usage tips.",
      icon: "fas fa-search",
      color: "emerald"
    },
    {
      title: "3D Arduino Viewer",
      description: "Visualize Arduino boards and components in interactive 3D. Rotate, zoom, and explore connections to better understand your hardware.",
      icon: "fas fa-cube",
      color: "purple"
    },
    {
      title: "Project Library",
      description: "Discover step-by-step Arduino projects with code samples, circuit diagrams, and images. Projects cover beginner to advanced levels.",
      icon: "fas fa-project-diagram",
      color: "orange"
    },
    {
      title: "Code & Circuit Reference",
      description: "Access ready-to-use code snippets and connection diagrams for quick prototyping and troubleshooting.",
      icon: "fas fa-code",
      color: "blue"
    },
    {
      title: "Favorites & Search",
      description: "Save your favorite sensors and projects for quick access. Use the search feature to find exactly what you need.",
      icon: "fas fa-heart",
      color: "pink"
    },
    {
      title: "Offline Access",
      description: "All guides and resources are available offline after the first download, so you can work anywhere.",
      icon: "fas fa-download",
      color: "cyan"
    }
  ];

  return (
    <section id="features" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 circuit-pattern opacity-5"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-sky-500/10 border border-sky-500/20 rounded-full mb-6">
            <i className="fas fa-star text-sky-400 mr-2"></i>
            <span className="text-sky-400 text-sm font-medium">Powerful Features</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            <span className="text-gradient">Everything You Need</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            From beginner tutorials to advanced projects, AM - Sensor provides all the tools and resources you need to master Arduino development.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-sky-500/10 border border-sky-500/20 rounded-full mb-6">
              <i className="fas fa-info-circle text-sky-400 mr-2"></i>
              <span className="text-sky-400 text-sm font-medium">About AM - Sensor</span>
            </div>
            
            <h2 className="text-5xl font-black mb-8 text-gradient">
              Empowering Arduino Innovation
            </h2>
            
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              AM - Sensor is designed for makers, students, and electronics enthusiasts who want to learn, build, and experiment with Arduino technology. Our comprehensive platform bridges the gap between learning and doing.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-green-500/20 border border-green-500/30 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                  <i className="fas fa-graduation-cap text-green-400"></i>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-sky-400">For Students & Learners</h4>
                  <p className="text-slate-300">Perfect for electronics courses, STEM education, and self-learning with structured tutorials and interactive guides.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-purple-500/20 border border-purple-500/30 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                  <i className="fas fa-tools text-purple-400"></i>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-sky-400">For Makers & Hobbyists</h4>
                  <p className="text-slate-300">Advanced project ideas, component databases, and troubleshooting guides for experienced builders.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-orange-500/20 border border-orange-500/30 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                  <i className="fas fa-globe text-orange-400"></i>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-sky-400">Global Community</h4>
                  <p className="text-slate-300">Multi-language support and offline access make Arduino learning accessible worldwide.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="glass-effect rounded-3xl p-8 relative overflow-hidden">
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-sky-400 to-cyan-500 rounded-3xl flex items-center justify-center rotate-12">
                <i className="fas fa-microchip text-white text-2xl"></i>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-slate-800/50 rounded-2xl">
                  <span className="text-slate-300">Active Projects</span>
                  <span className="text-2xl font-bold text-sky-400">500+</span>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-slate-800/50 rounded-2xl">
                  <span className="text-slate-300">Sensor Database</span>
                  <span className="text-2xl font-bold text-purple-400">200+</span>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-slate-800/50 rounded-2xl">
                  <span className="text-slate-300">Code Examples</span>
                  <span className="text-2xl font-bold text-orange-400">1000+</span>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-slate-800/50 rounded-2xl">
                  <span className="text-slate-300">3D Models</span>
                  <span className="text-2xl font-bold text-green-400">50+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
      <div className="absolute inset-0 circuit-pattern opacity-5"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-sky-500/10 border border-sky-500/20 rounded-full mb-6">
            <i className="fas fa-envelope text-sky-400 mr-2"></i>
            <span className="text-sky-400 text-sm font-medium">Get In Touch</span>
          </div>
          <h2 className="text-5xl font-black mb-6 text-gradient">
            Let's Build Together
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Have questions, suggestions, or want to collaborate? We'd love to hear from you.
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="glass-effect rounded-3xl p-8 md:p-12 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-4 bg-slate-800/50 border border-slate-700 rounded-xl focus:outline-none focus:border-sky-400 transition-colors duration-300 text-white placeholder-slate-400"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
                <div className="absolute top-4 right-4">
                  <i className="fas fa-user text-slate-400"></i>
                </div>
              </div>
              
              <div className="relative">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-4 bg-slate-800/50 border border-slate-700 rounded-xl focus:outline-none focus:border-sky-400 transition-colors duration-300 text-white placeholder-slate-400"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
                <div className="absolute top-4 right-4">
                  <i className="fas fa-envelope text-slate-400"></i>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <textarea
                placeholder="Your Message"
                rows="6"
                className="w-full p-4 bg-slate-800/50 border border-slate-700 rounded-xl focus:outline-none focus:border-sky-400 transition-colors duration-300 text-white placeholder-slate-400 resize-none"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              ></textarea>
              <div className="absolute top-4 right-4">
                <i className="fas fa-comment text-slate-400"></i>
              </div>
            </div>
            
            <button 
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-sky-500 to-cyan-500 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-sky-500/25 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
            >
              <i className="fas fa-paper-plane mr-3"></i>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-12 border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
            <div className="w-10 h-10 bg-gradient-to-r from-sky-400 to-cyan-500 rounded-lg flex items-center justify-center">
              <i className="fas fa-microchip text-white text-lg"></i>
            </div>
            <span className="text-xl font-bold text-gradient">AM - Sensor</span>
          </div>
          
          <p className="text-slate-400 text-center md:text-right">
            © 2024 AM - Sensor. Empowering Arduino Innovation.
          </p>
        </div>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div className="min-h-screen">
      <NavBar />
      <Hero />
      <Features />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);