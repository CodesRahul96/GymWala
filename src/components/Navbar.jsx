import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import JoinNowModal from './JoinNowModal';
import Logo from "../assets/GymWala.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', href: '/', scrollTo: 'hero' },
    { name: 'Workouts', href: '/workouts' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Trainers', href: '/trainers' },
    { name: 'Contact', href: '/contact' },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const isHomePage = location.pathname === '/';

  // Trigger animation on page load
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    setAnimate(false); // Reset animation
    setTimeout(() => setAnimate(true), 10); // Trigger animation after a slight delay
  }, [location.pathname]); // Re-run on route change

  return (
    <>
      <nav className={`bg-gray-900 text-white fixed w-full z-20 top-0 shadow-lg ${animate ? 'animate-slideUp' : 'opacity-0'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            <div className="flex-shrink-0">
              <NavLink to="/" className="text-2xl font-extrabold tracking-tight animate-fadeIn flex text-center items-center justify-center">
              <img src={Logo} className='w-[50px]' alt="Logo" />
              <span className="text-yellow-300 animate-pulse">Gym</span>
                <span className="text-white">Wala</span>
              </NavLink>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-4">
              {navItems.map((item) => (
                item.scrollTo && isHomePage ? (
                  <Link
                    key={item.name}
                    to={item.scrollTo}
                    smooth={true}
                    duration={500}
                    className={({ isActive }) =>
                      `relative px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                        isActive || location.pathname === item.href ? 'text-yellow-300' : 'text-white hover:text-yellow-300'
                      } cursor-pointer`
                    }
                    activeClass="text-yellow-300"
                    spy={true}
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                ) : (
                  <NavLink
                    key={item.name}
                    to={item.href}
                    className={({ isActive }) =>
                      `relative px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                        isActive ? 'text-yellow-300' : 'text-white hover:text-yellow-300'
                      }`
                    }
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
                  </NavLink>
                )
              ))}
              {/* Join Now Button */}
              <button
                onClick={toggleModal}
                className="px-4 py-2 bg-yellow-400 text-gray-900 rounded-md font-semibold text-sm hover:bg-yellow-300 transition-all duration-300 animate-bounceIn"
              >
                Join Now
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-white hover:text-yellow-300 focus:outline-none animate-bounceIn"
              >
                {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
              isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                item.scrollTo && isHomePage ? (
                  <Link
                    key={item.name}
                    to={item.scrollTo}
                    smooth={true}
                    duration={500}
                    onClick={toggleMenu}
                    className={({ isActive }) =>
                      `block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                        isActive || location.pathname === item.href ? 'text-yellow-300' : 'text-white hover:text-yellow-300 hover:bg-gray-800'
                      } animate-fadeIn delay-100`
                    }
                    activeClass="text-yellow-300"
                    spy={true}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <NavLink
                    key={item.name}
                    to={item.href}
                    onClick={toggleMenu}
                    className={({ isActive }) =>
                      `block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                        isActive ? 'text-yellow-300' : 'text-white hover:text-yellow-300 hover:bg-gray-800'
                      } animate-fadeIn delay-100`
                    }
                  >
                    {item.name}
                  </NavLink>
                )
              ))}
              {/* Join Now Button in Mobile Menu */}
              <button
                onClick={() => {
                  toggleMenu();
                  toggleModal();
                }}
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium bg-yellow-400 text-gray-900 hover:bg-yellow-300 transition-all duration-300 animate-fadeIn delay-100"
              >
                Join Now
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Join Now Modal */}
      <JoinNowModal isOpen={isModalOpen} onClose={toggleModal} />
    </>
  );
};

export default Navbar;