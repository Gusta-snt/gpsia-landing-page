import styles from "./title.module.css";

export default function Title({ className, text, coloredText, ...props}) {
  return (
    <h1 className={`${styles.title} ${className || ""}`} {...props}>
        {text}
        <span className={styles.coloredText}>
            {coloredText}
        </span>
    </h1>
  );
}
