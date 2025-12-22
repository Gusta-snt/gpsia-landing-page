import styles from "./benefitsText.module.css";
import Text from "../Text";

export default function BenefitsText({ className, title, text, titleFontSize, textFontSize }) {
  return (
    <div className={`${styles.benefitsTextContainer} ${className || ""}`}>
      <Text
        className={styles.benefitsTitle}
        fontSize={titleFontSize}
        text={title}
      />
      <Text
        className={styles.benefitsText}
        fontSize={textFontSize}
        text={text}
      />
    </div>
    
  );
}
