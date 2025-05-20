import { 
  Linkedin, 
  Github, 
  Instagram 
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="text-2xl font-bold mb-4">Diego Alves</div>
            <p className="text-primary-100 mb-6">
              Transformando dados em decisões estratégicas para pequenos negócios.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-white hover:text-primary-200 h-10 w-10 flex items-center justify-center rounded-full bg-primary-800 hover:bg-primary-700 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-white hover:text-primary-200 h-10 w-10 flex items-center justify-center rounded-full bg-primary-800 hover:bg-primary-700 transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-white hover:text-primary-200 h-10 w-10 flex items-center justify-center rounded-full bg-primary-800 hover:bg-primary-700 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#inicio" className="text-primary-200 hover:text-white transition-colors">Início</a></li>
              <li><a href="#servicos" className="text-primary-200 hover:text-white transition-colors">Serviços</a></li>
              <li><a href="#clientes" className="text-primary-200 hover:text-white transition-colors">Para Quem</a></li>
              <li><a href="#casos" className="text-primary-200 hover:text-white transition-colors">Casos</a></li>
              <li><a href="#sobre" className="text-primary-200 hover:text-white transition-colors">Sobre</a></li>
              <li><a href="#contato" className="text-primary-200 hover:text-white transition-colors">Contato</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2">
              <li><a href="#servicos" className="text-primary-200 hover:text-white transition-colors">Dashboards</a></li>
              <li><a href="#servicos" className="text-primary-200 hover:text-white transition-colors">Análise de Vendas</a></li>
              <li><a href="#servicos" className="text-primary-200 hover:text-white transition-colors">Segmentação de Clientes</a></li>
              <li><a href="#servicos" className="text-primary-200 hover:text-white transition-colors">Gestão de Agendamentos</a></li>
              <li><a href="#servicos" className="text-primary-200 hover:text-white transition-colors">Treinamentos</a></li>
              <li><a href="#servicos" className="text-primary-200 hover:text-white transition-colors">Consultoria</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-primary-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-300 text-sm">
            &copy; {currentYear} Diego Alves - Consultoria em Análise de Dados. Todos os direitos reservados.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-8">
            <a href="#" className="text-primary-300 hover:text-white text-sm transition-colors">Política de Privacidade</a>
            <a href="#" className="text-primary-300 hover:text-white text-sm transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
