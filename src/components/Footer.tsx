import { Instagram, Twitter, Mail, Info } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-50 p-3 mb-20 md:mb-0 flex flex-col items-center">
      
      {/* Massive Dark Rounded Container */}
      <div className="relative w-full max-w-[1920px] rounded-4xl overflow-hidden bg-black flex flex-col justify-end min-h-[550px] md:min-h-[700px] ">
        
        {/* Background Overlay */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center opactiy-[0.85]"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=2070&q=80")'  }} 
        />
        <div className="absolute inset-0 bg-black/50 z-0 pointer-events-none" />

        {/* Top Half: Newsletter Content */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center pt-24 pb-12 px-6">
          <h2 className="text-white font-black text-[3.5rem] sm:text-[5rem] md:text-[6.5rem] lg:text-[7.5rem] leading-[0.85] tracking-[-0.05em] text-center  mb-8">
            Join the community!
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-2xl mb-4 relative z-20">
            <input 
              type="email" 
              placeholder="email@kutchhicaterers.com" 
              className="flex-1 bg-white text-gray-900 px-6 py-[18px] md:py-[20px] rounded-full outline-none font-medium text-[16px] md:text-[18px] placeholder:text-gray-400  focus:ring-4 focus:ring-white/20 transition-all border border-gray-100"
            />
            <button className="bg-[#e58a43] hover:bg-[#d67129] text-white px-10 py-[18px] md:py-[20px] rounded-full font-bold text-[16px] md:text-[18px] transition-colors  whitespace-nowrap">
              Sign Up
            </button>
          </div>
          <p className="text-white/80 font-medium text-[13px] md:text-[15px]  text-center">
            No spam. Just weekly delicious news from the catering world.
          </p>
        </div>

        {/* Bottom Half: Frosted Glass Panel */}
        <div className="relative z-10 w-full bg-gradient-to-t from-black/90 via-black/80 to-transparent pt-32 pb-12 px-6 flex flex-col items-center justify-end">
          
          {/* Social Icons Row */}
          <div className="flex gap-4 mb-8">
            <a href="#" className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/20 bg-white/5 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-black transition-all">
              <Instagram size={20} strokeWidth={1.5} />
            </a>
            <a href="#" className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/20 bg-white/5 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-black transition-all">
              <Info size={20} strokeWidth={1.5} />
            </a>
            <a href="#" className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/20 bg-white/5 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-black transition-all">
              <Twitter size={20} strokeWidth={1.5} />
            </a>
            <a href="#" className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/20 bg-white/5 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-black transition-all">
              <Mail size={20} strokeWidth={1.5} />
            </a>
          </div>

          {/* Faint Divider */}
          <div className="w-full max-w-4xl h-px bg-white/10 mb-8 rounded-full "></div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 text-[14px] md:text-[16px] font-bold tracking-tight text-white pb-6 md:pb-2">
            <Link to="/" className="text-white hover:text-[#e58a43] transition-colors">Privacy Policy</Link>
            <Link to="/" className="text-white hover:text-[#e58a43] transition-colors">Terms</Link>
            <Link to="/" className="text-[#e58a43] hover:text-[#d67b38] transition-colors">Homepage</Link>
            <Link to="/about" className="text-white hover:text-[#e58a43] transition-colors">About Us</Link>
            <Link to="/services" className="text-white hover:text-[#e58a43] transition-colors">Services</Link>
          </div>
        </div>

        {/* Bottom Left Cutout Tab for Copyright */}
       {/* Bottom Left Cutout Tab - REFINED */}
<div className="absolute bottom-0 left-0 z-30">
  
  <div className="relative bg-gray-50 rounded-tr-[32px] pt-[14px] pr-[14px]">
    
    {/* Top Curve */}
    <svg 
      className="absolute bottom-full left-0 w-[28px] h-[28px] text-gray-50"
      viewBox="0 0 32 32"
      fill="currentColor"
    >
      <path d="M0 32V0C0 17.673 14.327 32 32 32H0Z" />
    </svg>

    {/* Right Curve */}
    <svg 
      className="absolute bottom-0 left-full w-[28px] h-[28px] text-gray-50"
      viewBox="0 0 32 32"
      fill="currentColor"
    >
      <path d="M0 32V0C0 17.673 14.327 32 32 32H0Z" />
    </svg>

    {/* BUTTON */}
    <div className="
      bg-white text-gray-900
      px-[22px] py-[12px] md:px-[28px] md:py-[14px]
      rounded-full 
      rounded-bl-4xl
      border border-black/15
      hover:bg-gray-100 transition
      flex items-center justify-center
    ">
      <span className="font-medium text-[12.5px] md:text-[14.5px] tracking-[-0.02em]">
        Copyright © 2026 Kutchhi Caterers
      </span>
    </div>

  </div>
</div>



      </div>
    </footer>
  );
}
