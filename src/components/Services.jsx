import { useState } from 'react';
import { 
  FaHome, 
  FaBuilding, 
  FaPaintRoller, 
  FaTools, 
  FaTruck, 
  FaKey,
  FaChevronDown,
  FaCheck
} from 'react-icons/fa';

const Services = () => {
  const [expandedService, setExpandedService] = useState(null);

  const services = [
    {
      id: 1,
      icon: <FaHome className="text-3xl" />,
      title: 'Строительство домов',
      description: 'Полный цикл от проекта до сдачи под ключ',
      shortDesc: 'Дома любой сложности',
      details: [
        'Каркасные дома',
        'Дома из кирпича',
        'Газобетонные дома',
        'Деревянные срубы',
        'Монолитные конструкции'
      ],
      price: 'от 25 000 ₽/м²'
    },
    {
      id: 2,
      icon: <FaBuilding className="text-3xl" />,
      title: 'Ремонт квартир',
      description: 'Капитальный и косметический ремонт',
      shortDesc: 'Ремонт любой сложности',
      details: [
        'Евроремонт',
        'Дизайнерский ремонт',
        'Косметический ремонт',
        'Черновая отделка',
        'Перепланировка'
      ],
      price: 'от 8 000 ₽/м²'
    },
    {
      id: 3,
      icon: <FaPaintRoller className="text-3xl" />,
      title: 'Отделочные работы',
      description: 'Внутренняя и внешняя отделка',
      shortDesc: 'Качественная отделка',
      details: [
        'Штукатурные работы',
        'Малярные работы',
        'Укладка плитки',
        'Монтаж потолков',
        'Установка окон и дверей'
      ],
      price: 'от 4 000 ₽/м²'
    },
    {
      id: 4,
      icon: <FaTools className="text-3xl" />,
      title: 'Инженерные системы',
      description: 'Монтаж и замена коммуникаций',
      shortDesc: 'Коммуникации под ключ',
      details: [
        'Электрика и освещение',
        'Сантехнические работы',
        'Отопление и вентиляция',
        'Кондиционирование',
        'Умный дом'
      ],
      price: 'от 3 000 ₽/м²'
    },
    {
      id: 5,
      icon: <FaTruck className="text-3xl" />,
      title: 'Кровельные работы',
      description: 'Монтаж и ремонт кровли',
      shortDesc: 'Надёжная кровля',
      details: [
        'Металлочерепица',
        'Гибкая черепица',
        'Профнастил',
        'Фальцевая кровля',
        'Ремонт кровли'
      ],
      price: 'от 1 500 ₽/м²'
    },
    {
      id: 6,
      icon: <FaKey className="text-3xl" />,
      title: 'Комплекс под ключ',
      description: 'Полный цикл от идеи до сдачи',
      shortDesc: 'Всё включено',
      details: [
        'Проектирование',
        'Согласование',
        'Строительство',
        'Отделка',
        'Сдача объекта'
      ],
      price: 'от 35 000 ₽/м²'
    }
  ];

  const toggleService = (id) => {
    setExpandedService(expandedService === id ? null : id);
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Заголовок раздела */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Наши услуги
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Предоставляем полный спектр строительных услуг от проектирования 
            до финальной отделки. Работаем по договору с фиксированной сметой.
          </p>
        </div>

        {/* Список услуг */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id}
              className={`bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 ${
                expandedService === service.id ? 'ring-2 ring-yellow-500' : ''
              }`}
            >
              {/* Верхняя часть карточки */}
              <div 
                className="p-6 cursor-pointer"
                onClick={() => toggleService(service.id)}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-16 h-16 bg-yellow-100 rounded-xl flex items-center justify-center text-yellow-600">
                    {service.icon}
                  </div>
                  <span className="bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-full">
                    {service.price}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-4">
                  {expandedService === service.id ? service.description : service.shortDesc}
                </p>
                
                <div className="flex items-center justify-between">
                  <button className="text-yellow-600 font-semibold hover:text-yellow-700 transition">
                    {expandedService === service.id ? 'Скрыть детали' : 'Подробнее'}
                  </button>
                  <FaChevronDown 
                    className={`text-gray-400 transition-transform duration-300 ${
                      expandedService === service.id ? 'rotate-180' : ''
                    }`}
                  />
                </div>
              </div>

              {/* Раскрывающаяся часть с деталями */}
              {expandedService === service.id && (
                <div className="px-6 pb-6 border-t border-gray-100 pt-4 animate-fadeIn">
                  <h4 className="font-bold text-gray-800 mb-3">Что входит:</h4>
                  <ul className="space-y-2 mb-6">
                    {service.details.map((detail, index) => (
                      <li key={index} className="flex items-center text-gray-700">
                        <FaCheck className="text-green-500 mr-3 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex space-x-4">
                    <button className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-4 rounded-lg transition duration-300">
                      Заказать услугу
                    </button>
                    <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-3 px-4 rounded-lg transition duration-300">
                      Получить смету
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Дополнительная информация */}
        <div className="mt-20 bg-gradient-to-r from-blue-50 to-gray-50 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-800 mb-2">100%</div>
              <div className="text-gray-700">Гарантия качества работ</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-800 mb-2">24/7</div>
              <div className="text-gray-700">Техническая поддержка</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-800 mb-2">0%</div>
              <div className="text-gray-700">Скрытых платежей</div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-6">
              Все работы выполняются в соответствии с ГОСТ и СНиП. 
              Предоставляем официальную гарантию 5 лет на все виды работ.
            </p>
            <button className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300">
              Получить бесплатную консультацию
            </button>
          </div>
        </div>
      </div>

      {/* CSS анимация */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </section>
  );
};

export default Services;