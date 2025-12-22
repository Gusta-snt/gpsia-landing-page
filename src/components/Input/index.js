import styles from "./input.module.css";

export default function Input({ className, type = "text", placeholder, rows = 4, ...props }) {
  const commonProps = {
    placeholder,
    className: `${styles.input} ${className || ""}`,
    ...props,
  };

  if (type === "textarea") {
    return <textarea rows={rows} {...commonProps}/>;
  }

  return <input type={type} {...commonProps} />;
}
