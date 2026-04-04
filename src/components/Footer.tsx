const Footer = () => {
  return (
    <footer className="py-10 px-6 border-t border-border/50">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground/60">
          &copy; {new Date().getFullYear()} Enzzo Baraldo
        </p>
        <p className="text-sm text-muted-foreground/60">
          Feito com <span className="text-primary">♥</span> e muito código
        </p>
      </div>
    </footer>
  );
};

export default Footer;
