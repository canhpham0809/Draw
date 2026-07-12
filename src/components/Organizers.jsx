import React from 'react';
import { motion } from 'framer-motion';

// Need to update import based on available Lucide icons.
import { Flag, Camera as CameraIcon, Megaphone as MegaphoneIcon } from 'lucide-react';

const Organizers = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-secondary)] mb-4">Ban Tổ Chức</h2>
        <p className="text-gray-500">Những người thầm lặng góp phần thành công</p>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        <motion.div variants={itemVariants} className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 flex flex-col items-center text-center hover:-translate-y-2 transition-transform">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4">
            <Flag size={28} />
          </div>
          <h3 className="font-bold text-xl mb-1 text-gray-800">Trọng tài</h3>
          <p className="text-gray-600 font-medium">Hùng</p>
        </motion.div>

        <motion.div variants={itemVariants} className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 flex flex-col items-center text-center hover:-translate-y-2 transition-transform">
          <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 mb-4">
            <CameraIcon size={28} />
          </div>
          <h3 className="font-bold text-xl mb-1 text-gray-800">Camera man</h3>
          <p className="text-gray-600 font-medium">Chú Nghĩa</p>
        </motion.div>

        <motion.div variants={itemVariants} className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 flex flex-col items-center text-center hover:-translate-y-2 transition-transform">
          <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center text-pink-600 mb-4">
            <MegaphoneIcon size={28} />
          </div>
          <h3 className="font-bold text-xl mb-3 text-gray-800">Đội cổ vũ</h3>
          <div className="flex flex-wrap justify-center gap-2">
            {['Ông ngoại', 'Chôm Chôm', 'Xuka', 'Hương', 'Tuyền'].map(name => (
              <span key={name} className="px-3 py-1 bg-pink-50 text-pink-700 rounded-full text-sm font-medium">
                {name}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Organizers;
