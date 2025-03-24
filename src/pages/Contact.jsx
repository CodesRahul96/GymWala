import { useEffect, useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaUser } from 'react-icons/fa';

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
  const [setHeroRef, heroVisible] = useOnScreen({ threshold: 0.1 });
  const [setContactRef, contactVisible] = useOnScreen({ threshold: 0.1 });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="bg-gray-800 text-white min-h-screen">
      <section ref={setHeroRef} className={`relative h-96 w-full overflow-hidden ${heroVisible ? 'animate-fadeIn' : 'opacity-0'}`}>
        <div className="absolute inset-0" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80')`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="absolute inset-0 bg-gray-900 bg-opacity-60" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
          <div className="flex items-center mb-4">
            <FaEnvelope className="text-yellow-300 text-5xl mr-3 animate-spinSlow" />
            <h1 className="text-4xl md:text-5xl font-bold text-center animate-slideUp">Contact Us</h1>
          </div>
          <p className="text-xl text-center max-w-2xl animate-slideUp delay-200">Get in touch with us...</p>
        </div>
      </section>

      <section ref={setContactRef} className={`py-16 px-4 ${contactVisible ? 'animate-slideUp' : 'opacity-0'}`}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold mb-8">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input type="text" placeholder="Your Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full pl-10 p-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-yellow-400" />
              </div>
              <div className="relative">
                <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input type="email" placeholder="Your Email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full pl-10 p-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-yellow-400" />
              </div>
              <div className="relative">
                <textarea placeholder="Your Message" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full p-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-yellow-400 h-32" />
              </div>
              <button type="submit" className="w-full py-3 bg-yellow-400 text-gray-900 rounded-md font-semibold hover:bg-yellow-300 transition-colors animate-bounceIn delay-400">Send Message</button>
            </form>
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold mb-8">Contact Information</h2>
            <div className="space-y-6">
              <div className="flex items-center"><FaMapMarkerAlt className="text-yellow-300 text-2xl mr-3" /><p>GymWala Fitness Center, 123 Fitness Street, Melbourne, VIC 3000, Australia</p></div>
              <div className="flex items-center"><FaPhone className="text-yellow-300 text-2xl mr-3" /><p>+91 3 1234 5678</p></div>
              <div className="flex items-center"><FaEnvelope className="text-yellow-300 text-2xl mr-3" /><p>info@gymwala.com</p></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;