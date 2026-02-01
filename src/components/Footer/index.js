import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";
import Text from "../Text";
import Title from "../Title";

export default function Footer({ className, ...props }) {
  const navigation = [
    { id: "footer-navigation1", href: "/#main-section", label: "Home" },
    { id: "footer-navigation2", href: "/#about-section", label: "Quem somos" },
    { id: "footer-navigation3", href: "/#action-section", label: "Onde atuamos" },
    { id: "footer-navigation4", href: "/#metric-section", label: "Nossos números" },
    { id: "footer-navigation5", href: "/#benefits-section", label: "Porque escolher o GPSIA" },
    { id: "footer-navigation6", href: "/pesquisadores", label: "Pesquisadores" },
    /*{ id: "footer-navigation7", href: "/#send-email-section", label: "Contato" },*/
  ];

  return (
    <footer className={`${styles.footer} ${className || ""}`} {...props}>
      <div className={styles.topSection}>
        <Link href="/">
          <Image src="/logo.png" alt="GPSIA Logo" width={140} height={155} />
        </Link>
        <nav className={styles.navigation}>
          <ul className={styles.navigationList}>
            {navigation.map((item) => (
              <li key={item.id} className={styles.navigationItem}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className={styles.contactInfo}>
          <div className={styles.contactBlock}>
            <Title text="Fale Conosco" style={{ fontSize: "1.05em", fontWeight: "700", marginBottom: "0.2em" }} />
            <Text text="+55 (62) 3521-1505" fontSize={0.9} />
          </div>
          <div className={styles.contactBlock}>
            <Title text="E-mail" style={{ fontSize: "1.05em", fontWeight: "700", marginBottom: "0.2em" }} />
            <Text text="ceia.inf@ufg.br" fontSize={0.9} />
          </div>
        </div>
      </div>
      <div className={styles.bottomSection}>
        <p suppressHydrationWarning>© {new Date().getFullYear()} GPSIA. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
