import React from 'react';
import { motion } from 'framer-motion';

const awards = [
  { icon: '🏆', title: 'Vua phá lưới' },
  { icon: '🧤', title: 'Thủ môn xuất sắc' },
  { icon: '⚡', title: 'Cầu thủ năng nổ' },
  { icon: '😂', title: 'Pha xử lý khó hiểu' },
  { icon: '🎯', title: 'Bàn thắng đẹp' },
  { icon: '👏', title: 'Fair Play' },
  { icon: '📸', title: 'Khoảnh khắc đẹp nhất' },
];

const Awards = () => {
  return (
    <section className="bg-gradient-to-r from-[var(--color-secondary)] to-[#1e293b] rounded-3xl p-8 md:p-12 text-white shadow-xl relative overflow-hidden">
      {/* Decorative bg elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-[var(--color-primary)]/20 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="relative z-10 text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Các Danh Hiệu Vui</h2>
        <p className="text-white/80">Không chỉ có cúp vàng, còn rất nhiều giải thưởng thú vị đang chờ!</p>
      </div>

      <div className="relative z-10 flex flex-wrap justify-center gap-4">
        {awards.map((award, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/10 hover:bg-white/20 transition-colors"
          >
            <span className="text-2xl">{award.icon}</span>
            <span className="font-semibold">{award.title}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Awards;
