import Link from "next/link";
import styles from "./dashboard.module.css";

export default function AdminDashboard() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Painel Administrativo</h1>
            <div className={styles.grid}>
                <Link href="/admin/projects" style={{ textDecoration: "none" }}>
                    <div className={styles.card}>
                        <h2 className={styles.cardTitle}>Projetos</h2>
                        <p className={styles.cardText}>Gerenciar projetos, status e participantes.</p>
                    </div>
                </Link>
                <Link href="/admin/partners" style={{ textDecoration: "none" }}>
                    <div className={styles.card}>
                        <h2 className={styles.cardTitle}>Parceiros</h2>
                        <p className={styles.cardText}>Gerenciar parceiros e logotipos.</p>
                    </div>
                </Link>
                <Link href="/admin/participants" style={{ textDecoration: "none" }}>
                    <div className={styles.card}>
                        <h2 className={styles.cardTitle}>Pesquisadores</h2>
                        <p className={styles.cardText}>Gerenciar pesquisadores e informações.</p>
                    </div>
                </Link>
            </div>
        </div>
    );
}
