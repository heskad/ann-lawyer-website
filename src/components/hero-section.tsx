import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { AnimatedSection } from './animated-section';

export function HeroSection() {
  return (
    <AnimatedSection>
      <section id="home" className="container grid lg:grid-cols-2 gap-12 items-center py-20 sm:py-32">
        <div className="flex flex-col items-start space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-headline font-bold tracking-tighter">
            Crafting Digital Experiences
          </h1>
          <p className="text-lg text-muted-foreground max-w-[600px]">
            I'm a passionate developer and designer creating beautiful, functional, and user-centered digital products. Welcome to my personal corner of the web.
          </p>
          <div className="flex gap-4">
            <Button asChild size="lg">
              <a href="#services">My Services</a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>
        </div>
        <div className="flex justify-center lg:order-last order-first">
          <Image
            src="https://placehold.co/600x600.png"
            alt="Professional Portrait"
            width={500}
            height={500}
            className="rounded-full object-cover aspect-square shadow-2xl"
            data-ai-hint="professional portrait"
          />
        </div>
      </section>
    </AnimatedSection>
  );
}
