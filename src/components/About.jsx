import { useState } from 'react';
import { 
  FaUsers, 
  FaAward, 
  FaShieldAlt, 
  FaCalendarAlt,
  FaCheckCircle,
  FaHandshake,
  FaChartLine,
  FaBuilding,
  FaChevronDown,
  FaChevronUp
} from 'react-icons/fa';

const About = () => {
  const [expandedTeam, setExpandedTeam] = useState(false);
  const [activeTab, setActiveTab] = useState('mission');

  // Статистика компании
  const stats = [
    { icon: <FaCalendarAlt />, value: '10+', label: 'Лет на рынке' },
    { icon: <FaBuilding />, value: '100+', label: 'Выполненных работ' },
    { icon: <FaChevronDown />, value: '50+', label: 'Сданных объектов ' },
    { icon: <FaAward />, value: '100%', label: 'Довольных клиентов' },
  ];

  // Принципы работы
  const principles = [
    {
      icon: <FaCheckCircle />,
      title: 'Качество',
      description: 'Используем только проверенные материалы и технологии',
      details: 'Контроль качества на каждом этапе, соответствие ГОСТ и СНиП'
    },
    {
      icon: <FaShieldAlt />,
      title: 'Надёжность',
      description: 'Гарантия 5 лет на все виды строительных работ',
      details: 'Официальный договор, фиксированная смета, страхование'
    },
    {
      icon: <FaHandshake />,
      title: 'Прозрачность',
      description: 'Честная цена без скрытых платежей и накруток',
      details: 'Детальная смета, еженедельные отчёты, онлайн-доступ к стройке'
    },
    {
      icon: <FaChartLine />,
      title: 'Эффективность',
      description: 'Строгое соблюдение сроков и бюджета проекта',
      details: 'Чёткое планирование, профессиональная команда, современное оборудование'
    },
  ];
 
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Заголовок раздела */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            О компании
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            «СтройДом» — это команда профессионалов с 10-летним опытом в строительстве. 
            Мы превращаем ваши мечты о идеальном доме в реальность.
          </p>
        </div>

        {/* Статистика */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="bg-gradient-to-br from-blue-50 to-gray-50 p-6 rounded-2xl text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-blue-800 text-3xl mb-3 flex justify-center">
                {stat.icon}
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Основной контент */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Левая колонка - фото */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/0.jpg"
                alt="Наша команда на строительной площадке"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Работаем с 2016 года</h3>
                  <p className="text-gray-700">
                    За это время мы построили более 100 объектов и заработали репутацию надёжного подрядчика
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Правая колонка - принципы */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-8">
              Наши принципы работы
            </h3>
            
            <div className="space-y-6">
              {principles.map((principle, index) => (
                <div 
                  key={index}
                  className="bg-gray-50 hover:bg-gray-100 p-6 rounded-xl transition-colors duration-300 group cursor-pointer"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center text-blue-800 text-xl group-hover:scale-110 transition-transform duration-300">
                      {principle.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-gray-900 mb-2">
                        {principle.title}
                      </h4>
                      <p className="text-gray-700 mb-2">{principle.description}</p>
                      <p className="text-sm text-gray-600">{principle.details}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

       

       

        {/* CTA блок */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">
            Готовы начать строительство вашей мечты?
          </h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Оставьте заявку и получите бесплатную консультацию
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-4 px-8 rounded-lg text-lg transition duration-200">
              Заказать консультацию
            </button>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;