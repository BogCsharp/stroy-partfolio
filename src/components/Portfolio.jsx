import { useState } from 'react';
import { 
  FaExpand, 
  FaChevronLeft, 
  FaChevronRight,
  FaCalendarAlt,
  FaRulerCombined
} from 'react-icons/fa';

const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      id: 1,
      title: 'Комплекс мероприятий по возведению монолитных конструкций',
      description: 'Подготовка основания, монтаж опалубки, армирование, укладку/уплотнение бетонной смеси и уход за ней',
      year: '2023',
      area: '250 м²',
      duration: '8 месяцев',
      image: '/5458725278432562120.jpg',
      images: ['/5458725278432562120.jpg','/5458725278432562119.jpg','/5458725278432562118.jpg',]
    },
    {
      id: 2,
      title: 'Дизайнерские конструкции из дерева',
      description: 'SOLOLAKI cafe',
      year: '2023',
      area: '85 м²',
      duration: '3 месяца',
      image: '/5458725278432562127.jpg',
      images: ['/5458725278432562127.jpg','/5458725278432562126.jpg','/5458725278432562124.jpg']
    },
    {
      id: 3,
      title: 'Быстровозводимые здания',
      description: 'Современные, экономичные сооружения, собираемые из готовых заводских конструкций металлокаркас, сэндвич-панели, модули',
      year: '2022',
      area: '180 м²',
      duration: '6 месяцев',
      image: '/5458725278432562130.jpg',
      images: ['/5458725278432562130.jpg','/5458725278432562131.jpg','/5458725278432562128.jpg','/5458725278432562129.jpg',]
    },
    {
      id: 4,
      title: 'Монтаж алюминиевых витражей',
      description: 'Сборка светопрозрачных конструкций из стоек и ригелей, которая включает подготовку проема, установку алюминиевого каркаса, монтаж стеклопакетов с использованием вакуумных присосок, герметизацию и установку прижимных планок.',
      year: '2022',
      area: '500 м²',
      duration: '4 месяца',
      image: '/5458725278432562133.jpg',
      images: ['/5458725278432562133.jpg','/5458725278432562135.jpg','/5458725278432562132i.jpg',]
    },
    {
      id: 5,
      title: 'Укладка дорожных плит, благоустройство территорий',
      description: 'Комплекс строительно-инженерных мероприятий по созданию прочных покрытий',
      year: '2023',
      area: '650 м²',
      duration: '1.5 месяца',
      mediaType: 'video',
      video: '/video5456473478158915373.mp4',
      thumbnail: '/xf28l39ys58yunug4qc4u3zpa6v5kger.jpg',
      images: []
    },
  ];

  // Открытие модального окна с изображением
  const openModal = (project, index = 0) => {
    setSelectedImage(project);
    setCurrentIndex(index);
    document.body.style.overflow = 'hidden';
  };

  // Закрытие модального окна
  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  // Навигация по изображениям в модалке
  const nextImage = () => {
    if (selectedImage && selectedImage.images && selectedImage.images.length > 0) {
      setCurrentIndex((prev) => 
        prev === selectedImage.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedImage && selectedImage.images && selectedImage.images.length > 0) {
      setCurrentIndex((prev) => 
        prev === 0 ? selectedImage.images.length - 1 : prev - 1
      );
    }
  };

  // Функция для Telegram консультации
  const openTelegram = (projectTitle = '') => {
    let message = 'Здравствуйте! Видел ваши работы на сайте, хочу обсудить похожий проект.';
    if (projectTitle) {
      message += ` Заинтересовала работа: "${projectTitle}"`;
    }
    const username = 'stroydom_consultant';
    window.open(`https://t.me/${username}?start=${encodeURIComponent(message)}`, '_blank');
  };

  // Обработчик для видео-проектов
  const handleProjectClick = (project, index = 0) => {
    if (project.mediaType === 'video') {
      // Для видео открываем в новой вкладке или показываем плеер
      window.open(project.video, '_blank');
    } else {
      // Для фото открываем модальное окно
      openModal(project, index);
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

        {/* Сетка проектов */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group flex flex-col h-full"
            >
              {/* Изображение/видео проекта */}
              <div 
                className="relative h-64 overflow-hidden cursor-pointer flex-shrink-0"
                onClick={() => handleProjectClick(project, 0)}
              >
                {project.mediaType === 'video' ? (
                  // ВИДЕО ПРОЕКТ
                  <>
                    <img 
                      src={project.thumbnail} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                        <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                    </div>
                    <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                      ВИДЕО
                    </div>
                  </>
                ) : (
                  // ФОТО ПРОЕКТ
                  <>
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 right-4">
                        <div className="bg-white/20 backdrop-blur-sm p-2 rounded-full">
                          <FaExpand className="text-white text-xl" />
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>

              {/* Контент проекта */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                  <span className="bg-yellow-100 text-yellow-800 text-sm font-semibold px-3 py-1 rounded-full">
                    {project.year}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-4 text-sm flex-grow">{project.description}</p>
                
                {/* Характеристики (Площадь и Срок) */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="flex items-center text-gray-700">
                    <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center mr-2">
                      <FaRulerCombined className="text-gray-600 text-sm" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">Площадь</div>
                      <div className="font-semibold text-sm">{project.area}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-gray-700">
                    <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center mr-2">
                      <FaCalendarAlt className="text-gray-600 text-sm" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">Срок</div>
                      <div className="font-semibold text-sm">{project.duration}</div>
                    </div>
                  </div>
                </div>
                
                {/* Кнопки */}
                <div className="flex gap-3 mt-auto">
                  <button 
                    onClick={() => handleProjectClick(project, 0)}
                    className="flex-1 bg-blue-800 hover:bg-blue-900 text-white font-semibold py-3 rounded-lg transition duration-200 flex items-center justify-center gap-2 text-sm"
                  >
                    {project.mediaType === 'video' ? (
                      <>
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                        Смотреть видео
                      </>
                    ) : (
                      <>
                        <FaExpand />
                        Посмотреть фото
                      </>
                    )}
                  </button>
                  <button 
                    onClick={() => openTelegram(project.title)}
                    className="px-4 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold py-3 rounded-lg transition duration-200 text-sm"
                  >
                    Обсудить проект
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Модальное окно с изображением (только для фото проектов) */}
      {selectedImage && selectedImage.mediaType !== 'video' && (
        <div className="fixed inset-0 bg-black/90 z-[100] flex items-center justify-center p-4">
          <div className="relative max-w-6xl w-full max-h-[90vh]">
            {/* Кнопка закрытия */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition duration-200"
            >
              ✕
            </button>
            
            {/* Навигационные кнопки (только если есть дополнительные фото) */}
            {selectedImage.images && selectedImage.images.length > 1 && (
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
              src={selectedImage.images && selectedImage.images.length > 0 
                ? selectedImage.images[currentIndex] 
                : selectedImage.image
              }
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
                  {selectedImage.images && selectedImage.images.length > 0 && (
                    <div className="text-sm text-gray-500">
                      Фото {currentIndex + 1} из {selectedImage.images.length}
                    </div>
                  )}
                </div>
              </div>
              
              {/* Индикатор изображений (только если есть дополнительные фото) */}
              {selectedImage.images && selectedImage.images.length > 1 && (
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
              )}
              
              {/* Кнопка обсудить проект */}
              <div className="mt-6">
                <button 
                  onClick={() => {
                    closeModal();
                    openTelegram(selectedImage.title);
                  }}
                  className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-4 rounded-lg transition duration-200"
                >
                  Обсудить проект
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;