"use client";
import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { supabase } from "@/lib/supabase";
import styles from "../../partners/[id]/form.module.css"; // Reusing form styles
import Loading from "@/components/Loading";

export default function ParticipantForm() {
    const router = useRouter();
    const params = useParams();
    const isNew = params.id === "new";

    const [formData, setFormData] = useState({
        name: "",
        profile_picture: "",
        description: "",
    });
    const [loading, setLoading] = useState(!isNew);
    const [saving, setSaving] = useState(false);

    useEffect(() => {
        if (!isNew) {
            async function fetchParticipant() {
                const { data, error } = await supabase.from("participants").select("*").eq("id", params.id).single();
                if (data) setFormData(data);
                setLoading(false);
            }
            fetchParticipant();
        }
    }, [params.id, isNew]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSaving(true);

        // Convert empty description to null if needed, or keep string
        const payload = { ...formData };

        let error;
        if (isNew) {
            const { error: insertError } = await supabase.from("participants").insert([payload]);
            error = insertError;
        } else {
            const { error: updateError } = await supabase.from("participants").update(payload).eq("id", params.id);
            error = updateError;
        }

        if (error) {
            alert("Error saving participant: " + error.message);
            setSaving(false);
        } else {
            router.push("/admin/participants");
        }
    };

    if (loading) return <Loading />;

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>{isNew ? "Novo Pesquisador" : "Editar Pesquisador"}</h1>
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
                    <label>URL da Foto de Perfil</label>
                    <input
                        type="text"
                        value={formData.profile_picture}
                        onChange={(e) => setFormData({ ...formData, profile_picture: e.target.value })}
                        className={styles.input}
                    />
                    <p className={styles.helpText}>Cole a URL da imagem aqui.</p>
                </div>

                {formData.profile_picture && (
                    <div className={styles.preview}>
                        <p>Preview:</p>
                        <img src={formData.profile_picture} alt="Preview" style={{ width: '100px', height: '100px', borderRadius: '50%', objectFit: 'cover' }} />
                    </div>
                )}

                <div className={styles.field}>
                    <label>Descrição (Bio)</label>
                    <textarea
                        value={formData.description || ""}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        className={`${styles.input} ${styles.textarea}`}
                    />
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
