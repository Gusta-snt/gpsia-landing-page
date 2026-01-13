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
    { id: "footer-navigation6", href: "/#researcher-section", label: "Equipe" },
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
          <Title text="Contato" style={{ fontSize: "1.7em", fontWeight: "700", marginBottom: "0.2em" }} />
          <div>
            <Image src="/email-icon.svg" alt="Email Icon" width={19} height={19} />
            <Text text="contato@gpsia.com.br" fontSize={1} />
          </div>
          <div>
            <Image src="/phone-icon.svg" alt="Phone Icon" width={19} height={19} />
            <Text text="(11) 99999-9999" fontSize={1} />
          </div>
        </div>
      </div>
      <div className={styles.bottomSection}>
        <p suppressHydrationWarning>© {new Date().getFullYear()} GPSIA. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
