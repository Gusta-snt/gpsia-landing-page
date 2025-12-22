import styles from "./mainCard.module.css";
import Image from "next/image";

export default function MainCard({ className, text, backgroundColorVariable, imagePath }) {
  return (
    <div className={`${styles.mainCard} ${className || ""}`} style={{backgroundColor: "var(" + backgroundColorVariable + ")"}}>
        <Image
          src={imagePath}
          width={10}
          height={10}
          style={{height: "auto"}}
          alt={text}
          className={styles.mainCardImage}
        />
        {text}
    </div>
  );
}