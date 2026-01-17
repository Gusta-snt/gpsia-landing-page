"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import styles from "./sidebar.module.css";
import Image from "next/image";

const navItems = [
    { href: "/admin", label: "Dashboard" },
    { href: "/admin/projects", label: "Projetos" },
    { href: "/admin/partners", label: "Parceiros" },
    { href: "/admin/participants", label: "Pesquisadores" },
];

export default function AdminSidebar() {
    const pathname = usePathname();
    const router = useRouter();

    const handleLogout = async () => {
        await supabase.auth.signOut();
        router.push("/admin/login");
    };

    return (
        <aside className={styles.sidebar}>
            <div className={styles.logo}>
                <Link href="/">
                    <Image src="/logo.png" alt="GPSIA Logo" width={80} height={90} />
                </Link>
            </div>
            <nav className={styles.nav}>
                {navItems.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className={`${styles.navItem} ${pathname === item.href || (item.href !== "/admin" && pathname.startsWith(item.href)) ? styles.active : ""
                            }`}
                    >
                        {item.label}
                    </Link>
                ))}
            </nav>
            <div className={styles.footer}>
                <button onClick={handleLogout} className={styles.logoutButton}>
                    Sair
                </button>
            </div>
        </aside>
    );
}
