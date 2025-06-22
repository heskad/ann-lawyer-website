import { Gavel } from "lucide-react";
import Link from 'next/link';

export function Header() {
  const navLinks = [
    { name: "Главная", href: "/" },
    { name: "Обо мне", href: "/about" },
    { name: "Услуги", href: "/#services" },
    { name: "Контакты", href: "/#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Gavel className="h-6 w-6 text-primary" />
          <span className="font-bold font-headline text-sm sm:text-base">
            ИП Кондратьева А.В.
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-4 text-sm sm:gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-foreground/60 transition-colors hover:text-foreground/80"
            >
              {link.name}
            </Link>
          ))}
        </nav>
        {/* TODO: Add a mobile menu trigger */}
      </div>
    </header>
  );
}
