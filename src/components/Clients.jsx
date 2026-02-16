import { FaHandshake, FaBuilding, FaIndustry, FaGasPump } from 'react-icons/fa';

const Clients = () => {
  const clients = [
    {
      id: 1,
      name: 'ВладКон',
      description: 'Cотрудничество по строительству и ремонту производственных помещений',
      logo: '/logotip-vladkon.webp', 
      projects: ['Реконструкция цехов', 'Монтаж инженерных систем', 'Ремонт административных зданий'],
      years: '2018-2024',
    },
    {
      id: 2,
      name: 'Лакинский текстиль',
      description: 'Комплексное обслуживание текстильного производства',
      logo: '/images.webp',
      projects: ['Ремонт производственных линий', 'Строительство складов', 'Модернизация вентиляции'],
      years: '2019-2023',
    },
    {
      id: 3,
      name: 'Лукойл',
      description: 'Крупный контракт по ребрендингу операторных и торговых залов АЗС',
      logo: '/png-klev-club-fdy1-p-lukoil-png-1.webp',
      projects: ['Ребрендинг АЗС', 'Реконструкция торговых залов', 'Монтаж нового оборудования'],
      years: '2021-2022',
    },
    {
      id: 4,
      name: 'Многие другие',
      description: 'Частные заказчики и компании из разных отраслей',
      projects: ['Частные дома', 'Коммерческая недвижимость', 'Объекты инфраструктуры'],
      years: 'С 2016 года',
    }
  ];

  return (
    <section id="clients" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Заголовок раздела */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Наши клиенты
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Мы гордимся сотрудничеством с крупными компаниями и частными заказчиками. 
            Каждый проект — это доверие, которое мы оправдываем качеством работ.
          </p>
        </div>

        {/* Сетка клиентов */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {clients.map((client) => (
            <div 
              key={client.id}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 text-center"
            >
              {/* Блок с логотипом/названием */}
              <div className="flex justify-center mb-4 min-h-[80px] items-center">
                {client.logo ? (
                  <div className="w-20 h-20 bg-white rounded-lg shadow-sm flex items-center justify-center p-2">
                    <img 
                      src={client.logo} 
                      alt={client.name}
                      className="w-full h-full object-scale-down"
                    />
                  </div>
                ) : (
                  <div>
                    <div className="text-3xl text-gray-300 mb-2"></div>
                    <h3 className="text-xl font-bold text-gray-900">{client.name}</h3>
                  </div>
                )}
              </div>
              
              {/* Название компании (только для клиентов с лого) */}
              {client.logo && (
                <h3 className="text-xl font-bold text-gray-900 mb-2">{client.name}</h3>
              )}
              
              {/* Годы сотрудничества */}
              <div className={`inline-block ${client.id === 4 ? 'bg-blue-100 text-blue-800' : 'bg-yellow-100 text-yellow-800'} text-sm font-semibold px-3 py-1 rounded-full mb-3`}>
                {client.years}
              </div>
              
              {/* Описание */}
              <p className="text-gray-600 text-sm mb-4">{client.description}</p>
              
              {/* Проекты */}
              <div className="text-left">
                <div className="text-sm text-gray-500 mb-2">Выполненные работы:</div>
                <ul className="space-y-1">
                  {client.projects.map((project, idx) => (
                    <li key={idx} className="flex items-start text-gray-700 text-xs">
                      <div className={`w-1.5 h-1.5 ${client.id === 4 ? 'bg-blue-500' : 'bg-blue-500'} rounded-full mt-1 mr-2 flex-shrink-0`}></div>
                      <span>{project}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Блок статистики */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl p-8 md:p-12 text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mb-8">
            <div>
              <div className="text-4xl font-bold mb-2">10+</div>
              <div className="text-gray-300">Лет на рынке</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">20+</div>
              <div className="text-gray-300">Крупных клиентов</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100+</div>
              <div className="text-gray-300">Завершённых проектов</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-gray-300">Довольных клиентов</div>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-xl mb-6 max-w-2xl mx-auto">
              Станьте нашим следующим довольным клиентом! 
              Мы гарантируем профессиональный подход и соблюдение сроков.
            </p>
            
            <button 
              onClick={() => {
                const message = 'Здравствуйте! Видел ваших клиентов на сайте (ВладКон, Лакинский текстиль, Лукойл). Хочу обсудить сотрудничество.';
                const username = 'stroydom_consultant';
                window.open(`https://t.me/${username}?start=${encodeURIComponent(message)}`, '_blank');
              }}
              className="inline-flex items-center bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-8 rounded-lg text-lg transition duration-200 cursor-pointer"
            >
              Обсудить сотрудничество
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;