"use client";
import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { supabase } from "@/lib/supabase";
import AdminSidebar from "@/components/admin/AdminSidebar";
import Loading from "@/components/Loading";
import styles from "./admin.module.css";

export default function AdminLayout({ children }) {
    const router = useRouter();
    const pathname = usePathname();
    const [loading, setLoading] = useState(true);
    const [authenticated, setAuthenticated] = useState(false);

    useEffect(() => {
        async function checkUser() {
            const { data: { session } } = await supabase.auth.getSession();

            if (!session && pathname !== "/admin/login") {
                router.push("/admin/login");
            } else if (session && pathname === "/admin/login") {
                router.push("/admin");
            } else {
                setAuthenticated(!!session);
            }
            setLoading(false);
        }

        checkUser();

        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
            if (!session && pathname !== "/admin/login") {
                router.push("/admin/login");
            } else if (session && pathname === "/admin/login") {
                router.push("/admin");
            }
        });

        return () => subscription.unsubscribe();
    }, [pathname, router]);

    if (loading) {
        return <div className={styles.loadingContainer}><Loading /></div>;
    }

    if (pathname === "/admin/login") {
        return <>{children}</>;
    }

    // Prevent flash of content if not authenticated
    if (!authenticated && pathname !== "/admin/login") {
        return null;
    }

    return (
        <div className={styles.mainContainer}>
            <AdminSidebar />
            <main className={styles.content}>
                {children}
            </main>
        </div>
    );
}
