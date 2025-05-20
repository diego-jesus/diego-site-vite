import { ArrowUp, ArrowDown } from "lucide-react";

export default function PortfolioSection() {
  return (
    <section id="casos" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-neutral-800 sm:text-4xl">
            Exemplos de Dashboards
          </h2>
          <p className="mt-4 text-xl text-neutral-500 max-w-3xl mx-auto">
            Conheça alguns exemplos de dashboards e relatórios que desenvolvemos para nossos clientes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Dashboard Example 1 */}
          <div className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <div className="bg-primary-800 p-3 flex justify-between items-center">
              <span className="text-white font-medium">Dashboard de Vendas - Mercadinho</span>
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
            </div>
            <div className="bg-white p-4">
              <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="bg-primary-50 p-3 rounded-lg">
                  <div className="text-xs text-neutral-500 mb-1">Vendas do Mês</div>
                  <div className="text-xl font-bold text-primary-700">R$ 152.389</div>
                  <div className="text-xs text-green-600 flex items-center mt-1">
                    <ArrowUp className="h-3 w-3 mr-1" /> 12,3% vs mês anterior
                  </div>
                </div>
                <div className="bg-primary-50 p-3 rounded-lg">
                  <div className="text-xs text-neutral-500 mb-1">Ticket Médio</div>
                  <div className="text-xl font-bold text-primary-700">R$ 87,50</div>
                  <div className="text-xs text-green-600 flex items-center mt-1">
                    <ArrowUp className="h-3 w-3 mr-1" /> 5,2% vs mês anterior
                  </div>
                </div>
                <div className="bg-primary-50 p-3 rounded-lg">
                  <div className="text-xs text-neutral-500 mb-1">Itens por Venda</div>
                  <div className="text-xl font-bold text-primary-700">12,3</div>
                  <div className="text-xs text-red-600 flex items-center mt-1">
                    <ArrowDown className="h-3 w-3 mr-1" /> 1,5% vs mês anterior
                  </div>
                </div>
              </div>
              
              <div className="bg-primary-50 p-4 rounded-lg mb-4">
                <div className="text-sm font-medium text-neutral-700 mb-2">Vendas por Categoria</div>
                <div className="h-48 flex items-end space-x-2">
                  <div className="flex-1 flex flex-col items-center">
                    <div className="w-full bg-primary-400 rounded-t h-36"></div>
                    <div className="text-xs mt-1 text-neutral-600">Hortifruti</div>
                  </div>
                  <div className="flex-1 flex flex-col items-center">
                    <div className="w-full bg-primary-500 rounded-t h-24"></div>
                    <div className="text-xs mt-1 text-neutral-600">Padaria</div>
                  </div>
                  <div className="flex-1 flex flex-col items-center">
                    <div className="w-full bg-primary-600 rounded-t h-32"></div>
                    <div className="text-xs mt-1 text-neutral-600">Açougue</div>
                  </div>
                  <div className="flex-1 flex flex-col items-center">
                    <div className="w-full bg-primary-700 rounded-t h-28"></div>
                    <div className="text-xs mt-1 text-neutral-600">Laticínios</div>
                  </div>
                  <div className="flex-1 flex flex-col items-center">
                    <div className="w-full bg-primary-800 rounded-t h-20"></div>
                    <div className="text-xs mt-1 text-neutral-600">Limpeza</div>
                  </div>
                  <div className="flex-1 flex flex-col items-center">
                    <div className="w-full bg-primary-300 rounded-t h-16"></div>
                    <div className="text-xs mt-1 text-neutral-600">Bebidas</div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-primary-50 p-4 rounded-lg">
                  <div className="text-sm font-medium text-neutral-700 mb-2">Produtos Mais Vendidos</div>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-neutral-600">Banana Prata</span>
                      <div className="h-2 w-3/4 bg-gray-200 rounded-full">
                        <div className="h-2 bg-primary-600 rounded-full" style={{width: '85%'}}></div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-neutral-600">Leite Integral</span>
                      <div className="h-2 w-3/4 bg-gray-200 rounded-full">
                        <div className="h-2 bg-primary-600 rounded-full" style={{width: '70%'}}></div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-neutral-600">Pão Francês</span>
                      <div className="h-2 w-3/4 bg-gray-200 rounded-full">
                        <div className="h-2 bg-primary-600 rounded-full" style={{width: '65%'}}></div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-neutral-600">Carne Moída</span>
                      <div className="h-2 w-3/4 bg-gray-200 rounded-full">
                        <div className="h-2 bg-primary-600 rounded-full" style={{width: '52%'}}></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-primary-50 p-4 rounded-lg">
                  <div className="text-sm font-medium text-neutral-700 mb-2">Vendas por Horário</div>
                  <div className="h-24 flex items-end space-x-1">
                    <div className="flex-1 flex flex-col items-center">
                      <div className="w-full bg-primary-300 rounded-t h-4"></div>
                      <div className="text-xs mt-1 text-neutral-600">6h</div>
                    </div>
                    <div className="flex-1 flex flex-col items-center">
                      <div className="w-full bg-primary-300 rounded-t h-8"></div>
                      <div className="text-xs mt-1 text-neutral-600">8h</div>
                    </div>
                    <div className="flex-1 flex flex-col items-center">
                      <div className="w-full bg-primary-400 rounded-t h-12"></div>
                      <div className="text-xs mt-1 text-neutral-600">10h</div>
                    </div>
                    <div className="flex-1 flex flex-col items-center">
                      <div className="w-full bg-primary-500 rounded-t h-16"></div>
                      <div className="text-xs mt-1 text-neutral-600">12h</div>
                    </div>
                    <div className="flex-1 flex flex-col items-center">
                      <div className="w-full bg-primary-600 rounded-t h-12"></div>
                      <div className="text-xs mt-1 text-neutral-600">14h</div>
                    </div>
                    <div className="flex-1 flex flex-col items-center">
                      <div className="w-full bg-primary-700 rounded-t h-20"></div>
                      <div className="text-xs mt-1 text-neutral-600">18h</div>
                    </div>
                    <div className="flex-1 flex flex-col items-center">
                      <div className="w-full bg-primary-500 rounded-t h-12"></div>
                      <div className="text-xs mt-1 text-neutral-600">20h</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Dashboard Example 2 */}
          <div className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <div className="bg-primary-800 p-3 flex justify-between items-center">
              <span className="text-white font-medium">Dashboard Clínica - Agenda e Produtividade</span>
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
            </div>
            <div className="bg-white p-4">
              <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="bg-primary-50 p-3 rounded-lg">
                  <div className="text-xs text-neutral-500 mb-1">Atendimentos</div>
                  <div className="text-xl font-bold text-primary-700">324</div>
                  <div className="text-xs text-green-600 flex items-center mt-1">
                    <ArrowUp className="h-3 w-3 mr-1" /> 8,5% vs mês anterior
                  </div>
                </div>
                <div className="bg-primary-50 p-3 rounded-lg">
                  <div className="text-xs text-neutral-500 mb-1">Taxa de Ocupação</div>
                  <div className="text-xl font-bold text-primary-700">78%</div>
                  <div className="text-xs text-green-600 flex items-center mt-1">
                    <ArrowUp className="h-3 w-3 mr-1" /> 3,2% vs mês anterior
                  </div>
                </div>
                <div className="bg-primary-50 p-3 rounded-lg">
                  <div className="text-xs text-neutral-500 mb-1">No-Show</div>
                  <div className="text-xl font-bold text-primary-700">5,2%</div>
                  <div className="text-xs text-green-600 flex items-center mt-1">
                    <ArrowDown className="h-3 w-3 mr-1" /> 2,1% vs mês anterior
                  </div>
                </div>
              </div>
              
              <div className="bg-primary-50 p-4 rounded-lg mb-4">
                <div className="text-sm font-medium text-neutral-700 mb-2">Taxa de Ocupação por Profissional</div>
                <div className="h-48 flex items-end space-x-6">
                  <div className="flex-1 flex flex-col items-center">
                    <div className="w-full bg-primary-700 rounded-t h-36"></div>
                    <div className="text-xs mt-1 text-neutral-600">Dr. Silva</div>
                  </div>
                  <div className="flex-1 flex flex-col items-center">
                    <div className="w-full bg-primary-600 rounded-t h-28"></div>
                    <div className="text-xs mt-1 text-neutral-600">Dra. Santos</div>
                  </div>
                  <div className="flex-1 flex flex-col items-center">
                    <div className="w-full bg-primary-500 rounded-t h-24"></div>
                    <div className="text-xs mt-1 text-neutral-600">Dr. Oliveira</div>
                  </div>
                  <div className="flex-1 flex flex-col items-center">
                    <div className="w-full bg-primary-400 rounded-t h-32"></div>
                    <div className="text-xs mt-1 text-neutral-600">Dra. Costa</div>
                  </div>
                  <div className="flex-1 flex flex-col items-center">
                    <div className="w-full bg-primary-300 rounded-t h-20"></div>
                    <div className="text-xs mt-1 text-neutral-600">Dr. Pereira</div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-primary-50 p-4 rounded-lg">
                  <div className="text-sm font-medium text-neutral-700 mb-2">Procedimentos Realizados</div>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-neutral-600">Consulta</span>
                      <div className="h-2 w-3/4 bg-gray-200 rounded-full">
                        <div className="h-2 bg-primary-600 rounded-full" style={{width: '90%'}}></div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-neutral-600">Exame</span>
                      <div className="h-2 w-3/4 bg-gray-200 rounded-full">
                        <div className="h-2 bg-primary-600 rounded-full" style={{width: '65%'}}></div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-neutral-600">Retorno</span>
                      <div className="h-2 w-3/4 bg-gray-200 rounded-full">
                        <div className="h-2 bg-primary-600 rounded-full" style={{width: '45%'}}></div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-neutral-600">Emergência</span>
                      <div className="h-2 w-3/4 bg-gray-200 rounded-full">
                        <div className="h-2 bg-primary-600 rounded-full" style={{width: '15%'}}></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-primary-50 p-4 rounded-lg">
                  <div className="text-sm font-medium text-neutral-700 mb-2">Agendamentos por Canal</div>
                  <div className="h-24">
                    <div className="flex h-full items-center">
                      <div className="flex-1 flex items-center justify-center">
                        <div className="w-24 h-24 rounded-full border-8 border-primary-500 flex items-center justify-center relative">
                          <div className="absolute inset-0 border-8 border-primary-300 rounded-full" style={{clipPath: 'polygon(0 0, 50% 0, 50% 50%, 0 50%)'}}></div>
                          <div className="absolute inset-0 border-8 border-primary-400 rounded-full" style={{clipPath: 'polygon(50% 0, 100% 0, 100% 50%, 50% 50%)'}}></div>
                          <div className="absolute inset-0 border-8 border-primary-600 rounded-full" style={{clipPath: 'polygon(0 50%, 50% 50%, 50% 100%, 0 100%)'}}></div>
                          <div className="absolute inset-0 border-8 border-primary-700 rounded-full" style={{clipPath: 'polygon(50% 50%, 100% 50%, 100% 100%, 50% 100%)'}}></div>
                        </div>
                      </div>
                      <div className="flex-1 space-y-2">
                        <div className="flex items-center">
                          <div className="w-3 h-3 bg-primary-300 mr-2"></div>
                          <span className="text-xs text-neutral-600">WhatsApp (35%)</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-3 h-3 bg-primary-400 mr-2"></div>
                          <span className="text-xs text-neutral-600">Telefone (30%)</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-3 h-3 bg-primary-500 mr-2"></div>
                          <span className="text-xs text-neutral-600">Site (20%)</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-3 h-3 bg-primary-600 mr-2"></div>
                          <span className="text-xs text-neutral-600">Presencial (15%)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
