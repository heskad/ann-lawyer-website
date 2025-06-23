
"use client";

import { Gavel, Menu } from "lucide-react";
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { ThemeToggle } from "./theme-toggle";


export function Header() {
  const navLinks = [
    { name: "Обо мне", href: "/about" },
    { name: "Главная", href: "/" },
    { name: "Услуги", href: "/#services" },
    { name: "Практика", href: "/practice" },
    { name: "FAQ", href: "/#faq" },
    { name: "Отзывы", href: "/reviews" },
    { name: "Мерч", href: "/merch" },
    { name: "Контакты", href: "/#contact" },
  ];

  return (
    <header className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur-sm transform-gpu">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Gavel className="h-6 w-6 text-primary" />
          <span className="font-bold font-headline text-sm sm:text-base">
            ИП Кондратьева А.В.
          </span>
        </Link>

        <div className="flex items-center gap-4">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2 text-sm">
            {navLinks.flatMap((link, index) => {
              const linkElement = (
                <Link
                  key={link.name}
                  href={link.href}
                  className="relative rounded-md px-3 py-1.5 text-foreground/80 transition-colors hover:text-foreground nav-link-glow"
                >
                  {link.name}
                </Link>
              );

              if (index === 0) {
                return [
                  linkElement,
                  <span
                    key="separator"
                    className="select-none text-muted-foreground/60"
                    aria-hidden="true"
                  >
                    |
                  </span>,
                ];
              }

              return [linkElement];
            })}
          </nav>
          
          <ThemeToggle />

          {/* Mobile Navigation */}
          <div className="md:hidden">
             <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Открыть меню</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="p-0 transform-gpu">
                 <div className="flex items-center justify-start p-4 border-b">
                   <SheetClose asChild>
                     <Link href="/" className="flex items-center space-x-2">
                       <Gavel className="h-6 w-6 text-primary" />
                       <span className="font-bold font-headline text-base">
                         ИП Кондратьева А.В.
                       </span>
                     </Link>
                   </SheetClose>
                 </div>
                 <nav className="flex flex-col gap-4 p-4">
                  {navLinks.map((link) => (
                     <SheetClose asChild key={link.name}>
                       <Link
                         href={link.href}
                         className="text-lg font-medium text-foreground/80 transition-colors hover:text-foreground"
                       >
                         {link.name}
                       </Link>
                     </SheetClose>
                   ))}
                 </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
