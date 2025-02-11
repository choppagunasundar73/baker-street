import React from 'react';

export default function Menu() {
  const menuCategories = [
    {
      title: 'Breads',
      items: [
        { name: 'Sourdough', price: '$5.99', description: 'Traditional fermented bread' },
        { name: 'Whole Wheat', price: '$4.99', description: 'Healthy whole grain bread' },
        { name: 'Rye', price: '$5.49', description: 'Classic European-style rye bread' },
        { name: 'Baguette', price: '$3.99', description: 'French-style crusty bread' }
      ]
    },
    {
      title: 'Pastries',
      items: [
        { name: 'Croissant', price: '$2.99', description: 'Buttery French pastry' },
        { name: 'Danish', price: '$3.49', description: 'Fruit-filled pastry' },
        { name: 'Muffin', price: '$2.49', description: 'Fresh baked daily' },
        { name: 'Scone', price: '$2.99', description: 'Traditional British pastry' }
      ]
    },
    {
      title: 'Cakes',
      items: [
        { name: 'Chocolate', price: '$24.99', description: 'Rich chocolate layer cake' },
        { name: 'Carrot', price: '$22.99', description: 'Classic carrot cake with cream cheese frosting' },
        { name: 'Red Velvet', price: '$26.99', description: 'Southern classic with cream cheese frosting' },
        { name: 'Vanilla', price: '$21.99', description: 'Light and fluffy vanilla cake' }
      ]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto py-8">
      <h1 className="text-4xl font-bold text-[#8B4513] mb-8 text-center">Our Menu</h1>
      
      <div className="space-y-8">
        {menuCategories.map((category) => (
          <div key={category.title} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-[#8B4513] text-white py-4 px-6">
              <h2 className="text-2xl font-semibold">{category.title}</h2>
            </div>
            <div className="p-6">
              <div className="grid gap-6">
                {category.items.map((item) => (
                  <div key={item.name} className="flex justify-between items-center">
                    <div>
                      <h3 className="font-semibold text-[#8B4513]">{item.name}</h3>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="font-bold text-[#8B4513]">{item.price}</span>
                      <button className="bg-[#8B4513] text-white px-4 py-2 rounded hover:bg-[#A0522D] transition-colors">
                        Order
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}