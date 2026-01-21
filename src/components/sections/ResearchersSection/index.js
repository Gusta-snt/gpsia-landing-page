"use client";
import { motion } from "framer-motion";
import Title from "@/components/Title";
import Researcher from "@/components/Researcher";
import Text from "@/components/Text";
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
    headline: "Professor e Pesquisador | Engenharia Econômica, IA e Otimização | Finanças, Indústria e Governo | Ciência de Dados e P&D Aplicado",
    position: "Coordenador",
    text: "Thyago Carvalho Marques é professor associado IV da Universidade Federal de Goiás (UFG), vinculado à Escola de Engenharia Elétrica, Mecânica e de Computação (EMC), atuando também como coordenador de Desenvolvimento de Projetos no Centro de Excelência em Inteligência Artificial (CEIA) e como pesquisador credenciado à EMBRAPII. Sua atuação acadêmica e profissional concentra-se nas áreas de engenharia econômica e financeira, otimização matemática, ciência de dados e inteligência artificial, com forte orientação à pesquisa aplicada, inovação tecnológica e apoio à tomada de decisão. Desenvolve e coordena projetos de pesquisa, desenvolvimento e inovação (P&D) em parceria com instituições públicas, programas de fomento à inovação e setor produtivo, com ênfase em business intelligence, métodos quantitativos, desenvolvimento de software inteligente e sistemas automatizados. Possui experiência na aplicação dessas soluções aos setores de finanças, indústria, governo e inovação tecnológica, incluindo o desenvolvimento de sistemas automatizados de negociação no mercado de capitais (High Frequency Trading). É doutor em Engenharia Elétrica e de Computação pela Universidade Estadual de Campinas (UNICAMP), mestre em Engenharia Elétrica e de Computação pela Universidade Federal de Goiás, graduado em Ciência da Computação pelo Instituto Unificado de Ensino Superior Objetivo, além de possuir especializações em Economia Financeira e Planejamento Tributário. Sua trajetória integra formação acadêmica sólida, produção científica, inovação aplicada e atuação na formação de profissionais em nível de graduação e pós-graduação.",
  },
  /*{
    imageSrc: "/researcher2.png",
    name: "Adriano César Santana",
    text: "Pós-graduando em Inteligência Artificial Generativa (AKCIT/CEIA, 2025). Pós graduando no MBA em Inteligência Artificial para Gestão e Negócios (IPOG, 2025). Pós-doutor em Microeletrônica pela Universidade de São Paulo (USP/SP, 2017). Doutor em Telecomunicações pela Universidade de Brasília (UnB/DF, 2009). Certificado como Project Management Professional (PMP) pelo Project Management Institute PMI/US, 2007). Mestre em Tecnologia da Informação pela Universidade de Brasília (UnB/DF, 2004) e Graduado em Ciência da Computação pela Pontifícia Universidade Católica deGoiás (PUC/GO, 2001). Atua em projetos interdisciplinares voltados à inovação tecnológica e à integração entre universidade e setor produtivo. Pesquisa e desenvolve produtos em Inteligência Artificial, Internet das Coisas, Métodos Ágeis de Gestão e Liderança, Gestão de Projetos e Negócios e Educação em Engenharia. Colabora com projetos no CEIA (Centro de Excelência em Inteligência Artificial) e na EMBRAPII (Empresa Brasileira de Pesquisa e Inovação Industrial).",
  },*/
];

export default function ResearchersSection() {
  return (
    <motion.section className={styles.researchersSection} id="researcher-section" {...fadeInUp}>
      <Title text="Equipe" />
      <Text className={styles.researcherText} text="Contamos com uma equipe multidisciplinar de especialistas em Inteligência Artificial, formada por pesquisadores, desenvolvedores e profissionais de diferentes áreas do conhecimento, atuando de forma integrada no desenvolvimento das soluções propostas." />
      {researchers.map((researcher, index) => (
        <Researcher
          key={index}
          imageSrc={researcher.imageSrc}
          reseacherName={researcher.name}
          headline={researcher.headline}
          reseacherPosition={researcher.position}
          text={researcher.text}
        />
      ))}
    </motion.section>
  );
}
