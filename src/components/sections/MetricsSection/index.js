"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { supabase } from "@/lib/supabase";
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

export default function MetricsSection() {
  const [partners, setPartners] = useState([]);

  useEffect(() => {
    async function fetchPartners() {
      const { data, error } = await supabase
        .from("partners")
        .select("id, name, img_src")
        .order("created_at", { ascending: true });
 
      if (error) {
        console.error("Supabase error:", error);
        return;
      }
      
      if (data && data.length > 0) {
        setPartners(data.map((p) => p.img_src));
      }
    }
    fetchPartners();
  }, []);

  return (
    <motion.section className={styles.metricsSection} id="metric-section" {...fadeInUp}>
      <div className={styles.cardsWrapper}>
        {metrics.map((metric, index) => (
          <Metric key={index} value={metric.value} text={metric.text} />
        ))}
      </div>
      {partners.length > 0 && <LogosCarousel imagesPaths={partners} />}
    </motion.section>
  );
}
