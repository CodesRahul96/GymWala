import { FaUsers, FaDumbbell, FaTrophy, FaLightbulb, FaQuoteLeft } from 'react-icons/fa';

const About = () => {
  return (
    <div className="bg-obsidian text-white min-h-screen pt-24 md:pt-32">
      {/* Hero Section */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-full" />
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-primary text-xs font-bold uppercase tracking-widest mb-8">
            <FaLightbulb /> <span>The Vision Behind The Den</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter uppercase mb-6 drop-shadow-2xl">
            OUR <span className="text-gradient">ORIGIN</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
            From a garage in Pune to a regional powerhouse. Evolution isn't 
            an option at GymWala—it's the only requirement.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 px-4 bg-obsidian-surface relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative group img-zoom rounded-[60px]">
            <div className="absolute -inset-4 bg-primary/20 rounded-[60px] blur-2xl opacity-30 group-hover:opacity-50 transition-all duration-700" />
            <img 
              src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="Gym Culture" 
              className="relative rounded-[60px] object-cover h-[400px] md:h-[600px] w-full shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000" 
            />
          </div>
          <div className="space-y-8">
            <div className="inline-block text-primary font-black uppercase tracking-[0.3em] text-xs">Since 2014</div>
            <h2 className="text-4xl md:text-5xl font-black italic leading-tight uppercase tracking-tighter">
              BORN FROM <span className="text-primary">GRIT</span>
            </h2>
            <p className="text-gray-400 text-lg font-light leading-relaxed">
              GymWala was founded on a simple realization: the fitness industry had 
              become soft. We saw too many "wellness clubs" and not enough places 
              where people could truly test their limits.
            </p>
            <p className="text-gray-400 text-lg font-light leading-relaxed">
              We built "The Den" to be the antidote. A high-energy, no-excuses 
              environment where the technology is cutting-edge but the ethos 
              is old-school: show up, do the work, and get 1% better every day.
            </p>
            
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/10">
              <div>
                <div className="text-3xl font-black text-white mb-1">Elite</div>
                <div className="text-primary text-xs uppercase font-black tracking-widest">Equipment</div>
              </div>
              <div>
                <div className="text-3xl font-black text-white mb-1">World</div>
                <div className="text-primary text-xs uppercase font-black tracking-widest">Class Coaching</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black italic uppercase tracking-tighter mb-4">
              THE <span className="text-primary">DNA</span> OF DOMINANCE
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { 
                icon: <FaUsers />, 
                title: "COMMUNITY", 
                desc: "We are a pack. When one member struggles, we push. When one succeeds, we celebrate." 
              },
              { 
                icon: <FaDumbbell />, 
                title: "INTEGRITY", 
                desc: "The weights don't lie. Neither do we. We value honesty in effort and transparency in results." 
              },
              { 
                icon: <FaTrophy />, 
                title: "RESILIENCE", 
                desc: "Comfort is the enemy of growth. We thrive in the struggle and find strength in the resistance." 
              },
            ].map((value, idx) => (
              <div key={idx} className="glass-dark p-8 md:p-12 rounded-[40px] border border-white/10 transition-all duration-500 group hover-glow">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary text-3xl mb-8 group-hover:scale-110 transition-transform duration-500">
                  {value.icon}
                </div>
                <h3 className="text-xl font-black italic uppercase tracking-widest mb-4 group-hover:text-primary transition-colors">
                  {value.title}
                </h3>
                <p className="text-gray-400 font-light leading-relaxed">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-32 px-4 bg-primary text-obsidian overflow-hidden">
        <div className="max-w-4xl mx-auto relative">
          <FaQuoteLeft className="text-obsidian/10 text-[200px] absolute -top-20 -left-20" />
          <div className="relative z-10 text-center">
            <p className="text-3xl md:text-5xl font-black italic leading-tight uppercase tracking-tighter mb-12">
              "GYMWALA ISN'T JUST A PLACE TO TRAIN; IT'S WHERE I FOUND THE <span className="underline decoration-obsidian">HIGHEST VERSION</span> OF MYSELF."
            </p>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full border-4 border-obsidian mb-4 overflow-hidden">
                <img src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300" alt="Avatar" className="w-full h-full object-cover" />
              </div>
              <h4 className="text-xl font-black uppercase italic tracking-widest">Rajat K.</h4>
              <p className="text-xs font-bold uppercase tracking-[0.2em] opacity-60">Member since 2021</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-4 text-center">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter mb-10">
            WRITE YOUR OWN <span className="text-primary">LEGACY</span>
          </h2>
          <button className="px-12 py-5 bg-white/5 border border-white/10 text-white rounded-full font-black uppercase tracking-widest hover:bg-primary hover:text-obsidian transition-all duration-500 hover:border-primary hover:scale-105 active:scale-95 hover:shadow-[0_10px_40px_rgba(204,255,0,0.3)]">
            Join The Community
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;
