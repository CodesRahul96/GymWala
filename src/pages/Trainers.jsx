import { useEffect, useState } from 'react';
import { FaUsers } from 'react-icons/fa';

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
      name: "John Doe",
      role: "Strength Coach",
      img: "https://images.pexels.com/photos/5327471/pexels-photo-5327471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      name: "Jane Smith",
      role: "Yoga Instructor",
      img: "https://images.pexels.com/photos/3757370/pexels-photo-3757370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      name: "Mike Johnson",
      role: "Cardio Expert",
      img: "https://images.pexels.com/photos/17939430/pexels-photo-17939430/free-photo-of-man-in-tank-top-at-gym.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ];

  const [setHeroRef, heroVisible] = useOnScreen({ threshold: 0.1 });
  const [setTrainersRef, trainersVisible] = useOnScreen({ threshold: 0.1 });

  return (
    <div className="bg-gray-800 text-white min-h-screen">
      <section ref={setHeroRef} className={`relative h-96 w-full overflow-hidden ${heroVisible ? 'animate-fadeIn' : 'opacity-0'}`}>
        <div className="absolute inset-0" style={{ backgroundImage: `url('https://images.pexels.com/photos/1552249/pexels-photo-1552249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="absolute inset-0 bg-gray-900 bg-opacity-60" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
          <div className="flex items-center mb-4">
            <FaUsers className="text-yellow-300 text-5xl mr-3 animate-spinSlow" />
            <h1 className="text-4xl md:text-5xl font-bold text-center animate-slideUp">Our Trainers</h1>
          </div>
          <p className="text-xl text-center max-w-2xl animate-slideUp delay-200">Meet our expert team...</p>
        </div>
      </section>

      <section ref={setTrainersRef} className={`py-16 px-4 ${trainersVisible ? 'animate-slideUp' : 'opacity-0'}`}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Trainer Profiles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trainers.map((trainer) => (
              <div key={trainer.name} className={`bg-gray-900 p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 ${trainersVisible ? 'animate-fadeIn' : 'opacity-0'}`}>
                <img src={trainer.img} alt={trainer.name} className="w-full h-64 object-cover rounded-lg mb-4" />
                <h3 className="text-2xl font-semibold text-yellow-300 mb-2">{trainer.name}</h3>
                <p className="text-gray-400 mb-2">{trainer.role}</p>
                <p className="text-gray-300">{trainer.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Trainers;