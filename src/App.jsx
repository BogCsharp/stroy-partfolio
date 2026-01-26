import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services'; 
import Portfolio from './components/Portfolio';


function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Portfolio /> 
      
      {/* Временно оставляем остальной контент пока не создали компоненты */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-12">Услуги (компонент в разработке)</h2>
          <p className="text-gray-600">Здесь скоро будут услуги...</p>
        </div>
      </section>
      
      <section id="portfolio" className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-12">Портфолио (компонент в разработке)</h2>
          <p className="text-gray-600">Здесь скоро будут наши работы...</p>
        </div>
      </section>
      
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-12">Контакты (компонент в разработке)</h2>
          <p className="text-gray-600">Здесь скоро будут контакты и форма...</p>
        </div>
      </section>
      
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© 2024 Строительная компания "СтройДом"</p>
        </div>
      </footer>
    </div>
  );
}

export default App;