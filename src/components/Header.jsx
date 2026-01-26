import { Link } from 'react-scroll';

const Header = () => {
  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-blue-800">СтройДом</h1>
            <p className="text-sm text-gray-600">Строительная компания</p>
          </div>
          
          <nav className="hidden md:flex space-x-6">
            <Link to="home" smooth={true} className="cursor-pointer hover:text-blue-600">Главная</Link>
            <Link to="services" smooth={true} className="cursor-pointer hover:text-blue-600">Услуги</Link>
            <Link to="portfolio" smooth={true} className="cursor-pointer hover:text-blue-600">Портфолио</Link>
            <Link to="contact" smooth={true} className="cursor-pointer hover:text-blue-600">Контакты</Link>
          </nav>
          
          <a href="tel:+79991234567" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Позвонить
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;