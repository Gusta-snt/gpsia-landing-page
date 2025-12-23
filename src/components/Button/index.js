import Link from "next/link";
import styles from "./button.module.css";

export default function Button({ className, text, backgroundColorVariable, width, href }) {
  const style = {
    backgroundColor: `var(${backgroundColorVariable})`,
    width: `${width}rem`,
  };

  if (href) {
    return (
      <Link
        href={href}
        className={`${styles.button} ${className || ""}`}
        style={style}
      >
        {text}
      </Link>
    );
  }

  return (
    <button
      className={`${styles.button} ${className || ""}`}
      style={style}
    >
      {text}
    </button>
  );
}
