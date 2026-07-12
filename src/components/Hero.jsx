import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative h-[90vh] min-h-[600px] flex items-center justify-center pt-16">
      {/* Background Image / Gradient */}
      <div 
        className="absolute inset-0 z-0 bg-gradient-to-br from-[var(--color-secondary)] to-[#1e293b]"
      >
        <div className="absolute inset-0 bg-black/40 mix-blend-multiply"></div>
        {/* Placeholder for football field image, using CSS pattern for now */}
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent bg-[length:20px_20px]"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-[var(--color-accent)]/20 text-[var(--color-accent)] font-semibold text-sm mb-6 uppercase tracking-wider backdrop-blur-sm border border-[var(--color-accent)]/30">
            Giải bóng đá gia đình
          </span>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight drop-shadow-lg">
            CHÚNG MÌNH CUP <span className="text-[var(--color-primary)]">2026</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 font-medium mb-10 drop-shadow">
            Đoàn kết &bull; Vui vẻ &bull; Fair Play
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-12 text-white/90">
            <div className="flex items-center gap-2 bg-black/20 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10">
              <MapPin className="text-[var(--color-primary)]" size={20} />
              <span className="font-medium">Sân 9 Bé</span>
            </div>
            <div className="flex items-center gap-2 bg-black/20 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10">
              <Calendar className="text-[var(--color-primary)]" size={20} />
              <span className="font-medium">Chủ nhật</span>
            </div>
            <div className="flex items-center gap-2 bg-black/20 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10">
              <Clock className="text-[var(--color-primary)]" size={20} />
              <span className="font-medium">16:00 - 16:45</span>
            </div>
          </div>

          <a 
            href="#timeline"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-[var(--color-primary)] rounded-full hover:bg-[#15803d] transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(22,163,74,0.4)] active:scale-95"
          >
            Xem lịch thi đấu
          </a>
        </motion.div>
      </div>

      {/* Decorative Wave or Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[var(--color-bg)] to-transparent z-10"></div>
    </section>
  );
};

export default Hero;
