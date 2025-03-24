import { FaExclamationTriangle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div className="bg-gray-800 text-white min-h-screen flex flex-col items-center justify-center px-4">
      {/* 404 Illustration */}
      <div className="relative mb-8 animate-bounceIn">
        <FaExclamationTriangle className="text-yellow-400 text-8xl" />
        <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl font-bold text-white">404</span>
      </div>

      {/* Message */}
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 animate-slideUp">Oops! Page Not Found</h1>
      <p className="text-lg md:text-xl text-gray-300 text-center mb-8 max-w-2xl animate-slideUp delay-200">
        It looks like you&apos;ve wandered off the fitness path. The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>

      {/* Back to Home Button */}
      <Link
        to="/"
        className="px-8 py-3 bg-yellow-400 text-gray-900 rounded-md font-semibold text-lg hover:bg-yellow-300 transition-all duration-300 animate-bounceIn delay-400"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default PageNotFound;