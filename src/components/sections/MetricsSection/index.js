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

export default function MetricsSection() {
  const [partners, setPartners] = useState([]);
  const [counts, setCounts] = useState({
    projects: "XX",
    partners: "XX",
  });

  useEffect(() => {
    async function fetchData() {
      // Fetch partners for the carousel and count
      const { data: partnersData, error: partnersError, count: partnersCount } = await supabase
        .from("partners")
        .select("id, name, img_src", { count: "exact" })
        .order("created_at", { ascending: true });

      if (partnersError) {
        console.error("Supabase error (partners):", partnersError);
      } else if (partnersData) {
        setPartners(partnersData.map((p) => p.img_src));
      }

      // Fetch completed projects count
      const { count: projectsCount, error: projectsError } = await supabase
        .from("projects")
        .select("*", { count: "exact", head: true })
        .eq("status", "FINISHED");

      if (projectsError) {
        console.error("Supabase error (projects):", projectsError);
      }

      const format = (num) =>
        num !== null ? (num < 10 ? `0${num}` : num) : "XX";

      setCounts({
        projects: format(projectsCount),
        partners: format(partnersCount),
      });
    }

    fetchData();
  }, []);

  const metrics = [
    { value: "+10", text: "anos de experiência" },
    { value: counts.projects, text: "projetos concluídos" },
    { value: counts.partners, text: "empresas parceiras" },
    { value: "15", text: "artigos publicados" },
  ];

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
