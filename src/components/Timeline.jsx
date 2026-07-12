import React from 'react';
import { motion } from 'framer-motion';

const schedule = [
  { time: '15:30', event: 'Có mặt tại sân', isBreak: false },
  { time: '15:40', event: 'Khởi động', isBreak: false },
  { time: '15:45', event: 'Phát áo + chia đội', isBreak: false },
  { time: '15:55', event: 'Chụp hình', isBreak: false },
  { time: '16:00', event: 'Khai cuộc (Hiệp 1)', highlight: true, isBreak: false },
  { time: '16:20', event: 'Nghỉ giữa hiệp', isBreak: true },
  { time: '16:25', event: 'Hiệp 2', highlight: true, isBreak: false },
  { time: '16:45', event: 'Kết thúc', highlight: true, isBreak: false },
];

const Timeline = () => {
  return (
    <section id="timeline" className="scroll-mt-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-secondary)] mb-4">Lịch Trình</h2>
        <p className="text-gray-500">Thời gian vàng ngọc của chúng ta</p>
      </div>

      <div className="max-w-2xl mx-auto px-4">
        <div className="relative border-l-2 border-[var(--color-primary)]/30 ml-4 md:ml-0 md:left-1/2 md:-translate-x-1/2">
          {schedule.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`mb-8 relative ${
                index % 2 === 0 ? 'md:pr-12 md:text-right md:mr-auto' : 'md:pl-12 md:ml-auto'
              } md:w-1/2 pl-8 ml-0`}
            >
              {/* Timeline Dot */}
              <div className={`absolute top-1 w-4 h-4 rounded-full border-4 border-white shadow-sm left-[-9px] md:left-auto ${
                index % 2 === 0 ? 'md:-right-[9px]' : 'md:-left-[9px]'
              } ${item.highlight ? 'bg-[var(--color-accent)]' : 'bg-[var(--color-primary)]'}`}></div>
              
              {/* Content Box */}
              <div className={`bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow ${
                item.isBreak ? 'opacity-70 bg-gray-50 dashed-border' : ''
              } ${
                item.highlight ? 'border-[var(--color-accent)]/50' : ''
              }`}>
                <div className="font-bold text-[var(--color-primary)] text-lg mb-1">{item.time}</div>
                <div className="text-gray-700 font-medium">{item.event}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
