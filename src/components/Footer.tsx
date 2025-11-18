const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-8">
      <div className="container-width px-6 md:px-12 lg:px-24">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Polly Kwan. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Designed & built with care
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
