import { ArrowRight } from "lucide-react";

const services = [
  { 
    name: "Wedding Services", 
    desc: "Make your special day truly memorable with our comprehensive wedding catering.",
    img: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80"
  },
  { 
    name: "Corporate Catering", 
    desc: "Elevate your corporate events with premium catering designed to impress clients.",
    img: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=80"
  },
  { 
    name: "Cocktail Reception", 
    desc: "Exquisite drinks and bite-sized delicacies linking fun and taste perfectly.",
    img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80"
  },
  { 
    name: "Buffet Catering", 
    desc: "A grand spread of authentic Indian delicacies for a diverse culinary experience.",
    img: "https://images.unsplash.com/photo-1530103862676-de889243da87?auto=format&fit=crop&q=80"
  },
  { 
    name: "Bento Catering", 
    desc: "Curated individual meal boxes perfect for seamless corporate lunches.",
    img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80"
  },
  { 
    name: "Sit-down Catering", 
    desc: "Premium multi-course dining with dedicated and elegant table service.",
    img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80"
  },
  { 
    name: "Home Delivery", 
    desc: "Gourmet meals delivered straight to your doorstep with absolute care.",
    img: "https://images.unsplash.com/photo-1626804475297-41609ea0aa8eb?auto=format&fit=crop&q=80"
  },
  { 
    name: "Pub Party", 
    desc: "Vibrant and energetic catering setups designed for late-night celebrations.",
    img: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80"
  }
];

export default function Services() {
  return (
    <div className="bg-gray-50 flex flex-col min-h-screen">
      {/* Services Sub-Hero */}
      <section>
        <div className="bg-gray-50 p-3 w-full flex flex-col items-center">
          <div className="relative w-full max-w-[1920px] rounded-4xl overflow-hidden bg-black shadow-2xl flex flex-col pb-16">
            <div 
              className="absolute inset-0 z-0 bg-cover bg-center opacity-70"
              style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=2000&q=80")' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/30 z-0 pointer-events-none" />

            <div className="relative z-10 px-4 mt-16 md:mt-24 w-full h-[300px] md:h-[400px] flex flex-col justify-center items-center text-center">
              <h1 className="text-white font-black text-[3.5rem] md:text-[6rem] lg:text-[8rem] leading-[0.85] tracking-[-0.04em] mb-4">
                our services
              </h1>
              <p className="text-white/80 font-medium text-[15px] md:text-[18px] max-w-2xl px-4">
                From intimate gatherings to massive corporate galas, we bring the finest culinary experiences straight to your venue.
              </p>
            </div>
          </div>
        </div>
      </section>
      

      {/* Services Grid Section */}
      <section className="w-full px-3 sm:px-4 md:px-5 lg:px-6 py-10 md:py-16 flex flex-col items-center">
        <div className="w-full max-w-[1920px] rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden bg-black p-6 md:p-12 lg:p-16 flex flex-col gap-10 shadow-2xl">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 w-full">
            {services.map((service, index) => (
              <div 
                key={index}
                className={`relative rounded-[2rem] md:rounded-[3rem] overflow-hidden group cursor-pointer bg-black ${index < 4 ? "h-[380px] md:h-[450px]" : "h-[300px] md:h-[350px]"}`}
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-80"
                  style={{ backgroundImage: `url(${service.img})` }}
                />
                
                {/* Arrow Button */}
                <div className="absolute top-6 right-6 w-12 h-12 rounded-full flex items-center justify-center border border-white/40 text-white group-hover:bg-white group-hover:text-black group-hover:border-white shadow-lg transition-all duration-300 z-10">
                  <ArrowRight strokeWidth={1.5} size={24} className="group-hover:-rotate-45 transition-transform duration-300" />
                </div>

                {/* Glass Label */}
                <div className="absolute bottom-4 left-4 right-4 transition-all duration-300 group-hover:bg-[#ffffff]/10 group-hover:backdrop-blur-[24px] border border-transparent group-hover:border-white/10 p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem]">
                  <h3 className="text-white font-bold text-[1.75rem] md:text-[2.25rem] tracking-tight leading-none drop-shadow-md group-hover:drop-shadow-none transition-all duration-300">
                    {service.name}
                  </h3>
                  <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-in-out">
                    <div className="overflow-hidden">
                      <p className="text-white/80 font-medium text-[13px] md:text-[15px] leading-relaxed mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                        {service.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


    </div>
  );
}
