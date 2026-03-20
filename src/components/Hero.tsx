export default function Hero() {
  return (
    <div className="bg-gray-50 min-h-screen p-3 w-full flex flex-col items-center">
      <div className="relative w-full flex-1 rounded-4xl overflow-hidden bg-black flex flex-col">
        {/* Background */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-70 "
          style={{
            backgroundImage:'url("https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=2070&q=80")' 
        }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 z-0 pointer-events-none" />


        {/* Center Main Text */}
        <div className="flex-1 flex flex-col items-center justify-center z-10 px-4 mt-8 md:mt-[-4rem] pointer-events-none w-full">
          <h2 className="text-white font-[500] text-[1.25rem] md:text-[1.8rem] lg:text-[2rem] mb-1 md:mb-2 tracking-tight opacity-95">
            Enjoy the taste of
          </h2>

          <h1 className="text-white font-black text-[3.75rem] sm:text-[6rem] md:text-[9rem] lg:text-[12rem] leading-[0.85] tracking-[-0.05em] mb-4 md:mb-6 pointer-events-auto selection:bg-white/20">
            kutchhi
            <br className="md:hidden" />
            <span>{" "}</span>caterers
          </h1>

          <p className="text-[#ebebeb] text-[13px] md:text-[15px] max-w-[280px] md:max-w-[480px] text-center font-medium leading-[1.6] opacity-80">
            We don't serve just food, we serve memories. That's not your
            typical promise. It's unnecessarily good. Maybe that's because
            we're unnecessarily driven.
          </p>
        </div>

        {/* Bottom Elements Wrapper */}
        <div className="relative w-full z-20 h-auto">
          {/* Glass Cards - Bottom Left */}
          <div className="absolute bottom-[90px] left-5 md:bottom-8 md:left-8 flex gap-2.5 md:gap-4 items-end">
            <div className="bg-[#ffffff]/5 backdrop-blur-[24px] border border-white/10 rounded-[1.5rem] md:rounded-[2rem] p-4 md:p-6 w-[160px] md:w-[240px] ">
              <h3 className="text-white font-medium tracking-[-0.04em] text-[1.75rem] md:text-[2.5rem] mb-1.5 leading-none">
                25<span className="text-[1.25rem] md:text-[1.75rem]">+Yrs</span>
              </h3>
              <p className="text-white/70 text-[11px] md:text-[13.5px] font-medium leading-[1.5]">
                "Pure Indian" is exactly where we want to be. All in the name of
                authentic cuisine.
              </p>
            </div>

            <div className="bg-[#ffffff]/5 backdrop-blur-[24px] border border-white/10 rounded-full p-[6px] md:p-2 flex flex-col gap-[6px] md:gap-2">
              <div
                className="w-[42px] h-[42px] md:w-[60px] md:h-[60px] rounded-full bg-cover bg-center border border-white/10"
                style={{
                  backgroundImage:
                    'url("https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=150&q=80")',
                }}
              />
              <div
                className="w-[42px] h-[42px] md:w-[60px] md:h-[60px] rounded-full bg-cover bg-center border border-white/10"
                style={{
                  backgroundImage:
                    'url("https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=150&q=80")',
                }}
              />
              <div
                className="w-[42px] h-[42px] md:w-[60px] md:h-[60px] rounded-full bg-cover bg-center border border-white/10"
                style={{
                  backgroundImage:
                    'url("https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=150&q=80")',
                }}
              />
            </div>
          </div>

        </div>

        {/* Bottom Right Explore Goodies Cutout - Refined to match perfectly symmetric curves */}
        <div className="absolute bottom-0 right-0 z-30">
  
  <div className="relative bg-gray-50 rounded-tl-[28px] md:rounded-tl-[34px] pt-[12px] pl-[12px] md:pt-[16px] md:pl-[16px]">
    
    {/* Top Curve */}
    <svg 
      className="absolute bottom-full right-0 w-[20px] h-[20px] md:w-[28px] md:h-[28px] text-gray-50 pointer-events-none"
      viewBox="0 0 32 32"
      fill="currentColor"
    >
      <path d="M32 32V0C32 17.673 17.673 32 0 32H32Z" />
    </svg>
    
    {/* Left Curve */}
    <svg 
      className="absolute bottom-0 right-full w-[20px] h-[20px] md:w-[28px] md:h-[28px] text-gray-50 pointer-events-none"
      viewBox="0 0 32 32"
      fill="currentColor"
    >
      <path d="M32 32V0C32 17.673 17.673 32 0 32H32Z" />
    </svg>

    {/* BUTTON (SLIM + PREMIUM) */}
    <button className="
      bg-white 
      text-gray-900
      px-[24px] py-[12px] md:px-[120px] md:py-[17px]
      rounded-full
      rounded-br-4xl
      border border-black/15
      hover:bg-gray-100
      transition-all
      pointer-events-auto
    ">
      <span className="font-medium text-[15px] md:text-[19px] tracking-[-0.02em] leading-none">
        Explore Goodies
      </span>
    </button>

  </div>
        </div>
      </div>
    </div>
  );
}