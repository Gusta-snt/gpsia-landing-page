import styles from "./logosCarousel.module.css";

export default function LogosCarousel({ className, imagesPaths }) {
  return (
    <div className={`${styles.logosCarousel} ${className || ""}`}>
        <div className={styles.group}>
          {imagesPaths.map((path, index) => (
            <img
              key={`first-${index}`}
              src={path}
              className={styles.logo}
              alt={`Parceiro ${index + 1}`}
            />
          ))}
        </div>
        <div className={styles.group} aria-hidden>
          {imagesPaths.map((path, index) => (
            <img
              key={`first-${index}`}
              src={path}
              className={styles.logo}
              alt={`Parceiro ${index + 1}`}
            />
          ))}
        </div>
        <div className={styles.group} aria-hidden>
          {imagesPaths.map((path, index) => (
            <img
              key={`first-${index}`}
              src={path}
              className={styles.logo}
              alt={`Parceiro ${index + 1}`}
            />
          ))}
        </div>
        <div className={styles.group} aria-hidden>
          {imagesPaths.map((path, index) => (
            <img
              key={`first-${index}`}
              src={path}
              className={styles.logo}
              alt={`Parceiro ${index + 1}`}
            />
          ))}
        </div>
    </div>
  );
}
