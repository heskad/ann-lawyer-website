import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import { AnimatedSection } from "./animated-section";

const services = [
  {
    title: "Отдельные услуги по банкротству",
    price: "от 100 000 руб.",
    description: "Для кредиторов и должников в делах о несостоятельности.",
    features: [
      "Включение в реестр кредиторов: от 100 000 руб/инстанция",
      "Оспаривание сделок: от 150 000 руб/инстанция",
      "Субсидиарная ответственность: от 400 000 руб/инстанция",
    ],
    cta: "Начать процедуру",
  },
  {
    title: "Консультации и договоры",
    price: "Бесплатно",
    description: "Первая устная консультация для оценки вашей ситуации.",
    features: [
      "Устная консультация: бесплатно",
      "Письменная консультация: от 10 000 руб",
      "Составление договоров: от 10 000 руб",
      "Почасовая работа: от 7 000 руб/час",
    ],
    cta: "Записаться на консультацию",
    popular: true,
  },
  {
    title: "Судебное представительство",
    price: "от 10 000 руб.",
    description: "Представительство в судах общей юрисдикции и арбитражных судах.",
    features: [
      "Подготовка иска: от 20 000 руб",
      "Участие в заседании: от 10 000 руб",
      "Комплексное ведение дела в арбитраже: от 100 000 руб",
    ],
    cta: "Защитить интересы",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="bg-secondary/50 py-20 sm:py-32">
      <div className="container">
        <AnimatedSection className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-headline font-bold">Услуги и Цены</h2>
          <p className="text-lg text-muted-foreground">
            Выберите подходящий для вас вариант. Я предлагаю гибкие и прозрачные цены для решения ваших юридических задач.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <AnimatedSection key={service.title} delay={index * 150}>
              <Card className={`flex flex-col h-full ${service.popular ? 'border-primary shadow-xl' : ''}`}>
                <CardHeader>
                  <CardTitle className="font-headline">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-4xl font-bold mb-6">{service.price}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full" style={{ backgroundColor: 'hsl(var(--accent))', color: 'hsl(var(--accent-foreground))' }} >
                    <a href="#contact">{service.cta}</a>
                  </Button>
                </CardFooter>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
