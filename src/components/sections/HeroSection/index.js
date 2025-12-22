"use client";
import Image from "next/image";
import Title from "@/components/Title";
import Text from "@/components/Text";
import Button from "@/components/Button";
import styles from "./heroSection.module.css";

export default function HeroSection() {
  return (
    <section className={styles.heroSection} id="main-section">
      <Image src="/logo.png" alt="Logo do GPSIA" width={200} height={222} />
      <Title
        className={styles.title}
        text="Grupo de Pesquisa em Soluções e Inteligência Artificial"
        coloredText=""
      />
      <Text
        className={styles.text}
        text="Grupo de Pesquisa ligado ao Centro de Excelência em Inteligência Artificial (CEIA) da Universidade Federal de Goiás (UFG)"
        fontSize={1.2}
      />
      <div className={styles.buttonsWrapper}>
        <Button
          text="Projetos Concluídos"
          backgroundColorVariable="--first-color"
          width={18}
        />
        <Button
          text="Projetos em Andamento"
          backgroundColorVariable="--second-color"
          width={18}
        />
      </div>
    </section>
  );
}
