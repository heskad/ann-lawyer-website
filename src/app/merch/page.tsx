
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { AnimatedSection } from "@/components/animated-section";
import { Button } from '@/components/ui/button';
import { Gift, ShoppingCart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Мерч | ИП Кондратьева А.В.',
  description: 'Фирменный картхолдер из натуральной кожи ручной работы.',
};

export default function MerchPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow pt-14">
        <section className="container py-20 sm:py-24">
          <AnimatedSection>
            <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
              <h1 className="text-4xl md:text-5xl font-headline font-bold">Фирменная продукция</h1>
              <p className="text-lg text-muted-foreground">
                Качество и внимание к деталям не только в работе, но и в вещах, которые меня окружают.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <Card className="bg-secondary/50 transition-all duration-300 ease-in-out hover:border-accent/30 hover:shadow-lg hover:shadow-accent/20 dark:hover:border-primary/30 dark:hover:shadow-primary/20">
              <CardContent className="p-6 md:p-10">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="rounded-lg overflow-hidden">
                    <Image
                      src="/cardholder.png"
                      alt="Картхолдер из натуральной кожи"
                      width={600}
                      height={600}
                      className="object-cover w-full h-full rounded-md"
                    />
                  </div>
                  <div className="space-y-6">
                    <h2 className="text-3xl font-headline font-semibold">Картхолдер из натуральной кожи</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Полностью ручная работа. Этот стильный и практичный аксессуар создан для тех, кто ценит качество и минимализм.
                    </p>
                    <div className="bg-secondary p-6 rounded-lg space-y-4">
                        <div className="flex items-start gap-4">
                            <Gift className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                            <div>
                                <h3 className="font-semibold">Подарок для клиентов</h3>
                                <p className="text-sm text-muted-foreground">
                                    Для каждого моего клиента, с которым мы работаем по комплексному ведению дела, этот картхолдер прилагается в качестве подарка в знак благодарности за доверие.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <ShoppingCart className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                            <div>
                                <h3 className="font-semibold">Возможность покупки</h3>
                                <p className="text-sm text-muted-foreground">
                                    Вы также можете приобрести картхолдер отдельно. Это отличный подарок для себя или близких, ценящих качественные вещи ручной работы.
                                </p>
                                <p className="text-lg font-semibold text-primary mt-2">Цена: 2500 ₽</p>
                            </div>
                        </div>
                    </div>
                    <Button asChild size="lg" className="w-full md:w-auto">
                        <Link href="/#contact">Узнать больше и заказать</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </section>
      </main>
      <Footer />
    </div>
  );
}
