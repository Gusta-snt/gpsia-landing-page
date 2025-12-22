import styles from "./researcher.module.css";
import Image from "next/image";
import Text from "../Text";
import Title from "../Title";

export default function Researcher({ className, reseacherName, text, imageSrc }) {
  return (
    <div className={`${styles.researcherContainer} ${className || ""}`}>
        <Image
            src={imageSrc}
            alt="Imagem de perfil do pesquisador"
            width={250}
            height={250}
            className={styles.reseracherImage}
        />
        <div className={styles.researcherDescriptionContainer}>
            <Title
                className={styles.researcherName}
                text={reseacherName}
            />
            <Text
                text={text}
                className={styles.researcherText}
            />
        </div>
        
    </div>
  );
}
