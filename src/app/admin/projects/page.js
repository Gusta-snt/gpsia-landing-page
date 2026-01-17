"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import Link from "next/link";
import styles from "../partners/partners.module.css"; // Reuse styles
import Loading from "@/components/Loading";

const statusLabels = {
    FINISHED: "Concluído",
    IN_DEVELOPMENT: "Em Andamento",
};

export default function ProjectsList() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchProjects();
    }, []);

    async function fetchProjects() {
        setLoading(true);
        const { data, error } = await supabase.from("projects").select("*").order("created_at", { ascending: false });
        if (error) console.error("Error fetching projects:", error);
        else setProjects(data);
        setLoading(false);
    }

    async function deleteProject(id) {
        if (!confirm("Are you sure you want to delete this project?")) return;
        const { error } = await supabase.from("projects").delete().eq("id", id);
        if (error) alert("Error deleting project");
        else fetchProjects();
    }

    if (loading) return <Loading />;

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>Projetos</h1>
                <Link href="/admin/projects/new" className={styles.createButton}>
                    Novo Projeto
                </Link>
            </div>

            <div className={styles.grid}>
                {projects.map((project) => (
                    <div key={project.id} className={styles.card}>
                        <h3 className={styles.name}>{project.name}</h3>
                        <p style={{ marginBottom: '1rem', color: '#6b7280' }}>{statusLabels[project.status] || project.status}</p>
                        <div className={styles.actions}>
                            <Link href={`/admin/projects/${project.id}`} className={styles.editButton}>
                                Editar
                            </Link>
                            <button onClick={() => deleteProject(project.id)} className={styles.deleteButton}>
                                Excluir
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
