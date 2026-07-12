import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const rules = [
  { title: 'Thời gian', content: 'Thi đấu 2 hiệp, mỗi hiệp 20 phút. Nghỉ giữa hiệp 5 phút.' },
  { title: 'Thay người', content: 'Thay người tự do không giới hạn số lượng. Người thay ra có thể vào lại.' },
  { title: 'Thủ môn', content: 'Thủ môn không được dùng tay bắt bóng khi đồng đội cố ý chuyền về bằng chân.' },
  { title: 'Đá biên', content: 'Đá biên bằng chân. Cầu thủ có thể sút thẳng vào lưới từ quả đá biên.' },
  { title: 'Phạm lỗi', content: 'Không xoạc bóng, không chơi xấu. Ưu tiên bảo vệ đôi chân của nhau.' },
  { title: 'Thẻ phạt', content: 'Thẻ vàng phạt 50k, thẻ đỏ phạt 100k (đóng vào quỹ liên hoan).' },
];

const Rules = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="rules" className="scroll-mt-24">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-[var(--color-secondary)] mb-2">Luật Thi Đấu</h2>
        <p className="text-gray-500">Quy định sân cỏ cần nhớ</p>
      </div>

      <div className="space-y-3">
        {rules.map((rule, index) => (
          <div key={index} className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm">
            <button
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              className="w-full flex items-center justify-between p-4 text-left font-semibold text-gray-800 hover:bg-gray-50 transition-colors"
            >
              <span>{rule.title}</span>
              <motion.div
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown size={20} className="text-gray-400" />
              </motion.div>
            </button>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-4 pb-4 text-gray-600 bg-gray-50/50"
                >
                  {rule.content}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Rules;
