"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import ReactMarkdown from "react-markdown";
import remarkBreaks from "remark-breaks";
import Title from "@/components/Title";
import Footer from "@/components/Footer";
import Researcher from "@/components/Researcher";
import styles from "./page.module.css";

const statusLabels = {
  FINISHED: "Projeto Concluído",
  IN_DEVELOPMENT: "Projeto em Andamento",
};

const statusLinks = {
  FINISHED: "/projetos/concluidos",
  IN_DEVELOPMENT: "/projetos/em-andamento",
};

export default function ProjectDetailPage() {
  const params = useParams();
  const [project, setProject] = useState(null);
  const [participants, setParticipants] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProject() {
      const { data: projectData, error: projectError } = await supabase
        .from("projects")
        .select(`
          id,
          name,
          description,
          video_url,
          status,
          partners (
            id,
            name,
            img_src
          )
        `)
        .eq("id", params.id)
        .single();

      if (!projectError && projectData) {
        setProject(projectData);
      }

      const { data: participantsData, error: participantsError } = await supabase
        .from("participants_projects")
        .select(`
          participants (
            id,
            name,
            description,
            profile_picture
          )
        `)
        .eq("project_id", params.id);

      if (!participantsError && participantsData) {
        setParticipants(participantsData.map(p => p.participants));
      }

      setLoading(false);
    }
    fetchProject();
  }, [params.id]);

  if (loading) {
    return (
      <div className={styles.page}>
        <main className={styles.main}>
          <p className={styles.loading}>Carregando projeto...</p>
        </main>
      </div>
    );
  }

  if (!project) {
    return (
      <div className={styles.page}>
        <main className={styles.main}>
          <p className={styles.error}>Projeto não encontrado.</p>
        </main>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Link href={statusLinks[project.status]}>
          <Image src="/logo.png" alt="Logo do GPSIA" width={180} height={202} />
        </Link>

        <div className={styles.header}>
          <Title className={styles.status} text={statusLabels[project.status]} />
          <Title className={styles.projectName} text={project.name} />
        </div>

        <div className={styles.content}>
          <div className={styles.description}>
            <ReactMarkdown remarkPlugins={[remarkBreaks]}>{project.description}</ReactMarkdown>
          </div>

          {project.video_url && (
            <div className={styles.videoWrapper}>
              <iframe
                src={project.video_url}
                className={styles.video}
                allowFullScreen
                title={`Vídeo do projeto ${project.name}`}
              />
            </div>
          )}

          {participants.length > 0 && (
            <div className={styles.participantsSection}>
              {participants.map((participant) => (
                <Researcher
                  key={participant.id}
                  reseacherName={participant.name}
                  text={participant.description}
                  imageSrc={participant.profile_picture}
                />
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}