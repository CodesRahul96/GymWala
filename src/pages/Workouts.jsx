import { FaDumbbell, FaRunning, FaHeartbeat, FaWeight, FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Workouts = () => {
  const workoutPlans = [
    {
      title: 'Power Strength',
      description: 'The foundation of peak performance. Master the heavy lifts with our progressive strength curricula.',
      benefits: ['Hypertrophy focus', 'Compound mechanical advantage', 'Enhanced metabolic floor'],
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      icon: <FaWeight />,
    },
    {
      title: 'Hyper-Heat Cardio',
      description: 'Elite conditioning that demands more. Burn through barriers with high-output interval systems.',
      benefits: ['VO2 Max enhancement', 'Rapid lipid oxidation', 'Elite stamina baseline'],
      image: 'https://images.unsplash.com/photo-1538805060514-97d9cc17730c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      icon: <FaRunning />,
    },
    {
      title: 'Bio-Flow Mobility',
      description: 'Unlocking human movement. Enhance kinetic chain efficiency and bulletproof your joints.',
      benefits: ['Fascial elasticity', 'Kinetic chain alignment', 'Neuromuscular coordination'],
      image: 'https://images.pexels.com/photos/4498294/pexels-photo-4498294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      icon: <FaHeartbeat />,
    },
  ];

  return (
    <div className="bg-obsidian text-white min-h-screen pt-24 md:pt-32">
      {/* Hero Section */}
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 opacity-30" />
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-primary text-xs font-bold uppercase tracking-widest mb-8">
            <FaDumbbell /> <span>Elite Programming</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black italic tracking-tighter uppercase mb-6">
            CHOOSE YOUR <span className="text-gradient">WEAPON</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
            Scientifically engineered programs designed to push the boundaries of 
            human potential. No fluff, just results.
          </p>
        </div>
      </section>

      {/* Workout Plans Section */}
      <section className="py-24 px-4 bg-obsidian-surface relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {workoutPlans.map((plan) => (
              <div
                key={plan.title}
                className="group relative flex flex-col bg-obsidian-card border border-white/5 rounded-[40px] overflow-hidden hover-glow"
              >
                {/* Image Wrapper */}
                <div className="h-64 relative img-zoom">
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian-card to-transparent z-10 opacity-60" />
                  <img
                    src={plan.image}
                    alt={plan.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-6 right-6 z-20 w-12 h-12 bg-primary text-obsidian rounded-2xl flex items-center justify-center text-xl shadow-lg">
                    {plan.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-10 flex-grow flex flex-col">
                  <h3 className="text-2xl font-black italic tracking-tighter uppercase mb-4 text-white group-hover:text-primary transition-colors">
                    {plan.title}
                  </h3>
                  <p className="text-gray-400 mb-8 font-light leading-relaxed">
                    {plan.description}
                  </p>
                  
                  <ul className="space-y-4 mb-10 mt-auto">
                    {plan.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-center text-sm font-medium tracking-wide">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                        <span className="text-gray-200">{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <button className="w-full py-4 bg-white/5 border border-white/10 text-white rounded-2xl font-black uppercase tracking-widest hover:bg-primary hover:text-obsidian transition-all duration-300 flex items-center justify-center group/btn">
                    Program Details <FaChevronRight className="ml-2 text-xs transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-32 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter mb-8">
            NOT SURE WHICH <span className="text-primary italic">PATH</span> TO TAKE?
          </h2>
          <p className="text-xl text-gray-400 mb-12 font-light leading-relaxed px-4">
            Consult with our master coaches for a bio-mechanical assessment and personalized program mapping.
          </p>
          <Link to="/contact" className="px-12 py-5 bg-primary text-obsidian rounded-full font-black uppercase tracking-widest hover:bg-primary-dark transition-all duration-300 shadow-2xl shadow-primary/20">
            Book Assessment
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Workouts;
