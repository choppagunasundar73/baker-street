import React from 'react';

export default function SpecialCakes() {
  const cakes = [
    {
      title: 'Wedding Cake',
      description: 'Elegant multi-tiered cake for your special day',
      image: 'https://images.unsplash.com/photo-1623428454614-abaf00244e52?auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Birthday Cake',
      description: 'Customized cakes for memorable celebrations',
      image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Anniversary Cake',
      description: 'Romantic designs for couples',
      image: 'https://images.unsplash.com/photo-1535254973040-607b474cb50d?auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Corporate Event Cake',
      description: 'Impress your clients and colleagues',
      image: 'https://images.unsplash.com/photo-1595272568891-123402d0fb3b?auto=format&fit=crop&w=600&q=80'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto py-8">
      <h1 className="text-4xl font-bold text-[#8B4513] mb-8 text-center">Special Cakes</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {cakes.map((cake) => (
          <div key={cake.title} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={cake.image}
              alt={cake.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-[#8B4513] mb-2">{cake.title}</h2>
              <p className="text-gray-600 mb-4">{cake.description}</p>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-[#8B4513]">Customization Options:</span>
                  <span className="text-sm text-gray-600">Size, Flavors, Design, Colors</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-[#8B4513]">Lead Time:</span>
                  <span className="text-sm text-gray-600">1-2 weeks advance notice required</span>
                </div>
                <button className="w-full bg-[#8B4513] text-white py-2 rounded hover:bg-[#A0522D] transition-colors">
                  Request Quote
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}