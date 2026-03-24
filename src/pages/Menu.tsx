import { useState, useEffect } from 'react';
import { Download, X, Star } from 'lucide-react';
import { useParams } from 'react-router-dom';
import { allMenuData } from '../data';
import PopularDishes2 from '../components/PopularDishes2';

const defaultData = {
  pageTitle: 'Popular Dishes',
  description: 'A glimpse into our meticulously crafted multi-cuisine menu. For the complete culinary experience, our full brochure is available for download.',
  categories: allMenuData['veg-thali'].categories // Default fallback
};

export default function Menu() {
  const { category } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const normalizedCategory = category ? category.toLowerCase().replace(' ', '-') : '';
  const menuData = allMenuData[normalizedCategory] || allMenuData['veg-thali'] || defaultData;
  const { pageTitle, description, categories } = menuData;

  useEffect(() => {
    // Dynamic SEO Metadata
    document.title = `${pageTitle} | Kutchhi Caterers Menu`;
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);
  }, [pageTitle, description]);

  const handleDownloadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormState('success');
    }, 1500);
  };

  const handleDownload = () => {
    // Actual download logic or link to PDF
    const link = document.createElement('a');
    link.href = '#'; // Put your actual brochure pdf link here
    link.download = 'Kutchhi-Caterers-Brochure.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setIsModalOpen(false);
    setTimeout(() => setFormState('idle'), 500);
  };

  return (
    <div className="bg-gray-50 flex flex-col min-h-screen pt-24 md:pt-[120px]">
      {/* Hero Section */}
      <section className="px-3 sm:px-4 md:px-5 lg:px-6 w-full flex flex-col items-center pb-12">
        <div className="w-full max-w-[1920px] bg-black text-white rounded-4xl px-6 py-16 md:px-12 md:py-24 text-center relative overflow-hidden flex flex-col items-center">
          <img src="https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=2070&q=80" alt="Exquisite Catering Setup" loading="lazy" className="absolute inset-0 w-full h-full object-cover opacity-30 z-0 mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-0"></div>
          
          <div className="relative z-10 max-w-4xl">
            <h4 className="text-[#e58a43] font-bold tracking-widest uppercase text-sm mb-4 flex items-center justify-center gap-2">
              <Star size={16} fill="currentColor" /> Our Offerings
            </h4>
            <h1 className="text-[3rem] sm:text-[4rem] md:text-[5.5rem] font-black leading-[0.85] tracking-tight mb-6 capitalize">
              {pageTitle.toLowerCase()}
            </h1>
            <p className="text-[#ebebeb] text-[15px] md:text-[18px] font-medium leading-relaxed max-w-2xl mx-auto opacity-90 mb-10">
              {description}
            </p>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-white text-black px-8 py-4 rounded-full font-bold text-lg inline-flex items-center gap-2 hover:bg-gray-200 transition-colors shadow-xl"
            >
              <Download size={20} />
              Download Full Brochure
            </button>
          </div>
        </div>
      </section>

      {/* Popular Selection Grid */}
      <section className="px-3 sm:px-4 md:px-5 lg:px-6 w-full flex flex-col items-center pb-24">
        <div className="w-full max-w-[1920px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((categoryObj, idx) => (
            <div key={idx} className="bg-white rounded-3xl p-6 md:p-8 flex flex-col gap-6 shadow-sm border border-black/5 hover:shadow-lg transition-shadow duration-300">
              <img 
                src={categoryObj.image}
                alt={`${categoryObj.title} selection`}
                loading="lazy"
                className="w-full h-48 md:h-64 rounded-2xl object-cover hover:scale-[1.02] transition-transform duration-300 shadow-sm"
              />
              <div>
                <h3 className="text-[2rem] font-black text-gray-950 tracking-[-0.03em] mb-4">
                  {categoryObj.title}
                </h3>
                <ul className="space-y-3">
                  {categoryObj.items.map((item, i) => (
                    <li key={i} className="flex justify-between items-start text-[15px] md:text-[16px] font-medium text-gray-700 border-b border-gray-100 pb-2 last:border-0 last:pb-0">
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* More Popular Categories Suggestions */}
      <PopularDishes2 />

      {/* Call to Action Section */}
      <section className="px-3 sm:px-4 md:px-5 lg:px-6 w-full flex flex-col items-center pb-24">
         <div className="w-full max-w-[1920px] bg-gray-900 rounded-4xl p-10 md:p-20 text-center flex flex-col items-center relative overflow-hidden">
            <img src="https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=2000&q=80" alt="Mouthwatering Indian Thali Details" loading="lazy" className="absolute inset-0 w-full h-full object-cover opacity-20" />
            <div className="relative z-10 max-w-2xl flex flex-col items-center">
              <h2 className="text-white text-[3rem] md:text-[4.5rem] font-black leading-[0.9] tracking-tight mb-6">
                hungry for more?
              </h2>
              <p className="text-gray-300 text-lg mb-10 max-w-lg">
                Explore our massive spread of multi-cuisine delicacies, live counters, and bespoke catering options in our full brochure.
              </p>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-[#e58a43] text-white px-10 py-5 rounded-full font-bold text-lg inline-flex items-center gap-2 hover:bg-[#d67a32] transition-colors shadow-2xl"
              >
                <Download size={24} />
                Get The Complete Menu Mapped
              </button>
            </div>
         </div>
      </section>

      {/* Brochure Download Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsModalOpen(false)}></div>
          <div className="bg-white rounded-[2rem] w-full max-w-md relative z-10 overflow-hidden shadow-2xl animate-fade-in-up">
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-6 right-6 text-gray-400 hover:text-black transition-colors"
            >
              <X size={24} />
            </button>

            <div className="p-8 md:p-10">
              {formState === 'success' ? (
                <div className="text-center flex flex-col items-center gap-6 py-6">
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-2">
                    <Download size={40} />
                  </div>
                  <h3 className="text-[2rem] font-black tracking-[-0.02em] leading-tight text-gray-900">
                    Your Brochure is Ready!
                  </h3>
                  <p className="text-gray-600 font-medium">
                    Thank you for your interest. You can now download the complete Kutchhi Caterers menu below.
                  </p>
                  <button 
                    onClick={handleDownload}
                    className="w-full bg-[#111] text-white py-4 rounded-xl font-bold text-lg tracking-[-0.01em] shadow-lg hover:bg-gray-800 transition-colors mt-4"
                  >
                    Download PDF
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="text-[2.2rem] font-black tracking-[-0.03em] leading-[1.1] text-gray-900 mb-2">
                    Download Menu
                  </h3>
                  <p className="text-gray-600 font-medium mb-8">
                    Please fill out this form to get access to our complete catering brochure.
                  </p>

                  <form onSubmit={handleDownloadSubmit} className="flex flex-col gap-5">
                    <div>
                      <label className="block text-sm font-bold text-gray-900 mb-2">Full Name</label>
                      <input 
                        type="text" 
                        required
                        className="w-full bg-gray-50 border border-gray-200 text-gray-900 rounded-xl px-4 py-3.5 outline-none focus:border-black focus:ring-1 focus:ring-black transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-900 mb-2">Email Address</label>
                      <input 
                        type="email" 
                        required
                        className="w-full bg-gray-50 border border-gray-200 text-gray-900 rounded-xl px-4 py-3.5 outline-none focus:border-black focus:ring-1 focus:ring-black transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-900 mb-2">Phone Number</label>
                      <input 
                        type="tel" 
                        required
                        className="w-full bg-gray-50 border border-gray-200 text-gray-900 rounded-xl px-4 py-3.5 outline-none focus:border-black focus:ring-1 focus:ring-black transition-all"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                    
                    <button 
                      type="submit" 
                      disabled={formState === 'submitting'}
                      className="w-full bg-[#e58a43] text-white py-4 rounded-xl font-bold text-lg tracking-[-0.01em] mt-4 shadow-lg hover:bg-[#d67a32] transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center"
                    >
                      {formState === 'submitting' ? (
                        <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      ) : (
                        'Get Access'
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
