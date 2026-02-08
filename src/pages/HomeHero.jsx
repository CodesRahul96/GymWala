import { useState, useEffect } from "react";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaDumbbell,
  FaTrophy,
  FaUsers,
  FaMapMarkerAlt,
  FaHeartbeat,
  FaChevronRight,
} from "react-icons/fa";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";

const sliderImages = [
  "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
];

const useOnScreen = (options) => {
  const [ref, setRef] = useState(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setVisible(entry.isIntersecting);
    }, options);

    if (ref) observer.observe(ref);

    return () => {
      if (ref) observer.unobserve(ref);
    };
  }, [ref, options]);

  return [setRef, visible];
};

const HomeHero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Final Audit: Removed console.log
    setFormData({ name: "", email: "", phone: "" });
  };

  return (
    <div className="bg-obsidian text-white overflow-x-hidden">
      {/* Hero Slider */}
      <section className="relative h-screen w-full overflow-hidden" id="home">
        {sliderImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${
              currentSlide === index ? "opacity-100 scale-105" : "opacity-0 scale-100"
            }`}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-obsidian/40 via-obsidian/60 to-obsidian" />
          </div>
        ))}

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 max-w-5xl mx-auto pt-24 md:pt-32">
          {/* Decorative Floating Elements */}
          <div className="absolute top-1/4 -left-20 w-64 h-64 bg-primary/5 blur-[100px] rounded-full animate-float" />
          <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-primary/10 blur-[120px] rounded-full animate-float delay-1000" />

          <div className="inline-block px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-primary text-xs font-bold uppercase tracking-widest mb-6 animate-fadeIn">
            Elevate Your Peak Performance
          </div>
          <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter mb-6 leading-[0.9] animate-slideUp">
            FEEL THE <span className="text-gradient">POWER</span> <br />
            OF STRENGTH
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl font-light leading-relaxed animate-slideUp delay-200">
            Unleash your inner warrior with elite coaching and a high-performance 
            environment designed for those who refuse to settle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-slideUp delay-300">
            <Link
              to="join"
              smooth={true}
              duration={500}
              className="px-10 py-4 bg-primary text-obsidian rounded-full font-black uppercase tracking-widest hover:bg-primary-dark transition-all duration-500 shadow-[0_10px_40px_rgba(204,255,0,0.3)] hover:scale-105 active:scale-95 cursor-pointer flex items-center justify-center group"
            >
              Start Free Trial <FaChevronRight className="ml-2 text-xs transition-transform group-hover:translate-x-1" />
            </Link>
            <NavLink
              to="/workouts"
              className="px-10 py-4 bg-white/5 border border-white/10 text-white rounded-full font-black uppercase tracking-widest hover:bg-white/10 transition-all duration-300 cursor-pointer flex items-center justify-center"
            >
              Explore Plans
            </NavLink>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-10 left-0 right-0 z-20 flex justify-center space-x-3">
          {sliderImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-1.5 transition-all duration-500 rounded-full ${
                currentSlide === index ? "w-12 bg-primary" : "w-6 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { num: "1200+", label: "Elite Members", icon: <FaUsers /> },
            { num: "50+", label: "Pro Trainers", icon: <FaUser /> },
            { num: "100+", label: "Elite Programs", icon: <FaDumbbell /> },
            { num: "15+", label: "Regional Awards", icon: <FaTrophy /> },
          ].map((stat, idx) => (
            <div key={idx} className="text-center group p-6 rounded-3xl bg-white/5 border border-white/5 hover:border-primary/30 transition-all duration-500">
              <div className="text-primary text-3xl mb-4 flex justify-center group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>
              <div className="text-4xl font-black mb-1">{stat.num}</div>
              <div className="text-gray-500 text-sm uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-obsidian-surface relative">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-primary/20 rounded-3xl blur-2xl group-hover:bg-primary/30 transition-all duration-500" />
            <img
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Gym Interior"
              className="relative rounded-3xl object-cover h-[500px] w-full shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]"
            />
          </div>
          <div>
            <div className="text-primary font-bold uppercase tracking-widest mb-4">Our Legacy</div>
            <h2 className="text-4xl md:text-5xl font-black mb-6 italic leading-tight uppercase">
              REDEFINE YOUR <span className="text-primary italic">LIMITS</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              At GymWala, we believe strength is more than muscle. It's a mindset. Our facility is engineered 
              for performance, equipped with Olympic-grade gear, and driven by a community that 
              knows the value of grit.
            </p>
            <div className="space-y-4">
              {["24/7 Access for VIP Members", "Olympic Lifting Platforms", "Digital Performance Tracking", "Recovery Ion-Bath & Sauna"].map((item, i) => (
                <div key={i} className="flex items-center text-white/80">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <span className="font-medium tracking-wide">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Join Form */}
      <section id="join" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="glass-dark p-8 md:p-16 rounded-[40px] flex flex-col md:flex-row gap-16 items-center border border-white/10 shadow-3xl">
            <div className="w-full md:w-1/2">
              <h2 className="text-5xl font-black mb-4 italic uppercase tracking-tighter">
                READY TO <span className="text-primary">START?</span>
              </h2>
              <p className="text-gray-400 mb-10 text-lg">
                Your transformation begins today. Sign up for a free coaching session and a 3-day full access pass.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="relative">
                    <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/40" />
                    <input
                      type="text"
                      placeholder="Name"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 focus:border-primary/50 outline-none transition-all placeholder:text-gray-600"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div className="relative">
                    <FaPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/40" />
                    <input
                      type="tel"
                      placeholder="Phone"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 focus:border-primary/50 outline-none transition-all placeholder:text-gray-600"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>
                <div className="relative">
                  <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/40" />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 focus:border-primary/50 outline-none transition-all placeholder:text-gray-600"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-obsidian py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-primary-dark transition-all duration-300 shadow-xl"
                >
                  Claim My Free Pass
                </button>
              </form>
            </div>
            
            <div className="hidden md:block w-1/2 h-full">
              <div className="relative group grayscale hover:grayscale-0 transition-all duration-1000">
                <div className="absolute -inset-2 bg-gradient-to-tr from-primary to-transparent opacity-30 rounded-3xl" />
                <img
                  src="https://images.unsplash.com/photo-1576678927484-cc907957088c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Athlete"
                  className="rounded-3xl object-cover h-[450px] w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[500px] w-full relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1083.5912749774066!2d73.8544322942217!3d18.463534172952826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1743669345038!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0, filter: 'grayscale(1) invert(0.9) contrast(1.2)' }}
          allowFullScreen=""
          loading="lazy"
        />
        <div className="absolute bottom-10 right-10 glass p-8 rounded-3xl border border-white/10 max-w-sm hidden md:block">
          <h3 className="text-xl font-black mb-4 uppercase">Visit The Den</h3>
          <div className="space-y-4 text-gray-300">
            <div className="flex items-center">
              <FaMapMarkerAlt className="text-primary mr-3 text-lg" />
              <span>123 Fitness Street, South Pune, IN</span>
            </div>
            <div className="flex items-center">
              <FaPhone className="text-primary mr-3 text-lg" />
              <span>+91 1800-GYM-WALA</span>
            </div>
            <div className="flex items-center">
              <FaHeartbeat className="text-primary mr-3 text-lg" />
              <span>Open 24/7 for Elite Members</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeHero;

