import styles from "./Metric.module.css";
import Image from "next/image";

export default function Metric({ className, text, value }) {
  return (
    <div className={`${styles.metric} ${className || ""}`}>
        <span className={styles.metricValue}>{value}</span>
        {text}
    </div>
  );
}
