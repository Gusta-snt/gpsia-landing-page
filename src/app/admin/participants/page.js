"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import Link from "next/link";
import styles from "../partners/partners.module.css";
// Start reusing styles for consistency, or copy if needed. Let's reuse for now but import correctly.
// Actually, better to copy styles or make a shared component, but for speed I will copy the CSS content to a new file or just import.
// Next.js modules are scoped. I should create participants.module.css

import Loading from "@/components/Loading";

export default function ParticipantsList() {
    const [participants, setParticipants] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchParticipants();
    }, []);

    async function fetchParticipants() {
        setLoading(true);
        const { data, error } = await supabase.from("participants").select("*").order("created_at", { ascending: false });
        if (error) console.error("Error fetching participants:", error);
        else setParticipants(data);
        setLoading(false);
    }

    async function deleteParticipant(id) {
        if (!confirm("Are you sure you want to delete this participant?")) return;
        const { error } = await supabase.from("participants").delete().eq("id", id);
        if (error) alert("Error deleting participant");
        else fetchParticipants();
    }

    if (loading) return <Loading />;

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>Pesquisadores</h1>
                <Link href="/admin/participants/new" className={styles.createButton}>
                    Novo Pesquisador
                </Link>
            </div>

            <div className={styles.grid}>
                {participants.map((participant) => (
                    <div key={participant.id} className={styles.card}>
                        <img
                            src={participant.profile_picture || '/placeholder.svg'}
                            alt={participant.name}
                            className={styles.image}
                            style={{ borderRadius: '50%', objectFit: 'cover' }}
                            onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = '/placeholder.svg';
                            }}
                        />
                        <h3 className={styles.name}>{participant.name}</h3>
                        <div className={styles.actions}>
                            <Link href={`/admin/participants/${participant.id}`} className={styles.editButton}>
                                Editar
                            </Link>
                            <button onClick={() => deleteParticipant(participant.id)} className={styles.deleteButton}>
                                Excluir
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
