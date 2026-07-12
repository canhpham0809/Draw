import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[var(--color-secondary)] text-white/70 py-12 text-center mt-20 border-t border-white/10">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-white mb-2">Chúng Mình Cup 2026</h2>
        <p className="text-lg font-medium text-[var(--color-accent)] mb-6">
          Đá vui - Gắn kết - Yêu thương ❤️
        </p>
        <div className="w-16 h-1 bg-[var(--color-primary)] mx-auto mb-6 rounded-full"></div>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Giải bóng đá gia đình Chúng Mình. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
