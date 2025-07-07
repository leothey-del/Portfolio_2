import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(!toggle);
  };

  const navItems = [
    { name: 'Home', path: 'home' },
    { name: 'About', path: 'about' },
    { name: 'Skills', path: 'skills' },
    { name: 'Projects', path: 'projects' },
    { name: 'Contact', path: 'contact' },
  ];

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-gradient-to-br from-[#0f2027] via-[#2c5364] to-[#232526] text-gray-300 z-10">
      <div>
        <ScrollLink
          to="home"
          smooth={true}
          duration={500}
          offset={-80}
          className="text-2xl md:text-3xl font-bold drop-shadow-2xl cursor-pointer"
          activeClass="text-blue-400 font-bold capitalize"
          spy={true}
        >
          &lt;ItsLeo<span className="text-[#19a7ce] font-bold">/</span>&gt;
        </ScrollLink>
      </div>
      {/* Desktop Menu */}
      <ul className="hidden md:flex nav-menu space-x-8">
        {navItems.map(({ name, path }, index) => (
          <li key={index}>
            <ScrollLink
              to={path}
              smooth={true}
              duration={500}
              offset={-80}
              className="capitalize hover:text-blue-400 transition cursor-pointer"
              activeClass="text-blue-400 font-bold capitalize"
              spy={true}
            >
              {name}
            </ScrollLink>
          </li>
        ))}
      </ul>
      {/* Hamburger */}
      <div className="md:hidden z-10" onClick={handleClick}>
        {toggle ? <FaTimes /> : <FaBars />}
      </div>
      {/* Mobile Menu */}
      <ul
        className={
          toggle
            ? 'absolute top-0 left-0 w-full h-screen bg-[#08192f] flex flex-col justify-center items-center'
            : 'hidden'
        }
      >
        {navItems.map(({ name, path }, index) => (
          <li key={index} className="py-6 text-4xl">
            <ScrollLink
              to={path}
              smooth={true}
              duration={500}
              offset={-80}
              onClick={handleClick}
              className="capitalize hover:text-blue-400 transition cursor-pointer"
              activeClass="text-blue-400 font-bold capitalize"
              spy={true}
            >
              {name}
            </ScrollLink>
          </li>
        ))}
      </ul>
      {/* Social Icons */}
      <div className="hidden md:flex fixed flex-col top-[35%] left-0">
        <ul>
          {/* Social icons removed as per the request */}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
