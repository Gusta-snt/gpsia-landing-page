"use client";
import { motion } from "framer-motion";
import Metric from "@/components/Metric";
import LogosCarousel from "@/components/LogosCarousel";
import styles from "./metricsSection.module.css";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.8 },
};

const metrics = [
  { value: "+10", text: "anos de experiência" },
  { value: "XX", text: "projetos concluídos" },
  { value: "XX", text: "empresas parceiras" },
  { value: "XX", text: "artigos publicados" },
];

const partnerLogos = ["/partner1.png", "/partner2.png", "/partner3.png"];

export default function MetricsSection() {
  return (
    <motion.section className={styles.metricsSection} id="metric-section" {...fadeInUp}>
      <div className={styles.cardsWrapper}>
        {metrics.map((metric, index) => (
          <Metric key={index} value={metric.value} text={metric.text} />
        ))}
      </div>
      <LogosCarousel imagesPaths={partnerLogos} />
    </motion.section>
  );
}
