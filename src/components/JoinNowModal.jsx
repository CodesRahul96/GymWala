import { useState } from 'react';
import { FaUser, FaEnvelope, FaPhone, FaTimes, FaDumbbell } from 'react-icons/fa';

// eslint-disable-next-line react/prop-types
const JoinNowModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Final Audit: Removed console.log
    setFormData({ name: '', email: '', phone: '' });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-obsidian/80 backdrop-blur-sm animate-fadeIn" 
        onClick={onClose}
      />
      
      {/* Modal Card */}
      <div className="relative w-full max-w-lg glass-dark p-8 md:p-12 rounded-[40px] border border-white/10 shadow-2xl animate-scaleUp overflow-hidden">
        {/* Glow Background Accent */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/20 blur-[100px] rounded-full" />
        
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white hover:bg-primary hover:text-obsidian hover:scale-110 transition-all duration-300 z-10"
        >
          <FaTimes size={18} />
        </button>

        <div className="relative z-10">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-primary text-[10px] font-black uppercase tracking-[0.2em] mb-6">
            <FaDumbbell /> <span>Elite Admission</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-black italic tracking-tighter uppercase mb-2 leading-none">
            JOIN THE <span className="text-gradient">DEN</span>
          </h2>
          <p className="text-gray-400 font-light text-sm mb-10 tracking-wide">
            Enter your intel below to claim your dominance.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative group">
              <FaUser className="absolute left-5 top-1/2 -translate-y-1/2 text-primary/40 group-focus-within:text-primary transition-colors duration-300" />
              <input
                type="text"
                placeholder="Operational Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full pl-14 py-5 bg-white/5 border border-white/10 rounded-2xl focus:border-primary/50 outline-none transition-all placeholder:text-gray-600 font-medium text-white"
                required
              />
            </div>
            
            <div className="relative group">
              <FaEnvelope className="absolute left-5 top-1/2 -translate-y-1/2 text-primary/40 group-focus-within:text-primary transition-colors duration-300" />
              <input
                type="email"
                placeholder="Digital Address"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full pl-14 py-5 bg-white/5 border border-white/10 rounded-2xl focus:border-primary/50 outline-none transition-all placeholder:text-gray-600 font-medium text-white"
                required
              />
            </div>

            <div className="relative group">
              <FaPhone className="absolute left-5 top-1/2 -translate-y-1/2 text-primary/40 group-focus-within:text-primary transition-colors duration-300" />
              <input
                type="tel"
                placeholder="Comms Number"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full pl-14 py-5 bg-white/5 border border-white/10 rounded-2xl focus:border-primary/50 outline-none transition-all placeholder:text-gray-600 font-medium text-white"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-6 bg-primary text-obsidian rounded-2xl font-black uppercase tracking-widest hover:bg-primary-dark transition-all duration-500 shadow-[0_10px_40px_rgba(204,255,0,0.3)] hover:scale-[1.02] active:scale-95 group"
            >
              Initialize Transformation
            </button>

            <div className="flex items-center justify-center space-x-4 pt-4">
              <div className="h-px flex-1 bg-white/10" />
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-primary/60">
                1 Day Elite Access Included
              </p>
              <div className="h-px flex-1 bg-white/10" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JoinNowModal;
