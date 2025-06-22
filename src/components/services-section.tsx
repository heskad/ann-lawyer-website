"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, HelpCircle } from "lucide-react";
import { AnimatedSection } from "./animated-section";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ConsultationModal } from "./consultation-modal";

const topServices = [
  {
    title: "Банкротство",
    description: "Полное сопровождение процедур банкротства для физических и юридических лиц.",
    cta: "Узнать больше",
    href: "#bankruptcy-services",
    popular: false,
    isDialog: false,
  },
  {
    title: "Бесплатная консультация",
    description: "Первичный анализ вашей ситуации, определение перспектив и дальнейших шагов.",
    features: ["Устная консультация: бесплатно"],
    cta: "Записаться",
    href: "#contact",
    popular: true,
    isDialog: true,
  },
  {
    title: "Судебное представительство",
    description: "Защита ваших интересов в судах общей юрисдикции и арбитражных судах.",
    cta: "Узнать больше",
    href: "#judicial-representation",
    popular: false,
    isDialog: false,
  },
];

type ServiceItem = {
  name: string;
  price: string;
  details: string;
};

const detailedServiceGroups: { category: string; items: ServiceItem[] }[] = [
  {
    category: "I. Консультации и договоры",
    items: [
      { name: "Письменная консультация", price: "от 10 000 руб", details: "Подробный письменный анализ вашей правовой ситуации со ссылками на законодательство и судебную практику. Включает оценку рисков и рекомендации по дальнейшим действиям. Идеально подходит для тех, кто хочет иметь четкий план на руках." },
      { name: "Составление договоров", price: "от 10 000 руб", details: "Разработка и правовая экспертиза любых видов договоров (купли-продажи, аренды, оказания услуг, подряда и т.д.). Гарантирую соответствие законодательству и максимальную защиту ваших интересов." },
      { name: "Почасовая работа", price: "от 7 000 руб/час", details: "Оплата за фактически отработанное время юриста. Подходит для нестандартных задач, требующих гибкого подхода: переговоры, выезды, изучение объемных материалов дела." },
      { name: "Сопровождение сделок", price: "от 15 000 руб", details: "Комплексная юридическая поддержка на всех этапах сделки: от проверки контрагента и активов до подготовки документов и контроля за исполнением обязательств. Минимизирует риски и обеспечивает юридическую чистоту." },
    ],
  },
  {
    category: "II. Судебное представительство",
    items: [
      { name: "Подготовка иска", price: "от 20 000 / 40 000 руб (физ./юр. лица)", details: "Полный цикл подготовки искового заявления: анализ документов, формирование правовой позиции, расчет исковых требований, сбор доказательной базы и подача иска в суд. Стоимость зависит от сложности дела (для физических или юридических лиц)." },
      { name: "Составление других процессуальных документов", price: "от 20 000 руб", details: "Подготовка отзывов, возражений, ходатайств, апелляционных и кассационных жалоб. Грамотно составленные документы — ключ к успеху в судебном процессе." },
      { name: "Участие в заседании", price: "от 15 000 руб", details: "Представление ваших интересов в одном судебном заседании. Включает подготовку к заседанию, выступление в суде, заявление ходатайств и защиту вашей правовой позиции." },
      { name: "Комплексное ведение дела", price: "от 80 000 руб", details: "Полное ведение судебного дела 'под ключ' от подачи иска до получения решения суда. Включает все необходимые процессуальные действия, участие во всех заседаниях и постоянное информирование о ходе дела." },
    ],
  },
  {
    category: "III. Отдельные услуги по банкротству",
    items: [
      { name: "Включение в реестр кредиторов", price: "от 100 000 руб/инстанция", details: "Подготовка и подача заявления о включении ваших требований в реестр требований кредиторов должника в деле о банкротстве. Обеспечивает возможность получения долга в рамках процедуры." },
      { name: "Оспаривание сделок", price: "от 150 000 руб/инстанция", details: "Анализ и оспаривание сделок должника, совершенных с целью вывода активов. Направлено на возврат имущества в конкурсную массу для последующих расчетов с кредиторами." },
      { name: "Субсидиарная ответственность", price: "от 400 000 руб/инстанция", details: "Привлечение контролирующих должника лиц (директоров, учредителей) к ответственности по долгам компании. Одна из самых сложных, но эффективных процедур для взыскания долга." },
    ],
  },
];

export function ServicesSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const handleServiceClick = (service: ServiceItem) => {
    setSelectedService(service);
    setIsDetailModalOpen(true);
  };

  return (
    <section id="services" className="bg-secondary py-20 sm:py-32">
      <div className="container">
        <AnimatedSection className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-headline font-bold">Направления работы</h2>
          <p className="text-lg text-muted-foreground">
            Основные сферы моей юридической практики. Для детального ознакомления с услугами и ценами, пролистайте ниже.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {topServices.map((service, index) => (
            <AnimatedSection key={service.title} delay={index * 150}>
              <Card className={`flex flex-col h-full ${service.popular ? 'border-primary shadow-xl' : ''}`}>
                <CardHeader>
                  <CardTitle className="font-headline">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  {service.features && (
                    <ul className="space-y-3">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2">
                          <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </CardContent>
                <CardFooter>
                  {service.isDialog ? (
                    <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
                      <DialogTrigger asChild>
                         <Button
                            className="w-full hover:bg-accent hover:text-accent-foreground"
                            variant={service.popular ? 'default' : 'secondary'}
                          >
                            {service.cta}
                          </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[480px]">
                        <ConsultationModal setIsModalOpen={setIsModalOpen} />
                      </DialogContent>
                    </Dialog>
                  ) : (
                    <Button
                      asChild
                      className="w-full hover:bg-accent hover:text-accent-foreground"
                      variant={service.popular ? 'default' : 'secondary'}
                    >
                      <a href={service.href}>{service.cta}</a>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        <div id="detailed-services" className="mt-24 pt-12 border-t border-border/50">
          <AnimatedSection className="text-center space-y-4 max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-headline font-bold">Подробный перечень услуг и цены</h2>
          </AnimatedSection>

          <div className="space-y-16">
            {detailedServiceGroups.map((group, groupIndex) => {
                const id = group.category === "II. Судебное представительство" ? "judicial-representation" :
                           group.category === "III. Отдельные услуги по банкротству" ? "bankruptcy-services" :
                           undefined;
                return (
                    <div id={id} key={group.category} className="scroll-mt-20">
                        <AnimatedSection 
                            animationType={groupIndex % 2 === 0 ? 'slide-left' : 'slide-right'}
                            className="space-y-6"
                        >
                            <h3 className="text-2xl font-headline font-semibold text-center md:text-left">{group.category}</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                                {group.items.map((service, itemIndex) => (
                                    <Card 
                                        key={itemIndex} 
                                        onClick={() => handleServiceClick(service)}
                                        className="group relative flex flex-col border-2 border-transparent hover:border-primary/50 hover:bg-accent transition-colors duration-300 cursor-pointer"
                                    >
                                        <CardHeader className="flex-grow">
                                            <CardTitle className="text-xl font-body font-semibold group-hover:text-accent-foreground pr-8">{service.name}</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-lg text-muted-foreground font-semibold group-hover:text-accent-foreground">{service.price}</p>
                                        </CardContent>
                                        <HelpCircle className="absolute top-6 right-6 h-5 w-5 text-muted-foreground opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:text-accent-foreground" />
                                    </Card>
                                ))}
                            </div>
                        </AnimatedSection>
                    </div>
                )
            })}
          </div>
        </div>

        <Dialog open={isDetailModalOpen} onOpenChange={setIsDetailModalOpen}>
          <DialogContent className="sm:max-w-lg">
            <DialogHeader>
              <DialogTitle className="font-headline text-2xl">{selectedService?.name}</DialogTitle>
              <div className="pt-4 text-base text-muted-foreground">
                <p>{selectedService?.details}</p>
              </div>
            </DialogHeader>
            <DialogFooter className="pt-4 sm:justify-start">
              <p className="text-lg font-semibold">{selectedService?.price}</p>
            </DialogFooter>
          </DialogContent>
        </Dialog>

      </div>
    </section>
  );
}
