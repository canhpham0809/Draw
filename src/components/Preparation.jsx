import React from 'react';
import { motion } from 'framer-motion';
import { Shirt, Package, Flag, Box } from 'lucide-react';

const prepItems = [
  { icon: Shirt, title: 'Đồng phục', desc: 'Đội trưởng phát áo tại sân, tự túc quần áo lót, giày, tất.' },
  { icon: Package, title: 'BTC chuẩn bị', desc: 'Nước suối, trái cây (chuối), cúp lưu niệm.' },
  { icon: Flag, title: 'Trọng tài', desc: 'Sẽ có còi và thẻ để điều hành trận đấu công bằng.' },
  { icon: Box, title: 'Dụng cụ', desc: 'Bóng thi đấu, găng tay thủ môn (tự mang nếu có).' },
];

const Preparation = () => {
  return (
    <section>
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-[var(--color-secondary)] mb-2">Công Tác Chuẩn Bị</h2>
        <p className="text-gray-500">Cần chuẩn bị những gì?</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {prepItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex gap-4 hover:border-[var(--color-primary)] transition-colors"
            >
              <div className="text-[var(--color-primary)] shrink-0">
                <Icon size={24} />
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-1">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-snug">{item.desc}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Preparation;
