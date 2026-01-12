"use client";
import styles from "./page.module.css";
import Footer from "@/components/Footer";
import {
  HeroSection,
  AboutSection,
  ActionSection,
  MetricsSection,
  BenefitsSection,
  ResearchersSection,
  ContactSection,
} from "@/components/sections";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <HeroSection />
        <AboutSection />
        <ActionSection />
        <MetricsSection />
        <BenefitsSection />
        <ResearchersSection />
        {/* <ContactSection /> */}
      </main>
      <Footer />
    </div>
  );
}
