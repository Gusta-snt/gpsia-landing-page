"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import Title from "@/components/Title";
import ProjectCard from "@/components/ProjectCard";
import Footer from "@/components/Footer";
import styles from "./page.module.css";

const statusConfig = {
  concluidos: {
    title: "Projetos Concluídos",
    dbStatus: "FINISHED",
  },
  "em-andamento": {
    title: "Projetos em Andamento",
    dbStatus: "IN_DEVELOPMENT",
  },
};

export default function ProjectsPage() {
  const params = useParams();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const config = statusConfig[params.status] || statusConfig.concluidos;

  useEffect(() => {
    async function fetchProjects() {
      const { data, error } = await supabase
        .from("projects")
        .select(`
          id,
          name,
          summary,
          status,
          partners (
            id,
            name,
            img_src
          )
        `)
        .eq("status", config.dbStatus);

      if (!error && data) {
        console.log(data)
        setProjects(data);
      }
      setLoading(false);
    }
    fetchProjects();
  }, [config.dbStatus]);

  const filteredProjects = projects.filter((project) =>
    project.name?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Link href="/">
          <Image src="/logo.png" alt="Logo do GPSIA" width={180} height={202} />
        </Link>
        <Title className={styles.title} text={config.title} />

        <div className={styles.searchWrapper}>
          <Image src="/search-icon.svg" alt="Buscar" width={20} height={20} />
          <input
            type="text"
            placeholder="Procurar por nome do projeto"
            className={styles.searchInput}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {loading ? (
          <p className={styles.loading}>Carregando projetos...</p>
        ) : filteredProjects.length === 0 ? (
          <p className={styles.empty}>Nenhum projeto encontrado.</p>
        ) : (
          <div className={styles.grid}>
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                projectId={project.id}
                partnerLogo={project.partners?.img_src}
                projectName={project.name}
                summary={project.summary}
                colorIndex={index}
              />
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
