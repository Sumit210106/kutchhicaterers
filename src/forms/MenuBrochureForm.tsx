import React, { useState } from 'react';
import { Download, X, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface MenuBrochureFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: () => void;
}

export default function MenuBrochureForm({ isOpen, onClose, onSuccess }: MenuBrochureFormProps) {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    
    // Simulate API call
    setTimeout(() => {
      setFormState('success');
      if (onSuccess) onSuccess();
    }, 1500);
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '#'; // Replace with real PDF link
    link.download = 'Kutchhi-Caterers-Full-Menu.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    onClose();
    // Reset form after a delay so the closing animation is smooth
    setTimeout(() => setFormState('idle'), 500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-md"
          />
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="bg-white rounded-[2.5rem] md:rounded-[3rem] w-full max-w-lg relative z-10 overflow-hidden shadow-2xl border border-black/5"
          >
            {/* Close Button */}
            <button 
              onClick={onClose}
              className="absolute top-8 right-8 text-gray-400 hover:text-black hover:rotate-90 transition-all duration-300 z-20"
            >
              <X size={28} />
            </button>

            <div className="p-10 md:p-14">
              {formState === 'success' ? (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center flex flex-col items-center gap-8 py-4"
                >
                  <div className="w-24 h-24 bg-green-50 text-green-500 rounded-full flex items-center justify-center mb-2">
                    <Download size={48} className="animate-bounce" />
                  </div>
                  <div className="flex flex-col gap-3">
                    <h3 className="text-[2.5rem] font-black tracking-tight leading-none text-gray-950">
                      It's Ready!
                    </h3>
                    <p className="text-gray-500 font-medium text-lg">
                      Your complete catering brochure is prepared.
                    </p>
                  </div>
                  <button 
                    onClick={handleDownload}
                    className="w-full bg-[#111] text-white py-6 rounded-2xl font-black text-xl tracking-tight shadow-xl hover:bg-gray-800 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3"
                  >
                    <Download size={24} />
                    Download PDF
                  </button>
                </motion.div>
              ) : (
                <>
                  <div className="flex flex-col gap-4 mb-10">
                    <div className="w-12 h-1 bg-[#e58a43] rounded-full" />
                    <h3 className="text-[2.8rem] md:text-[3.2rem] font-black tracking-tighter leading-[0.9] text-gray-950">
                      get the full <br/> menu mapped
                    </h3>
                    <p className="text-gray-500 font-medium text-[16px] leading-relaxed max-w-70">
                      Leave your details to unlock our complete multi-cuisine brochure.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                    <div className="group">
                      <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-2 px-1 group-focus-within:text-[#e58a43] transition-colors">Full Name</label>
                      <input 
                        required 
                        placeholder="John Doe" 
                        className="w-full bg-gray-50 border border-gray-100 text-gray-950 rounded-2xl px-6 py-4.5 outline-none focus:border-[#e58a43] focus:ring-4 focus:ring-[#e58a43]/5 transition-all font-medium"
                      />
                    </div>
                    <div className="group">
                      <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-2 px-1 group-focus-within:text-[#e58a43] transition-colors">Email Address</label>
                      <input 
                        type="email" 
                        required 
                        placeholder="john@example.com" 
                        className="w-full bg-gray-50 border border-gray-100 text-gray-950 rounded-2xl px-6 py-4.5 outline-none focus:border-[#e58a43] focus:ring-4 focus:ring-[#e58a43]/5 transition-all font-medium"
                      />
                    </div>
                    <div className="group">
                      <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-2 px-1 group-focus-within:text-[#e58a43] transition-colors">Phone Number</label>
                      <input 
                        type="tel" 
                        required 
                        placeholder="+91 98765 43210" 
                        className="w-full bg-gray-50 border border-gray-100 text-gray-950 rounded-2xl px-6 py-4.5 outline-none focus:border-[#e58a43] focus:ring-4 focus:ring-[#e58a43]/5 transition-all font-medium"
                      />
                    </div>
                    
                    <button 
                      type="submit" 
                      disabled={formState === 'submitting'}
                      className="w-full bg-[#111] text-white py-6 rounded-2xl font-black text-xl tracking-tight mt-4 shadow-xl hover:bg-gray-800 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center gap-3"
                    >
                      {formState === 'submitting' ? (
                        <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <>
                          <Send size={20} />
                          Unlock Menu
                        </>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
