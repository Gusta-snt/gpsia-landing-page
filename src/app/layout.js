import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"]
})

export const metadata = {
  title: "GPSIA",
  description: "Grupo de Pesquisa ligado ao Centro de Excelência em Inteligência Artificial (CEIA) da Universidade Federal de Goiás (UFG) ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable}`}>
        {children}
      </body>
    </html>
  );
}
