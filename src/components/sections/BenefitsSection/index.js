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
    text: "Atuamos com base científica rigorosa, aplicando métodos modernos de Inteligência Artificial e computação avançada para o desenvolvimento de soluções robustas, confiáveis e de alto desempenho.",
  },
  {
    title: "Infraestrutura e suporte institucional",
    text: "Como grupo vinculado ao CEIA/UFG, dispomos de infraestrutura laboratorial de ponta, servidores de alto desempenho e suporte de pesquisadores reconhecidos nacionalmente.",
  },
  {
    title: "Soluções práticas e personalizadas",
    text: "Desenvolvemos soluções sob medida, desde a compreensão do desafio até a entrega de sistemas escaláveis, eficientes e alinhados aos objetivos estratégicos do projeto.",
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
