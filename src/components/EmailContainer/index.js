import styles from "./emailContainer.module.css";
import Title from "../Title";
import Input from "../Input";
import Button from "../Button";

export default function EmailContainer({ className, text}) {
  return (
    <div className={`${styles.emailContainer} ${className || ""}`}>
        <Title text={text} style={{color: "var(--white-text-color)", fontSize: "1.5em"}}/>
        <form className={styles.form}>
            <Input 
              type="email"
              placeholder="Remetente"
              className={styles.inputFullWidth}
            />
            <Input 
              type="text"
              placeholder="Assunto"
              className={styles.inputFullWidth}
            />
            <Input 
              type="textarea"
              placeholder="Corpo do email" 
              className={styles.inputFullWidth}
            />
            <Button 
              text="Enviar email"
              backgroundColorVariable="--second-color"
              width={50}
              className={styles.sendEmailButton}
            />
        </form>
    </div>
  );
}
