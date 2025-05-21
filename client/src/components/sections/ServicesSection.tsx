import { 
  FileCode, 
  Search, 
  Users, 
  Database, 
  BarChart4, 
  Lightbulb,
  CheckIcon,
  ArrowRight,
  Bot
} from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: <FileCode className="h-5 w-5" />,
      title: "Dashboards no Looker Studio",
      description: "Criação de painéis interativos e acessíveis que transformam dados complexos em visualizações claras para pequenos negócios tomarem decisões com confiança.",
      features: [
        "Painéis intuitivos e de fácil compreensão",
        "Atualização automática de dados",
        "Indicadores personalizados para seu negócio"
      ]
    },
    {
      icon: <Database className="h-5 w-5" />,
      title: "Análises com SQL e BigQuery",
      description: "Extração de insights valiosos dos seus dados utilizando SQL e BigQuery para identificar tendências, oportunidades e áreas de melhoria no seu negócio.",
      features: [
        "Consultas personalizadas para seu negócio",
        "Integração com diversas fontes de dados",
        "Análises avançadas com resultados práticos"
      ]
    },
    {
      icon: <Users className="h-5 w-5" />,
      title: "Segmentação de Clientes",
      description: "Identificação de padrões de comportamento para criar grupos de clientes com características similares, permitindo estratégias direcionadas e eficientes.",
      features: [
        "Identificação de perfis de consumo",
        "Análise de recência, frequência e valor",
        "Estratégias de retenção personalizadas"
      ]
    },
    {
      icon: <BarChart4 className="h-5 w-5" />,
      title: "Análise de Performance",
      description: "Avaliação completa do desempenho do seu negócio, comparando métricas atuais com períodos anteriores e identificando fatores que impactam seus resultados.",
      features: [
        "Comparativos de desempenho",
        "Identificação de gargalos operacionais",
        "Recomendações baseadas em dados"
      ]
    },
    {
      icon: <Bot className="h-5 w-5" />,
      title: "Machine Learning com BigQuery ML",
      description: "Utilização de modelos preditivos para antecipar tendências, comportamentos e resultados, ajudando seu negócio a se preparar para o futuro.",
      features: [
        "Previsão de demanda",
        "Detecção de anomalias",
        "Modelagem preditiva acessível"
      ]
    },
    {
      icon: <Lightbulb className="h-5 w-5" />,
      title: "Consultoria Estratégica",
      description: "Orientação personalizada para pequenos e médios empreendedores que desejam utilizar dados para impulsionar o crescimento de seus negócios.",
      features: [
        "Diagnóstico de maturidade analítica",
        "Planos de ação práticos e viáveis",
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
