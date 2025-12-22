import styles from "./text.module.css";

export default function Text({ className, text, fontSize }) {
  return (
    <p className={`${styles.text} ${className || ""}`} style={{fontSize: fontSize+"rem"}}>
        {text}
    </p>
  );
}
