import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services'; 
import Portfolio from './components/Portfolio';
import About from './components/About';
import Clients from './components/Clients';


function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Portfolio /> 
      <Clients />
      <About />      
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© 2026 Строительная компания ООО "СВК"</p>
        </div>
      </footer>
    </div>
  );
}

export default App;