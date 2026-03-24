import { ArrowRight } from "lucide-react";
import { servicesData } from "../data";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Services() {
  return (
    <div className="bg-gray-50 flex flex-col min-h-screen font-sans">

      {/* ═══════ HERO BANNER ═══════ */}
      <section className="p-3 w-full">
        <div className="relative w-full rounded-4xl overflow-hidden bg-black flex flex-col min-h-[70vh] md:min-h-[80vh]">
          {/* Background image */}
          <div
            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-60"
            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=2000&q=80")' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 z-0 pointer-events-none" />

          {/* Center text */}
          <div className="flex-1 flex flex-col items-center justify-center z-10 px-4 mt-8 md:mt-[-4rem] pointer-events-none w-full">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 0.95, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-white font-[500] text-[1.25rem] md:text-[1.8rem] lg:text-[2rem] mb-1 md:mb-2 tracking-tight"
            >
              Explore our
            </motion.h2>
            <motion.h1
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.25 }}
              className="text-white font-black text-[3.75rem] sm:text-[6rem] md:text-[10rem] leading-[0.85] tracking-[-0.05em] mb-4 md:mb-6 pointer-events-auto selection:bg-white/20 text-center"
            >
              services
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="text-[#ebebeb] text-[13px] md:text-[15px] max-w-[280px] md:max-w-[480px] text-center font-medium leading-[1.6]"
            >
              From intimate gatherings to massive corporate galas, we bring the finest culinary experiences straight to your venue.
            </motion.p>
          </div>

          {/* Glass cards – bottom left */}
          <div className="absolute bottom-[90px] left-5 md:bottom-8 md:left-8 flex gap-2.5 md:gap-4 items-end z-20">
            <div className="bg-[#ffffff]/5 backdrop-blur-[24px] border border-white/10 rounded-[1.5rem] md:rounded-[2rem] p-4 md:p-6 w-[160px] md:w-[240px]">
              <h3 className="text-white font-medium tracking-[-0.04em] text-[1.75rem] md:text-[2.5rem] mb-1.5 leading-none">
                4<span className="text-[1.25rem] md:text-[1.75rem]">+</span>
              </h3>
              <p className="text-white/70 text-[11px] md:text-[13.5px] font-medium leading-[1.5]">
                Signature catering formats designed for every occasion.
              </p>
            </div>
          </div>

          {/* SVG cutout button – bottom right */}
          <div className="absolute bottom-0 right-0 z-30">
            <div className="relative bg-gray-50 rounded-tl-[28px] md:rounded-tl-[34px] pt-[12px] pl-[12px] md:pt-[16px] md:pl-[16px]">
              <svg className="absolute bottom-full right-0 w-[20px] h-[20px] md:w-[28px] md:h-[28px] text-gray-50 pointer-events-none" viewBox="0 0 32 32" fill="currentColor">
                <path d="M32 32V0C32 17.673 17.673 32 0 32H32Z" />
              </svg>
              <svg className="absolute bottom-0 right-full w-[20px] h-[20px] md:w-[28px] md:h-[28px] text-gray-50 pointer-events-none" viewBox="0 0 32 32" fill="currentColor">
                <path d="M32 32V0C32 17.673 17.673 32 0 32H32Z" />
              </svg>
              <Link to="/contact" className="bg-white text-gray-900 px-[24px] py-[12px] md:px-[80px] md:py-[17px] rounded-full rounded-br-4xl border border-black/15 hover:bg-gray-100 transition-all pointer-events-auto block">
                <span className="font-medium text-[15px] md:text-[19px] tracking-[-0.02em] leading-none">
                  Get a Quote
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ SERVICES BENTO GRID ═══════ */}
      <section className="w-full px-3 py-10 md:py-16">
        {/* Section header (same style as FeaturedServices header) */}
        <div className="max-w-[1920px] mx-auto flex flex-col-reverse md:flex-row justify-between items-start md:items-end gap-8 mb-10 md:mb-16 px-2 md:px-0">
          <div className="flex flex-col gap-4 max-w-[400px]">
            <p className="text-gray-600 text-[15px] md:text-[17px] font-medium leading-[1.6]">
              Whether it's a royal wedding or an elegant cocktail evening, our services are crafted to perfection.
            </p>
          </div>
          <h2 className="text-gray-950 font-black text-[3.2rem] sm:text-[5rem] md:text-[7.5rem] leading-[0.8] tracking-[-0.05em] text-left md:text-right">
            All Services
          </h2>
        </div>

        {/* Bento grid – same structure as FeaturedServices desktop grid */}
        <div className="max-w-[1920px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-5 auto-rows-[380px] md:auto-rows-[420px]">
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className={service.gridSpan === "md:col-span-8" ? "md:col-span-8 col-span-1" : "md:col-span-4 col-span-1"}
            >
              <Link
                to={`/services/${service.id}`}
                className="relative w-full h-full rounded-[2.5rem] md:rounded-4xl overflow-hidden group cursor-pointer bg-black block"
              >
                {/* Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-80"
                  style={{ backgroundImage: `url("${service.image}")` }}
                />

                {/* Arrow button */}
                <div className="absolute top-6 right-6 md:top-8 md:right-8 w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center border border-white/40 text-white group-hover:bg-white group-hover:text-black group-hover:border-white shadow-lg transition-all duration-300 z-10">
                  <ArrowRight strokeWidth={1.5} size={24} className="group-hover:-rotate-45 transition-transform duration-300" />
                </div>

                {/* Glass label */}
                <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 transition-all duration-500 group-hover:bg-white/10 group-hover:backdrop-blur-xl border border-transparent group-hover:border-white/10 p-6 md:p-8 rounded-[1.8rem] md:rounded-[2rem]">
                  <h3 className="text-white font-bold text-[1.8rem] md:text-[3rem] tracking-tight leading-none drop-shadow-md group-hover:drop-shadow-none transition-all duration-300">
                    {service.title}
                  </h3>
                  <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-in-out">
                    <div className="overflow-hidden">
                      <p className="text-white/80 font-medium text-[14px] md:text-[15px] max-w-2xl leading-relaxed mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ═══════ CTA BANNER (same rounded-4xl treatment) ═══════ */}
      <section className="w-full px-3 pb-6">
        <div className="relative w-full rounded-4xl overflow-hidden bg-black">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-40"
            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&q=80")' }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40 pointer-events-none" />
          <div className="relative z-10 px-8 md:px-16 py-16 md:py-24 flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
            <div className="max-w-xl">
              <h2 className="text-white font-black text-[2.5rem] md:text-[4rem] leading-[0.85] tracking-[-0.04em] mb-4">
                Ready to start<br />your event?
              </h2>
              <p className="text-white/70 text-[14px] md:text-[16px] font-medium leading-[1.6] max-w-sm">
                Get in touch with our experts to curate a menu that fits your vision perfectly.
              </p>
            </div>
            <Link
              to="/contact"
              className="bg-white text-gray-900 px-10 py-4 rounded-full font-medium text-[16px] md:text-[18px] tracking-[-0.02em] hover:bg-gray-100 transition-all flex items-center gap-2 group"
            >
              Contact Us <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
