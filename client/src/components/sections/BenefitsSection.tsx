import { 
  Search, 
  TrendingUp, 
  Users, 
  LineChart, 
  BarChart2, 
  Rocket 
} from "lucide-react";

export default function BenefitsSection() {
  const benefits = [
    {
      icon: <Search className="h-6 w-6" />,
      title: "Decisões Baseadas em Dados",
      description: "Transforme intuição em certeza. Tome decisões estratégicas com base em informações concretas e análises precisas."
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Aumento de Lucratividade",
      description: "Identifique oportunidades de crescimento, reduza desperdícios e otimize processos para maximizar seus resultados."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Entenda seus Clientes",
      description: "Conheça profundamente o comportamento dos seus clientes e desenvolva estratégias personalizadas para cada segmento."
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Previsão de Tendências",
      description: "Antecipe-se ao mercado identificando tendências e preparando seu negócio para aproveitar oportunidades futuras."
    },
    {
      icon: <LineChart className="h-6 w-6" />,
      title: "Monitoramento de KPIs",
      description: "Acompanhe indicadores-chave de desempenho em tempo real e ajuste suas estratégias rapidamente conforme necessário."
    },
    {
      icon: <Rocket className="h-6 w-6" />,
      title: "Vantagem Competitiva",
      description: "Destaque-se no mercado utilizando dados para inovar e oferecer experiências superiores aos seus clientes."
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-neutral-800 sm:text-4xl">
            Por que investir em Análise de Dados?
          </h2>
          <p className="mt-4 text-xl text-neutral-500 max-w-3xl mx-auto">
            A análise de dados não é um luxo, é uma necessidade para negócios que desejam prosperar no mercado atual.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary-100 text-primary-600 mb-6">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-neutral-800 mb-3">{benefit.title}</h3>
              <p className="text-neutral-600">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
