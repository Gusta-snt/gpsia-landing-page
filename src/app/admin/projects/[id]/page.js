"use client";
import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { supabase } from "@/lib/supabase";
import styles from "../../partners/[id]/form.module.css";
import Loading from "@/components/Loading";

export default function ProjectForm() {
    const router = useRouter();
    const params = useParams();
    const isNew = params.id === "new";

    const [formData, setFormData] = useState({
        name: "",
        description: "",
        summary: "",
        video_url: "",
        status: "IN_DEVELOPMENT",
        partner_id: "",
    });

    const [partners, setPartners] = useState([]);
    const [allParticipants, setAllParticipants] = useState([]);
    const [selectedParticipants, setSelectedParticipants] = useState([]);

    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);

    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            // Fetch options
            const { data: partnersData } = await supabase.from("partners").select("id, name");
            setPartners(partnersData || []);

            const { data: participantsData } = await supabase.from("participants").select("id, name");
            setAllParticipants(participantsData || []);

            if (!isNew) {
                // Fetch project
                const { data: projectData } = await supabase.from("projects").select("*").eq("id", params.id).single();
                if (projectData) {
                    setFormData(projectData);
                }

                // Fetch related participants
                const { data: relData } = await supabase.from("participants_projects").select("participant_id").eq("project_id", params.id);
                if (relData) {
                    setSelectedParticipants(relData.map(r => r.participant_id));
                }
            }
            setLoading(false);
        }
        fetchData();
    }, [params.id, isNew]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSaving(true);

        let projectId = params.id;
        let error;

        const payload = { ...formData };
        // Handle empty string for partner_id to be null
        if (payload.partner_id === "") payload.partner_id = null;


        if (isNew) {
            const { data, error: insertError } = await supabase.from("projects").insert([payload]).select().single();
            error = insertError;
            if (data) projectId = data.id;
        } else {
            const { error: updateError } = await supabase.from("projects").update(payload).eq("id", params.id);
            error = updateError;
        }

        if (error) {
            alert("Error saving project: " + error.message);
            setSaving(false);
            return;
        }

        // Handle Participants Relations
        // First, delete existing
        if (!isNew) {
            await supabase.from("participants_projects").delete().eq("project_id", projectId);
        }

        // Insert new
        if (selectedParticipants.length > 0) {
            const relations = selectedParticipants.map(pid => ({
                project_id: projectId,
                participant_id: pid
            }));
            const { error: relError } = await supabase.from("participants_projects").insert(relations);
            if (relError) {
                console.error("Error saving participants:", relError);
                alert("Project saved, but error saving participants.");
            }
        }

        router.push("/admin/projects");
    };

    const toggleParticipant = (id) => {
        setSelectedParticipants(prev => {
            if (prev.includes(id)) return prev.filter(p => p !== id);
            return [...prev, id];
        });
    };

    if (loading) return <Loading />;

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>{isNew ? "Novo Projeto" : "Editar Projeto"}</h1>
            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.field}>
                    <label>Nome</label>
                    <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className={styles.input}
                    />
                </div>

                <div className={styles.field}>
                    <label>Descrição (Markdown suportado)</label>
                    <textarea
                        value={formData.description || ""}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        className={`${styles.input} ${styles.textarea}`}
                    />
                </div>

                <div className={styles.field}>
                    <label>Resumo (Curto)</label>
                    <input
                        type="text"
                        value={formData.summary || ""}
                        onChange={(e) => setFormData({ ...formData, summary: e.target.value })}
                        className={styles.input}
                    />
                </div>

                <div className={styles.field}>
                    <label>URL do Vídeo (YouTube Embed)</label>
                    <input
                        type="text"
                        value={formData.video_url || ""}
                        onChange={(e) => setFormData({ ...formData, video_url: e.target.value })}
                        className={styles.input}
                    />
                </div>

                <div className={styles.field}>
                    <label>Status</label>
                    <select
                        value={formData.status}
                        onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                        className={styles.select}
                    >
                        <option value="IN_DEVELOPMENT">Em Andamento</option>
                        <option value="FINISHED">Concluído</option>
                    </select>
                </div>

                <div className={styles.field}>
                    <label>Parceiro Principal</label>
                    <select
                        value={formData.partner_id || ""}
                        onChange={(e) => setFormData({ ...formData, partner_id: e.target.value })}
                        className={styles.select}
                    >
                        <option value="">Nenhum</option>
                        {partners.map(p => (
                            <option key={p.id} value={p.id}>{p.name}</option>
                        ))}
                    </select>
                </div>

                <div className={styles.field}>
                    <label>Pesquisadores Participantes</label>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '0.5rem', maxHeight: '200px', overflowY: 'auto', border: '1px solid #d1d5db', padding: '0.5rem', borderRadius: '4px' }}>
                        {allParticipants.map(participant => (
                            <label key={participant.id} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem' }}>
                                <input
                                    type="checkbox"
                                    checked={selectedParticipants.includes(participant.id)}
                                    onChange={() => toggleParticipant(participant.id)}
                                />
                                {participant.name}
                            </label>
                        ))}
                    </div>
                </div>

                <div className={styles.actions}>
                    <button type="button" onClick={() => router.back()} className={styles.cancelButton}>
                        Cancelar
                    </button>
                    <button type="submit" disabled={saving} className={styles.saveButton}>
                        {saving ? "Salvando..." : "Salvar"}
                    </button>
                </div>
            </form>
        </div>
    );
}
