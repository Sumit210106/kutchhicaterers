// import { useState } from 'react';
// import { Menu, X } from 'lucide-react';
import { NavLink, Link } from 'react-router-dom';

export default function Navbar() {
  // const [isOpen, setIsOpen] = useState(false);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "bg-[#7A1A1A] text-white px-6 py-[10px] rounded-[2rem] text-[15px] font-semibold tracking-wide hover:opacity-90 transition-opacity whitespace-nowrap shadow-sm"
      : "border border-white/20 text-[#f4f4f4] px-6 py-[10px] rounded-[2rem] text-[15px] font-medium hover:bg-white/10 hover:border-white/40 transition-all whitespace-nowrap bg-black/10 backdrop-blur-md";

  // const mobileNavLinkClass = ({ isActive }: { isActive: boolean }) =>
  //   isActive
  //     ? "bg-[#7A1A1A] text-white px-4 py-2.5 rounded-xl text-[17px] font-semibold transition-colors"
  //     : "text-white/80 font-medium text-[17px] px-4 py-2.5 hover:bg-white/5 rounded-xl transition-colors";

  return (
    <nav className="absolute top-0 w-full z-50 p-4 md:p-6 lg:p-8 flex justify-between items-center pointer-events-none">
      
      {/* Brand Logo / Text */}
      <div className="flex-1 flex justify-start pointer-events-auto">
        <Link to="/" className="flex items-center justify-center bg-white border border-white/10 rounded-4xl px-4 py-1.5 transition-colors">
          <img src="/logo.png" alt="Kutchhi Caterers Logo" className="h-15 md:h-20 w-auto object-contain" />
        </Link>
      </div>

      {/* Desktop Middle Nav */}
      <div className="hidden md:flex flex-1 justify-center items-center gap-3 pointer-events-auto">
        <NavLink to="/" className={navLinkClass}>
          Home
        </NavLink>
        <NavLink to="/about" className={navLinkClass}>
          About Us
        </NavLink>
        <NavLink to="/services" className={navLinkClass}>
          Services
        </NavLink>
      </div>

      {/* Desktop Right CTA */}
      <div className="hidden md:flex flex-1 justify-end items-center gap-3 pointer-events-auto">
        <a href="/contact" className="border border-white/20 text-[#f4f4f4] px-6 py-[10px] rounded-[2rem] text-[15px] font-medium hover:bg-white/10 hover:border-white/40 transition-all whitespace-nowrap bg-black/10 backdrop-blur-md hover:bg-[#7A1A1A] hover:border-transparent">
          Contact Us
        </a>
      </div>

      {/* Mobile Toggle */}
      {/* <div className="md:hidden flex pointer-events-auto">
        <div className="flex items-center gap-4 bg-black/40 backdrop-blur-[16px] border border-white/10 rounded-[2.5rem] px-3 py-1.5 shadow-xl">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-[#7A1A1A] hover:text-white transition-colors p-1"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
          </button>
        </div>
      </div> */}

      {/* Mobile Menu Dropdown */}
      {/* {isOpen && (
        <div className="md:hidden absolute top-20 right-4 w-60 bg-[#0a0f0c]/95 backdrop-blur-xl border border-white/10 rounded-[2rem] p-4 flex flex-col gap-2 pointer-events-auto shadow-2xl">
          <NavLink to="/" onClick={() => setIsOpen(false)} className={mobileNavLinkClass}>Home</NavLink>
          <NavLink to="/about" onClick={() => setIsOpen(false)} className={mobileNavLinkClass}>About Us</NavLink>
          <NavLink to="/services" onClick={() => setIsOpen(false)} className={mobileNavLinkClass}>Services</NavLink>
          <div className="h-px w-full bg-white/10 my-1"></div>
          <a href="#contact" className="text-white/80 font-medium text-[17px] px-4 py-2 hover:bg-white/5 rounded-xl transition-colors">Contact Us</a>
          <a href="#quote" className="text-[#7A1A1A] font-bold text-[17px] px-4 py-2 hover:bg-white/5 rounded-xl transition-colors mt-1">Get Quote</a>
        </div>
      )} */}
    </nav>
  );
}
