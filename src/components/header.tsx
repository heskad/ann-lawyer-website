import { Gavel } from "lucide-react";

export function Header() {
  const navLinks = [
    { name: "Главная", href: "#home" },
    { name: "Услуги", href: "#services" },
    { name: "Контакты", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <a href="#home" className="mr-6 flex items-center space-x-2">
          <Gavel className="h-6 w-6 text-primary" />
          <span className="font-bold font-headline sm:inline-block">
            Правовая Защита
          </span>
        </a>
        <nav className="flex items-center gap-6 text-sm">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-foreground/60 transition-colors hover:text-foreground/80"
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
