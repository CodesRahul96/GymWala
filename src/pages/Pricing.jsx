import { useEffect, useState } from "react";
import { FaDumbbell } from "react-icons/fa";

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
      name: "Basic",
      price: "₹999/month",
      features: ["Gym Access", "Group Classes", "Locker Room"],
      color: "yellow-400",
    },
    {
      name: "Pro",
      price: "₹1799/month",
      features: [
        "Gym Access",
        "Group Classes",
        "Personal Trainer (2 sessions)",
        "Nutrition Guide",
      ],
      color: "yellow-500",
    },
    {
      name: "Elite",
      price: "₹2999/month",
      features: [
        "Unlimited Gym Access",
        "All Classes",
        "Personal Trainer (5 sessions)",
        "Nutrition Guide",
        "Sauna",
      ],
      color: "yellow-600",
    },
  ];

  const [setHeroRef, heroVisible] = useOnScreen({ threshold: 0.1 });
  const [setPlansRef, plansVisible] = useOnScreen({ threshold: 0.1 });

  return (
    <div className="bg-gray-800 text-white min-h-screen">
      <section
        ref={setHeroRef}
        className={`relative h-96 w-full overflow-hidden ${
          heroVisible ? "animate-fadeIn" : "opacity-0"
        }`}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1540497077202-7c8a3999166f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gray-900 bg-opacity-60" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
          <div className="flex items-center mb-4">
            <FaDumbbell className="text-yellow-300 text-5xl mr-3 animate-spinSlow" />
            <h1 className="text-4xl md:text-5xl font-bold text-center animate-slideUp">
              Pricing Plans
            </h1>
          </div>
          <p className="text-xl text-center max-w-2xl animate-slideUp delay-200">
            Choose a plan that fits your fitness journey.
          </p>
        </div>
      </section>

      <section
        ref={setPlansRef}
        className={`py-16 px-4 ${
          plansVisible ? "animate-slideUp" : "opacity-0"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our Membership Plans
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`bg-gray-900 p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 ${
                  plansVisible ? "animate-fadeIn" : "opacity-0"
                }`}
              >
                <h3
                  className={`text-2xl font-semibold text-${plan.color} mb-4`}
                >
                  {plan.name}
                </h3>
                <p className="text-3xl font-bold mb-6">{plan.price}</p>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <span
                        className={`w-2 h-2 bg-${plan.color} rounded-full mr-2`}
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 bg-${
                    plan.color
                  } text-gray-900 rounded-md font-semibold hover:bg-${plan.color.replace(
                    "400",
                    "300"
                  )} transition-colors`}
                >
                  Join Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
