"use client";
import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { supabase } from "@/lib/supabase";
import styles from "./form.module.css";
import Loading from "@/components/Loading";

export default function PartnerForm() {
    const router = useRouter();
    const params = useParams();
    const isNew = params.id === "new";

    const [formData, setFormData] = useState({
        name: "",
        img_src: "",
    });
    const [loading, setLoading] = useState(!isNew);
    const [saving, setSaving] = useState(false);

    useEffect(() => {
        if (!isNew) {
            async function fetchPartner() {
                const { data, error } = await supabase.from("partners").select("*").eq("id", params.id).single();
                if (data) setFormData(data);
                setLoading(false);
            }
            fetchPartner();
        }
    }, [params.id, isNew]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSaving(true);

        const payload = { ...formData };

        let error;
        if (isNew) {
            const { error: insertError } = await supabase.from("partners").insert([payload]);
            error = insertError;
        } else {
            const { error: updateError } = await supabase.from("partners").update(payload).eq("id", params.id);
            error = updateError;
        }

        if (error) {
            alert("Error saving partner: " + error.message);
            setSaving(false);
        } else {
            router.push("/admin/partners");
        }
    };

    if (loading) return <Loading />;

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>{isNew ? "Novo Parceiro" : "Editar Parceiro"}</h1>
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
                    <label>URL da Imagem (Logo)</label>
                    <input
                        type="text"
                        value={formData.img_src}
                        onChange={(e) => setFormData({ ...formData, img_src: e.target.value })}
                        className={styles.input}
                    />
                    <p className={styles.helpText}>Cole a URL da imagem aqui. Use serviços como Imgur ou o Supabase Storage.</p>
                </div>

                {formData.img_src && (
                    <div className={styles.preview}>
                        <p>Preview:</p>
                        <img src={formData.img_src} alt="Preview" style={{ maxHeight: '100px' }} />
                    </div>
                )}

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
