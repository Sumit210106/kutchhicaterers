import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function FeaturedServices() {
  return (
    <section className="bg-gray-50 w-full px-4 md:px-6 lg:px-8 py-16 md:py-24">
      <div className="max-w-[1920px] mx-auto flex flex-col gap-12 md:gap-16 lg:gap-20">
        
        {/* Header Section */}
        <div className="flex flex-col-reverse md:flex-row justify-between items-start md:items-end gap-8">
          <div className="flex flex-col gap-4 max-w-[400px]">
            <p className="text-gray-600 text-[15px] md:text-[17px] font-medium leading-[1.6]">
              The finest of India's cuisine is as rich and diverse as its civilization. It is an art form passed down through generations.
            </p>
            <Link to="/services" className="text-[#e58a43] hover:text-[#d67b38] font-bold flex items-center gap-2 group transition-colors">
              View All 8 Services <ArrowRight size={18} strokeWidth={2.5} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <h2 className="text-gray-950 font-black text-[4rem] sm:text-[5rem] md:text-[7.5rem] leading-[0.8] tracking-[-0.05em] text-right">
            Our Services
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5 w-full auto-rows-[300px] md:auto-rows-[380px]">
          
          {/* Card 1: Top Left - Wide */}
          <Link to="/services" className="relative col-span-1 md:col-span-8 rounded-4xl overflow-hidden group cursor-pointer bg-black block">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-80"
              style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80")' }}
            />
            <div className="absolute top-6 right-6 md:top-8 md:right-8 w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center border border-white/40 text-white group-hover:bg-white group-hover:text-black group-hover:border-white shadow-lg transition-all duration-300 z-10">
              <ArrowRight strokeWidth={1.5} size={24} className="group-hover:-rotate-45 transition-transform duration-300" />
            </div>

            <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 transition-all duration-300 group-hover:bg-[#ffffff]/10 group-hover:backdrop-blur-[24px] border border-transparent group-hover:border-white/10 p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem]">
              <h3 className="text-white font-bold text-[2rem] md:text-[3rem] tracking-tight leading-none drop-shadow-md group-hover:drop-shadow-none transition-all duration-300">
                Wedding Services
              </h3>
              <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-in-out">
                <div className="overflow-hidden">
                  <p className="text-white/80 font-medium text-[13px] md:text-[15px] max-w-2xl leading-relaxed mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    Make your special day truly memorable with our comprehensive wedding catering. We go places others wouldn't to ensure your feast is perfect.
                  </p>
                </div>
              </div>
            </div>
          </Link>

          {/* Card 2: Top Right - Square-ish */}
          <Link to="/services" className="relative col-span-1 md:col-span-4 rounded-4xl overflow-hidden group cursor-pointer bg-black block">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-70"
              style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=80")' }}
            />
            <div className="absolute top-6 right-6 md:top-8 md:right-8 w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center border border-white/40 text-white group-hover:bg-white group-hover:text-black group-hover:border-white shadow-lg transition-all duration-300 z-10">
              <ArrowRight strokeWidth={1.5} size={24} className="group-hover:-rotate-45 transition-transform duration-300" />
            </div>
            
            <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 transition-all duration-300 group-hover:bg-[#ffffff]/10 group-hover:backdrop-blur-[24px] border border-transparent group-hover:border-white/10 p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem]">
              <h3 className="text-white font-bold text-[2rem] md:text-[3rem] tracking-tight leading-none drop-shadow-md group-hover:drop-shadow-none transition-all duration-300">
                Corporate
              </h3>
              <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-in-out">
                <div className="overflow-hidden">
                  <p className="text-white/80 font-medium text-[13px] md:text-[15px] leading-relaxed mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    Elevate your corporate events with premium catering designed to impress clients and colleagues.
                  </p>
                </div>
              </div>
            </div>
          </Link>

          {/* Card 3: Bottom Left - Square-ish */}
          <Link to="/services" className="relative col-span-1 md:col-span-4 rounded-4xl overflow-hidden group cursor-pointer bg-black block">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-80"
              style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80")' }}
            />
            
            <div className="absolute top-6 right-6 md:top-8 md:right-8 w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center border border-white/40 text-white group-hover:bg-white group-hover:text-black group-hover:border-white shadow-lg transition-all duration-300 z-10">
              <ArrowRight strokeWidth={1.5} size={24} className="group-hover:-rotate-45 transition-transform duration-300" />
            </div>

            <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 transition-all duration-300 group-hover:bg-[#ffffff]/10 group-hover:backdrop-blur-[24px] border border-transparent group-hover:border-white/10 p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem]">
              <h3 className="text-white font-bold text-[2rem] md:text-[3rem] tracking-tight leading-none drop-shadow-md group-hover:drop-shadow-none transition-all duration-300">
                Cocktail
              </h3>
              <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-in-out">
                <div className="overflow-hidden">
                  <p className="text-white/80 font-medium text-[13px] md:text-[15px] leading-relaxed mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    Exquisite drinks and bite-sized delicacies linking fun and taste perfectly.
                  </p>
                </div>
              </div>
            </div>
          </Link>

          {/* Card 4: Bottom Right - Wide */}
          <Link to="/services" className="relative col-span-1 md:col-span-8 rounded-4xl overflow-hidden group cursor-pointer bg-black block">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-70"
              style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1530103862676-de889243da87?auto=format&fit=crop&q=80")' }}
            />
            
            <div className="absolute top-6 right-6 md:top-8 md:right-8 w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center border border-white/40 text-white group-hover:bg-white group-hover:text-black group-hover:border-white shadow-lg transition-all duration-300 z-10">
              <ArrowRight strokeWidth={1.5} size={24} className="group-hover:-rotate-45 transition-transform duration-300" />
            </div>

            <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 transition-all duration-300 group-hover:bg-[#ffffff]/10 group-hover:backdrop-blur-[24px] border border-transparent group-hover:border-white/10 p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem]">
              <h3 className="text-white font-bold text-[2rem] md:text-[3.5rem] tracking-tight leading-none drop-shadow-md group-hover:drop-shadow-none transition-all duration-300">
                Buffet Catering
              </h3>
              <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-in-out">
                <div className="overflow-hidden">
                  <p className="text-white/80 font-medium text-[13px] md:text-[15px] max-w-2xl leading-relaxed mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    A grand spread of authentic Indian delicacies, offering a diverse and rich culinary experience for all your guests.
                  </p>
                </div>
              </div>
            </div>
          </Link>

        </div>
      </div>
    </section>
  );
}
