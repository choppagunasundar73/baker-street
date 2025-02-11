import React from 'react';
import { motion } from 'framer-motion';

const Gallery = () => {
  const images = [
    {
      url: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=80',
      title: 'Sourdough Bread',
      description: 'Naturally leavened, perfectly fermented'
    },
    {
      url: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=600&q=80',
      title: 'Fresh Croissants',
      description: 'Deliciously flaky and buttery'
    },
    {
      url: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80',
      title: 'Birthday Cake',
      description: 'A sweet and moist cake for special occasions'
    },
    {
      url: 'https://images.unsplash.com/photo-1558401391-7899b4bd5bbf?auto=format&fit=crop&w=600&q=80',
      title: 'Muffins',
      description: 'Moist and flavorful muffins'
    },
    {
      url: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80',
      title: 'Bread Selection',
      description: 'A variety of breads to choose from'
    },
    {
      url: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=1200&q=80',
      title: 'Our Bakery',
      description: 'The place where all the magic happens'
    }
  ];

  return (
    <div className="container">
      <h1 className="text-center mb-12">Our Gallery</h1>
      <div className="grid">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="overflow-hidden">
              <img 
                src={image.url} 
                alt={image.description}
                className="w-full transition-transform duration-300"
              />
            </div>
            <div className="card-content">
              <h3 className="mb-2">{image.title}</h3>
              <p className="text-gray-600">{image.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;