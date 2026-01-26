import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Фоновое изображение */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      
      {/* Контент */}
      <div className="container mx-auto px-4 relative z-10 text-center text-white">
        <div className="max-w-3xl mx-auto">
          {/* Заголовок */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Строительство 
            <span className="text-yellow-400"> под ключ</span> Владимир и область
           
          </h1>
          
          {/* Подзаголовок */}
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Профессиональное строительство домов, ремонт квартир 
            и отделочные работы. 15 лет на рынке. Гарантия 5 лет.
          </p>
          
          {/* Кнопки */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-4 px-8 rounded-lg text-lg transition duration-300 transform hover:scale-105 cursor-pointer"
            >
              Бесплатная консультация
            </Link>
            
            <Link
              to="portfolio"
              smooth={true}
              duration={500}
              className="bg-transparent border-2 border-white hover:bg-white/10 text-white font-bold py-4 px-8 rounded-lg text-lg transition duration-300 cursor-pointer"
            >
              Смотреть работы
            </Link>
          </div>
          
          {/* Преимущества */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            {[
              { number: '15+', text: 'лет опыта' },
              { number: '200+', text: 'проектов' },
              { number: '5 лет', text: 'гарантии' },
            ].map((item, index) => (
              <div 
                key={index} 
                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20"
              >
                <div className="text-3xl font-bold text-yellow-400 mb-2">{item.number}</div>
                <div className="text-lg">{item.text}</div>
              </div>
            ))}
          </div>
        </div>
        
       
      </div>
    </section>
  );
};

export default Hero;