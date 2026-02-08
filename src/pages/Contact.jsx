import { useEffect, useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaUser, FaDumbbell, FaChevronRight } from 'react-icons/fa';

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

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [setHeroRef] = useOnScreen({ threshold: 0.1 });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Final Audit: Removed console.log
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="bg-obsidian text-white min-h-screen pt-24 md:pt-32">
      {/* Hero Section */}
      <section ref={setHeroRef} className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-96 bg-primary/5 blur-3xl rounded-full -translate-y-1/2" />
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-primary text-xs font-bold uppercase tracking-widest mb-8">
            <FaDumbbell /> <span>Open 24/7 for Elite Dispatch</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black italic tracking-tighter uppercase mb-6">
            GET IN <span className="text-gradient">TOUCH</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
            Need elite guidance? Have a question about our den? 
            Reach out and let's map your path to dominance.
          </p>
        </div>
      </section>

      <section className="py-24 px-4 bg-obsidian-surface relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Form Side */}
          <div className="glass-dark p-6 md:p-12 rounded-[40px] border border-white/5 shadow-2xl">
            <h2 className="text-3xl font-black italic uppercase tracking-tighter mb-8">
              SEND A <span className="text-primary">MESSAGE</span>
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative group">
                <FaUser className="absolute left-5 top-1/2 -translate-y-1/2 text-primary/40 group-focus-within:text-primary transition-colors" />
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  value={formData.name} 
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })} 
                  className="w-full pl-14 py-5 bg-white/5 border border-white/10 rounded-2xl focus:border-primary/50 outline-none transition-all placeholder:text-gray-600 font-medium" 
                />
              </div>
              <div className="relative group">
                <FaEnvelope className="absolute left-5 top-1/2 -translate-y-1/2 text-primary/40 group-focus-within:text-primary transition-colors" />
                <input 
                  type="email" 
                  placeholder="Your Email Address" 
                  value={formData.email} 
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })} 
                  className="w-full pl-14 py-5 bg-white/5 border border-white/10 rounded-2xl focus:border-primary/50 outline-none transition-all placeholder:text-gray-600 font-medium" 
                />
              </div>
              <div className="relative">
                <textarea 
                  placeholder="How can we help you achieve greatness?" 
                  value={formData.message} 
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })} 
                  className="w-full p-6 bg-white/5 border border-white/10 rounded-2xl focus:border-primary/50 outline-none transition-all placeholder:text-gray-600 font-medium h-48 resize-none" 
                />
              </div>
              <button 
                type="submit" 
                className="w-full py-5 bg-primary text-obsidian rounded-2xl font-black uppercase tracking-widest hover:bg-primary-dark transition-all duration-300 flex items-center justify-center group shadow-xl"
              >
                Send Message <FaChevronRight className="ml-2 text-xs transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          </div>

          {/* Info Side */}
          <div className="space-y-12 py-8">
            <div>
              <h2 className="text-3xl font-black italic uppercase tracking-tighter mb-10">
                HQ <span className="text-primary">INTEL</span>
              </h2>
              <div className="space-y-10">
                <div className="flex items-start group">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary text-xl group-hover:bg-primary group-hover:text-obsidian transition-all duration-500 mr-6 flex-shrink-0">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <h4 className="text-white font-black uppercase tracking-widest text-sm mb-2">Location</h4>
                    <p className="text-gray-400 font-medium leading-relaxed">
                      123 Fitness Street, South Pune Suburb, <br /> Maharashtra, IN - 411043
                    </p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary text-xl group-hover:bg-primary group-hover:text-obsidian transition-all duration-500 mr-6 flex-shrink-0">
                    <FaPhone />
                  </div>
                  <div>
                    <h4 className="text-white font-black uppercase tracking-widest text-sm mb-2">Comms</h4>
                    <p className="text-gray-400 font-medium leading-relaxed">
                      HQ: +91 1800-GYM-WALA <br />
                      Direct: +91 98765-43210
                    </p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary text-xl group-hover:bg-primary group-hover:text-obsidian transition-all duration-500 mr-6 flex-shrink-0">
                    <FaEnvelope />
                  </div>
                  <div>
                    <h4 className="text-white font-black uppercase tracking-widest text-sm mb-2">Digital</h4>
                    <p className="text-gray-400 font-medium leading-relaxed">
                      intel@gymwala.com <br />
                      training@gymwala.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-[30px] bg-primary/5 border border-primary/10">
              <h4 className="text-white font-black uppercase tracking-widest text-xs mb-4">Elite Support</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Response time is typically under 4 hours for potential members and 
                instant for active VIP warriors.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
