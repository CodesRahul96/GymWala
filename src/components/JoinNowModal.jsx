import { useState } from 'react';
import { FaUser, FaEnvelope, FaPhone, FaTimes } from 'react-icons/fa';

// eslint-disable-next-line react/prop-types
const JoinNowModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', phone: '' });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-30 animate-fadeIn">
      <div className="bg-gray-800 p-6 rounded-lg w-full max-w-md relative animate-slideUp">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white hover:text-yellow-300 focus:outline-none"
        >
          <FaTimes size={24} />
        </button>
        <h2 className="text-2xl font-bold text-center text-yellow-300 mb-6">Join GymWala Today</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Full Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full pl-10 p-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-yellow-400"
            />
          </div>
          <div className="relative">
            <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full pl-10 p-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-yellow-400"
            />
          </div>
          <div className="relative">
            <FaPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="tel"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full pl-10 p-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-yellow-400"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-yellow-400 text-gray-900 rounded-md font-semibold hover:bg-yellow-300 transition-colors"
          >
            Submit
          </button>
          <p className="text-center text-yellow-300 mt-4 font-semibold">Get 1 Day Free Trial Now! </p>
        </form>
      </div>
    </div>
  );
};

export default JoinNowModal;