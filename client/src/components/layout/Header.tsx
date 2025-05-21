import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 bg-white ${scrolled ? 'shadow-md' : 'shadow-sm'} transition-shadow`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-primary font-bold text-xl">Diego Oliveira</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#inicio" className="text-neutral-700 hover:text-primary font-medium transition-colors">Início</a>
            <a href="#servicos" className="text-neutral-700 hover:text-primary font-medium transition-colors">Serviços</a>
            <a href="#clientes" className="text-neutral-700 hover:text-primary font-medium transition-colors">Para Quem</a>
            <a href="#casos" className="text-neutral-700 hover:text-primary font-medium transition-colors">Casos</a>
            <a href="#sobre" className="text-neutral-700 hover:text-primary font-medium transition-colors">Sobre</a>
            <a href="#contato" className="text-neutral-700 hover:text-primary font-medium transition-colors">Contato</a>
          </nav>
          <div className="md:hidden">
            <button 
              type="button" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-neutral-800 hover:text-primary focus:outline-none transition-colors"
              aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-md">
          <a 
            href="#inicio" 
            className="block px-3 py-2 text-neutral-700 hover:bg-primary-50 hover:text-primary rounded-md transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Início
          </a>
          <a 
            href="#servicos" 
            className="block px-3 py-2 text-neutral-700 hover:bg-primary-50 hover:text-primary rounded-md transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Serviços
          </a>
          <a 
            href="#clientes" 
            className="block px-3 py-2 text-neutral-700 hover:bg-primary-50 hover:text-primary rounded-md transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Para Quem
          </a>
          <a 
            href="#casos" 
            className="block px-3 py-2 text-neutral-700 hover:bg-primary-50 hover:text-primary rounded-md transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Casos
          </a>
          <a 
            href="#sobre" 
            className="block px-3 py-2 text-neutral-700 hover:bg-primary-50 hover:text-primary rounded-md transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Sobre
          </a>
          <a 
            href="#contato" 
            className="block px-3 py-2 text-neutral-700 hover:bg-primary-50 hover:text-primary rounded-md transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contato
          </a>
        </div>
      </div>
    </header>
  );
}
