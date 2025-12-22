import styles from "./title.module.css";

export default function Title({ className, text, coloredText }) {
  return (
    <h1 className={`${styles.title} ${className || ""}`}>
        {text}
        <span className={styles.coloredText}>
            {coloredText}
        </span>
    </h1>
  );
}
