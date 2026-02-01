import { ResearchersSection } from "@/components/sections";
import styles from "../page.module.css";
import localStyles from "./researchers.module.css";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

export const revalidate = 0; // Ensure dynamic fetching

export default async function Pesquisadores() {
    const { data: researchers, error } = await supabase
        .from("participants")
        .select("*");

    if (error) {
        console.error("Error fetching researchers:", error);
    }

    return (
        <div className={styles.page}>
            <main className={styles.main} style={{ paddingTop: "2rem" }}>
                <div className={localStyles.logoWrapper}>
                    <Link href="/">
                        <Image src="/logo.png" alt="Logo do GPSIA" width={200} height={222} />
                    </Link>
                </div>
                <ResearchersSection researchers={researchers || []} />
            </main>
            <Footer />
        </div>
    );
}
