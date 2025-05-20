import { 
  FileCode, 
  Search, 
  Users, 
  CalendarCheck, 
  GraduationCap, 
  Lightbulb,
  CheckIcon,
  ArrowRight
} from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: <FileCode className="h-5 w-5" />,
      title: "Implementação de Dashboards",
      description: "Desenvolvimento de painéis interativos personalizados que oferecem visualização clara e objetiva dos indicadores mais importantes para seu negócio.",
      features: [
        "Dashboards interativos e responsivos",
        "Atualização em tempo real",
        "Indicadores personalizados para seu negócio"
      ]
    },
    {
      icon: <Search className="h-5 w-5" />,
      title: "Análise de Vendas e Estoque",
      description: "Identificação de padrões de consumo, produtos mais rentáveis e otimização de estoque para evitar perdas e maximizar lucros.",
      features: [
        "Análise de curva ABC de produtos",
        "Previsão de demanda",
        "Controle de ruptura de estoque"
      ]
    },
    {
      icon: <Users className="h-5 w-5" />,
      title: "Segmentação de Clientes",
      description: "Criação de perfis de clientes para direcionamento estratégico de campanhas e ofertas personalizadas que aumentam a conversão.",
      features: [
        "Identificação de perfis de consumo",
        "Análise de recência, frequência e valor",
        "Estratégias de retenção personalizadas"
      ]
    },
    {
      icon: <CalendarCheck className="h-5 w-5" />,
      title: "Gestão de Agendamentos",
      description: "Otimização do sistema de agendamentos para reduzir faltas, aumentar a eficiência e melhorar a experiência do cliente.",
      features: [
        "Análise de ociosidade e picos de demanda",
        "Redução de taxa de no-show",
        "Otimização de disponibilidade de profissionais"
      ]
    },
    {
      icon: <GraduationCap className="h-5 w-5" />,
      title: "Treinamento e Capacitação",
      description: "Treinamento da sua equipe para utilização eficiente das ferramentas de análise e interpretação correta dos dados.",
      features: [
        "Workshops práticos",
        "Treinamento de ferramentas específicas",
        "Consultoria contínua"
      ]
    },
    {
      icon: <Lightbulb className="h-5 w-5" />,
      title: "Consultoria Estratégica",
      description: "Assessoria contínua para interpretação dos dados e desenvolvimento de planos de ação baseados em insights relevantes.",
      features: [
        "Reuniões de análise periódicas",
        "Planos de ação baseados em dados",
        "Acompanhamento de resultados"
      ]
    }
  ];

  return (
    <section id="servicos" className="py-16 sm:py-24 bg-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-neutral-800 sm:text-4xl">
            Serviços Personalizados
          </h2>
          <p className="mt-4 text-xl text-neutral-500 max-w-3xl mx-auto">
            Soluções completas para extrair o máximo valor dos dados do seu negócio.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="h-3 bg-primary-600"></div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 flex items-center justify-center rounded-full bg-primary-100 text-primary-600 mr-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-neutral-800">{service.title}</h3>
                </div>
                <p className="text-neutral-600 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckIcon className="h-4 w-4 text-primary-600 mt-1 mr-2" />
                      <span className="text-neutral-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a href="#contato" className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors">
                  Saiba mais
                  <ArrowRight className="h-4 w-4 ml-2" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
