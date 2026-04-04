const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Enzzo Pontes Baraldo
        </p>
        <p className="text-sm text-muted-foreground">
          Feito com <span className="text-primary">♥</span> e muito código
        </p>
      </div>
    </footer>
  );
};

export default Footer;
