import React from "react";
import { Send, MapPin, Phone, Clock } from "lucide-react";

export default function ContactForm() {
  return (
    <section className="bg-gray-50 w-full px-3 sm:px-4 md:px-5 lg:px-6 pb-16 md:pb-24 flex flex-col items-center">
      <div className="w-full max-w-[1920px] rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden bg-white border border-black/5 p-4 md:p-8 lg:p-12 flex flex-col gap-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8">
          
          {/* Left Side: Image / Value Prop */}
          <div className="relative rounded-[2rem] md:rounded-[3rem] overflow-hidden bg-black p-8 md:p-12 flex flex-col justify-end min-h-[400px] lg:min-h-[600px] border border-black/10">
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-70"
              style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80")' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
            
            <div className="relative z-10">
              <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white/90 font-bold text-sm tracking-wide mb-4 border border-white/20">
                Book Us
              </span>
              <h2 className="text-white font-black text-[3rem] md:text-[5rem] lg:text-[6.5rem] leading-[0.85] tracking-[-0.04em] mb-4">
                your dream <br/> event
              </h2>
              <p className="text-white/80 font-medium text-[15px] md:text-[17px] max-w-md leading-relaxed">
                Where you want our services, we deliver. Pure Indian cuisine that guarantees satisfaction. Fill out the form and our expert chefs will take care of the rest.
              </p>
            </div>
          </div>

          {/* Right Side: Form Bento */}
          <div className="bg-gray-50 rounded-[2rem] md:rounded-[3rem] p-6 md:p-10 lg:p-14 flex flex-col gap-8 justify-center border border-black/5">
            <h3 className="text-gray-950 font-bold text-[2rem] md:text-[3rem] tracking-tight leading-none">
              Get Free Quote
            </h3>
            
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <label className="text-gray-500 font-bold text-sm ml-4 uppercase tracking-wide">Enter your city</label>
                <input 
                  type="text" 
                  placeholder="Mumbai, Maharashtra" 
                  className="w-full bg-white border border-gray-200 rounded-full px-6 py-4 outline-none focus:border-gray-400 focus:ring-4 focus:ring-gray-100 transition-all text-gray-950 font-medium text-lg placeholder:text-gray-300 shadow-sm"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label className="text-gray-500 font-bold text-sm ml-4 uppercase tracking-wide">Contact No.</label>
                  <input 
                    type="tel" 
                    placeholder="+91 989 213 4834" 
                    className="w-full bg-white border border-gray-200 rounded-full px-6 py-4 outline-none focus:border-gray-400 focus:ring-4 focus:ring-gray-100 transition-all text-gray-950 font-medium text-lg placeholder:text-gray-300 shadow-sm"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-gray-500 font-bold text-sm ml-4 uppercase tracking-wide">Event Date</label>
                  <input 
                    type="date" 
                    className="w-full bg-white border border-gray-200 rounded-full px-6 py-4 outline-none focus:border-gray-400 focus:ring-4 focus:ring-gray-100 transition-all text-gray-950 font-medium text-[17px] shadow-sm appearance-none"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-gray-500 font-bold text-sm ml-4 uppercase tracking-wide">Enter Your Email</label>
                <input 
                  type="email" 
                  placeholder="hello@example.com" 
                  className="w-full bg-white border border-gray-200 rounded-full px-6 py-4 outline-none focus:border-gray-400 focus:ring-4 focus:ring-gray-100 transition-all text-gray-950 font-medium text-lg placeholder:text-gray-300 shadow-sm"
                />
              </div>

              <button className="mt-4 bg-gray-950 hover:bg-gray-800 text-white px-8 py-5 rounded-full flex items-center justify-center gap-3 transition-colors shadow-xl group">
                <span className="font-bold text-[18px] md:text-[20px] tracking-tight">Send Request</span>
                <Send className="group-hover:translate-x-1 transition-transform" size={20} />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Small Info Bento */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-50 rounded-[1.5rem] p-6 flex flex-col items-center justify-center text-center gap-3 border border-black/5 hover:bg-gray-100 transition-colors">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-[#e58a43]">
              <MapPin size={24} />
            </div>
            <p className="text-gray-900 font-semibold text-[15px]">Plot No. 103, Laxmi Narayan Ln, Opp. Rambaug Hall, Matunga, Mumbai 400019</p>
          </div>
          <div className="bg-gray-50 rounded-[1.5rem] p-6 flex flex-col items-center justify-center text-center gap-3 border border-black/5 hover:bg-gray-100 transition-colors">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-[#e58a43]">
              <Phone size={24} />
            </div>
            <p className="text-gray-900 font-black text-2xl tracking-tighter">(+91) 9892134834</p>
          </div>
          <div className="bg-gray-50 rounded-[1.5rem] p-6 flex flex-col items-center justify-center text-center gap-3 border border-black/5 hover:bg-gray-100 transition-colors">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-[#e58a43]">
              <Clock size={24} />
            </div>
            <p className="text-gray-900 font-black text-2xl tracking-tighter">24/7 Hours</p>
            <span className="text-gray-500 font-semibold text-sm uppercase">Service Available</span>
          </div>
        </div>

      </div>
    </section>
  );
}
