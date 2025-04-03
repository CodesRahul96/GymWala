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
} from "react-icons/fa";
import { Link } from "react-scroll";

const sliderImages = [
  "https://images.pexels.com/photos/163351/girl-boxer-ring-boxing-pear-163351.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/416754/pexels-photo-416754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
  "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
  "https://images.unsplash.com/photo-1576678927484-cc907957088c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
  "https://images.pexels.com/photos/136404/pexels-photo-136404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
];

// Custom hook for scroll animation
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
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index) => setCurrentSlide(index);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", phone: "" });
  };

  return (
    <div className="bg-gray-800 text-white">
      {/* Hero Slider */}
      <section
        className="relative h-screen w-full overflow-hidden animate-fadeIn"
        id="hero"
      >
        {sliderImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentSlide === index ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        ))}
        <div className="absolute inset-0 bg-gray-900 bg-opacity-50" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-4 animate-slideUp">
            Welcome to <span className="text-yellow-300">Gym</span>
            <span className="text-white">Wala</span>
          </h1>
          <p className="text-xl md:text-2xl text-center mb-8 max-w-2xl animate-slideUp delay-200">
            Transform your body, mind, and life with our world-class facilities.
          </p>
          <Link
            to="join"
            smooth={true}
            duration={500}
            className="px-8 py-3 bg-yellow-400 text-gray-900 rounded-md font-semibold text-lg hover:bg-yellow-300 animate-bounceIn delay-400 cursor-pointer"
          >
            Join Now
          </Link>
        </div>
        <div className="absolute bottom-6 left-0 right-0 z-10 flex justify-center space-x-2">
          {sliderImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                currentSlide === index
                  ? "bg-yellow-400 scale-125"
                  : "bg-gray-400 hover:bg-gray-300"
              }`}
            />
          ))}
        </div>
      </section>

      {/* GymWala Info */}
      <Section
        id="about"
        title="About GymWala"
        icon={<FaDumbbell className="text-yellow-300 text-4xl mr-2" />}
      >
        <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
          GymWala is more than just a gym - it&apos;s a community dedicated to
          fitness and wellness.
        </p>
        <img
          src="https://images.pexels.com/photos/841131/pexels-photo-841131.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Gym Facility"
          className="w-full max-w-4xl mx-auto rounded-lg shadow-lg hover:scale-105 transition-all duration-300 ease-out"
        />
      </Section>

      {/* Trainers */}
      <Section
        id="trainers"
        title="Our Trainers"
        icon={<FaUsers className="text-yellow-300 text-4xl mr-2" />}
        bg="bg-gray-900"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
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
          ].map((trainer) => (
            <div key={trainer.name} className="flex flex-col items-center">
              <img
                src={trainer.img}
                alt={trainer.name}
                className="w-48 h-48 rounded-full mb-4 object-cover hover:scale-105 transition-all duration-300 ease-out"
              />
              <h3 className="text-xl font-semibold">{trainer.name}</h3>
              <p className="text-gray-400">{trainer.role}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Achievements */}
      <Section
        id="achievements"
        title="Our Achievements"
        icon={<FaTrophy className="text-yellow-300 text-4xl mr-2" />}
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            {
              number: "1200+",
              label: "Happy Members",
              icon: <FaUsers className="text-yellow-300 text-3xl mb-2" />,
            },
            {
              number: "100+",
              label: "Fitness Programs",
              icon: <FaDumbbell className="text-yellow-300 text-3xl mb-2" />,
            },
            {
              number: "15+",
              label: "Expert Trainers",
              icon: <FaUser className="text-yellow-300 text-3xl mb-2" />,
            },
            {
              number: "10+",
              label: "Years Experience",
              icon: <FaHeartbeat className="text-yellow-300 text-3xl mb-2" />,
            },
          ].map((achievement) => (
            <div key={achievement.label} className="flex flex-col items-center hover:scale-105 transition-all duration-300 ease-out">
              {achievement.icon}
              <span className="text-4xl font-bold text-yellow-300">
                {achievement.number}
              </span>
              <span className="text-gray-300">{achievement.label}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Why Choose GymWala */}
      <Section
        id="why-choose"
        title="Why Choose GymWala"
        icon={<FaHeartbeat className="text-yellow-300 text-4xl mr-2" />}
        bg="bg-gray-900"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: "Modern Equipment",
              desc: "State-of-the-art fitness gear",
              img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            },
            {
              title: "Expert Guidance",
              desc: "Certified trainers",
              img: "https://images.pexels.com/photos/703012/pexels-photo-703012.jpeg?auto=compress&cs=tinysrgb&w=600",
            },
          ].map((reason) => (
            <div key={reason.title} className="flex flex-col items-center">
              <img
                src={reason.img}
                alt={reason.title}
                className="w-full h-64 object-cover rounded-lg mb-4 hover:scale-105 transition-all duration-300 ease-out"
              />
              <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
              <p className="text-gray-400">{reason.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Join Form */}
      <Section id="join" title="Join GymWala Today">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="w-full md:w-1/2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full pl-10 p-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-yellow-400"
                />
              </div>
              <div className="relative">
                <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full pl-10 p-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-yellow-400"
                />
              </div>
              <div className="relative">
                <FaPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full pl-10 p-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-yellow-400"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-yellow-400 text-gray-900 rounded-md font-semibold hover:bg-yellow-300"
              >
                Submit
              </button>
            </form>
            <p className="text-center text-yellow-300 mt-4 font-semibold">
              Get 1 Day Free Trial Now!
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
              alt="Join GymWala"
              className="w-full h-96 object-cover rounded-lg shadow-lg hover:scale-105 transition-all duration-300 ease-out"
            /> 
          </div>
        </div>
      </Section>

      {/* Visit GymWala */}
      <Section
        id="visit"
        title="Visit GymWala"
        icon={<FaMapMarkerAlt className="text-yellow-300 text-4xl mr-2" />}
        bg="bg-gray-900"
      >
        <div className="flex flex-col md:flex-row gap-8 items-top ">
          <div className="w-full md:w-1/2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509372!2d144.9537353153167!3d-37.81627927975195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d1c4b1b1c4b!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1635781234567!5m2!1sen!2sus"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              className="rounded-lg"
            />
          </div>
          <div className="w-full md:w-1/2 text-left">
            <h2 className="text-3xl font-bold mb-8">Our Address</h2>
            <div className="space-y-6">
              <div className="flex items-center">
                <FaMapMarkerAlt className="text-yellow-300 text-2xl mr-3" />
                <p>
                  GymWala Fitness Center, 123 Fitness Street, <br /> Pune, Maharashtra,
                  India - 411043
                </p>
              </div>
              <div className="flex items-center">
                <FaPhone className="text-yellow-300 text-2xl mr-3" />
                <p>+91 1234567890</p>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="text-yellow-300 text-2xl mr-3" />
                <p>info@gymwala.com</p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

// Reusable Section Component with Scroll Animation
// eslint-disable-next-line react/prop-types
const Section = ({ id, title, icon, children, bg = "" }) => {
  const [setRef, visible] = useOnScreen({ threshold: 0.1 });
  return (
    <section
      ref={setRef}
      id={id}
      className={`${bg} py-16 px-4 ${
        visible ? "animate-slideUp" : "opacity-0"
      }`}
    >
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex justify-center items-center mb-12">
          {icon}
          <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
        </div>
        {children}
      </div>
    </section>
  );
};

export default HomeHero;
