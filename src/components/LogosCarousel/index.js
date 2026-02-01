"use client";
import { useState, useEffect } from "react";
import styles from "./logosCarousel.module.css";

export default function LogosCarousel({ className, imagesPaths }) {
  const [logoSizes, setLogoSizes] = useState({});

  useEffect(() => {
    const loadImageSizes = async () => {
      const sizes = {};

      for (let i = 0; i < imagesPaths.length; i++) {
        const path = imagesPaths[i];
        const img = new Image();

        await new Promise((resolve) => {
          img.onload = () => {
            const aspectRatio = img.width / img.height;

            // Determinar largura baseada na proporção
            let width;
            if (aspectRatio > 2.5) {
              // Logos muito horizontais (ex: "Goiás + Fapeg")
              width = "18em";
            } else if (aspectRatio > 1.5) {
              // Logos horizontais médios
              width = "14em";
            } else {
              // Logos quadrados ou verticais
              width = "10em";
            }

            sizes[path] = width;
            resolve();
          };
          img.onerror = () => {
            // Fallback para tamanho padrão em caso de erro
            sizes[path] = "14em";
            resolve();
          };
          img.src = path;
        });
      }

      setLogoSizes(sizes);
    };

    loadImageSizes();
  }, [imagesPaths]);

  const renderLogos = (keyPrefix) => {
    return imagesPaths.map((path, index) => (
      <img
        key={`${keyPrefix}-${index}`}
        src={path}
        className={styles.logo}
        style={{ width: logoSizes[path] || "14em" }}
        alt={`Parceiro ${index + 1}`}
      />
    ));
  };

  return (
    <div className={`${styles.logosCarousel} ${className || ""}`}>
      <div className={styles.group}>
        {renderLogos("first")}
      </div>
      <div className={styles.group} aria-hidden>
        {renderLogos("second")}
      </div>
      <div className={styles.group} aria-hidden>
        {renderLogos("third")}
      </div>
      <div className={styles.group} aria-hidden>
        {renderLogos("fourth")}
      </div>
    </div>
  );
}
