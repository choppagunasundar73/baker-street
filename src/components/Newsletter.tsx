import React, { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  return (
    <div className="mt-8 pt-8 border-t border-[#A0522D]">
      <div className="max-w-md mx-auto text-center">
        <h3 className="text-lg font-semibold mb-4">Subscribe to Our Newsletter</h3>
        <p className="text-sm mb-4">Stay updated with our latest products and special offers!</p>
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 px-4 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
            required
          />
          <button
            type="submit"
            className="px-4 py-2 bg-white text-[#8B4513] rounded-md hover:bg-white/90 transition-colors"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}