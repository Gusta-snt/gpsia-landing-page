import styles from "./researcher.module.css";
import Image from "next/image";
import Text from "../Text";
import Title from "../Title";
import Link from "next/link";

export default function Researcher({ className, reseacherName, headline, imageSrc, lattesLink, isHorizontal }) {
    const containerClass = isHorizontal ? styles.horizontalContainer : styles.researcherContainer;

    return (
        <div className={`${containerClass} ${className || ""}`}>
            <Image
                src={imageSrc}
                alt="Imagem de perfil do pesquisador"
                width={400}
                height={400}
                className={styles.reseracherImage}
            />
            <div className={styles.researcherDescriptionContainer}>
                <Title
                    className={styles.researcherName}
                    text={reseacherName}
                />
                {headline && (
                    <Text
                        className={styles.researcherHeadline}
                        text={headline}
                    />
                )}
                {lattesLink && (
                    <Link href={lattesLink} target="_blank" className={styles.lattesButton}>
                        Currículo Lattes
                    </Link>
                )}
            </div>

        </div>
    );
}
