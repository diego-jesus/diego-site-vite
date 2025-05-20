import { Star } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      text: "Após implementar o sistema de análise de dados, conseguimos reduzir em 30% as perdas de estoque e aumentar em 22% o ticket médio. O retorno sobre o investimento foi quase imediato.",
      author: "Marcos Silva",
      role: "Proprietário, Mercadinho Família",
      initials: "MS"
    },
    {
      text: "A análise de dados nos ajudou a identificar os horários de maior demanda e otimizar nossa agenda. Reduzimos as faltas em 65% e aumentamos nossa taxa de ocupação para 85%.",
      author: "Dra. Ana Santos",
      role: "Diretora, Clínica Bem-Estar",
      initials: "AS"
    },
    {
      text: "O dashboard de acompanhamento das taxas de conversão nos permitiu identificar gargalos no processo de vendas. Aumentamos em 40% a conversão de orçamentos em tratamentos efetivos.",
      author: "Dr. Ricardo Lima",
      role: "Proprietário, Odonto Excellence",
      initials: "RL"
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-neutral-800 sm:text-4xl">
            O que Dizem Nossos Clientes
          </h2>
          <p className="mt-4 text-xl text-neutral-500 max-w-3xl mx-auto">
            Conheça a experiência de quem já transformou seus negócios com nossa consultoria.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex text-primary-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="text-neutral-600 mb-6 italic">
                "{testimonial.text}"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-700 font-bold mr-4">
                  {testimonial.initials}
                </div>
                <div>
                  <h4 className="font-medium text-neutral-800">{testimonial.author}</h4>
                  <p className="text-sm text-neutral-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
