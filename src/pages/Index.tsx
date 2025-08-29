import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const ByteTransitLanding = () => {
  const [activeSegment, setActiveSegment] = useState<'corporate' | 'cargo'>('corporate');

  // Scroll animation observer
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.fade-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Fixed Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-bt-red rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">БТ</span>
            </div>
            <span className="text-xl font-semibold text-bt-gray">Байт Транзит</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-bt-gray hover:text-bt-red transition-colors">Услуги</a>
            <a href="#how-it-works" className="text-bt-gray hover:text-bt-red transition-colors">Как работаем</a>
            <a href="#advantages" className="text-bt-gray hover:text-bt-red transition-colors">Преимущества</a>
            <a href="#calculator" className="text-bt-gray hover:text-bt-red transition-colors">Расчёт</a>
            <a href="#contacts" className="text-bt-gray hover:text-bt-red transition-colors">Контакты</a>
            <Button className="bg-bt-red hover:bg-bt-terra text-white">
              Рассчитать стоимость
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section - Block 1 */}
      <section id="hero" className="pt-20 pb-16 bg-gradient-to-br from-bt-red via-bt-terra to-bt-gray relative overflow-hidden fade-on-scroll">
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        </div>
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Доставка товаров из Китая
                <span className="block text-3xl md:text-4xl font-normal mt-2 text-white/90">
                  за 10-20 дней
                </span>
              </h1>
              <p className="text-xl mb-4 text-white/90">
                30 лет надёжной логистики • 2 000+ маршрутов по РФ и миру
              </p>
              <p className="text-lg mb-8 text-white/80 leading-relaxed">
                Получите товар точно в срок и без лишних рисков: наш русскоговорящий менеджер 
                в Китае контролирует каждую ступень цепочки, а команда из 800+ специалистов 
                отвечает за заботливый сервис 24/7.
              </p>
              <Button size="lg" className="bg-white text-bt-red hover:bg-gray-50 text-lg px-8 py-4">
                Рассчитать стоимость
                <Icon name="Calculator" className="ml-2" size={20} />
              </Button>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 overflow-hidden">
                <img 
                  src="/img/086ccb12-a388-4af0-9122-dc60bfca4c00.jpg" 
                  alt="Логистический транспорт: контейнеровоз и автопоезд" 
                  className="w-full h-48 object-cover rounded-lg mb-6 opacity-80"
                />
                <p className="text-white/90 text-lg">
                  Контейнеровоз + автопоезд = надёжная доставка
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Segment Switcher - Block 2 */}
      <section id="segments" className="py-16 bg-gray-50 fade-on-scroll">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6 text-bt-gray">Выберите формат доставки</h2>
          </div>
          
          <Tabs value={activeSegment} onValueChange={(value) => setActiveSegment(value as 'corporate' | 'cargo')} className="w-full">
            <TabsList className="grid w-full grid-cols-2 max-w-2xl mx-auto mb-12">
              <TabsTrigger value="corporate" className="flex items-center gap-3 py-4">
                <Icon name="Building" size={20} />
                <span>Для юридических лиц и ИП</span>
              </TabsTrigger>
              <TabsTrigger value="cargo" className="flex items-center gap-3 py-4">
                <Icon name="Package" size={20} />
                <span>Карго-доставка</span>
              </TabsTrigger>
            </TabsList>

            <div className="grid md:grid-cols-2 gap-8">
              <TabsContent value="corporate" className="mt-0">
                <Card className="h-full">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-bt-red/10 rounded-lg flex items-center justify-center">
                        <Icon name="FileText" size={24} className="text-bt-red" />
                      </div>
                      <h3 className="text-xl font-semibold">Для бизнеса</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      <strong>Официальное оформление</strong>, полный пакет документов, 
                      оплата перевозки до отправки груза. Растаможка без головной боли — 
                      мы берём на себя контракт, таможенные платежи и ЭДО.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="cargo" className="mt-0">
                <Card className="h-full">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-bt-terra/10 rounded-lg flex items-center justify-center">
                        <Icon name="Zap" size={24} className="text-bt-terra" />
                      </div>
                      <h3 className="text-xl font-semibold">Карго-доставка</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      <strong>Простое решение «всё включено»</strong>, оплата при получении. 
                      Оформление заявки в 3 клика, стабильный график отправок — 
                      без минимального порога веса или объёма.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </section>

      {/* Calculator Form - Block 4 */}
      <section id="calculator" className="py-16 bg-white fade-on-scroll">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Icon name="Calculator" size={32} className="text-bt-red" />
              <h2 className="text-4xl font-bold text-bt-gray">Узнайте стоимость за 2 минуты</h2>
            </div>
            <p className="text-xl text-gray-600">
              Введите контакты и параметры груза — менеджер свяжется с расчётом в рабочие 15 минут
            </p>
          </div>

          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-bt-gray mb-2">Ваше имя</label>
                    <Input placeholder="Иван Иванов" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-bt-gray mb-2">Телефон</label>
                    <Input placeholder="+7 (999) 123-45-67" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-bt-gray mb-2">Вес/объём груза</label>
                  <Input placeholder="100 кг или 2 м³" />
                </div>

                <div className="flex items-center gap-3">
                  <input type="checkbox" id="consultation" className="w-4 h-4 text-bt-red" />
                  <label htmlFor="consultation" className="text-bt-gray">
                    Нужна консультация по выбору поставщика
                  </label>
                </div>

                <Button className="w-full bg-bt-red hover:bg-bt-terra text-white py-4 text-lg">
                  Получить расчёт
                  <Icon name="Send" className="ml-2" size={20} />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* How We Work - Block 5 */}
      <section id="how-it-works" className="py-16 bg-gray-50 fade-on-scroll">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-bt-gray">
              От заявки до доставки — прозрачный процесс
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Заявка и подбор тарифа',
                description: 'Оставляете заявку, получаете персональный расчёт стоимости',
                icon: 'FileText'
              },
              {
                step: '02',
                title: 'Приём товара на складе',
                description: 'Принимаем груз в Шэньчжэне, Гуанчжоу или Иу с контролем качества',
                icon: 'Package'
              },
              {
                step: '03',
                title: 'Транспортировка и таможня',
                description: 'Русскоговорящий менеджер контролирует весь маршрут до РФ',
                icon: 'Truck'
              },
              {
                step: '04',
                title: 'Доставка до двери',
                description: 'Доставляем точно в срок или РЦ маркетплейса по всей России',
                icon: 'Home'
              }
            ].map((item, index) => (
              <Card key={index} className="relative text-center p-6 hover:scale-105 transition-transform">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-bt-red rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={item.icon as any} size={28} className="text-white" />
                  </div>
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-bt-terra rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{item.step}</span>
                  </div>
                  <h3 className="font-semibold text-lg mb-3 text-bt-gray">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages - Block 6 */}
      <section id="advantages" className="py-16 bg-white fade-on-scroll">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-bt-gray">
              Почему нам доверяют крупные бренды
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: '30',
                unit: 'лет',
                title: 'на рынке транспортной логистики',
                icon: 'Award'
              },
              {
                number: '2000+',
                unit: 'направлений',
                title: 'по РФ и миру',
                icon: 'Globe'
              },
              {
                number: '800+',
                unit: 'специалистов',
                title: 'и служба заботы 24/7',
                icon: 'Users'
              },
              {
                number: '5',
                unit: 'складов',
                title: 'в Москве и ключевых регионах РФ',
                icon: 'Warehouse'
              }
            ].map((item, index) => (
              <Card key={index} className="text-center p-8 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-bt-red/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon name={item.icon as any} size={28} className="text-bt-red" />
                  </div>
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-bt-red">{item.number}</span>
                    <span className="text-lg text-bt-gray ml-1">{item.unit}</span>
                  </div>
                  <p className="text-bt-gray font-medium">{item.title}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Care Service - Block 7 */}
      <section className="py-16 bg-bt-terra/5 fade-on-scroll">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-bt-gray">
              Сервис, который экономит ваше время
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Поиск и выкуп товара по фото/ссылке',
                icon: 'Search'
              },
              {
                title: 'Контроль качества на складе + фото/видео-отчёт',
                icon: 'Camera'
              },
              {
                title: 'Дополнительная упаковка и крепёж',
                icon: 'Package2'
              },
              {
                title: 'Страхование груза — урегулирование без вашего участия',
                icon: 'Shield'
              }
            ].map((item, index) => (
              <Card key={index} className="p-6 bg-bt-terra text-white hover:scale-105 transition-transform">
                <CardContent className="p-0 text-center">
                  <Icon name={item.icon as any} size={40} className="mx-auto mb-4" />
                  <h3 className="font-semibold leading-tight">{item.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Russian Manager - Block 8 */}
      <section className="py-16 bg-white fade-on-scroll">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-bt-gray">
                Ваш представитель на месте
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Светлана Мелентьева (Шэньчжэнь) лично ведёт переговоры с поставщиками, 
                проверяет товар и остаётся на связи 24/7.
              </p>
              <div className="flex items-center gap-4">
                <Button variant="outline" className="border-bt-red text-bt-red hover:bg-bt-red hover:text-white">
                  <Icon name="Phone" size={18} className="mr-2" />
                  Связаться с Светланой
                </Button>
              </div>
            </div>
            <div className="relative">
              <Card className="p-8">
                <CardContent className="p-0 text-center">
                  <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6 border-4 border-bt-red/20">
                    <img 
                      src="/img/5057b28a-9b55-49ff-b7ae-34591ed2203b.jpg" 
                      alt="Светлана Мелентьева - руководитель офиса в Шэньчжэне" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Светлана Мелентьева</h3>
                  <p className="text-gray-600 mb-4">Руководитель офиса в Шэньчжэне</p>
                  <p className="text-sm text-gray-500">
                    +86 138 0000 0000<br />
                    svetlana@bytetransit.ru
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Security - Block 9 */}
      <section className="py-16 bg-bt-gray text-white fade-on-scroll">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Безопасность груза — наша ответственность
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Страхование груза',
                description: 'Полное покрытие и быстрое урегулирование претензий',
                icon: 'Shield'
              },
              {
                title: 'Электронный документооборот',
                description: 'Через Контур.Диадок для максимальной прозрачности',
                icon: 'FileText'
              },
              {
                title: 'Современный автопарк',
                description: 'Машины не старше 2019 г. с GPS-трекингом',
                icon: 'Truck'
              }
            ].map((item, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 text-white p-6">
                <CardContent className="p-0 text-center">
                  <Icon name={item.icon as any} size={48} className="mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-white/80">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Geography - Block 10 */}
      <section className="py-16 bg-white fade-on-scroll">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-bt-gray">
              Доставляем в любой город России
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Средний срок: 10-20 дней авто/авиа • 40-50 дней море/жд
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Маршруты из наших китайских хабов Шэньчжэнь, Гуанчжоу, Иу 
              охватывают всю сеть из 2 000+ направлений внутри РФ.
            </p>
          </div>

          <div className="bg-bt-red/5 rounded-2xl p-12">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <Icon name="Plane" size={48} className="mx-auto mb-4 text-bt-red" />
                <h3 className="text-xl font-semibold mb-2">Авиа</h3>
                <p className="text-gray-600">10-15 дней</p>
              </div>
              <div>
                <Icon name="Truck" size={48} className="mx-auto mb-4 text-bt-red" />
                <h3 className="text-xl font-semibold mb-2">Авто</h3>
                <p className="text-gray-600">15-20 дней</p>
              </div>
              <div>
                <Icon name="Ship" size={48} className="mx-auto mb-4 text-bt-red" />
                <h3 className="text-xl font-semibold mb-2">Море</h3>
                <p className="text-gray-600">40-50 дней</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories - Block 11 */}
      <section className="py-16 bg-gray-50 fade-on-scroll">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-bt-gray">Что мы перевозим</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Игрушки, одежда, электроника, бытовые товары — большинство разрешённых категорий 
              не требуют спец. лицензий. Мы не перевозим лекарства, БАДы и запрещённые грузы.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-green-600 flex items-center">
                <Icon name="Check" size={28} className="mr-3" />
                Разрешённые категории
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  'Игрушки и товары для детей',
                  'Одежда и текстиль',
                  'Электроника и гаджеты',
                  'Бытовые товары',
                  'Спортивные товары',
                  'Инструменты',
                  'Мебель и декор',
                  'Автотовары'
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-green-500" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6 text-bt-red flex items-center">
                <Icon name="X" size={28} className="mr-3" />
                Запрещённые к перевозке
              </h3>
              <div className="space-y-3">
                {[
                  'Лекарства и БАДы',
                  'Продукты питания',
                  'Опасные грузы',
                  'Оружие и боеприпасы'
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Icon name="X" size={16} className="text-red-500" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-500 mt-6">
                * Полный список ограничений доступен по запросу
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof - Block 12 */}
      <section className="py-16 bg-white fade-on-scroll">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-bt-gray">
              Клиенты, которые уже с нами
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-8">
              <CardContent className="p-0">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center">
                    <span className="font-bold text-orange-600">OZON</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Ozon</h3>
                    <p className="text-gray-600">Маркетплейс</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  "Сократили сроки поставки на 30% благодаря профессиональной работе 
                  менеджеров Байт Транзит в Китае."
                </p>
              </CardContent>
            </Card>

            <Card className="p-8">
              <CardContent className="p-0">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-bt-red/10 rounded-lg flex items-center justify-center">
                    <Icon name="Store" size={28} className="text-bt-red" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Магазин X</h3>
                    <p className="text-gray-600">Ритейл</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  "Экономия 12% на логистике и полная прозрачность процессов. 
                  Рекомендуем всем партнёрам."
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <p className="text-gray-600 mb-8">Нам доверяют:</p>
            <div className="flex justify-center items-center gap-8 flex-wrap opacity-60">
              {['Wildberries', 'Ozon', 'Яндекс.Маркет', 'Avito'].map((brand) => (
                <div key={brand} className="px-6 py-3 bg-gray-100 rounded-lg">
                  <span className="text-gray-700 font-medium">{brand}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ - Block 13 */}
      <section className="py-16 bg-gray-50 fade-on-scroll">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-bt-gray">Частые вопросы</h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {[
              {
                question: 'Как рассчитывается стоимость?',
                answer: 'Цена зависит от веса/объёма и типа доставки; точный тариф получите после формы «Быстрый расчёт».'
              },
              {
                question: 'Можно ли оплатить после получения?',
                answer: 'Да, для карго-доставки оплата производится при выдаче груза.'
              },
              {
                question: 'Какие документы я получу?',
                answer: 'Для юр. лиц — полный комплект товарно-сопроводительных и таможенных документов.'
              },
              {
                question: 'Как контролируется груз по пути?',
                answer: 'Онлайн-трекер и персональный менеджер на связи 24/7.'
              },
              {
                question: 'Что, если товар повредится?',
                answer: 'Груз застрахован; мы берём на себя урегулирование без вашего участия.'
              },
              {
                question: 'Есть ли минимальный объём?',
                answer: 'Нет, принимаем партии любого размера.'
              },
              {
                question: 'В какие города доставляете?',
                answer: '2 000+ направлений по РФ.'
              }
            ].map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Consultation Form - Block 14 */}
      <section className="py-16 bg-white fade-on-scroll">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-bt-gray">Остались вопросы?</h2>
            <p className="text-xl text-gray-600">
              Оставьте контакты и задайте вопрос — эксперт перезвонит в течение 15 минут
            </p>
          </div>

          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-bt-gray mb-2">Ваше имя</label>
                    <Input placeholder="Иван Иванов" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-bt-gray mb-2">Телефон</label>
                    <Input placeholder="+7 (999) 123-45-67" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-bt-gray mb-2">E-mail</label>
                  <Input placeholder="ivan@example.com" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-bt-gray mb-2">Ваш вопрос</label>
                  <Textarea placeholder="Опишите вашу задачу..." rows={4} />
                </div>

                <div className="flex items-center gap-3">
                  <input type="checkbox" id="supplier" className="w-4 h-4 text-bt-red" />
                  <label htmlFor="supplier" className="text-bt-gray">
                    Помочь подобрать поставщика в Китае
                  </label>
                </div>

                <Button className="w-full bg-bt-red hover:bg-bt-terra text-white py-4 text-lg">
                  <Icon name="Phone" className="mr-2" size={20} />
                  Связаться со мной
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contacts & Footer - Block 15 */}
      <footer id="contacts" className="py-16 bg-bt-gray text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Свяжитесь с нами</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Icon name="Phone" size={20} />
                  <span>8 (800) 77-000-40</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Mail" size={20} />
                  <span>info@bytetransit.ru</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Clock" size={20} />
                  <span>09:00-20:00 (MSK)</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-6">Склады в России</h3>
              <div className="space-y-2 text-white/80">
                <p>Москва</p>
                <p>Новосибирск</p>
                <p>Екатеринбург</p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-6">Офисы в Китае</h3>
              <div className="space-y-2 text-white/80">
                <p>Гуанчжоу</p>
                <p>Шэньчжэнь</p>
                <p>Иу</p>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-10 h-10 bg-bt-red rounded-lg flex items-center justify-center">
                <span className="font-bold text-lg">БТ</span>
              </div>
              <span className="text-xl font-semibold">Байт Транзит</span>
            </div>
            <p className="text-white/60 italic">
              Ваш надёжный партнёр в логистике
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ByteTransitLanding;