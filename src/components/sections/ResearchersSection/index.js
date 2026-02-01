"use client";
import { motion } from "framer-motion";
import Title from "@/components/Title";
import Researcher from "@/components/Researcher";
import Text from "@/components/Text";
import styles from "./researchersSection.module.css";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0 },
  transition: { duration: 0.8 },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function ResearchersSection({ researchers = [] }) {
  // Find Coordinator (Thyago)
  const coordinator = researchers.find(r => r.name.includes("Thyago"));
  const otherResearchers = researchers.filter(r => !r.name.includes("Thyago"));
  otherResearchers.sort((a, b) => a.name.localeCompare(b.name));

  return (
    <motion.section className={styles.researchersSection} id="researcher-section" {...fadeInUp}>
      <Text className={styles.researcherText} text="Contamos com uma equipe multidisciplinar de especialistas em Inteligência Artificial, formada por pesquisadores, desenvolvedores e profissionais de diferentes áreas do conhecimento, atuando de forma integrada no desenvolvimento das soluções propostas." />

      {coordinator && (
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
        >
          <Researcher
            imageSrc={coordinator.profile_picture || "/placeholder.png"}
            reseacherName={coordinator.name}
            headline={coordinator.headline || coordinator.role_description}
            lattesLink={coordinator.lattes_url || coordinator.lattes_link}
            isHorizontal={true}
          />
        </motion.div>
      )}
      {otherResearchers.map((researcher, index) => (
        <motion.div
          key={index}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
        >
          <Researcher
            imageSrc={researcher.profile_picture || "/placeholder.png"}
            reseacherName={researcher.name}
            headline={researcher.headline || researcher.role_description}
            lattesLink={researcher.lattes_url || researcher.lattes_link}
            isHorizontal={true}
          />
        </motion.div>
      ))}
    </motion.section>
  );
}
