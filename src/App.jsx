import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";

// Standard animation variant for images
const imageReveal = {
  initial: { opacity: 0, scale: 0.8, y: 50 },
  whileInView: { opacity: 1, scale: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 1, ease: [0.22, 1, 0.36, 1] }
};

// Unified Section Wrapper to handle consistent spacing
const Section = ({ children, className, isHero = false }) => (
  <motion.section
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 1.2, ease: "easeOut" }}
    className={`w-full flex flex-col items-center justify-center p-6 text-center relative ${
      isHero ? "min-h-screen pt-24" : "py-12 md:py-20"
    } ${className}`}
  >
    {children}
  </motion.section>
);

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, mins: 0, secs: 0 });

  useEffect(() => {
    const target = new Date("June 18, 2026 17:00:00").getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const d = target - now;
      setTimeLeft({
        days: Math.max(0, Math.floor(d / (1000 * 60 * 60 * 24))),
        hours: Math.max(0, Math.floor((d % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))),
        mins: Math.max(0, Math.floor((d % (1000 * 60 * 60)) / (1000 * 60))),
        secs: Math.max(0, Math.floor((d % (1000 * 60)) / 1000)),
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleOpen = () => {
    confetti({ 
      particleCount: 150, 
      spread: 70, 
      origin: { y: 0.6 }, 
      colors: ['#556B2F', '#D4AF37'] 
    });
    setIsOpen(true);
  };

  return (
    <div className="bg-villa-cream">
      <AnimatePresence>
        {!isOpen && (
          <motion.div 
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-50 bg-villa-cream flex flex-col items-center justify-center p-8 border-[10px] border-double border-villa-olive/20"
          >
            <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 4 }}>
              <img src="https://res.cloudinary.com/dtscqhcop/image/upload/v1777781728/wedding_immmm_xtkbkg.webp" 
                   className="w-48 md:w-64 mb-10 glass-glow rounded-full" alt="seal" />
            </motion.div>
            <h1 className="font-serif text-3xl md:text-5xl tracking-[0.1em] uppercase mb-4 text-villa-olive font-bold px-4 leading-tight">
              Two Hearts<br />One Journey<br />Begins
            </h1>
            <p className="font-serif italic opacity-70 text-xl mb-8 font-bold text-villa-olive text-center">Shehani & Nethaka</p>
            <button 
              onClick={handleOpen}
              className="mt-6 px-14 py-4 border-2 border-villa-olive text-villa-olive tracking-widest text-sm font-bold hover:bg-villa-olive hover:text-white transition-all cursor-pointer rounded-full shadow-lg"
            >
              OPEN INVITATION
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {isOpen && (
        <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
          
          {/* 1. HERO SECTION */}
          <Section isHero={true}>
            <p className="font-sans text-xs tracking-[0.4em] uppercase font-bold opacity-60 mb-6 text-villa-olive">We are getting married</p>
            <div className="flex flex-col items-center mb-10">
                <h1 className="font-cursive text-7xl md:text-9xl text-villa-olive leading-none">Shehani</h1>
                <span className="text-villa-gold text-4xl md:text-5xl my-2 font-serif italic font-bold">&</span>
                <h1 className="font-cursive text-7xl md:text-9xl text-villa-olive leading-none">Nethaka</h1>
            </div>
            <motion.div {...imageReveal} className="glass-glow mb-12">
              <img src="https://res.cloudinary.com/dtscqhcop/image/upload/v1777781843/chand_rjfhun.webp" 
                   className="w-72 md:w-[35rem] rounded-[2rem] md:rounded-[3rem] shadow-2xl" alt="Chandelier" />
            </motion.div>
            <p className="font-serif text-2xl md:text-4xl tracking-[0.2em] uppercase font-bold text-villa-olive text-center">June 18, 2026</p>
          </Section>

          {/* 2. FAMILIES SECTION */}
          <Section className="bg-white/40">
            <h2 className="font-cursive text-6xl md:text-8xl mb-12 text-villa-olive font-bold">The Families</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 max-w-5xl w-full px-4">
              <div className="space-y-4">
                <p className="text-sm tracking-widest uppercase font-bold opacity-50 font-bold text-villa-olive">Beloved Daughter of</p>
                <p className="font-serif text-2xl md:text-3xl font-bold">Mr. & Mrs. Rodrigo</p>
              </div>
              <div className="space-y-4">
                <p className="text-sm tracking-widest uppercase font-bold opacity-50 font-bold text-villa-olive">Beloved Son of</p>
                <p className="font-serif text-2xl md:text-3xl font-bold">Mr. & Mrs. Wijesooriya</p>
              </div>
            </div>
            <motion.div {...imageReveal} className="mt-12">
               <img src="https://res.cloudinary.com/dtscqhcop/image/upload/v1777782093/charming-cupid-illustration-in-pastel-oil-paint-effect-soaring-gracefully-with-a-bow-and-arrow-embodying-love-classic-cupid-illustration-pastel-oil-paint-effect-isolated-on-transparent-background-free-png_bswkz9.webp" 
                    className="w-24 md:w-32" alt="Cupid" />
            </motion.div>
          </Section>

          {/* 3. COUNTDOWN SECTION */}
          <Section>
            <h2 className="font-cursive text-6xl md:text-7xl mb-10 text-villa-olive font-bold">Countdown</h2>
            <div className="flex gap-4 md:gap-12 justify-center flex-wrap">
              {Object.entries(timeLeft).map(([label, val]) => (
                <div key={label} className="flex flex-col items-center">
                  <p className="text-5xl md:text-8xl font-serif font-bold text-villa-olive">{val}</p>
                  <p className="text-[10px] md:text-xs uppercase tracking-widest font-bold opacity-60 text-villa-olive font-bold">{label}</p>
                </div>
              ))}
            </div>
            <motion.div {...imageReveal} className="mt-12 px-4 w-full max-w-2xl">
              <img src="https://res.cloudinary.com/dtscqhcop/image/upload/v1777782213/hadddddd_jcxpyk.avif" 
                   className="w-full h-auto md:h-96 object-cover rounded-[2rem] md:rounded-[3rem] shadow-xl border-4 border-white/50" alt="Decoration" />
            </motion.div>
          </Section>

          {/* NEW SECTION: LOCATION DETAILS (The Image Reference) */}
          <Section className="bg-white/20">
            <h2 className="font-cursive text-6xl md:text-8xl mb-4 text-villa-olive font-bold">The Details</h2>
            <p className="text-xs tracking-[0.3em] uppercase font-bold opacity-40 mb-12 text-villa-olive">Everything you need to know</p>
            
            <div className="relative w-full max-w-lg mx-auto flex flex-col items-center">
              {/* Embossed Card Content */}
              <motion.div 
                {...imageReveal}
                className="relative p-12 bg-[#FDFCF9] shadow-[inset_0_0_50px_rgba(0,0,0,0.02),10px_20px_40px_rgba(0,0,0,0.05)] rounded-[4rem] border border-white/50 w-full mb-10"
              >
                <div className="absolute inset-4 border border-villa-olive/10 rounded-[3.5rem] pointer-events-none"></div>
                <h3 className="font-cursive text-5xl mb-6 text-villa-olive text-center">Location</h3>
                <p className="font-serif text-3xl tracking-widest uppercase text-villa-olive font-bold mb-2 text-center">The Revenge</p>
                <p className="font-serif italic opacity-60 text-lg mb-8 font-bold text-villa-olive text-center">Colombo, Sri Lanka</p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="flex items-center justify-center gap-2 bg-villa-olive text-white px-8 py-3 rounded-full text-xs font-bold shadow-lg transition-transform active:scale-95">
                    <span>📍</span> GOOGLE MAPS
                  </button>
                  <button className="flex items-center justify-center gap-2 border border-villa-olive text-villa-olive px-8 py-3 rounded-full text-xs font-bold transition-transform active:scale-95">
                    <span>📅</span> CALENDAR
                  </button>
                </div>
              </motion.div>
            </div>
          </Section>

          {/* 4. ORDER OF THE DAY - (Vertical Line Removed) */}
          <Section className="bg-white/40">
            <motion.img {...imageReveal} src="https://cdn-icons-png.flaticon.com/512/3200/3200371.png" className="w-24 md:w-32 mb-10" alt="Celebration" />
            <h2 className="font-cursive text-6xl md:text-8xl mb-4 text-villa-olive font-bold">Order of the Day</h2>
            <div className="space-y-8 relative w-full max-w-2xl px-6 mt-12">
              {/* Decorative vertical line was here - removed */}
              {[
                { title: "Arrival & Welcome Drinks", desc: "Reception and welcome cocktails at the villa" },
                { title: "The Ceremony", desc: "The most special moment of our lives" },
                { title: "Cocktail Hour & Dinner", desc: "Al fresco dining under the stars" },
                { title: "Last Dance", desc: "Farewell and beautiful memories" }
              ].map((item, idx) => (
                <div key={idx} className="z-10 bg-villa-cream py-6 px-8 rounded-2xl border border-villa-olive/5 shadow-sm">
                  <h3 className="font-serif text-3xl md:text-4xl tracking-wide font-bold text-center">{item.title}</h3>
                  <p className="text-sm md:text-base font-semibold opacity-60 mt-1 text-villa-olive font-bold text-center">{item.desc}</p>
                </div>
              ))}
            </div>
          </Section>

          {/* 5. DRESS CODE */}
          <Section>
            <h2 className="font-cursive text-6xl md:text-7xl mb-8 text-villa-olive font-bold">Dress Code</h2>
            <div className="relative bg-white p-10 md:p-14 rounded-[2rem] md:rounded-[3rem] shadow-2xl max-w-xl mx-4">
              <motion.img {...imageReveal} src="https://res.cloudinary.com/dtscqhcop/image/upload/v1777782836/WhatsApp_Image_2026-05-03_at_10.03.25_rburor.jpg" 
                   className="w-full mb-10 rounded-[1.5rem] md:rounded-[2rem] shadow-sm" alt="Attire" />
              <h3 className="font-serif text-3xl mb-4 font-bold tracking-wide text-center">Formal Attire</h3>
              <p className="text-base font-semibold leading-relaxed opacity-70 mb-6 text-villa-olive font-bold font-bold text-center">
                We kindly ask you to dress formally to join us on this very special day.
              </p>
              <p className="font-serif italic text-villa-wine text-lg font-bold text-center">
                Please avoid wearing white — it is reserved for the bride.
              </p>
            </div>
          </Section>

          {/* 6. RSVP SECTION */}
          <Section className="bg-white/40">
            <h2 className="font-cursive text-6xl md:text-7xl mb-6 text-villa-olive font-bold">RSVP</h2>
            <p className="text-xs tracking-[0.2em] uppercase font-bold opacity-40 mb-12 text-villa-olive font-bold text-shadow-sm text-center">We hope you can make it</p>
            <form className="w-full max-w-md space-y-10 text-left bg-white/60 p-8 md:p-12 rounded-[2.5rem] shadow-xl backdrop-blur-sm mx-4">
              <div className="space-y-4">
                <p className="font-serif text-xl font-bold">Will you attend? *</p>
                <div className="flex gap-8">
                  <label className="flex items-center gap-2 cursor-pointer group"><input type="radio" name="attend" className="accent-villa-olive w-4 h-4" /><span className="font-sans text-sm font-bold group-hover:text-villa-olive font-bold">Yes, I'll be there</span></label>
                  <label className="flex items-center gap-2 cursor-pointer group"><input type="radio" name="attend" className="accent-villa-olive w-4 h-4" /><span className="font-sans text-sm font-bold group-hover:text-villa-olive font-bold">Sorry, I can't</span></label>
                </div>
              </div>
              <div className="space-y-2">
                <label className="font-serif text-lg font-bold">Full name *</label>
                <input type="text" className="w-full bg-white/80 border-b-2 border-villa-olive/10 py-3 px-4 outline-none focus:border-villa-olive transition-all rounded-xl font-bold font-bold" placeholder="Your full name" />
              </div>
              <div className="space-y-2">
                <label className="font-serif text-lg font-bold">Contact Number *</label>
                <input type="tel" className="w-full bg-white/80 border-b-2 border-villa-olive/10 py-3 px-4 outline-none focus:border-villa-olive transition-all rounded-xl font-bold font-bold" placeholder="+94 77 000 0000" />
              </div>
              <button type="button" className="w-full bg-villa-olive text-white py-5 rounded-full font-bold tracking-[0.2em] shadow-lg active:scale-95 transition-all mt-6 uppercase text-sm font-bold">
                Submit Response
              </button>
            </form>
          </Section>

          {/* 7. WISHES SECTION */}
          <Section>
            <h2 className="font-cursive text-6xl md:text-7xl mb-12 text-villa-olive font-bold text-center">Wishes for the Couple</h2>
            <div className="w-full max-w-lg bg-white/80 p-8 md:p-12 rounded-[2.5rem] shadow-xl mx-4">
                <textarea className="w-full bg-villa-cream/50 border-2 border-villa-olive/10 py-4 px-6 outline-none focus:border-villa-olive transition-all rounded-[1.5rem] font-bold h-48 resize-none shadow-inner font-bold" placeholder="Leave a heartfelt message..."></textarea>
                <button className="w-full bg-villa-olive text-white py-5 rounded-full font-bold tracking-[0.2em] shadow-lg mt-8 uppercase text-sm font-bold font-bold">Post Message</button>
            </div>
          </Section>

          {/* 8. THANK YOU SECTION */}
          <Section className="pb-24">
            <div className="max-w-2xl px-6">
                <h2 className="font-cursive text-5xl md:text-7xl text-villa-olive mb-6 font-bold text-center">Thank You</h2>
                <p className="font-serif text-xl md:text-2xl italic font-bold leading-relaxed opacity-80 mb-12 text-villa-olive font-bold text-center">
                    "Your love and presence are the greatest gifts of all. We can’t wait to celebrate the beginning of our forever with you."
                </p>
                <motion.div {...imageReveal} className="w-full max-w-md mx-auto overflow-hidden rounded-[2.5rem] md:rounded-[3rem] shadow-2xl border-4 border-white/50">
                  <img src="https://res.cloudinary.com/dtscqhcop/image/upload/v1777785634/WhatsApp_Image_2026-05-03_at_10.44.09_w45rol.jpg" 
                       className="w-full h-auto object-cover" alt="Couple Ending" />
                </motion.div>
                <div className="mt-16 h-[1px] w-32 bg-villa-olive/30 mx-auto"></div>
            </div>
          </Section>

        </motion.main>
      )}
    </div>
  );
};

export default App;