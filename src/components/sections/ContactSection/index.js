"use client";
import { motion } from "framer-motion";
import EmailContainer from "@/components/EmailContainer";
import styles from "./contactSection.module.css";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.8 },
};

export default function ContactSection() {
  return (
    <motion.section className={styles.contactSection} id="send-email-section" {...fadeInUp}>
      <EmailContainer text="Enviar um E-mail" />
    </motion.section>
  );
}
