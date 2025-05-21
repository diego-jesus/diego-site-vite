
export const metadata = {
  title: "Diego Oliveira - Análise de Dados",
  description: "Soluções em dados para farmácias, clínicas e pequenos comércios",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
