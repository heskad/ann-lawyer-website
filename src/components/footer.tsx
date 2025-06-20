export function Footer() {
  return (
    <footer className="border-t bg-secondary/50">
      <div className="container flex items-center justify-center py-6">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} ИП Кондратьева А.В. Все права защищены.
        </p>
      </div>
    </footer>
  );
}
