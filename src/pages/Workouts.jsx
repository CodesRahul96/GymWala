import { FaDumbbell, FaRunning, FaHeartbeat, FaWeight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Workouts = () => {
  const workoutPlans = [
    {
      title: 'Strength Training',
      description: 'Build muscle mass and increase strength with our comprehensive weight training program. Perfect for all levels.',
      benefits: ['Increases muscle mass', 'Boosts metabolism', 'Improves bone density'],
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
      icon: <FaWeight className="text-yellow-300 text-4xl" />,
    },
    {
      title: 'Cardio Blast',
      description: 'Burn calories and improve cardiovascular health with high-intensity interval training and endurance exercises.',
      benefits: ['Enhances heart health', 'Burns fat', 'Boosts stamina'],
      image: 'https://images.unsplash.com/photo-1538805060514-97d9cc17730c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
      icon: <FaRunning className="text-yellow-300 text-4xl" />,
    },
    {
      title: 'Functional Fitness',
      description: 'Enhance daily movement and flexibility with exercises that mimic real-life activities.',
      benefits: ['Improves mobility', 'Reduces injury risk', 'Enhances coordination'],
      image: 'https://images.pexels.com/photos/4498294/pexels-photo-4498294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      icon: <FaHeartbeat className="text-yellow-300 text-4xl" />,
    },
  ];

  return (
    <div className="bg-gray-800 text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 w-full overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gray-900 bg-opacity-60" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
          <div className="flex items-center mb-4">
            <FaDumbbell className="text-yellow-300 text-5xl mr-3" />
            <h1 className="text-4xl md:text-5xl font-bold text-center">Workout Plans</h1>
          </div>
          <p className="text-xl text-center max-w-2xl">
            Discover our tailored workout programs designed to help you achieve your fitness goals.
          </p>
        </div>
      </section>

      {/* Workout Plans Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Programs</h2>
          <div className="space-y-16">
            {workoutPlans.map((plan, index) => (
              <div
                key={plan.title}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } items-center gap-8`}
              >
                {/* Image */}
                <div className="w-full md:w-1/2">
                  <img
                    src={plan.image}
                    alt={plan.title}
                    className="w-full h-80 object-cover rounded-lg shadow-lg hover:scale-95 transition-all duration-300 ease-out"
                  />
                </div>
                {/* Content */}
                <div className="w-full md:w-1/2">
                  <div className="flex items-center mb-4">
                    {plan.icon}
                    <h3 className="text-2xl font-semibold ml-3">{plan.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <ul className="space-y-2">
                    {plan.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-center">
                        <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="mt-6 px-6 py-2 bg-yellow-400 text-gray-900 rounded-md font-semibold hover:bg-yellow-300 transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start?</h2>
          <p className="text-lg text-gray-300 mb-8">
            Join GymWala today and kickstart your fitness journey with our expert-designed workout plans.
          </p>
          <Link to="/contact" className="px-8 py-3 bg-yellow-400 text-gray-900 rounded-md font-semibold text-lg hover:bg-yellow-300 transition-colors">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Workouts;