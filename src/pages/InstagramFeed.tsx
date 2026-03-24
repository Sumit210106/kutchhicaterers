import { useState } from 'react';
import { Loader2, AlertCircle, Play } from 'lucide-react';
import { motion } from 'framer-motion';

interface Reel {
  id: string;
  url: string;
  caption: string;
}

const REELS: Reel[] = [
  {
    id: '1',
    url: 'https://www.instagram.com/reel/DWJikwdxRkq/',
    caption: 'Behind the scenes of our royal Gujarati Thali preparation! 🥘',
  },
  {
    id: '2',
    url: 'https://www.instagram.com/p/DWOsH5bRxsF/',
    caption: 'Slow-cooked goodness. Our signature Dal Bukhara is a crowd favorite! ✨',
  },
  {
    id: '3',
    url: 'https://www.instagram.com/p/DWEZBYCCkWv/',
    caption: 'Artisan Pizzas for your next corporate event? Yes, please! 🍕',
  },
  {
    id: '4',
    url: 'https://www.instagram.com/reel/PASTE_REAL_URL_4/',
    caption: 'Freshness in every glass. Explore our seasonal juice bar. 🍎🍊',
  },
  {
    id: '5',
    url: 'https://www.instagram.com/reel/PASTE_REAL_URL_5/',
    caption: 'Setting up for a grand wedding in Mumbai. Excellence in every detail. 💍',
  },
  {
    id: '6',
    url: 'https://www.instagram.com/reel/PASTE_REAL_URL_6/',
    caption: "Authentic flavors, modern presentation. That's the Kutchhi touch. 🍽️",
  },
];

function toEmbedUrl(url: string): string {
  const clean = url.split('?')[0].replace(/\/$/, '');
  return `${clean}/embed/`;
}

function ReelCard({ reel, idx }: { reel: Reel; idx: number }) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <>
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: idx * 0.08 }}
      className="flex flex-col rounded-[2rem] overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10"
    >
      {/* Embed area */}
      <div className="relative w-full" style={{ minHeight: '600px' }}>
        {!loaded && !error && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-white/[0.03]">
            <Loader2 className="animate-spin text-white/30" size={28} />
            <p className="text-white/30 text-[11px] tracking-widest uppercase font-medium">Loading</p>
          </div>
        )}

        {error && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-6 text-center bg-white/[0.03]">
            <AlertCircle className="text-white/30" size={28} />
            <p className="text-white/50 text-sm leading-relaxed">Could not load this reel</p>
            <a
              href={reel.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] font-medium text-white/70 underline underline-offset-4 hover:text-white transition-colors"
            >
              Open on Instagram →
            </a>
          </div>
        )}

        <iframe
          src={toEmbedUrl(reel.url)}
          className="w-full border-0"
          style={{
            minHeight: '600px',
            opacity: loaded ? 1 : 0,
            transition: 'opacity 0.5s ease',
          }}
          scrolling="no"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
        />
      </div>

      {/* Caption row */}
      <div className="px-5 py-4 border-t border-white/[0.07] flex items-center justify-between gap-4">
        <p className="text-white/60 text-[13px] leading-relaxed line-clamp-1 flex-1 font-medium">
          {reel.caption}
        </p>
        <a
          href={reel.url}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 flex items-center gap-1.5 bg-white/10 hover:bg-white/20 border border-white/10 px-3 py-1.5 rounded-full text-white text-[12px] font-medium tracking-tight transition-all"
        >
          <Play size={10} fill="currentColor" />
          Watch
        </a>
      </div>
    </motion.div>
    </>
  );
}

export default function InstagramFeed() {
  return (
    <div className="bg-gray-50 w-full p-3">
       <section>
        <div className="bg-gray-50 pb-4 w-full flex flex-col items-center">
          <div className="relative w-full max-w-[1920px] rounded-4xl overflow-hidden bg-black shadow-2xl flex flex-col pb-16">
            <div 
              className="absolute inset-0 z-0 bg-cover bg-center opacity-70 "
              style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=2000&q=80")' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/30 z-0 pointer-events-none" />

            <div className="relative z-10 px-4 mt-16 md:mt-24 w-full h-[300px] md:h-[400px] flex flex-col justify-center items-center text-center">
              <h1 className="text-white font-black text-[3.5rem] md:text-[6rem] lg:text-[8rem] leading-[0.85] tracking-[-0.04em] mb-4">
                Our Feed
              </h1>
              <p className="text-white/80 font-medium text-[15px] md:text-[18px] max-w-2xl px-4">
                Watch us in action
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="relative w-full rounded-4xl overflow-hidden bg-black flex flex-col">

       
        {/* ── Reel Grid ── */}
        <div className="relative z-10 px-6 py-10 md:px-12 md:py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {REELS.map((reel, idx) => (
              <ReelCard key={reel.id} reel={reel} idx={idx} />
            ))}
          </div>
        </div>

        {/* ── Bottom CTA — cutout corner matching Hero exactly ── */}
        <div className="relative w-full z-20">
          <div className="absolute bottom-0 right-0 z-30">
            <div className="relative bg-gray-50 rounded-tl-[28px] md:rounded-tl-[34px] pt-[12px] pl-[12px] md:pt-[16px] md:pl-[16px]">

              {/* Top curve */}
              <svg
                className="absolute bottom-full right-0 w-[20px] h-[20px] md:w-[28px] md:h-[28px] text-gray-50 pointer-events-none"
                viewBox="0 0 32 32"
                fill="currentColor"
              >
                <path d="M32 32V0C32 17.673 17.673 32 0 32H32Z" />
              </svg>

              {/* Left curve */}
              <svg
                className="absolute bottom-0 right-full w-[20px] h-[20px] md:w-[28px] md:h-[28px] text-gray-50 pointer-events-none"
                viewBox="0 0 32 32"
                fill="currentColor"
              >
                <path d="M32 32V0C32 17.673 17.673 32 0 32H32Z" />
              </svg>

              <a
                href="https://www.instagram.com/kutchhi_caterers/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white text-gray-900 px-6 py-3 md:px-10 md:py-[17px] rounded-full rounded-br-[2rem] border border-black/15 hover:bg-gray-100 transition-all font-medium text-[15px] md:text-[19px] tracking-[-0.02em] leading-none"
              >
                Visit full profile
              </a>
            </div>
          </div>

          {/* Spacer so the cutout button has room */}
          <div className="h-[60px] md:h-[70px]" />
        </div>

      </div>
    </div>
  );
}