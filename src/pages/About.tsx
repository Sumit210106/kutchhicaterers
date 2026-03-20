import OurStory from "../components/OurStory";
import AboutPhilosophy from "../components/AboutPhilosophy";
import AboutVideo from "../components/AboutVideo";
import ContactForm from "../components/ContactForm";

export default function About() {
  return (
    <div className="bg-gray-50 flex flex-col min-h-screen">
      {/* SubHero for About Page */}
      <div className="bg-gray-50 p-3 w-full flex flex-col items-center">
        <div className="relative w-full max-w-[1920px] rounded-4xl overflow-hidden bg-black shadow-2xl flex flex-col pb-16">
          <div 
            className="absolute inset-0 z-0 bg-cover bg-center opacity-70 mix-blend-luminosity"
            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=2000&q=80")' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/30 z-0 pointer-events-none" />

          <div className="relative z-10 px-4 mt-16 md:mt-24 w-full h-[300px] md:h-[400px] flex flex-col justify-center items-center text-center">
            <h1 className="text-white font-black text-[3.5rem] md:text-[6rem] lg:text-[8rem] leading-[0.85] tracking-[-0.04em] mb-4">
              About Us
            </h1>
            <p className="text-white/80 font-medium text-[15px] md:text-[18px] max-w-2xl px-4">
              "Each country has its own kind of food and taste to offer. India has a very variety of dishes and the hospitality of the Indians is legendary."
            </p>
          </div>
        </div>
      </div>

      <OurStory />
      {/* <AboutPhilosophy /> */}
      <AboutVideo />
      <ContactForm />
    </div>
  );
}
