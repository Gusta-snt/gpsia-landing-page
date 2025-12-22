"use client";
import { motion } from "framer-motion";
import Text from "@/components/Text";
import MainCard from "@/components/MainCard";
import styles from "./actionSection.module.css";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.8 },
};

const cards = [
  { imagePath: "/eye.svg", text: "Visão computacional", color: "--second-color" },
  { imagePath: "/brain.svg", text: "Sistemas inteligentes", color: "--first-color" },
  { imagePath: "/microscope.svg", text: "Otimização e Pesquisa Operacional", color: "--second-color" },
  { imagePath: "/book.svg", text: "Aprendizado de máquina", color: "--first-color" },
];

export default function ActionSection() {
  return (
    <motion.section className={styles.actionSection} id="action-section" {...fadeInUp}>
      <Text
        className={styles.text}
        text="Nossa atuação abrange todo o ciclo de desenvolvimento de soluções em Inteligência Artificial — desde pesquisa aplicada e experimentação científica até implementação prática em ambientes empresariais e governamentais"
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
