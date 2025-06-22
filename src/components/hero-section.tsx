import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { AnimatedSection } from './animated-section';
import Link from 'next/link';

export function HeroSection() {
  return (
    <AnimatedSection>
      <section id="home" className="container grid lg:grid-cols-2 gap-12 items-center py-20 sm:py-32">
        <div className="flex flex-col items-start space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-headline font-bold tracking-tighter">
            Профессиональная юридическая помощь
          </h1>
          <p className="text-lg text-muted-foreground max-w-[600px]">
            Опытный юрист, специализирующийся на банкротстве и представлении интересов в суде. Добро пожаловать на мой персональный сайт.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg">
              <Link href="/#services">Мои Услуги</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/about">Обо мне</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/#contact">Связаться</Link>
            </Button>
          </div>
        </div>
        <div className="flex justify-center lg:order-last order-first">
          <Image
            src="/photo.png"
            alt="Портрет юриста"
            width={500}
            height={500}
            className="rounded-full object-cover aspect-square shadow-2xl"
            style={{ objectPosition: 'center 30%' }}
          />
        </div>
      </section>
    </AnimatedSection>
  );
}
