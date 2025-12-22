"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./page.module.css";
import Title from "@/components/Title";
import Text from "@/components/Text";
import Button from "@/components/Button";
import MainCard from "@/components/MainCard";
import Metric from "@/components/Metric";
import LogosCarousel from "@/components/LogosCarousel";
import BenefitsText from "@/components/BenefitsText";
import Researcher from "@/components/Researcher";
import EmailContainer from "@/components/EmailContainer";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <section className={styles.mainSection}>
          <Image
            src="/logo.png"
            alt="Logo do GPSIA"
            width={200}
            height={222}
          />
          <Title
            className={styles.mainSectionTitle} 
            text="Grupo de Pesquisa em Soluções e Inteligência Artificial" 
            coloredText=""
          />
          <Text
            className={styles.mainSectionText}
            text="Grupo de Pesquisa ligado ao Centro de Excelência em Inteligência Artificial (CEIA) da Universidade Federal de Goiás (UFG)"
            fontSize={1.2}
          />
          <div className={styles.buttonsWrapper}>
            <Button 
              text="Projetos Concluídos"
              backgroundColorVariable="--first-color"
              width={18}
            />
            <Button 
              text="Projetos em Andamento"
              backgroundColorVariable="--second-color"
              width={18}
            />
          </div>
        </section>
        <motion.section
          className={styles.aboutSection}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <Text
            className={styles.aboutSectionText}
            text="Unimos pesquisa científica de excelência, tecnologia avançada e aplicação prática para resolver desafios reais de organizações públicas e privadas. Atuamos no desenvolvimento de soluções inteligentes que aumentam eficiência, precisão e impacto, sempre com base em métodos robustos e alinhamento direto às necessidades dos parceiros"
            fontSize={1.5}
          />

          <div className={styles.aboutSectionCardsWrapper}>
            <MainCard
              imagePath="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f52c.svg"
              text="Pesquisa Científica de Alto Nível"
              backgroundColorVariable="--first-color"
            />
            <MainCard
              imagePath="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f9e0.svg"
              text="Tecnologias Aplicadas e Inovação"
              backgroundColorVariable="--second-color"
            />
            <MainCard
              imagePath="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f393.svg"
              text="Formação e Capacitação em IA"
              backgroundColorVariable="--first-color"
            />
          </div>
        </motion.section>


        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className={styles.actionSection}
        >
          <Text
            className={styles.actionSectionText}
            text="Nossa atuação abrange todo o ciclo de desenvolvimento de soluções em Inteligência Artificial — desde pesquisa aplicada e experimentação científica até implementação prática em ambientes empresariais e governamentais"
            fontSize={1.5}
          />
          <div className={styles.actionSectionCardsWrapper}>
            <MainCard
              imagePath="/eye.svg"
              text="Visão computacional"
              backgroundColorVariable="--second-color"
            />
            <MainCard
              imagePath="/brain.svg"
              text="Sistemas inteligentes"
              backgroundColorVariable="--first-color"
            />
            <MainCard
              imagePath="/microscope.svg"
              text="Otimização e Pesquisa Operacional"
              backgroundColorVariable="--second-color"
            />
            <MainCard
              imagePath="/book.svg"
              text="Aprendizado de máquina"
              backgroundColorVariable="--first-color"
            />
          </div>
        </motion.section>
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className={styles.metricSection}
        >
          <div className={styles.metricSectionCardsWrapper}>
            <Metric
              value="+10"
              text="anos de experiência"
            />
            <Metric
              value="XX"
              text="projetos concluídos"
            />
            <Metric
              value="XX"
              text="empresas parceiras"
            />
            <Metric
              value="XX"
              text="artigos publicados"
            />
          </div>
          <LogosCarousel
            imagesPaths={[
              "/partner1.png",
              "/partner2.png",
              "/partner3.png",
            ]}
          />
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className={styles.benefitsSection}
        >
          <aside className={styles.benefitsSectionLeft}>
            <BenefitsText
              title="Expertise comprovada"
              text="Trabalhamos com base científica sólida, utilizando métodos modernos de IA e computação avançada para entregar soluções confiáveis e de alto desempenho."
              titleFontSize={1.2}
              textFontSize={1.2}
            />
            <BenefitsText
              title="Infraestrutura e suporte institucional"
              text="Como grupo vinculado ao CEIA/UFG, contamos com laboratórios de última geração, servidores de alto processamento e o apoio de pesquisadores referência no país."
              titleFontSize={1.2}
              textFontSize={1.2}
            />
            <BenefitsText
              title="Soluções práticas e personalizadas"
              text="Cada projeto é construído sob medida — desde o entendimento do problema até a entrega de soluções escaláveis, eficientes e alinhadas ao impacto desejado."
              titleFontSize={1.2}
              textFontSize={1.2}
            />
          </aside>
          <aside className={styles.benefitsSectionRight}>
            <Image
              src="/compass.svg"
              alt="Bússola"
              width={300}
              height={300}
            />
          </aside>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className={styles.researchersSection}
        >
          <Title
            text="Principais Pesquisadores"
            className={styles.researchersSectionTitle}
          />
          <Researcher
            imageSrc="/researcher1.png"
            reseacherName="Thyago Carvalho Marques"
            text="Possui graduação em Ciência da Computação pelo Instituto Unificado Ensino Superior Objetivo (1999), mestrado em Engenharia Elétrica e de Computação pela Universidade Federal de Goiás (2002) e doutorado em Engenharia Elétrica e Computação e pós-graduado em Economia Financeira pela Universidade Estadual de Campinas (2006), pós graduado em Planejamento Tributário pela Faculdade de Administração e Ciências Econômicas - FACE da Universidade Federal de Goiás (2015). É Professor Associado IV da Universidade Federal de Goiás (UFG) na Escola de Engenharia Elétrica, Mecânica e de Computação (EMC). Tem experiência na área de engenharia econômica e financeira, otimização matemática, projeto e desenvolvimento de software inteligentes utilizando Business Intelligence, Data Science e Inteligência Artificial, e estudo de viabilidade econômica e financeira. Tem experiência no Mercado de Capitais e no desenvolvimento de HFT (High Frequent Trading) para operações automatizadas em mercados financeiros. É coordenador do Curso de Especialização em Engenharia Econômica e Financeira nos Negócios. Foi membro do Conselho Gestor da UFG. Foi sub secretário de Ciência, Tecnologia e Inovação no Estado de Goiás em 2021. É coordenador de Desenvolvimento de Projetos no CEIA (Centro de Excelência em Inteligência Artificial) e pesquisador EMBRAPII (Empresa Brasileira de Pesquisa e Inovação Industrial)."
          />
          <Researcher
            imageSrc="/researcher2.png"
            reseacherName="Adriano César Santana"
            text="Pós-graduando em Inteligência Artificial Generativa (AKCIT/CEIA, 2025). Pós graduando no MBA em Inteligência Artificial para Gestão e Negócios (IPOG, 2025). Pós-doutor em Microeletrônica pela Universidade de São Paulo (USP/SP, 2017). Doutor em Telecomunicações pela Universidade de Brasília (UnB/DF, 2009). Certificado como Project Management Professional (PMP) pelo Project Management Institute PMI/US, 2007). Mestre em Tecnologia da Informação pela Universidade de Brasília (UnB/DF, 2004) e Graduado em Ciência da Computação pela Pontifícia Universidade Católica deGoiás (PUC/GO, 2001). Atua em projetos interdisciplinares voltados à inovação tecnológica e à integração entre universidade e setor produtivo. Pesquisa e desenvolve produtos em Inteligência Artificial, Internet das Coisas, Métodos Ágeis de Gestão e Liderança, Gestão de Projetos e Negócios e Educação em Engenharia. Colabora com projetos no CEIA (Centro de Excelência em Inteligência Artificial) e na EMBRAPII (Empresa Brasileira de Pesquisa e Inovação Industrial)."
          />
        </motion.section>
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className={styles.sendEmailSection}
        >
          <EmailContainer text="Enviar um E-mail" />
        </motion.section>
      </main>
    </div>
  );
}
