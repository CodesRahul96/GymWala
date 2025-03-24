import { useEffect, useState } from 'react';
import { FaDumbbell } from 'react-icons/fa';

const Preloader = ({ onLoaded }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      onLoaded();
    }, 2000); // 2-second delay
    return () => clearTimeout(timer);
  }, [onLoaded]);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 bg-gray-900 flex flex-col items-center justify-center z-50 animate-fadeOut">
      <div className="flex items-center mb-4 animate-bounce">
        <FaDumbbell className="text-yellow-300 text-6xl mr-3" />
        <h1 className="text-4xl font-extrabold text-white">
          <span className="text-yellow-300">Gym</span>Wala
        </h1>
      </div>
      <div className="w-16 h-16 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
};

export default Preloader;