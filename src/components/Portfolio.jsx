import { useState } from 'react';
import { 
  FaExpand, 
  FaChevronLeft, 
  FaChevronRight,
  FaHome,
  FaBuilding,
  FaPaintRoller,
  FaTools,
  FaStar,
  FaCalendarAlt
} from 'react-icons/fa';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Категории работ
  const categories = [
    { id: 'all', name: 'Все работы', icon: <FaStar /> },
    { id: 'houses', name: 'Дома', icon: <FaHome /> },
    { id: 'apartments', name: 'Квартиры', icon: <FaBuilding /> },
    { id: 'renovation', name: 'Ремонт', icon: <FaPaintRoller /> },
    { id: 'commercial', name: 'Коммерция', icon: <FaBuilding /> },
  ];

  // Проекты
  const projects = [
    {
      id: 1,
      title: 'Коттедж в Подмосковье',
      description: 'Дом 250 м² из газобетона с мансардой и террасой',
      category: 'houses',
      year: '2023',
      area: '250 м²',
      duration: '8 месяцев',
      features: ['Газобетон', 'Мансарда', 'Терраса', 'Тёплый пол'],
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80',
      images: [
        'https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80',
        'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80',
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2053&q=80'
      ]
    },
    {
      id: 2,
      title: 'Ремонт квартиры в Москве',
      description: 'Трехкомнатная квартира 85 м², евроремонт с дизайн-проектом',
      category: 'apartments',
      year: '2023',
      area: '85 м²',
      duration: '3 месяца',
      features: ['Евроремонт', 'Дизайн-проект', 'Умный дом', 'Кондиционирование'],
      image: 'https://images.unsplash.com/photo-1615529328331-f8917597711f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      images: [
        'https://images.unsplash.com/photo-1615529328331-f8917597711f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2058&q=80'
      ]
    },
    {
      id: 3,
      title: 'Загородный дом',
      description: 'Каркасный дом 180 м² с большой террасой и панорамными окнами',
      category: 'houses',
      year: '2022',
      area: '180 м²',
      duration: '6 месяцев',
      features: ['Каркасная технология', 'Панорамные окна', 'Терраса', 'Камин'],
      image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      images: [
        'https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
      ]
    },
    {
      id: 4,
      title: 'Офисный ремонт',
      description: 'Бизнес-центр, 500 м² открытого пространства с перегородками',
      category: 'commercial',
      year: '2022',
      area: '500 м²',
      duration: '4 месяца',
      features: ['Open space', 'Переговорные', 'Ресепшен', 'Система вентиляции'],
      image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80',
      images: [
        'https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80'
      ]
    },
    {
      id: 5,
      title: 'Косметический ремонт',
      description: 'Обновление квартиры с заменой отделочных материалов',
      category: 'renovation',
      year: '2023',
      area: '65 м²',
      duration: '1.5 месяца',
      features: ['Замена полов', 'Покраска стен', 'Новая сантехника', 'Освещение'],
      image: 'https://images.unsplash.com/photo-1558036117-15e82a2c9a9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      images: [
        'https://images.unsplash.com/photo-1558036117-15e82a2c9a9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
      ]
    },
    {
      id: 6,
      title: 'Ресторанный комплекс',
      description: 'Полный ремонт и отделка ресторана на 150 посадочных мест',
      category: 'commercial',
      year: '2024',
      area: '350 м²',
      duration: '5 месяцев',
      features: ['Кухня профессиональная', 'Зал VIP', 'Терраса летняя', 'Освещение'],
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      images: [
        'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
      ]
    },
  ];

  // Фильтрация проектов по категории
  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  // Открытие модального окна с изображением
  const openModal = (project, index = 0) => {
    setSelectedImage(project);
    setCurrentIndex(index);
    document.body.style.overflow = 'hidden'; // Блокируем скролл страницы
  };

  // Закрытие модального окна
  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto'; // Возвращаем скролл
  };

  // Навигация по изображениям в модалке
  const nextImage = () => {
    if (selectedImage) {
      setCurrentIndex((prev) => 
        prev === selectedImage.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedImage) {
      setCurrentIndex((prev) => 
        prev === 0 ? selectedImage.images.length - 1 : prev - 1
      );
    }
  };

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Заголовок раздела */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Наши работы
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Реализованные проекты, которые говорят сами за себя. 
            Каждая работа — это пример нашего профессионализма и внимания к деталям.
          </p>
        </div>

        {/* Фильтры по категориям */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center gap-2 px-5 py-3 rounded-full font-medium transition-all duration-200 ${
                selectedCategory === category.id
                  ? 'bg-blue-800 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
              }`}
            >
              <span className="text-lg">{category.icon}</span>
              <span>{category.name}</span>
              {selectedCategory === category.id && (
                <span className="ml-1 text-sm opacity-90">
                  ({filteredProjects.length})
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Сетка проектов */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            >
              {/* Изображение проекта */}
              <div 
                className="relative h-64 overflow-hidden cursor-pointer"
                onClick={() => openModal(project, 0)}
              >
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 right-4">
                    <div className="bg-white/20 backdrop-blur-sm p-2 rounded-full">
                      <FaExpand className="text-white text-xl" />
                    </div>
                  </div>
                </div>
                
                {/* Бэдж категории */}
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-800 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {categories.find(c => c.id === project.category)?.name}
                  </span>
                </div>
              </div>

              {/* Контент проекта */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                  <span className="bg-yellow-100 text-yellow-800 text-sm font-semibold px-3 py-1 rounded-full">
                    {project.year}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                {/* Характеристики */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="flex items-center text-gray-700">
                    <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center mr-2">
                      <span className="text-gray-600">📐</span>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Площадь</div>
                      <div className="font-semibold">{project.area}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-gray-700">
                    <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center mr-2">
                      <FaCalendarAlt className="text-gray-600" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Срок</div>
                      <div className="font-semibold">{project.duration}</div>
                    </div>
                  </div>
                </div>
                
                {/* Особенности */}
                <div className="mb-6">
                  <div className="text-sm text-gray-500 mb-2">Особенности:</div>
                  <div className="flex flex-wrap gap-2">
                    {project.features.map((feature, idx) => (
                      <span 
                        key={idx} 
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Кнопки */}
                <div className="flex gap-3">
                  <button 
                    onClick={() => openModal(project, 0)}
                    className="flex-1 bg-blue-800 hover:bg-blue-900 text-white font-semibold py-3 rounded-lg transition duration-200 flex items-center justify-center gap-2"
                  >
                    <FaExpand />
                    Посмотреть все фото
                  </button>
                  <button className="px-4 bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-3 rounded-lg transition duration-200">
                    Подробнее
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Кнопка показать больше */}
        {filteredProjects.length > 0 && (
          <div className="text-center mt-12">
            <button className="inline-flex items-center bg-white hover:bg-gray-50 text-gray-800 font-bold py-4 px-8 rounded-lg border-2 border-gray-200 transition duration-200 hover:border-gray-300">
              Показать ещё проекты
              <span className="ml-2">↓</span>
            </button>
          </div>
        )}
      </div>

      {/* Модальное окно с изображением */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-[100] flex items-center justify-center p-4 animate-fadeIn">
          <div className="relative max-w-6xl w-full max-h-[90vh]">
            {/* Кнопка закрытия */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition duration-200"
            >
              ✕
            </button>
            
            {/* Навигационные кнопки */}
            {selectedImage.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition duration-200"
                >
                  <FaChevronLeft />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition duration-200"
                >
                  <FaChevronRight />
                </button>
              </>
            )}
            
            {/* Изображение */}
            <img
              src={selectedImage.images[currentIndex]}
              alt={selectedImage.title}
              className="w-full h-full object-contain max-h-[70vh] rounded-lg"
            />
            
            {/* Информация о проекте */}
            <div className="mt-6 bg-white rounded-lg p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{selectedImage.title}</h3>
                  <p className="text-gray-600">{selectedImage.description}</p>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-500">Фото {currentIndex + 1} из {selectedImage.images.length}</div>
                </div>
              </div>
              
              {/* Индикатор изображений */}
              <div className="flex gap-2 justify-center mt-4">
                {selectedImage.images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`w-3 h-3 rounded-full transition duration-200 ${
                      idx === currentIndex ? 'bg-blue-800' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CSS анимации */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </section>
  );
};

export default Portfolio;