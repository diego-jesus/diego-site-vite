export default function ProcessSection() {
  const steps = [
    {
      number: 1,
      title: "Diagnóstico Inicial",
      description: "Realizamos uma análise completa do seu negócio utilizando SQL e BigQuery para identificar oportunidades de melhoria, compreender seus objetivos e mapear as fontes de dados disponíveis."
    },
    {
      number: 2,
      title: "Implementação",
      description: "Desenvolvemos e implementamos dashboards no Looker Studio e soluções personalizadas de análise de dados, incluindo painéis interativos e relatórios automatizados para seu negócio."
    },
    {
      number: 3,
      title: "Acompanhamento",
      description: "Oferecemos suporte contínuo, consultoria estratégica e reuniões periódicas para análise dos resultados, garantindo que seu negócio aproveite ao máximo os insights gerados pelos dados."
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-primary-800 to-primary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Como Trabalhamos
          </h2>
          <p className="mt-4 text-xl text-primary-100 max-w-3xl mx-auto">
            Um processo transparente e eficiente para transformar seus dados em resultados concretos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition-colors"
            >
              <div className="flex items-center mb-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 text-primary-800 font-bold text-lg mr-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold">{step.title}</h3>
              </div>
              <p className="text-primary-100 mb-4">
                {step.description}
              </p>
              <div className="mt-4 flex items-center">
                <div className="w-4 h-4 rounded-full bg-primary-200"></div>
                {index < steps.length - 1 && (
                  <div className="h-0.5 flex-grow bg-primary-200"></div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
