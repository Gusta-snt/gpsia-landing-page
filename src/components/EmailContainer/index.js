"use client";
import { useState } from "react";
import styles from "./emailContainer.module.css";
import Title from "../Title";
import Input from "../Input";
import Button from "../Button";

export default function EmailContainer({ className, text }) {
  const [formData, setFormData] = useState({
    from_email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Email de destino padrão
    const destinatario = "contato@gpsia.com.br";
    
    // Criar o link mailto
    const mailtoLink = `mailto:${destinatario}?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `De: ${formData.from_email}\n\n${formData.message}`
    )}`;
    
    // Abrir o cliente de email padrão
    window.location.href = mailtoLink;
  };

  return (
    <div className={`${styles.emailContainer} ${className || ""}`}>
      <Title text={text} style={{ color: "var(--white-text-color)", fontSize: "1.5em" }} />
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input
          type="email"
          name="from_email"
          placeholder="Seu email"
          className={styles.inputFullWidth}
          value={formData.from_email}
          onChange={handleChange}
          required
        />
        <Input
          type="text"
          name="subject"
          placeholder="Assunto"
          className={styles.inputFullWidth}
          value={formData.subject}
          onChange={handleChange}
          required
        />
        <Input
          type="textarea"
          name="message"
          placeholder="Corpo do email"
          className={styles.inputFullWidth}
          value={formData.message}
          onChange={handleChange}
          required
        />
        <Button
          text="Enviar email"
          backgroundColorVariable="--second-color"
          width={50}
          className={styles.sendEmailButton}
          type="submit"
        />
      </form>
      <p className={styles.info}>
        Ao clicar em "Enviar email", seu cliente de email padrão será aberto.
      </p>
    </div>
  );
}