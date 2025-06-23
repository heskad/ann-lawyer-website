import type { Metadata } from 'next';
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { AnimatedSection } from "@/components/animated-section";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShieldCheck, Target, Trophy } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Судебная Практика | ИП Кондратьева А.В.',
  description: 'Примеры успешных дел из моей юридической практики. Кейсы по банкротству, взысканию задолженностей и оспариванию сделок.',
};

const caseStudies = [
  {
    title: "Освобождение от долгов: Банкротство физического лица",
    tags: ["Банкротство физлиц", "Списание долгов"],
    situation: "Клиент столкнулся с непосильной долговой нагрузкой перед несколькими банками и микрофинансовыми организациями. Постоянные звонки коллекторов и угроза потери имущества создавали колоссальный стресс.",
    solution: "Был проведен полный анализ финансового положения клиента, подготовлен и подан в суд пакет документов для признания банкротом. В ходе процедуры осуществлялось полное сопровождение, взаимодействие с финансовым управляющим и защита интересов клиента в суде.",
    result: "По итогам процедуры суд принял решение о полном списании всех долгов клиента. Исполнительные производства были прекращены. Клиент полностью освободился от долговых обязательств и давления со стороны кредиторов.",
  },
  {
    title: "Возврат активов: Оспаривание сделки в деле о банкротстве",
    tags: ["Банкротство юрлиц", "Оспаривание сделок", "Конкурсная масса"],
    situation: "В рамках дела о банкротстве компании-должника было выявлено, что незадолго до начала процедуры руководство продало ликвидный объект недвижимости по заниженной стоимости аффилированному лицу.",
    solution: "Было подготовлено и подано в арбитражный суд заявление об оспаривании сделки. В суде были представлены доказательства нерыночного характера сделки и ее направленности на вывод активов в ущерб интересам кредиторов.",
    result: "Суд признал сделку недействительной. Актив был возвращен в конкурсную массу, что позволило значительно пополнить ее и удовлетворить требования кредиторов, включая моего доверителя, в большем объеме.",
  },
  {
    title: "Взыскание крупной задолженности в арбитражном суде",
    tags: ["Арбитражный суд", "Взыскание долга", "Исполнительное производство"],
    situation: "Строительная компания-подрядчик (мой доверитель) выполнила работы по договору, однако заказчик отказался их оплачивать, ссылаясь на несущественные недостатки, которые не были зафиксированы должным образом.",
    solution: "Была сформирована мощная доказательная база, включающая договор, акты выполненных работ, деловую переписку. После неудачной попытки досудебного урегулирования был подан иск в арбитражный суд. В процессе были опровергнуты все доводы ответчика.",
    result: "Суд полностью удовлетворил исковые требования, взыскав с заказчика полную сумму долга, а также неустойку и судебные расходы. После вступления решения в силу было инициировано исполнительное производство, которое привело к фактическому получению денежных средств.",
  },
];

const SectionHeader = ({ icon: Icon, title }: { icon: React.ElementType, title: string }) => (
    <div className="flex items-center gap-3 mb-2">
        <Icon className="h-6 w-6 text-primary" />
        <h4 className="text-xl font-headline font-semibold">{title}</h4>
    </div>
);

export default function PracticePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow pt-14">
        <section className="container py-20 sm:py-24">
          <AnimatedSection>
            <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
              <h1 className="text-4xl md:text-5xl font-headline font-bold">Судебная практика</h1>
              <p className="text-lg text-muted-foreground">
                Здесь представлены примеры реальных дел, которые демонстрируют мой подход к работе и достигнутые результаты. Каждая ситуация уникальна, но цель всегда одна — защита интересов доверителя.
              </p>
            </div>
          </AnimatedSection>
          
          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <AnimatedSection key={index} delay={index * 200}>
                <Card className="bg-secondary/50 transition-all duration-300 ease-in-out hover:border-primary/30 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1">
                    <CardHeader>
                        <CardTitle className="font-headline text-2xl md:text-3xl">{study.title}</CardTitle>
                        <div className="flex flex-wrap gap-2 pt-2">
                            {study.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                        </div>
                    </CardHeader>
                    <CardContent className="space-y-6">
                       <div>
                           <SectionHeader icon={Target} title="Ситуация" />
                           <p className="text-muted-foreground pl-9">{study.situation}</p>
                       </div>
                       <div>
                           <SectionHeader icon={ShieldCheck} title="Решение" />
                           <p className="text-muted-foreground pl-9">{study.solution}</p>
                       </div>
                        <div>
                           <SectionHeader icon={Trophy} title="Результат" />
                           <p className="text-muted-foreground pl-9">{study.result}</p>
                       </div>
                    </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
