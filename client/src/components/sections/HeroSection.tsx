import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section id="inicio" className="relative bg-gradient-to-r from-primary-700 to-primary-900 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        {/* A grid of data analytics elements representing business intelligence */}
        <div className="grid grid-cols-6 grid-rows-6 h-full w-full">
          <div className="col-span-2 row-span-2 border border-white/30 rounded-lg m-2"></div>
          <div className="col-span-1 row-span-3 border border-white/30 rounded-lg m-2"></div>
          <div className="col-span-3 row-span-1 border border-white/30 rounded-lg m-2"></div>
          <div className="col-span-2 row-span-2 border border-white/30 rounded-lg m-2"></div>
          <div className="col-span-1 row-span-1 border border-white/30 rounded-lg m-2"></div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 relative z-10">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Transforme seus Dados em <span className="text-primary-200">Decisões Inteligentes</span>
            </h1>
            <p className="text-xl text-primary-100 mb-8">
              Consultoria especializada em análise de dados para pequenos negócios.
              Descubra insights valiosos que impulsionarão seu crescimento.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button
                asChild
                size="lg"
                className="bg-primary-500 hover:bg-primary-400 text-white"
              >
                <a href="#contato">Fale Comigo</a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary-700"
              >
                <a href="#servicos">Ver Serviços</a>
              </Button>
            </div>
          </div>
          
          <div className="mt-12 lg:mt-0 flex justify-center">
            {/* A business data dashboard visualization */}
            <div className="bg-white rounded-lg shadow-xl overflow-hidden w-full max-w-md">
              <div className="bg-primary-800 p-4 flex justify-between items-center">
                <span className="text-white font-medium">Dashboard Gerencial</span>
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
              </div>
              <div className="p-5 grid grid-cols-2 gap-4">
                <div className="col-span-2 bg-primary-50 rounded-lg p-4">
                  <div className="h-4 w-24 bg-primary-200 rounded mb-2"></div>
                  <div className="flex justify-between items-end">
                    <div className="space-y-2">
                      <div className="h-8 w-24 bg-primary-300 rounded"></div>
                      <div className="h-4 w-16 bg-primary-200 rounded"></div>
                    </div>
                    <div className="flex h-24 items-end space-x-1">
                      <div className="w-4 h-12 bg-primary-400 rounded-t"></div>
                      <div className="w-4 h-16 bg-primary-500 rounded-t"></div>
                      <div className="w-4 h-8 bg-primary-400 rounded-t"></div>
                      <div className="w-4 h-20 bg-primary-600 rounded-t"></div>
                      <div className="w-4 h-14 bg-primary-500 rounded-t"></div>
                      <div className="w-4 h-10 bg-primary-400 rounded-t"></div>
                    </div>
                  </div>
                </div>
                <div className="bg-primary-50 rounded-lg p-4">
                  <div className="h-4 w-16 bg-primary-200 rounded mb-2"></div>
                  <div className="flex items-center justify-center h-20">
                    <div className="h-20 w-20 rounded-full border-8 border-primary-300 flex items-center justify-center">
                      <span className="text-primary-700 font-bold">75%</span>
                    </div>
                  </div>
                </div>
                <div className="bg-primary-50 rounded-lg p-4">
                  <div className="h-4 w-20 bg-primary-200 rounded mb-2"></div>
                  <div className="space-y-2">
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-primary-600 h-2.5 rounded-full" style={{width: '85%'}}></div>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-primary-500 h-2.5 rounded-full" style={{width: '70%'}}></div>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-primary-400 h-2.5 rounded-full" style={{width: '60%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
