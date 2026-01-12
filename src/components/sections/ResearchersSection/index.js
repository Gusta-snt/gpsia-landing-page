"use client";
import { motion } from "framer-motion";
import Title from "@/components/Title";
import Researcher from "@/components/Researcher";
import styles from "./researchersSection.module.css";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.8 },
};

const researchers = [
  {
    imageSrc: "/researcher1.png",
    name: "Thyago Carvalho Marques",
    text: "Possui graduação em Ciência da Computação pelo Instituto Unificado Ensino Superior Objetivo (1999), mestrado em Engenharia Elétrica e de Computação pela Universidade Federal de Goiás (2002) e doutorado em Engenharia Elétrica e Computação e pós-graduado em Economia Financeira pela Universidade Estadual de Campinas (2006), pós graduado em Planejamento Tributário pela Faculdade de Administração e Ciências Econômicas - FACE da Universidade Federal de Goiás (2015). É Professor Associado IV da Universidade Federal de Goiás (UFG) na Escola de Engenharia Elétrica, Mecânica e de Computação (EMC). Tem experiência na área de engenharia econômica e financeira, otimização matemática, projeto e desenvolvimento de software inteligentes utilizando Business Intelligence, Data Science e Inteligência Artificial, e estudo de viabilidade econômica e financeira. Tem experiência no Mercado de Capitais e no desenvolvimento de HFT (High Frequent Trading) para operações automatizadas em mercados financeiros. É coordenador do Curso de Especialização em Engenharia Econômica e Financeira nos Negócios. Foi membro do Conselho Gestor da UFG. Foi sub secretário de Ciência, Tecnologia e Inovação no Estado de Goiás em 2021. É coordenador de Desenvolvimento de Projetos no CEIA (Centro de Excelência em Inteligência Artificial) e pesquisador EMBRAPII (Empresa Brasileira de Pesquisa e Inovação Industrial).",
  },
  {
    imageSrc: "/researcher2.png",
    name: "Adriano César Santana",
    text: "Pós-graduando em Inteligência Artificial Generativa (AKCIT/CEIA, 2025). Pós graduando no MBA em Inteligência Artificial para Gestão e Negócios (IPOG, 2025). Pós-doutor em Microeletrônica pela Universidade de São Paulo (USP/SP, 2017). Doutor em Telecomunicações pela Universidade de Brasília (UnB/DF, 2009). Certificado como Project Management Professional (PMP) pelo Project Management Institute PMI/US, 2007). Mestre em Tecnologia da Informação pela Universidade de Brasília (UnB/DF, 2004) e Graduado em Ciência da Computação pela Pontifícia Universidade Católica deGoiás (PUC/GO, 2001). Atua em projetos interdisciplinares voltados à inovação tecnológica e à integração entre universidade e setor produtivo. Pesquisa e desenvolve produtos em Inteligência Artificial, Internet das Coisas, Métodos Ágeis de Gestão e Liderança, Gestão de Projetos e Negócios e Educação em Engenharia. Colabora com projetos no CEIA (Centro de Excelência em Inteligência Artificial) e na EMBRAPII (Empresa Brasileira de Pesquisa e Inovação Industrial).",
  },
];

export default function ResearchersSection() {
  return (
    <motion.section className={styles.researchersSection} id="researcher-section" {...fadeInUp}>
      <Title text="Alguns pesquisadores" />
      {researchers.map((researcher, index) => (
        <Researcher
          key={index}
          imageSrc={researcher.imageSrc}
          reseacherName={researcher.name}
          text={researcher.text}
        />
      ))}
    </motion.section>
  );
}
