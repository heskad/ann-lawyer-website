import type { Metadata } from 'next';
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { AnimatedSection } from "@/components/animated-section";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

export const metadata: Metadata = {
  title: 'Отзывы | ИП Кондратьева А.В.',
  description: 'Отзывы клиентов о работе юриста Кондратьевой Анны Владимировны. Успешные кейсы по банкротству и судебному представительству.',
};

const reviewsData = [
  {
    name: "Иван Петров",
    company: "Генеральный директор, ООО 'Строй-Инвест'",
    review: "Анна Владимировна — настоящий профессионал. Благодаря ей мы смогли успешно завершить сложную процедуру банкротства и сохранить активы. Рекомендую!",
    initials: "ИП",
    gender: "male",
  },
  {
    name: "Елена Сидорова",
    company: "Частное лицо",
    review: "Обратилась за консультацией по личному банкротству. Анна все подробно объяснила, развеяла все страхи. Весь процесс прошел гладко и без нервов. Огромное спасибо!",
    initials: "ЕС",
    gender: "female",
  },
  {
    name: "Алексей Михайлов",
    company: "Индивидуальный предприниматель",
    review: "Ведение дела в арбитражном суде было на высшем уровне. Всегда на связи, все документы подготовлены безупречно. Выиграли дело, на что я уже и не надеялся.",
    initials: "АМ",
    gender: "male",
  },
  {
    name: "Ольга Новикова",
    company: "Кредитор в деле о банкротстве",
    review: "Помогли включить мои требования в реестр кредиторов, когда сроки уже поджимали. Очень оперативная и грамотная работа.",
    initials: "ОН",
    gender: "female",
  },
  {
    name: "Сергей Васильев",
    company: "Финансовый консультант",
    review: "Сотрудничаем с Анной по сложным вопросам банкротства клиентов. Всегда дает точные и взвешенные юридические заключения. Высочайший уровень компетенции.",
    initials: "СВ",
    gender: "male",
  },
    {
    name: "Мария Козлова",
    company: "Частное лицо",
    review: "Помогли оспорить незаконную сделку и вернуть имущество. Я очень благодарна за скрупулезный подход и настойчивость в суде. Настоящая защита интересов!",
    initials: "МК",
    gender: "female",
  },
];

export default function ReviewsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow pt-14">
        <section className="container py-20 sm:py-24">
          <AnimatedSection>
            <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
              <h1 className="text-4xl md:text-5xl font-headline font-bold">Отзывы доверителей</h1>
              <p className="text-lg text-muted-foreground">
                Я горжусь доверием своих клиентов и результатами, которых мы достигаем вместе.
              </p>
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={200}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {reviewsData.map((review, index) => (
                <Card key={index} className="flex flex-col bg-secondary/50 transition-all duration-300 ease-in-out hover:border-accent/30 hover:shadow-lg hover:shadow-accent/20 dark:hover:border-primary/30 dark:hover:shadow-primary/20">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <Avatar>
                        <AvatarImage src={review.gender === 'male' ? '/review_m.png' : '/review_w.png'} alt={review.name} />
                        <AvatarFallback>{review.initials}</AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="font-body text-lg">{review.name}</CardTitle>
                        <CardDescription>{review.company}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow flex flex-col">
                    <div className="flex-grow">
                        <div className="flex gap-0.5 mb-4">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                        ))}
                        </div>
                        <blockquote className="text-muted-foreground italic border-l-2 pl-4">
                            {review.review}
                        </blockquote>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </AnimatedSection>
        </section>
      </main>
      <Footer />
    </div>
  );
}
