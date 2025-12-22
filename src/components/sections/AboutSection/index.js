"use client";
import { motion } from "framer-motion";
import Text from "@/components/Text";
import MainCard from "@/components/MainCard";
import styles from "./aboutSection.module.css";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.8 },
};

const cards = [
  {
    imagePath: "https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f52c.svg",
    text: "Pesquisa Científica de Alto Nível",
    color: "--first-color",
  },
  {
    imagePath: "https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f9e0.svg",
    text: "Tecnologias Aplicadas e Inovação",
    color: "--second-color",
  },
  {
    imagePath: "https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f393.svg",
    text: "Formação e Capacitação em IA",
    color: "--first-color",
  },
];

export default function AboutSection() {
  return (
    <motion.section className={styles.aboutSection} id="about-section" {...fadeInUp}>
      <Text
        className={styles.text}
        text="Unimos pesquisa científica de excelência, tecnologia avançada e aplicação prática para resolver desafios reais de organizações públicas e privadas. Atuamos no desenvolvimento de soluções inteligentes que aumentam eficiência, precisão e impacto, sempre com base em métodos robustos e alinhamento direto às necessidades dos parceiros"
        fontSize={1.5}
      />
      <div className={styles.cardsWrapper}>
        {cards.map((card, index) => (
          <MainCard
            key={index}
            imagePath={card.imagePath}
            text={card.text}
            backgroundColorVariable={card.color}
          />
        ))}
      </div>
    </motion.section>
  );
}
