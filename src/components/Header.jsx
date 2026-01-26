import { useState, useEffect } from 'react';
import { FaPhone, FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Следим за активным разделом для подсветки меню
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'portfolio', 'about', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Быстрый скролл
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const navItems = [
    { name: 'Главная', id: 'home' },
    { name: 'Услуги', id: 'services' },
    { name: 'Портфолио', id: 'portfolio' },
    { name: 'О нас', id: 'about' },
    { name: 'Контакты', id: 'contact' },
  ];

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Логотип */}
          <div 
            className="flex items-center space-x-2 cursor-pointer group" 
            onClick={() => scrollTo('home')}
          >
            <div className="w-10 h-10 bg-blue-800 rounded-lg flex items-center justify-center group-hover:bg-blue-900 transition-colors duration-200">
              <span className="text-white font-bold text-xl">С</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">СтройДом</h1>
              <p className="text-sm text-gray-600">Строительная компания</p>
            </div>
          </div>

          {/* Десктопное меню */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollTo(item.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  activeSection === item.id
                    ? 'bg-blue-100 text-blue-800'
                    : 'text-gray-700 hover:bg-gray-100 hover:text-blue-800'
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Контактный телефон */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="tel:+79991234567" 
              className="flex items-center space-x-2 bg-blue-800 text-white px-5 py-2.5 rounded-lg hover:bg-blue-900 transition-all duration-200 hover:scale-105 active:scale-95"
            >
              <FaPhone />
              <span className="font-semibold">+7 (999) 123-45-67</span>
            </a>
          </div>

          {/* Мобильное меню кнопка */}
          <button 
            className="md:hidden text-2xl text-gray-700 p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Мобильное меню */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 bg-white rounded-lg shadow-lg animate-slideDown">
            <div className="flex flex-col space-y-1 p-2">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollTo(item.id)}
                  className={`px-4 py-3 text-left rounded-lg font-medium transition-colors duration-200 ${
                    activeSection === item.id
                      ? 'bg-blue-100 text-blue-800'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <a 
                href="tel:+79991234567" 
                className="flex items-center justify-center space-x-2 bg-blue-800 text-white px-4 py-3 rounded-lg mt-2 hover:bg-blue-900 transition-colors duration-200"
              >
                <FaPhone />
                <span className="font-semibold">Позвонить сейчас</span>
              </a>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideDown {
          animation: slideDown 0.2s ease-out;
        }
      `}</style>
    </header>
  );
};

export default Header;