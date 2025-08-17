import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [selectedService, setSelectedService] = useState('');
  const [carBrand, setCarBrand] = useState('');
  const [estimatedPrice, setEstimatedPrice] = useState<number | null>(null);

  const services = [
    {
      id: 'tire',
      title: 'Шиномонтаж',
      description: 'Сезонная переобувка, срочный шиномонтаж, хранение',
      icon: 'CircleDot',
      price: 'от 1500₽',
      features: ['Гарантия 30 мин', 'Хранение шин', 'EV-совместимость']
    },
    {
      id: 'maintenance',
      title: 'Техобслуживание',
      description: 'Плановое ТО, замена жидкостей, диагностика',
      icon: 'Settings',
      price: 'от 2900₽',
      features: ['Пакеты ТО', 'Для всех типов авто', 'Видеоотчет']
    },
    {
      id: 'repair',
      title: 'Ремонт',
      description: 'Подвеска, тормоза, двигатель, электрика',
      icon: 'Wrench',
      price: 'от 3500₽',
      features: ['Сертифицированные мастера', 'Гарантия на работы', 'Оригинальные запчасти']
    },
    {
      id: 'ev',
      title: 'Сервис EV',
      description: 'Специализированный сервис электромобилей',
      icon: 'Zap',
      price: 'от 4500₽',
      features: ['Диагностика HV-системы', 'Обученные мастера', 'Спецоборудование']
    }
  ];

  const advantages = [
    {
      icon: 'Clock',
      title: 'Скорость',
      description: 'Онлайн-запись 24/7, отслеживание статуса в реальном времени'
    },
    {
      icon: 'Eye',
      title: 'Прозрачность',
      description: 'Видео и фото отчеты, калькулятор цен, согласование работ'
    },
    {
      icon: 'Award',
      title: 'Экспертность',
      description: 'Сертифицированные мастера, современное оборудование'
    },
    {
      icon: 'Shield',
      title: 'Гарантии',
      description: 'Гарантия на все работы и запчасти с четкими сроками'
    }
  ];

  const calculatePrice = () => {
    if (selectedService && carBrand) {
      const basePrice = services.find(s => s.id === selectedService)?.price.match(/\d+/)?.[0];
      if (basePrice) {
        const price = parseInt(basePrice) + Math.floor(Math.random() * 2000);
        setEstimatedPrice(price);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Car" size={28} className="text-primary" />
              <span className="text-2xl font-bold text-slate-900">АвтоСервис 31</span>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="#services" className="text-slate-600 hover:text-primary transition-colors">Услуги</a>
              <a href="#prices" className="text-slate-600 hover:text-primary transition-colors">Цены</a>
              <a href="#about" className="text-slate-600 hover:text-primary transition-colors">О нас</a>
              <Button>Записаться онлайн</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="mb-4 px-4 py-2">🚀 Быстро • Честно • С гарантией</Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              От шиномонтажа до<br />
              <span className="text-primary">сложного ремонта</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
              Единое решение для вашего автомобиля. Современное оборудование, прозрачные цены, 
              экспертность в работе с электромобилями. Бесплатное хранение резины!
            </p>
            
            {/* Dynamic Banner */}
            <div className="bg-gradient-to-r from-primary/10 to-blue-100 rounded-2xl p-6 mb-8 border border-primary/20">
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center">
                <Badge variant="secondary" className="text-sm font-semibold">
                  🔥 Акция месяца
                </Badge>
                <span className="text-lg font-semibold text-slate-900">
                  Замена масла + диагностика = 1990₽
                </span>
                <Badge className="bg-orange-500 hover:bg-orange-600">
                  Шиномонтаж EV -15%
                </Badge>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button size="lg" className="text-lg px-8 py-4">
                <Icon name="Clock" size={20} className="mr-2" />
                Записаться за 60 сек
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                <Icon name="Calculator" size={20} className="mr-2" />
                Рассчитать стоимость
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-orange-500 text-orange-600 hover:bg-orange-50">
                <Icon name="Zap" size={20} className="mr-2" />
                Срочный шиномонтаж
              </Button>
            </div>
          </div>

          {/* Price Calculator */}
          <Card className="max-w-2xl mx-auto shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Calculator" size={24} />
                Калькулятор стоимости
              </CardTitle>
              <CardDescription>
                Получите точную цену на услуги в режиме онлайн
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Выберите услугу</label>
                  <Select value={selectedService} onValueChange={setSelectedService}>
                    <SelectTrigger>
                      <SelectValue placeholder="Тип услуги" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map(service => (
                        <SelectItem key={service.id} value={service.id}>
                          {service.title}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Марка автомобиля</label>
                  <Select value={carBrand} onValueChange={setCarBrand}>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите марку" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="toyota">Toyota</SelectItem>
                      <SelectItem value="volkswagen">Volkswagen</SelectItem>
                      <SelectItem value="bmw">BMW</SelectItem>
                      <SelectItem value="mercedes">Mercedes-Benz</SelectItem>
                      <SelectItem value="tesla">Tesla</SelectItem>
                      <SelectItem value="hyundai">Hyundai</SelectItem>
                      <SelectItem value="kia">KIA</SelectItem>
                      <SelectItem value="lada">LADA</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <Button 
                onClick={calculatePrice} 
                className="w-full" 
                disabled={!selectedService || !carBrand}
              >
                Рассчитать точную стоимость
              </Button>
              {estimatedPrice && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
                  <p className="text-sm text-green-600 mb-1">Ориентировочная стоимость</p>
                  <p className="text-2xl font-bold text-green-800">{estimatedPrice.toLocaleString()}₽</p>
                  <p className="text-sm text-green-600 mt-1">* Окончательная цена</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Наши услуги</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Полный спектр услуг для любого автомобиля — от классических до электрических
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <Card key={service.id} className="hover:shadow-lg transition-all duration-300 group cursor-pointer">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors mb-4">
                    <Icon name={service.icon as any} size={24} className="text-primary" />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-500">Стоимость</span>
                      <span className="font-semibold text-primary">{service.price}</span>
                    </div>
                    <div className="space-y-2">
                      {service.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm text-slate-600">
                          <Icon name="Check" size={16} className="text-green-500" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Почему выбирают нас</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Наши ключевые преимущества, которые делают нас лидерами в автосервисе
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon name={advantage.icon as any} size={28} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{advantage.title}</h3>
                <p className="text-slate-600 leading-relaxed">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Контакты</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Мы находимся в центре Белгорода и работаем для вас каждый день
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                  <Icon name="MapPin" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Адрес</h3>
                  <p className="text-slate-300">г. Белгород, 2-й переулок Лермонтова, 5А</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                  <Icon name="Phone" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Телефон</h3>
                  <p className="text-slate-300">+7 (4722) 123-456</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                  <Icon name="Clock" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Время работы</h3>
                  <p className="text-slate-300">Пн-Пт: 8:00-20:00<br />Сб-Вс: 9:00-18:00</p>
                </div>
              </div>

              <div className="pt-4">
                <Button size="lg" className="mr-4">
                  <Icon name="Calendar" size={20} className="mr-2" />
                  Записаться на сервис
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-slate-900">
                  <Icon name="MessageCircle" size={20} className="mr-2" />
                  Написать в Telegram
                </Button>
              </div>
            </div>

            <div className="bg-slate-800 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-6">Быстрая запись</h3>
              <form className="space-y-4">
                <Input 
                  placeholder="Ваше имя" 
                  className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                />
                <Input 
                  placeholder="Телефон" 
                  className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                />
                <Select>
                  <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                    <SelectValue placeholder="Выберите услугу" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="tire">Шиномонтаж</SelectItem>
                    <SelectItem value="maintenance">ТО</SelectItem>
                    <SelectItem value="repair">Ремонт</SelectItem>
                    <SelectItem value="ev">Сервис EV</SelectItem>
                  </SelectContent>
                </Select>
                <Button className="w-full" size="lg">
                  Записаться
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Car" size={24} className="text-primary" />
                <span className="text-xl font-bold text-white">АвтоСервис 31</span>
              </div>
              <p className="text-sm">
                Профессиональный автосервис в Белгороде с 2015 года. 
                Качество, скорость, честность.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm">
                <li>Шиномонтаж</li>
                <li>Техобслуживание</li>
                <li>Ремонт подвески</li>
                <li>Сервис EV</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Информация</h4>
              <ul className="space-y-2 text-sm">
                <li>О компании</li>
                <li>Гарантии</li>
                <li>Акции</li>
                <li>Отзывы</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Социальные сети</h4>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm" className="p-2">
                  <Icon name="MessageCircle" size={20} />
                </Button>
                <Button variant="ghost" size="sm" className="p-2">
                  <Icon name="Phone" size={20} />
                </Button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-sm">
            <p>&copy; 2024 АвтоСервис 31. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}