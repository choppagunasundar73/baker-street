import React, { useState, useEffect } from 'react';
import { Cake, Facebook, Instagram, Twitter, Menu as MenuIcon, X } from 'lucide-react';
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom';
import ImageCarousel from './components/ImageCarousel';
import Newsletter from './components/Newsletter';
import AboutUs from './pages/AboutUs';
import Menu from './pages/Menu';
import Gallery from './pages/Gallery';
import SpecialCakes from './pages/SpecialCakes';
import Contact from './pages/Contact';
import { motion } from 'framer-motion';
import LoadingScreen from './components/LoadingScreen';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    if (isMenuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }

    return () => {
      document.body.classList.remove('menu-open');
      clearTimeout(timer);
    };
  }, [isMenuOpen]);

  return (
    <Router>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <div className="min-h-screen bg-[#FFF8E7]">
          <nav className="bg-white shadow-sm sticky top-0 z-50 font-sans tracking-wide">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center h-16">
                <div className="flex items-center">
                  <Link to="/" className="flex items-center">
                    <Cake className="h-8 w-8 text-[#8B4513]" />
                    <span className="ml-2 brand-text text-[#8B4513] font-bold text-2xl">Baker Street</span>
                  </Link>
                </div>

                {/* Mobile menu button */}
                <button 
                  className="md:hidden p-2 rounded-md text-[#8B4513] hover:bg-[#FFF8E7]"
                  onClick={toggleMenu}
                  aria-label="Toggle menu"
                >
                  {isMenuOpen ? (
                    <X className="h-6 w-6" />
                  ) : (
                    <MenuIcon className="h-6 w-6" />
                  )}
                </button>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-2">
                  {[
                    { name: 'Home', path: '/' },
                    { name: 'About Us', path: '/about-us' },
                    { name: 'Menu', path: '/menu' },
                    { name: 'Gallery', path: '/gallery' },
                    { name: 'Special Cakes', path: '/special-cakes' },
                    { name: 'Contact', path: '/contact' }
                  ].map((item) => (
                    <NavLink
                      key={item.name}
                      to={item.path}
                      className={({ isActive }) => 
                        `nav-item font-medium ${isActive ? 'active' : ''}`
                      }
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </div>
              </div>

              {/* Mobile Navigation */}
              <div
                className={`md:hidden transition-all duration-300 ease-in-out ${
                  isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                } overflow-hidden`}
              >
                <div className="px-2 pt-2 pb-3 space-y-1">
                  {[
                    { name: 'Home', path: '/' },
                    { name: 'About Us', path: '/about-us' },
                    { name: 'Menu', path: '/menu' },
                    { name: 'Gallery', path: '/gallery' },
                    { name: 'Special Cakes', path: '/special-cakes' },
                    { name: 'Contact', path: '/contact' }
                  ].map((item) => (
                    <NavLink
                      key={item.name}
                      to={item.path}
                      className={({ isActive }) => 
                        `block nav-item font-medium ${isActive ? 'active' : ''}`
                      }
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </div>
              </div>
            </div>
          </nav>

          {/* Overlay for mobile menu */}
          {isMenuOpen && (
            <div
              className="fixed inset-0 bg-black bg-opacity-25 md:hidden z-40"
              onClick={() => setIsMenuOpen(false)}
            ></div>
          )}

          <main>
            <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/special-cakes" element={<SpecialCakes />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </div>
          </main>

          <footer className="footer">
            <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div>
                  <h3 className="footer-brand">Baker Street</h3>
                  <p className="footer-tagline">Crafting memories, one bite at a time.</p>
                </div>
                
                <div>
                  <h3 className="footer-heading">Quick Links</h3>
                  <ul className="space-y-2">
                    {['About Us', 'Menu', 'Gallery', 'Contact'].map((item) => (
                      <li key={item}>
                        <Link 
                          to={`/${item.toLowerCase().replace(' ', '-')}`} 
                          className="footer-link"
                        >
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="footer-heading">Contact Us</h3>
                  <address className="footer-contact not-italic space-y-1">
                    <p>123 Baker Street</p>
                    <p>City, State 12345</p>
                    <p>Phone: (123) 456-7890</p>
                    <p>Email: info@bakerstreet.com</p>
                  </address>
                </div>
                
                <div>
                  <h3 className="footer-heading">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="footer-social">
                      <Facebook className="h-5 w-5" />
                    </a>
                    <a href="#" className="footer-social">
                      <Instagram className="h-5 w-5" />
                    </a>
                    <a href="#" className="footer-social">
                      <Twitter className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
              
              <Newsletter />
              
              <div className="footer-bottom">
                <p>&copy; 2025 Baker Street. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </div>
      )}
    </Router>
  );
};

function Home() {
  const featuredProducts = [
    {
      name: 'Artisan Sourdough',
      description: 'Naturally leavened for 24 hours, with a perfect crispy crust',
      price: '$6.99',
      image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&w=600&q=80'
    },
    {
      name: 'Croissants',
      description: 'Buttery French pastries',
      price: '$3.99',
      image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=600&q=80'
    },
    {
      name: 'Birthday Cake',
      description: 'Custom celebration cakes',
      price: 'From $29.99',
      image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80'
    },
    {
      name: 'Muffins',
      description: 'Fresh baked daily',
      price: '$2.99',
      image: 'https://images.unsplash.com/photo-1558401391-7899b4bd5bbf?auto=format&fit=crop&w=600&q=80'
    }
  ];

  return (
    <div className="space-y-16">
      <section className="text-center px-4 sm:px-6 lg:px-8">
        <h1 className="mb-6">Welcome to Baker Street</h1>
        <p className="tagline max-w-2xl mx-auto mb-8 leading-relaxed">
          Crafting artisanal breads and pastries with passion since 1995
        </p>
        <div className="carousel-container">
          <ImageCarousel />
        </div>
      </section>

      <section className="container">
        <h2 className="text-center mb-8">Featured Creations</h2>
        <div className="grid">
          {featuredProducts.map((product) => (
            <motion.div
              key={product.name}
              className="card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full transition-transform duration-300"
                />
              </div>
              <div className="card-content">
                <h3 className="mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-[#8B4513] font-bold">{product.price}</span>
                  <button className="btn">
                    Order Now
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-white py-12 rounded-lg">
        <h2 className="text-3xl font-bold text-[#8B4513] text-center mb-8">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto px-4">
          {[
            {
              name: 'Sarah Johnson',
              comment: '"The best bakery in town! Their sourdough bread is amazing"',
              rating: 5
            },
            {
              name: 'Michael Chen',
              comment: '"Ordered a custom cake for my daughter\'s birthday, it was perfect!"',
              rating: 5
            },
            {
              name: 'Emily Williams',
              comment: '"Fresh pastries every morning. My favorite breakfast spot."',
              rating: 4
            }
          ].map((testimonial) => (
            <div key={testimonial.name} className="bg-[#FFF8E7] p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="ml-3">
                  <h3 className="text-lg font-semibold text-[#8B4513]">{testimonial.name}</h3>
                  <div className="flex text-yellow-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic">{testimonial.comment}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
