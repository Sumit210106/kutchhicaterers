import { Play, Instagram } from "lucide-react";

export default function SocialMedia() {
  return (
    <section className="bg-gray-50 w-full px-3 sm:px-4 md:px-5 lg:px-6 pb-16 md:pb-24 flex flex-col items-center">
      <div className="w-full max-w-[1920px] rounded-4xl overflow-hidden bg-white border border-black/5 p-8 md:p-12 lg:p-16 flex flex-col gap-10">
        
        {/* Header */}
        <div className="flex flex-col-reverse md:flex-row justify-between items-start md:items-end gap-6 z-10 w-full">
          <p className="text-gray-600 font-medium text-[15px] md:text-[17px] max-w-sm leading-relaxed">
            Catch behind-the-scenes action, amazing events, and delicious dishes right from our kitchen to your feed.
          </p>
          <div className="text-right">
            <h2 className="text-gray-950 font-black text-[3.5rem] md:text-[5rem] lg:text-[6.5rem] leading-[0.85] tracking-[-0.04em]">
              socials
            </h2>
          </div>
        </div>

        {/* Bento Social Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6 w-full auto-rows-[340px] md:auto-rows-[460px]">
          
          {/* Main YouTube Video Box */}
          <div className="relative col-span-1 lg:col-span-8 rounded-4xl overflow-hidden group cursor-pointer bg-gray-900 border border-black/10">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-80"
              style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1533143708019-ea5cfa80213e?auto=format&fit=crop&w=1200&q=80")' }}
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
            
            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <div className="w-20 h-20 md:w-28 md:h-28 rounded-full bg-white/20 backdrop-blur-[24px] border border-white/30 flex items-center justify-center text-white pl-2 shadow-2xl group-hover:scale-110 transition-transform duration-500">
                <Play strokeWidth={1.5} size={36} fill="white" />
              </div>
            </div>

            {/* Label */}
            <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 bg-black/40 backdrop-blur-xl border border-white/20 p-4 rounded-full px-6 flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse"></span>
              <span className="text-white font-bold text-sm tracking-wide">YouTube Highlight</span>
            </div>
          </div>

          {/* Instagram Reels Box */}
          <div className="relative col-span-1 lg:col-span-4 rounded-[2rem] md:rounded-[3rem] overflow-hidden group cursor-pointer bg-gray-900 border border-black/10">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-80"
              style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=600&q=80")' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

            {/* Insta Floating Button */}
            <div className="absolute top-6 right-6 md:top-8 md:right-8 w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center border border-white/20 bg-black/20 backdrop-blur-md group-hover:bg-[#E1306C] transition-colors duration-300">
              <Instagram strokeWidth={1.5} size={24} className="text-white" />
            </div>

            <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 z-10 w-[calc(100%-3rem)] md:w-[calc(100%-4rem)]">
              <div className="bg-[#ffffff]/10 backdrop-blur-[24px] border border-white/10 p-5 rounded-[1.5rem] shadow-xl w-full">
                <h3 className="text-white font-bold text-[1.5rem] md:text-[2rem] tracking-tight leading-none mb-2">
                  Daily Reels
                </h3>
                <p className="text-white/80 font-medium text-[12px] md:text-[14px]">Follow us on Instagram for latest events updates!</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
