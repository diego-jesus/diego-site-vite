
import { Card, CardContent } from "lucide-react";
import { Mail, Phone } from "lucide-react";

export default function HomePage() {
  return (
    <div style={{ minHeight: "100vh", background: "#0f0f0f", color: "white", padding: "2rem" }}>
      <header style={{ textAlign: "center", marginBottom: "2rem" }}>
        <h1 style={{ fontSize: "2.5rem", fontWeight: "bold" }}>Diego Alves - Análise de Dados</h1>
        <p style={{ color: "#ccc" }}>Transformo dados em decisões para farmácias, clínicas e pequenos comércios</p>
      </header>

      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
        <div style={{ background: "#1e1e1e", padding: "1rem", borderRadius: "8px", width: "300px" }}>
          <h2 style={{ fontSize: "1.25rem", fontWeight: "bold" }}>Análise de Vendas</h2>
          <p>Entenda quais produtos mais vendem, dias de maior movimento e clientes mais fiéis.</p>
        </div>
        <div style={{ background: "#1e1e1e", padding: "1rem", borderRadius: "8px", width: "300px" }}>
          <h2 style={{ fontSize: "1.25rem", fontWeight: "bold" }}>Controle de Estoque</h2>
          <p>Identifique rupturas, excessos e otimize seu giro de produtos com dados reais.</p>
        </div>
        <div style={{ background: "#1e1e1e", padding: "1rem", borderRadius: "8px", width: "300px" }}>
          <h2 style={{ fontSize: "1.25rem", fontWeight: "bold" }}>Relatórios Visuais</h2>
          <p>Painéis em tempo real com gráficos simples para você acompanhar seu negócio sem complicação.</p>
        </div>
      </div>

      <section style={{ textAlign: "center", marginTop: "3rem" }}>
        <h2 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>Quer uma demonstração gratuita?</h2>
        <p>Me envie uma planilha ou me conte como você registra suas vendas. Eu te mostro como isso vira um painel de decisões.</p>
        <a href="https://wa.me/5521973002242" target="_blank" rel="noopener noreferrer"
           style={{ display: "inline-block", marginTop: "1rem", backgroundColor: "#16a34a", color: "white", padding: "0.75rem 1.5rem", borderRadius: "5px" }}>
          Falar no WhatsApp
        </a>
      </section>

      <footer style={{ borderTop: "1px solid #333", marginTop: "3rem", paddingTop: "1rem", textAlign: "center", color: "#888" }}>
        <p>Diego Alves | Especialista em Dados para Pequenos Negócios</p>
        <p><Phone size={14}/> (21) 97300-2242 | <Mail size={14}/> diegoliveira634@gmail.com</p>
      </footer>
    </div>
  );
}
