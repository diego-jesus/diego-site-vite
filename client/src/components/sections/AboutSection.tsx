import { GraduationCap, Briefcase, LineChart } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="sobre" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="mb-12 lg:mb-0">
            <div className="bg-primary-100 rounded-2xl p-2">
              <img 
                src="/images/diego-profile.jpg" 
                alt="Diego Oliveira - Especialista em Análise de Dados" 
                className="w-64 h-64 sm:w-80 sm:h-80 rounded-xl object-cover object-center"
              />
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-neutral-800 sm:text-4xl mb-6">
              Sobre Diego Oliveira
            </h2>
            <p className="text-lg text-neutral-600 mb-6">
              Sou Diego Oliveira, especialista em análise de dados com formação em Ciência de Dados pela IBMR e atualmente cursando Business Intelligence pela UVA.
            </p>
            <p className="text-lg text-neutral-600 mb-6">
              Minha atuação é direcionada especialmente para pequenos negócios, como farmácias, clínicas e comércios locais, ajudando a transformar dados em decisões que geram resultado. Meu objetivo é levar inteligência de dados para empresas que muitas vezes não têm acesso a soluções sofisticadas, mas que podem se beneficiar — e muito — de uma análise estratégica e acessível.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="h-8 w-8 flex items-center justify-center rounded-full bg-primary-100 text-primary-600 mr-4 mt-1">
                  <GraduationCap className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="font-medium text-neutral-800">Formação</h4>
                  <p className="text-neutral-600">Ciência de Dados pela IBMR e cursando Business Intelligence pela UVA.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="h-8 w-8 flex items-center justify-center rounded-full bg-primary-100 text-primary-600 mr-4 mt-1">
                  <Briefcase className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="font-medium text-neutral-800">Experiência</h4>
                  <p className="text-neutral-600">Consultor especializado em pequenos e médios negócios, transformando dados em estratégias eficientes e resultados concretos.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="h-8 w-8 flex items-center justify-center rounded-full bg-primary-100 text-primary-600 mr-4 mt-1">
                  <LineChart className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="font-medium text-neutral-800">Especialidades</h4>
                  <p className="text-neutral-600">SQL, BigQuery, Looker Studio e Machine Learning com BigQuery ML para criar análises precisas, painéis claros e automações sob medida.</p>
                </div>
              </div>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-600 hover:text-primary-700 h-10 w-10 flex items-center justify-center rounded-full border border-primary-200 hover:bg-primary-50 transition-colors">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
              <a href="#" className="text-primary-600 hover:text-primary-700 h-10 w-10 flex items-center justify-center rounded-full border border-primary-200 hover:bg-primary-50 transition-colors">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="#" className="text-primary-600 hover:text-primary-700 h-10 w-10 flex items-center justify-center rounded-full border border-primary-200 hover:bg-primary-50 transition-colors">
                <i className="fa-brands fa-medium"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
