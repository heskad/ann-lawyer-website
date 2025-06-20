import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import { AnimatedSection } from "./animated-section";

const topServices = [
  {
    title: "Банкротство",
    description: "Полное сопровождение процедур банкротства для физических и юридических лиц.",
    cta: "Узнать больше",
    href: "#detailed-services",
    popular: false,
  },
  {
    title: "Бесплатная консультация",
    description: "Первичный анализ вашей ситуации, определение перспектив и дальнейших шагов.",
    features: ["Устная консультация: бесплатно"],
    cta: "Записаться",
    href: "#contact",
    popular: true,
  },
  {
    title: "Судебное представительство",
    description: "Защита ваших интересов в судах общей юрисдикции и арбитражных судах.",
    cta: "Узнать больше",
    href: "#detailed-services",
    popular: false,
  },
];

const detailedServiceGroups = [
  {
    category: "I. Услуги по банкротству",
    items: [
      { name: "Включение в реестр кредиторов", price: "от 100 000 руб/инстанция" },
      { name: "Оспаривание сделок", price: "от 150 000 руб/инстанция" },
      { name: "Субсидиарная ответственность", price: "от 400 000 руб/инстанция" },
    ],
  },
  {
    category: "II. Консультации и договоры",
    items: [
      { name: "Письменная консультация", price: "от 10 000 руб" },
      { name: "Составление договоров", price: "от 10 000 руб" },
      { name: "Почасовая работа", price: "от 7 000 руб/час" },
    ],
  },
  {
    category: "III. Судебное представительство",
    items: [
      { name: "Подготовка иска (суды общей юрисдикции)", price: "от 20 000 / 40 000 руб (физ./юр. лица)" },
      { name: "Участие в заседании (суды общей юрисдикции)", price: "от 10 000 / 20 000 руб" },
      { name: "Комплексное ведение дела (арбитраж)", price: "от 100 000 руб (1 инстанция)" },
    ],
  },
];


export function ServicesSection() {
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
                  <Button asChild className="w-full" variant={service.popular ? 'default' : 'secondary'}>
                    <a href={service.href}>{service.cta}</a>
                  </Button>
                </CardFooter>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        <div id="detailed-services" className="mt-24 pt-12 border-t border-border">
          <AnimatedSection className="text-center space-y-4 max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-headline font-bold">Подробный перечень услуг и цены</h2>
          </AnimatedSection>

          <div className="space-y-16">
            {detailedServiceGroups.map((group, groupIndex) => (
                <AnimatedSection 
                    key={group.category} 
                    animationType={groupIndex % 2 === 0 ? 'slide-left' : 'slide-right'}
                    className="space-y-6"
                >
                    <h3 className="text-2xl font-headline font-semibold text-center md:text-left">{group.category}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {group.items.map((service, itemIndex) => (
                            <Card key={itemIndex} className="flex flex-col border-2 border-transparent hover:border-[#326744] transition-colors duration-300">
                                <CardHeader className="flex-grow">
                                    <CardTitle className="text-xl font-body font-semibold">{service.name}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-lg text-muted-foreground font-semibold">{service.price}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
