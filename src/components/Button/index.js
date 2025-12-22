import styles from "./button.module.css";

export default function Button({ className, text, backgroundColorVariable, width }) {
  return (
    <button className={`${styles.button} ${className || ""}`} style={{backgroundColor: "var(" + backgroundColorVariable + ")", width: width+"rem"}}>
        {text}
    </button>
  );
}
