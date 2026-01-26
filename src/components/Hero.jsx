const Hero = () => {
  return (
    <section id="home" className="pt-20 min-h-screen bg-gradient-to-br from-blue-900 to-gray-900 text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Качественное строительство под ключ
          </h1>
          <p className="text-xl mb-8">
            Профессиональное строительство домов и ремонт квартир с гарантией качества
          </p>
          <div className="flex space-x-4">
            <button className="bg-red-600 hover:bg-red-700 px-8 py-3 rounded-lg font-semibold">
              Заказать консультацию
            </button>
            <button className="bg-transparent border-2 border-white hover:bg-white/10 px-8 py-3 rounded-lg">
              Наши работы
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;