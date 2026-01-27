const Hero = () => {
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const openTelegram = () => {
    const message = 'Здравствуйте! Видел ваш сайт, хочу получить консультацию по строительству.';
    const username = 'stroydom_consultant'; // ЗАМЕНИ НА СВОЙ
    window.open(`https://t.me/${username}?start=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    
    <section id="home" className="relative pt-24 md:pt-0 min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: 'url("/cbs_background_1_black_opacity.webp")',
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10 text-center text-white">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Строительство 
            <span className="text-yellow-400"> под ключ </span> 
             Владимир и область
            
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Профессиональное строительство домов, ремонт квартир 
            и отделочные работы. 10 лет на рынке. Гарантия 5 лет.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={openTelegram}
              className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-4 px-8 rounded-lg text-lg transition duration-200 transform hover:scale-105 cursor-pointer"
            >
             Бесплатная консультация
            </button>
            
            <button
              onClick={() => scrollTo('portfolio')}
              className="bg-transparent border-2 border-white hover:bg-white/10 text-white font-bold py-4 px-8 rounded-lg text-lg transition duration-200 cursor-pointer"
            >
              Смотреть работы
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            {[
              { number: '10+', text: 'лет опыта' },
              { number: '100+', text: 'проектов' },
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