

export default function OurStory() {
  return (
    <section className="bg-gray-50 w-full px-3 sm:px-4 md:px-5 lg:px-6 pb-16 md:pb-24 flex flex-col items-center">
      <div className="w-full max-w-[1920px] rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden bg-white border border-black/5 shadow-sm p-8 md:p-16 lg:p-24 flex flex-col lg:flex-row gap-16 lg:gap-24 relative">
        
        {/* Left: Text Content */}
        <div className="flex-1 flex flex-col gap-6 md:gap-10">
          <h2 className="text-gray-950 font-black text-[3.5rem] md:text-[5rem] lg:text-[6.5rem] leading-[0.85] tracking-[-0.04em]">
            our story
          </h2>
          <div className="w-16 h-1 md:w-24 md:h-2 bg-gray-950 rounded-full"></div>
          
          <h3 className="text-gray-600 font-bold text-xl md:text-2xl tracking-tight">
            Trusted By 200+ satisfied clients
          </h3>
          
          <p className="text-gray-600 text-[15px] md:text-[17px] font-medium leading-[1.7] max-w-2xl">
            The finest of India's cuisine is as rich and diverse as its civilization. It is an art form that has been passed on through generations purely by word of mouth, from guru (teacher) to vidhyarthi (pupil) or from mother to daughter. The range assumes astonishing proportions when one takes into account regional variations.
            <br/><br/>
            Food customarily forms the crowning part of most festivals and celebrations. Whatever the occasion, Indians eat with great gusto and are always looking for reasons to feast and make merry. Keeping the same tradition alive, we at Kutchhi Caterers have been serving our guests for the past 25 years. So whatever the occasion may be, do not forget to contact us for the satisfaction and feel of pure Indian Cuisine.
          </p>
          
          <div className="flex flex-wrap gap-4 mt-6">
            <span className="px-5 py-2.5 rounded-full bg-gray-100 border border-gray-200 text-gray-950 font-bold text-sm tracking-wide">DELICIOUS FOOD</span>
            <span className="px-5 py-2.5 rounded-full bg-gray-100 border border-gray-200 text-[#2a873f] font-bold text-sm tracking-wide">100% VEGETARIAN</span>
            <span className="px-5 py-2.5 rounded-full bg-gray-100 border border-gray-200 text-gray-950 font-bold text-sm tracking-wide">BEVERAGES</span>
          </div>
        </div>

        {/* Right: Bento Stats */}
        <div className="flex-1 grid grid-cols-2 gap-4 md:gap-6">
          <div className="bg-gray-50 rounded-[2rem] p-6 md:p-10 flex flex-col justify-center items-center text-center border border-black/5 hover:shadow-xl transition-shadow cursor-pointer">
            <span className="text-[3rem] md:text-[4.5rem] font-black tracking-tighter text-gray-950 leading-none mb-2">786</span>
            <span className="text-gray-500 font-semibold text-sm md:text-base tracking-tight uppercase">Happy Customers</span>
          </div>
          
          <div className="bg-black text-white rounded-[2rem] p-6 md:p-10 flex flex-col justify-center items-center text-center shadow-lg hover:bg-gray-900 transition-colors cursor-pointer">
            <span className="text-[3rem] md:text-[4.5rem] font-black tracking-tighter leading-none mb-2 text-[#e58a43]">109</span>
            <span className="text-white/80 font-semibold text-sm md:text-base tracking-tight uppercase">Expert Chefs</span>
          </div>
          
          <div className="bg-black text-white rounded-[2rem] p-6 md:p-10 flex flex-col justify-center items-center text-center shadow-lg hover:bg-gray-900 transition-colors cursor-pointer">
            <span className="text-[3rem] md:text-[4.5rem] font-black tracking-tighter leading-none mb-2 text-[#e58a43]">25</span>
            <span className="text-white/80 font-semibold text-sm md:text-base tracking-tight uppercase">Years Exp.</span>
          </div>

          <div className="bg-gray-50 rounded-[2rem] p-6 md:p-10 flex flex-col justify-center items-center text-center border border-black/5 hover:shadow-xl transition-shadow cursor-pointer">
            <span className="text-[3rem] md:text-[4.5rem] font-black tracking-tighter text-gray-950 leading-none mb-2">235</span>
            <span className="text-gray-500 font-semibold text-sm md:text-base tracking-tight uppercase">Events Completed</span>
          </div>
        </div>
        
      </div>
    </section>
  );
}
