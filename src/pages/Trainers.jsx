import { useEffect, useState } from 'react';
import { FaUsers, FaInstagram, FaTwitter, FaFacebookF, FaDumbbell } from 'react-icons/fa';

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

const Trainers = () => {
  const trainers = [
    {
      name: "Alex 'The Titan' Rivers",
      role: "Head Strength Coach",
      specialty: "Olympic Weightlifting",
      img: "https://images.pexels.com/photos/5327471/pexels-photo-5327471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      name: "Sarah 'Flow' Jenkins",
      role: "Mobility Expert",
      specialty: "Yoga & Bio-Flow",
      img: "https://images.pexels.com/photos/3757370/pexels-photo-3757370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      name: "Marcus 'Pulse' Thorne",
      role: "Conditioning Specialist",
      specialty: "High-Intensity Systems",
      img: "https://images.pexels.com/photos/17939430/pexels-photo-17939430/free-photo-of-man-in-tank-top-at-gym.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ];

  const [setHeroRef] = useOnScreen({ threshold: 0.1 });

  return (
    <div className="bg-obsidian text-white min-h-screen pt-24 md:pt-32">
      {/* Hero Section */}
      <section ref={setHeroRef} className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-x-0 bottom-0 h-96 bg-primary/5 blur-3xl rounded-full translate-y-1/2" />
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-primary text-xs font-bold uppercase tracking-widest mb-8">
            <FaDumbbell /> <span>Master Architects of Strength</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black italic tracking-tighter uppercase mb-6">
            OUR <span className="text-gradient">TRAINERS</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
            Not just coaches. They are elite performers, bio-mechanical experts, 
            and your partners in the relentless pursuit of greatness.
          </p>
        </div>
      </section>

      {/* Trainer Profiles Section */}
      <section className="py-24 px-4 bg-obsidian-surface relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {trainers.map((trainer) => (
              <div 
                key={trainer.name} 
                className="group relative flex flex-col items-center bg-obsidian-card p-6 md:p-10 rounded-[40px] border border-white/5 hover-glow"
              >
                <div className="relative mb-8 img-zoom rounded-full">
                  <div className="absolute -inset-2 bg-gradient-to-tr from-primary to-transparent opacity-0 group-hover:opacity-30 rounded-full blur-lg transition-all duration-500" />
                  <img 
                    src={trainer.img} 
                    alt={trainer.name} 
                    className="w-48 h-48 rounded-full object-cover relative border-4 border-obsidian ring-1 ring-white/10 group-hover:ring-primary/50" 
                  />
                </div>
                
                <h3 className="text-2xl font-black italic tracking-tighter uppercase text-white group-hover:text-primary transition-colors text-center">
                  {trainer.name}
                </h3>
                <div className="text-primary/60 text-xs font-black uppercase tracking-[0.2em] mb-4">
                  {trainer.role}
                </div>
                
                <p className="text-gray-400 text-sm font-medium mb-8 bg-white/5 px-4 py-1 rounded-full border border-white/5 uppercase tracking-wider">
                  Specialty: {trainer.specialty}
                </p>

                <div className="flex space-x-4">
                  {[FaInstagram, FaTwitter, FaFacebookF].map((Icon, i) => (
                    <a 
                      key={i} 
                      href="#" 
                      className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-obsidian hover:scale-110 transition-all duration-300"
                    >
                      <Icon size={16} />
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10 glass p-16 rounded-[60px] border-white/10">
          <h2 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter mb-8">
            TRAIN WITH THE <span className="text-primary">BEST</span>
          </h2>
          <p className="text-xl text-gray-400 mb-12 font-light max-w-xl mx-auto">
            Book a 1-on-1 discovery session with any of our master trainers to map out your dominance.
          </p>
          <button className="px-12 py-5 bg-primary text-obsidian rounded-full font-black uppercase tracking-widest hover:bg-primary-dark transition-all duration-300 shadow-2xl shadow-primary/20">
            Book Session Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default Trainers;
