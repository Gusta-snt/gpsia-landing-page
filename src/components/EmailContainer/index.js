import styles from "./emailContainer.module.css";

export default function EmailContainer({ className, text, backgroundColorVariable, width }) {
  return (
    <div className={`${styles.button} ${className || ""}`} style={{backgroundColor: "var(" + backgroundColorVariable + ")", width: width+"rem"}}>
        {text}
    </div>
  );
}
