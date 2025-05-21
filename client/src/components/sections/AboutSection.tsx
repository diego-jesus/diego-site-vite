import { GraduationCap, Briefcase, LineChart } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="sobre" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="mb-12 lg:mb-0">
            <div className="bg-primary-100 rounded-2xl p-2 inline-block">
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-xl bg-primary-200 flex items-center justify-center">
                <svg 
                  className="text-primary-300 w-48 h-48"
                  viewBox="0 0 24 24" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 5C13.66 5 15 6.34 15 8C15 9.66 13.66 11 12 11C10.34 11 9 9.66 9 8C9 6.34 10.34 5 12 5ZM12 19.2C9.5 19.2 7.29 17.92 6 15.98C6.03 13.99 10 12.9 12 12.9C13.99 12.9 17.97 13.99 18 15.98C16.71 17.92 14.5 19.2 12 19.2Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-neutral-800 sm:text-4xl mb-6">
              Sobre Diego Oliveira
            </h2>
            <p className="text-lg text-neutral-600 mb-6">
              Especialista em análise de dados com mais de 8 anos de experiência, ajudando pequenos negócios a tomarem decisões mais assertivas através do uso estratégico de seus dados.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="h-8 w-8 flex items-center justify-center rounded-full bg-primary-100 text-primary-600 mr-4 mt-1">
                  <GraduationCap className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="font-medium text-neutral-800">Formação</h4>
                  <p className="text-neutral-600">Mestrado em Ciência de Dados pela UFRJ e especialização em Business Intelligence pela FGV.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="h-8 w-8 flex items-center justify-center rounded-full bg-primary-100 text-primary-600 mr-4 mt-1">
                  <Briefcase className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="font-medium text-neutral-800">Experiência</h4>
                  <p className="text-neutral-600">Consultor de empresas de varejo e clínicas de saúde, desenvolvendo soluções de dados que geraram mais de R$ 10 milhões em economia e aumento de receita.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="h-8 w-8 flex items-center justify-center rounded-full bg-primary-100 text-primary-600 mr-4 mt-1">
                  <LineChart className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="font-medium text-neutral-800">Especialidades</h4>
                  <p className="text-neutral-600">Dashboards interativos, análise preditiva, segmentação de clientes e otimização de processos baseados em dados.</p>
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
