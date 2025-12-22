"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import BenefitsText from "@/components/BenefitsText";
import styles from "./benefitsSection.module.css";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.8 },
};

const benefits = [
  {
    title: "Expertise comprovada",
    text: "Trabalhamos com base científica sólida, utilizando métodos modernos de IA e computação avançada para entregar soluções confiáveis e de alto desempenho.",
  },
  {
    title: "Infraestrutura e suporte institucional",
    text: "Como grupo vinculado ao CEIA/UFG, contamos com laboratórios de última geração, servidores de alto processamento e o apoio de pesquisadores referência no país.",
  },
  {
    title: "Soluções práticas e personalizadas",
    text: "Cada projeto é construído sob medida — desde o entendimento do problema até a entrega de soluções escaláveis, eficientes e alinhadas ao impacto desejado.",
  },
];

export default function BenefitsSection() {
  return (
    <motion.section className={styles.benefitsSection} id="benefits-section" {...fadeInUp}>
      <aside className={styles.left}>
        {benefits.map((benefit, index) => (
          <BenefitsText
            key={index}
            title={benefit.title}
            text={benefit.text}
            titleFontSize={1.2}
            textFontSize={1.2}
          />
        ))}
      </aside>
      <aside className={styles.right}>
        <Image src="/compass.svg" alt="Bússola" width={300} height={300} />
      </aside>
    </motion.section>
  );
}
