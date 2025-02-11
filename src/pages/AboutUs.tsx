import React from 'react';

export default function AboutUs() {
  return (
    <div className="max-w-4xl mx-auto py-8">
      <h1 className="text-4xl font-bold text-[#8B4513] mb-8 text-center">About Us</h1>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=1200&q=80"
          alt="Our bakery"
          className="w-full h-72 object-cover"
        />
        
        <div className="p-8 space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-[#8B4513] mb-4">Our Story</h2>
            <p className="text-gray-700">
              Founded in 2010, Baker Street has been crafting artisanal breads and pastries with passion and dedication.
              Our journey began with a simple mission: to bring the authentic taste of traditional baking to our community.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#8B4513] mb-4">Our Philosophy</h2>
            <p className="text-gray-700">
              We believe in using only the finest ingredients and traditional baking methods to create products that
              not only taste exceptional but also bring people together. Every item is crafted with care and attention
              to detail.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#8B4513] mb-4">Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  name: 'Master Baker',
                  role: 'Head Baker',
                  image: 'https://images.unsplash.com/photo-1583394293214-28ded15ee548?auto=format&fit=crop&w=300&q=80'
                },
                {
                  name: 'Pastry Chef',
                  role: 'Head Pastry Chef',
                  image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=300&q=80'
                },
                {
                  name: 'Cake Artist',
                  role: 'Head Cake Designer',
                  // New image for Cake Artist sourced from Unsplash
                  image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=300&q=80'
                }
              ].map((member) => (
                <div key={member.role} className="text-center">
                  <img
                    src={member.image}
                    alt={member.role}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="font-semibold text-[#8B4513]">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
