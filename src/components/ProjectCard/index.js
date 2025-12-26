import Link from "next/link";
import styles from "./projectCard.module.css";

export default function ProjectCard({
  projectId,
  partnerLogo,
  projectName,
  summary,
  colorIndex = 0,
}) {
  const isEven = colorIndex % 2 === 0;
  const bgColor = isEven ? "var(--second-color)" : "var(--first-color)";
  const btnColor = isEven ? "var(--first-color)" : "var(--second-color)";

  return (
    <div className={styles.card} style={{ backgroundColor: bgColor }}>
      <div className={styles.logoWrapper}>
        {partnerLogo && (
          <img
            src={partnerLogo}
            alt={projectName || "Logo do parceiro"}
            className={styles.logo}
          />
        )}
      </div>
      <h3 className={styles.projectName}>{projectName}</h3>
      <p className={styles.summary}>{summary}</p>
      <Link href={`/projeto/${projectId}`}>
        <button className={styles.button} style={{ backgroundColor: btnColor }}>
          Saiba mais
        </button>
      </Link>
    </div>
  );
}
