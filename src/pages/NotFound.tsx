import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-6">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#e58a43]/5 rounded-full blur-[150px] pointer-events-none"></div>
      
      <h1 className="text-gray-950 font-black text-[8rem] md:text-[12rem] leading-none tracking-tighter z-10 relative">
        404
      </h1>
      <h2 className="text-gray-800 font-bold text-[2rem] md:text-[3rem] mt-4 mb-3 z-10 relative text-center tracking-tight">
        Page Not Found
      </h2>
      <p className="text-gray-600 font-medium text-[16px] md:text-[18px] max-w-md text-center mb-10 z-10 relative leading-relaxed">
        The premium catering experience you are looking for doesn't exist or has been moved. Let's get you back to the feast.
      </p>
      
      <Link 
        to="/" 
        className="z-10 relative bg-[#e58a43] hover:bg-[#d67b38] border border-black/5 text-white rounded-full px-8 py-4 flex items-center gap-3 font-bold transition-all shadow-md group"
      >
        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
        Back to Home
      </Link>
    </div>
  );
}
