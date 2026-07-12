import React from 'react';
import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';

const teams = [
  {
    name: 'Đội Xanh',
    color: 'bg-blue-500',
    lightColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    textColor: 'text-blue-700',
    captain: 'Ba Tý',
    players: [
      { name: 'Anh Hai', icon: '👨' },
      { name: 'Cậu Ba', icon: '👨' },
      { name: 'Dì Út', icon: '👩' },
      { name: 'Bé Na', icon: '🧒' },
      { name: 'Bé Tèo', icon: '🧒' },
    ]
  },
  {
    name: 'Đội Đỏ',
    color: 'bg-red-500',
    lightColor: 'bg-red-50',
    borderColor: 'border-red-200',
    textColor: 'text-red-700',
    captain: 'Chú Tư',
    players: [
      { name: 'Anh Ba', icon: '👨' },
      { name: 'Cô Năm', icon: '👩' },
      { name: 'Bé Mập', icon: '🧒' },
      { name: 'Bé Còi', icon: '🧒' },
      { name: 'Dượng Sáu', icon: '👨' },
    ]
  }
];

const Teams = () => {
  return (
    <section id="teams" className="scroll-mt-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-secondary)] mb-4">Hai Đội Thi Đấu</h2>
        <p className="text-gray-500">Danh sách các siêu sao tham gia tranh tài</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {teams.map((team, index) => (
          <motion.div
            key={team.name}
            initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className={`bg-white rounded-3xl shadow-lg border-2 ${team.borderColor} overflow-hidden hover:shadow-xl transition-shadow`}
          >
            {/* Team Header */}
            <div className={`${team.color} p-6 text-white text-center relative`}>
              <div className="absolute inset-0 bg-black/10"></div>
              <h3 className="relative text-3xl font-black tracking-wide mb-2">{team.name}</h3>
              <div className="relative inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full text-sm font-medium">
                <Shield size={16} />
                Đội trưởng: {team.captain}
              </div>
            </div>

            {/* Players List */}
            <div className="p-6">
              <ul className="space-y-3">
                {team.players.map((player, pIdx) => (
                  <li 
                    key={pIdx} 
                    className={`flex items-center justify-between p-4 rounded-xl ${team.lightColor} border ${team.borderColor}`}
                  >
                    <span className="font-semibold text-gray-700">{player.name}</span>
                    <span className="text-2xl" title="Player Icon">{player.icon}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Teams;
