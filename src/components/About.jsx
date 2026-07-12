import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, Trophy } from 'lucide-react';

const About = () => {
  return (
    <section className="relative -mt-24 z-20 px-4">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-8 md:p-12 text-center border border-gray-100"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-secondary)] mb-6">
          Giới thiệu giải đấu
        </h2>
        
        <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-2xl mx-auto">
          "Chúng Mình Cup" không chỉ là một giải đấu bóng đá, mà là nơi để gia đình và những người thân yêu cùng nhau tạo nên những kỷ niệm đẹp. Chúng ta đến đây không phải vì chiếc cúp vô địch, mà vì tiếng cười, sự gắn kết và tinh thần thể thao cao thượng.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center p-4 rounded-2xl hover:bg-green-50 transition-colors">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 text-[var(--color-primary)]">
              <Users size={32} />
            </div>
            <h3 className="font-bold text-xl mb-2 text-gray-800">Giao lưu</h3>
            <p className="text-gray-500">Kết nối mọi người lại gần nhau hơn qua từng đường bóng.</p>
          </div>

          <div className="flex flex-col items-center p-4 rounded-2xl hover:bg-orange-50 transition-colors">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4 text-[var(--color-accent)]">
              <Heart size={32} />
            </div>
            <h3 className="font-bold text-xl mb-2 text-gray-800">Gắn kết</h3>
            <p className="text-gray-500">Xây dựng tình cảm gia đình vững chắc và bền chặt.</p>
          </div>

          <div className="flex flex-col items-center p-4 rounded-2xl hover:bg-blue-50 transition-colors">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-blue-500">
              <Trophy size={32} />
            </div>
            <h3 className="font-bold text-xl mb-2 text-gray-800">Fair Play</h3>
            <p className="text-gray-500">Thi đấu hết mình nhưng luôn tôn trọng đối thủ và trọng tài.</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
