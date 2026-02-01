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
import Button from "@/components/Button";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <HeroSection />
        <AboutSection />
        <ActionSection />
        <MetricsSection />
        <BenefitsSection />
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "4rem", marginTop: "-2rem" }}>
          <Button
            text="Conheça nossos pesquisadores!"
            backgroundColorVariable="--second-color"
            width={25}
            href="/pesquisadores"
          />
        </div>
        {/* <ResearchersSection /> */}
        {/* <ContactSection /> */}
      </main>
      <Footer />
    </div>
  );
}
