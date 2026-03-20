import { useState } from 'react';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="hidden md:flex absolute top-0 w-full z-50 p-4 md:p-6 lg:p-8 justify-between items-start pointer-events-none">
      
      {/* Desktop Left Nav */}
      <div className="hidden md:flex items-center gap-3 pointer-events-auto">
        <Link to="/" className="bg-white text-black px-6 py-[10px] rounded-[2rem] text-[15px] font-semibold tracking-wide hover:opacity-90 transition-opacity whitespace-nowrap shadow-sm">
          Home
        </Link>
        <Link to="/about" className="border border-white/20 text-[#f4f4f4] px-6 py-[10px] rounded-[2rem] text-[15px] font-medium hover:bg-white/10 hover:border-white/40 transition-all whitespace-nowrap bg-black/10 backdrop-blur-md">
          About Us
        </Link>
        <Link to="/services" className="border border-white/20 text-[#f4f4f4] px-6 py-[10px] rounded-[2rem] text-[15px] font-medium hover:bg-white/10 hover:border-white/40 transition-all whitespace-nowrap bg-black/10 backdrop-blur-md">
          Services
        </Link>
      </div>

      {/* Mobile Right Nav */}
      <div className="md:hidden flex flex-1 justify-end pointer-events-auto">
        <div className="flex items-center gap-4 bg-black/40 backdrop-blur-[16px] border border-white/10 rounded-[2.5rem] pl-5 pr-2 py-1.5 shadow-xl">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-[#e58a43] hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
          </button>
          <span className="text-white font-[600] text-[17px] pr-2 tracking-wide pb-0.5">kutchhicaterers</span>
        </div>
      </div>

      {/* Desktop Right Nav; keep basic links for non-routed pages */}
      <div className="hidden md:flex items-center gap-3 pointer-events-auto">
        <a href="#contact" className="border border-white/20 text-[#f4f4f4] px-6 py-[10px] rounded-[2rem] text-[15px] font-medium hover:bg-white/10 hover:border-white/40 transition-all whitespace-nowrap bg-black/10 backdrop-blur-md">
          Contact Us
        </a>
        <a href="#quote" className="border border-white/20 text-[#e58a43] px-6 py-[10px] rounded-[2rem] text-[15px] font-bold hover:bg-white/10 hover:border-white/40 transition-all whitespace-nowrap bg-black/10 backdrop-blur-md">
          Get Quote
        </a>
        <button className="border border-white/20 text-[#e58a43] rounded-full hover:bg-white/10 hover:border-white/40 transition-all flex items-center justify-center p-[10px] h-[44px] w-[44px] bg-black/10 backdrop-blur-md shadow-sm">
          <ShoppingCart size={18} strokeWidth={2} />
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-20 right-4 w-60 bg-[#0a0f0c]/95 backdrop-blur-xl border border-white/10 rounded-[2rem] p-6 flex flex-col gap-4 pointer-events-auto shadow-2xl">
          <Link to="/" onClick={() => setIsOpen(false)} className="text-white font-semibold text-[17px] border-b border-white/5 pb-2">Home</Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="text-white/80 font-medium text-[17px] border-b border-white/5 pb-2">About Us</Link>
          <Link to="/services" onClick={() => setIsOpen(false)} className="text-white/80 font-medium text-[17px] border-b border-white/5 pb-2">Services</Link>
          <a href="#contact" className="text-white/80 font-medium text-[17px] border-b border-white/5 pb-2">Contact Us</a>
          <a href="#quote" className="text-[#e58a43] font-bold text-[17px] pt-1">Get Quote</a>
        </div>
      )}
    </nav>
  );
}
