import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import JoinNowModal from "./JoinNowModal";
import Logo from "../assets/GymWala.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Workouts", href: "/workouts" },
    { name: "Pricing", href: "/pricing" },
    { name: "Trainers", href: "/trainers" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    document.body.style.overflow = 'unset';
  }, [location.pathname]);

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-500 ${
          isScrolled && !isOpen
            ? "py-3 bg-obsidian/95 backdrop-blur-xl border-b border-primary/20 shadow-[0_10px_40px_rgba(0,0,0,0.5)]" 
            : isOpen 
              ? "py-3 bg-obsidian"
              : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-50">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <NavLink
                to="/"
                className="text-2xl font-black tracking-tighter flex items-center group"
              >
                <img src={Logo} className="w-[50px] transition-transform duration-500 group-hover:scale-110" alt="Logo" />
                <div className="ml-2 flex flex-col leading-none -space-y-1">
                  <span className="text-primary text-xl uppercase italic">Gym</span>
                  <span className="text-white text-lg font-bold tracking-widest uppercase">Wala</span>
                </div>
              </NavLink>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-2">
              <div className="flex items-center bg-white/5 rounded-full px-2 py-1 border border-white/5">
                {navItems.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.href}
                    className={({ isActive }) =>
                      `px-5 py-2 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 ${
                        isActive
                          ? "bg-primary text-obsidian shadow-[0_0_20px_rgba(204,255,0,0.4)]"
                          : "text-white/70 hover:text-white"
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
              
              <button
                onClick={toggleModal}
                className="ml-4 px-7 py-2.5 bg-primary text-obsidian rounded-full font-black text-sm uppercase tracking-widest hover:bg-primary-dark hover:scale-105 transition-all duration-300 shadow-[0_4px_15px_rgba(204,255,0,0.2)]"
              >
                Join
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className={`p-2.5 rounded-xl transition-all duration-300 border ${
                  isOpen ? "bg-primary text-obsidian border-primary" : "text-white bg-white/5 border-white/10"
                }`}
              >
                {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
              </button>
            </div>
          </div>
        </div>

        <div
          className={`fixed inset-0 bg-obsidian z-40 transition-all duration-700 ease-in-out transform ${
            isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
          } md:hidden flex flex-col items-center justify-center p-8 space-y-8`}
        >
          {navItems.map((item, index) => (
            <NavLink
              key={item.name}
              to={item.href}
              className={({ isActive }) =>
                `text-4xl font-black uppercase italic tracking-tighter transition-all duration-500 ${
                isActive ? "text-primary scale-110 shadow-primary" : "text-white hover:text-primary-light"
                } ${isOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`
              }
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {item.name}
            </NavLink>
          ))}
          <button
            onClick={() => {
              toggleMenu();
              toggleModal();
            }}
            className={`px-12 py-4 bg-primary text-obsidian rounded-full font-black text-xl uppercase tracking-widest transition-all duration-700 ${
              isOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
            style={{ transitionDelay: `${navItems.length * 100}ms` }}
          >
            Join Now
          </button>
        </div>
      </nav>

      {/* Join Now Modal */}
      <JoinNowModal isOpen={isModalOpen} onClose={toggleModal} />
    </>
  );
};

export default Navbar;

