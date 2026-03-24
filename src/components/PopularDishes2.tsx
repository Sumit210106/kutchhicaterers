import { ArrowRight, Star } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { popularDishesData } from '../data';

export default function PopularDishes2() {
  const navigate = useNavigate();
  return (
    <section className="bg-gray-50 w-full px-3 sm:px-4 md:px-5 lg:px-6 pb-16 md:pb-24 flex flex-col items-center">
      <div className="w-full max-w-[1920px] rounded-4xl overflow-hidden bg-black p-6 md:p-12 lg:p-16 flex flex-col gap-10 shadow-2xl">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 z-10 w-full pl-2">
          <div>
            <h4 className="text-[#e58a43] font-bold tracking-widest uppercase text-sm mb-2 flex items-center gap-2">
              <Star size={16} fill="currentColor" /> Offer Zone
            </h4>
            <h2 className="text-white font-black text-[3rem] md:text-[5rem] lg:text-[6.5rem] leading-[0.85] tracking-[-0.04em]">
              popular dishes
            </h2>
          </div>
          <Link to="/menu" className="bg-white text-gray-950 px-[24px] py-[14px] md:px-[36px] md:py-[18px] rounded-full flex items-center justify-center border border-transparent hover:bg-gray-200 transition-colors pointer-events-auto shadow-lg">
            <span className="font-semibold text-[16px] md:text-[18px] tracking-[-0.01em] leading-none">View Full Menu</span>
          </Link>
        </div>

        {/* Premium Expanding Accordion Grid */}
        <div className="flex flex-col md:flex-row h-[800px] md:h-[600px] lg:h-[700px] gap-3 md:gap-4 w-full">
          {popularDishesData.map((dish, i) => (
            <div 
              key={i} 
              onClick={() => navigate('/menu/' + dish.name.toLowerCase().replace(' ', '-'))}
              className="relative flex-1 rounded-4xl overflow-hidden group hover:flex-3 lg:hover:flex-4 transition-[flex] duration-700 ease-out cursor-pointer bg-gray-900 border border-white/10"
            >
              {/* Image Background */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105 opacity-60 group-hover:opacity-100"
                style={{ backgroundImage: `url(${dish.img})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/20 group-hover:from-black/80 transition-colors duration-500 z-0"></div>

              {/* Top Accent (Only for featured item) */}
              {dish.featured && (
                <div className="absolute top-4 md:top-6 left-4 md:left-6 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                  <span className="bg-[#e58a43] text-white px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase shadow-md">
                    Bestseller
                  </span>
                </div>
              )}

              {/* Vertical Title (Hidden on hover desktop, always horizontal mobile) */}
              <div className="absolute inset-0 flex items-end justify-center pb-8 md:pb-12 z-10 md:group-hover:opacity-0 transition-opacity duration-300">
                <h3 className="text-white font-bold text-[1.5rem] md:text-[2rem] tracking-tight leading-none md:-rotate-90 md:-translate-y-24 whitespace-nowrap drop-shadow-lg">
                  {dish.name}
                </h3>
              </div>

              {/* Hover Content Frame (Desktop expanding panel) */}
              <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 right-4 md:right-6 border border-white/20 bg-black/40 backdrop-blur-[24px] rounded-[1.5rem] md:rounded-[2rem] p-4 md:p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 z-20 flex flex-col justify-end translate-y-4 group-hover:translate-y-0">
                <div className="flex justify-between items-end gap-4">
                  <div className="flex flex-col gap-2">
                    <h3 className="text-white font-black text-[1.75rem] md:text-[2.5rem] lg:text-[3.5rem] tracking-[-0.03em] leading-none drop-shadow-md">
                      {dish.name}
                    </h3>
                    <p className="text-white/80 font-medium text-[13px] md:text-[15px] lg:text-[17px] max-w-sm leading-snug">
                      {dish.desc}
                    </p>
                  </div>
                  
                  {/* Glass Arrow Button */}
                  <div className="shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-full border border-white/30 bg-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black hover:scale-105 hover:-rotate-45 transition-all duration-300 shadow-xl">
                    <ArrowRight strokeWidth={2} className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
