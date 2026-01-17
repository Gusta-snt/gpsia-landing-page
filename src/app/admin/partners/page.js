"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import Link from "next/link";
import styles from "./partners.module.css";
import Loading from "@/components/Loading";

export default function PartnersList() {
    const [partners, setPartners] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchPartners();
    }, []);

    async function fetchPartners() {
        setLoading(true);
        const { data, error } = await supabase.from("partners").select("*").order("created_at", { ascending: false });
        if (error) console.error("Error fetching partners:", error);
        else setPartners(data);
        setLoading(false);
    }

    async function deletePartner(id) {
        if (!confirm("Are you sure you want to delete this partner?")) return;
        const { error } = await supabase.from("partners").delete().eq("id", id);
        if (error) alert("Error deleting partner");
        else fetchPartners();
    }

    if (loading) return <Loading />;

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>Parceiros</h1>
                <Link href="/admin/partners/new" className={styles.createButton}>
                    Novo Parceiro
                </Link>
            </div>

            <div className={styles.grid}>
                {partners.map((partner) => (
                    <div key={partner.id} className={styles.card}>
                        <img
                            src={partner.img_src || '/placeholder.svg'}
                            alt={partner.name}
                            className={styles.image}
                            onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = '/placeholder.svg';
                            }}
                        />
                        <h3 className={styles.name}>{partner.name}</h3>
                        <div className={styles.actions}>
                            <Link href={`/admin/partners/${partner.id}`} className={styles.editButton}>
                                Editar
                            </Link>
                            <button onClick={() => deletePartner(partner.id)} className={styles.deleteButton}>
                                Excluir
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
