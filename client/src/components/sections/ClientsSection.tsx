import { Store, Pill, HospitalSquare, LineChart, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ClientsSection() {
  const clientTypes = [
    {
      icon: <Pill className="h-16 w-16" />,
      title: "Farmácias",
      description: "Otimize seu estoque, identifique tendências de venda e aumente sua rentabilidade com análises personalizadas para o seu negócio.",
      kpis: [
        "Giro de estoque por categoria",
        "Produtos mais rentáveis",
        "Eficiência promocional",
        "Sazonalidade de vendas"
      ]
    },
    {
      icon: <HospitalSquare className="h-16 w-16" />,
      title: "Clínicas",
      description: "Melhore a gestão de pacientes, otimize agendamentos e aumente a eficiência operacional da sua clínica com dados precisos.",
      kpis: [
        "Taxa de ocupação de agenda",
        "Tempo médio de atendimento",
        "Taxa de retorno de pacientes",
        "Eficiência operacional"
      ]
    },
    {
      icon: <ShoppingBag className="h-16 w-16" />,
      title: "Comércios Locais",
      description: "Conheça melhor seus clientes, identifique oportunidades de crescimento e tome decisões mais assertivas para seu negócio.",
      kpis: [
        "Perfil de compra dos clientes",
        "Análise de sazonalidade",
        "Efetividade promocional",
        "Gestão de estoque inteligente"
      ]
    }
  ];

  return (
    <section id="clientes" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-neutral-800 sm:text-4xl">
            Soluções para seu Segmento
          </h2>
          <p className="mt-4 text-xl text-neutral-500 max-w-3xl mx-auto">
            Análise de dados personalizada para as necessidades específicas do seu negócio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {clientTypes.map((client, index) => (
            <div key={index} className="rounded-xl overflow-hidden shadow-md bg-white hover:shadow-lg transition-shadow">
              <div className="h-56 bg-primary-50 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-primary-200">
                    {client.icon}
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary-900 to-transparent h-28"></div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-2xl font-bold text-white">{client.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-neutral-600 mb-6">
                  {client.description}
                </p>
                <h4 className="font-semibold text-neutral-800 mb-3">KPIs relevantes:</h4>
                <ul className="space-y-2 mb-6">
                  {client.kpis.map((kpi, idx) => (
                    <li key={idx} className="flex items-start">
                      <LineChart className="h-4 w-4 text-primary-600 mt-1 mr-2" />
                      <span className="text-neutral-700">{kpi}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="bg-primary-600 hover:bg-primary-700 text-white">
                  <a href="#contato">Saiba mais</a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
