import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { servicesData } from "../data";
import { useEffect, useRef, useState } from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  gridSpan?: string;
  isDesktop?: boolean;
}

const ServiceCard = ({ title, description, image, link, gridSpan, isDesktop }: ServiceCardProps) => {
  return (
    <Link 
      to={link} 
      className={`relative ${isDesktop ? gridSpan : 'w-[85vw] h-[450px] shrink-0'} rounded-[2.5rem] md:rounded-4xl overflow-hidden group cursor-pointer bg-black block`}
    >
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-80"
        style={{ backgroundImage: `url("${image}")` }}
      />
      <div className="absolute top-6 right-6 md:top-8 md:right-8 w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center border border-white/40 text-white group-hover:bg-white group-hover:text-black group-hover:border-white shadow-lg transition-all duration-300 z-10">
        <ArrowRight strokeWidth={1.5} size={24} className="group-hover:-rotate-45 transition-transform duration-300" />
      </div>

      <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 transition-all duration-500 group-hover:bg-white/10 group-hover:backdrop-blur-xl border border-transparent group-hover:border-white/10 p-6 md:p-8 rounded-[1.8rem] md:rounded-[2rem]">
        <h3 className="text-white font-bold text-[1.8rem] md:text-[3rem] tracking-tight leading-none drop-shadow-md group-hover:drop-shadow-none transition-all duration-300">
          {title}
        </h3>
        <div className={`grid ${isDesktop ? 'grid-rows-[0fr] group-hover:grid-rows-[1fr]' : 'grid-rows-[1fr]'} transition-all duration-500 ease-in-out`}>
          <div className="overflow-hidden">
            <p className={`text-white/80 font-medium text-[14px] md:text-[15px] max-w-2xl leading-relaxed mt-3 ${isDesktop ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'} transition-opacity duration-300 delay-100`}>
              {description}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default function FeaturedServices() {
  const [activeSlide, setActiveSlide] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel || window.innerWidth >= 768) return;

    let isPaused = false;
    const interval = setInterval(() => {
      if (!isPaused) {
        const cards = carousel.querySelectorAll('.service-card-wrapper');
        if (cards.length === 0) return;
        
        const cardWidth = (cards[0] as HTMLElement).offsetWidth + 24;
        const maxScroll = carousel.scrollWidth - carousel.clientWidth;

        if (carousel.scrollLeft >= maxScroll - 5) {
          carousel.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          carousel.scrollBy({ left: cardWidth, behavior: 'smooth' });
        }
      }
    }, 4000);

    const handleScroll = () => {
      if (!carousel) return;
      const cards = carousel.querySelectorAll('.service-card-wrapper');
      if (cards.length === 0) return;
      const cardWidth = (cards[0] as HTMLElement).offsetWidth + 24;
      const newActiveSlide = Math.round(carousel.scrollLeft / cardWidth);
      setActiveSlide(newActiveSlide);
    };

    const handleTouchStart = () => { isPaused = true; };
    const handleTouchEnd = () => { 
      setTimeout(() => { isPaused = false; }, 2000); 
    };

    carousel.addEventListener('scroll', handleScroll);
    carousel.addEventListener('touchstart', handleTouchStart);
    carousel.addEventListener('touchend', handleTouchEnd);

    return () => {
      clearInterval(interval);
      carousel.removeEventListener('scroll', handleScroll);
      carousel.removeEventListener('touchstart', handleTouchStart);
      carousel.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  return (
    <section className="bg-gray-50 w-full px-0 md:px-6 lg:px-8 py-16 md:py-24 overflow-hidden relative">
      <div className="max-w-[1920px] mx-auto flex flex-col gap-10 md:gap-16 lg:gap-20">
        
        {/* Header Section */}
        <div className="flex flex-col-reverse md:flex-row justify-between items-start md:items-end gap-8 px-4 md:px-0">
          <div className="flex flex-col gap-4 max-w-[400px]">
            <p className="text-gray-600 text-[15px] md:text-[17px] font-medium leading-[1.6]">
              The finest of India's cuisine is as rich and diverse as its civilization. It is an art form passed down through generations.
            </p>
            <Link to="/services" className="text-[#e58a43] hover:text-[#d67b38] font-bold flex items-center gap-2 group transition-colors">
              View All 8 Services <ArrowRight size={18} strokeWidth={2.5} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <h2 className="text-gray-950 font-black text-[3.2rem] sm:text-[5rem] md:text-[7.5rem] leading-[0.8] tracking-[-0.05em] text-left md:text-right">
            Our Services
          </h2>
        </div>

        {/* Desktop Bento Grid */}
        <div className="hidden md:grid grid-cols-12 gap-5 w-full auto-rows-[380px]">
          {servicesData.map((service, index) => (
            <ServiceCard key={index} {...service} isDesktop />
          ))}
        </div>

        {/* Unique Mobile Carousel - perspective scroll effect with Autoplay */}
        <div className="md:hidden relative group/carousel">
          <div 
            ref={carouselRef}
            className="flex overflow-x-auto gap-6 px-6 pb-14 snap-x snap-mandatory no-scrollbar scroll-smooth"
            style={{ scrollbarWidth: 'none' }}
          >
            {servicesData.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ 
                  opacity: 1, 
                   scale: 1, 
                  transition: { duration: 0.5, ease: "easeOut" }
                }}
                viewport={{ once: false, margin: "-10%" }}
                className="snap-center shrink-0 service-card-wrapper"
              >
                <ServiceCard {...service} isDesktop={false} />
              </motion.div>
            ))}
          </div>
          
          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-[-20px]">
            {servicesData.map((_, index) => (
              <div 
                key={index} 
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  activeSlide === index ? 'bg-[#e58a43] w-4' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Subtle Instruction */}

      </div>
    </section>
  );
}
