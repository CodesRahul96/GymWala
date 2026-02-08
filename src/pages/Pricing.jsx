import { useEffect, useState } from "react";
import { FaDumbbell, FaCheckCircle, FaChevronRight } from "react-icons/fa";

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

const Pricing = () => {
  const plans = [
    {
      name: "Basic Strength",
      price: "₹999",
      period: "month",
      features: ["24/7 Den Access", "Basic Equipment", "Locker & Shower", "Standard Support"],
      highlight: false,
    },
    {
      name: "Pro Warrior",
      price: "₹1799",
      period: "month",
      features: [
        "All Basic Features",
        "Free Group Workshops",
        "2 Coaching Sessions",
        "Bio-Nutrient Plan",
      ],
      highlight: true,
    },
    {
      name: "Elite King",
      price: "₹2999",
      period: "month",
      features: [
        "All Pro Features",
        "Unlimited Masterclasses",
        "5 Coaching Sessions",
        "Sauna & Recovery Lounge",
        "VIP Keyfob Access",
      ],
      highlight: false,
    },
  ];

  const [setHeroRef, heroVisible] = useOnScreen({ threshold: 0.1 });

  return (
    <div className="bg-obsidian text-white min-h-screen pt-24 md:pt-32">
      {/* Hero Section */}
      <section
        ref={setHeroRef}
        className="relative py-24 px-4 overflow-hidden"
      >
        <div className="absolute inset-x-0 top-0 h-96 bg-primary/5 blur-3xl rounded-full -translate-y-1/2" />
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-primary text-xs font-bold uppercase tracking-widest mb-8">
            <FaDumbbell /> <span>Investment In Self</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black italic tracking-tighter uppercase mb-6 drop-shadow-2xl">
            PRICING <span className="text-gradient">TIERS</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
            Transparent pricing for non-negotiable results. 
            Choose the level of commitment that matches your ambition.
          </p>
        </div>
      </section>

      {/* Pricing Plans Section */}
      <section className="py-24 px-4 bg-obsidian-surface relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`flex flex-col relative p-6 md:p-10 rounded-[40px] border transition-all duration-500 hover:scale-[1.02] ${
                  plan.highlight 
                    ? "bg-primary text-obsidian border-primary shadow-[0_20px_60px_rgba(204,255,0,0.2)] scale-100 md:scale-105 z-10 animate-border-pulse" 
                    : "bg-obsidian-card text-white border-white/5 hover:border-white/10"
                }`}
              >
                {plan.highlight && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-6 py-1.5 bg-obsidian text-primary rounded-full text-xs font-black uppercase tracking-widest border border-primary">
                    Most Popular
                  </div>
                )}
                
                <div className="mb-10">
                  <h3 className={`text-xl font-black uppercase italic tracking-tighter mb-4 ${plan.highlight ? "text-obsidian" : "text-primary"}`}>
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline">
                    <span className="text-5xl font-black">{plan.price}</span>
                    <span className={`ml-2 text-sm font-bold uppercase tracking-widest ${plan.highlight ? "text-obsidian/60" : "text-gray-500"}`}>
                      / {plan.period}
                    </span>
                  </div>
                </div>

                <ul className="space-y-4 mb-12 flex-grow">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm font-bold tracking-tight">
                      <FaCheckCircle className={`mr-3 flex-shrink-0 ${plan.highlight ? "text-obsidian/80" : "text-primary"}`} />
                      <span className={plan.highlight ? "text-obsidian/90" : "text-gray-300"}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-5 rounded-2xl font-black uppercase tracking-widest transition-all duration-300 flex items-center justify-center group ${
                    plan.highlight 
                      ? "bg-obsidian text-white hover:bg-black" 
                      : "bg-primary text-obsidian hover:bg-primary-dark shadow-[0_10px_30px_rgba(204,255,0,0.15)]"
                  }`}
                >
                  Get Started <FaChevronRight className="ml-2 text-xs transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-24 px-4 text-center">
        <div className="max-w-2xl mx-auto glass p-10 rounded-[40px] border-white/10">
          <p className="text-gray-400 font-light italic text-lg">
            "All plans come with a 7-day money-back guarantee. If you don't feel the power after 
            the first week, we'll refund your investment. No questions, just respect."
          </p>
        </div>
      </section>
    </div>
  );
};

export default Pricing;

