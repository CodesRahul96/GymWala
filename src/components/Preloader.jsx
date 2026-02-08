import { useEffect, useState } from 'react';
import { FaDumbbell } from 'react-icons/fa';

const Preloader = ({ onLoaded }) => {
  const [progress, setProgress] = useState(0);
  const [shouldExit, setShouldExit] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setShouldExit(true), 500);
          setTimeout(onLoaded, 1200);
          return 100;
        }
        return prev + 2;
      });
    }, 30);
    return () => clearInterval(interval);
  }, [onLoaded]);

  return (
    <div className={`fixed inset-0 bg-obsidian z-[100] flex flex-col items-center justify-center transition-all duration-1000 ease-in-out ${
      shouldExit ? "opacity-0 scale-110 pointer-events-none" : "opacity-100"
    }`}>
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full animate-pulse" />
      
      <div className="relative z-10 flex flex-col items-center">
        <div className="mb-8 relative">
          <FaDumbbell className="text-primary text-7xl animate-bounce" />
          <div className="absolute -inset-4 bg-primary/20 blur-2xl rounded-full animate-pulse" />
        </div>
        
        <h1 className="text-5xl font-black tracking-tighter uppercase italic mb-4">
          <span className="text-primary">GYM</span>
          <span className="text-white">WALA</span>
        </h1>
        
        <div className="flex flex-col items-center">
          <div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden mb-4">
            <div 
              className="h-full bg-primary transition-all duration-300 ease-out shadow-[0_0_15px_#ccff00]"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="text-primary font-black tracking-[0.3em] text-sm uppercase">
            Initializing Dominance {progress}%
          </span>
        </div>
      </div>

      {/* Aesthetic Border Trace */}
      <div className="absolute inset-8 border border-white/5 rounded-[40px] pointer-events-none" />
    </div>
  );
};

export default Preloader;