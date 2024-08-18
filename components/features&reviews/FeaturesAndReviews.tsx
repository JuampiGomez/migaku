"use client";
import { ReviewCardsData } from "@/const";
import ReviewCard from "./ReviewCard";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const FeaturesAndReviews = () => {
  const containerRef = useRef<HTMLDivElement | null>(null); // Especifica el tipo del ref
  const [containerHeight, setContainerHeight] = useState(0);

  useEffect(() => {
    // Función para actualizar la altura del contenedor
    const updateContainerHeight = () => {
      if (containerRef.current) {
        setContainerHeight(containerRef.current.scrollHeight);
      }
    };

    updateContainerHeight(); // Inicializa la altura
    window.addEventListener("resize", updateContainerHeight); // Actualiza en cambios de tamaño

    return () => {
      window.removeEventListener("resize", updateContainerHeight); // Limpia el event listener
    };
  }, []);

  return (
    <section className="px-6 pt-20 md:pt-32 pb-20 md:pb-40 bg-[#0A002A] relative text-white grid gap-28">
      <div className="features-bg"></div>
      <article className="z-20 relative grid gap-16">
        <h2 className="text-center font-extrabold text-3xl md:text-6xl max-w-[500px] md:max-w-[1000px] mx-auto">
          I’m an advanced language learner, can Migaku still help me?
        </h2>
        <p className="text-center font-bold text-xl md:text-3xl max-w-[500px] md:max-w-[855px] mx-auto">
          Absolutely! Migaku is a powerful tool under the hood and has countless
          features for intermediate and advanced learners:
        </p>
        <ul className="text-xl md:text-[24px] font-extrabold grid md:grid-cols-3 md:items-center gap-6 md:gap-12 place-content-center text-center font-GTMaru max-w-[1000px] mx-auto">
          <li className="features-text-gradient">Monolingual dictionaries</li>
          <li className="features-text-gradient">Import your own subtitles</li>
          <li className="features-text-gradient">
            Import words you already know
          </li>
          <li className="features-text-gradient">Language specific features</li>
          <li className="features-text-gradient">Hotkeys for everything</li>
          <li className="features-text-gradient">Advanced text-to-speech</li>
          <li className="features-text-gradient">
            Create flashcards for entire dialogues
          </li>
          <li className="features-text-gradient">Many customizable options</li>
          <li className="features-text-gradient">Flashcard stats</li>
        </ul>
      </article>

      <motion.article className="pt-10 overflow-hidden relative max-h-[800px]">
        <motion.div
          ref={containerRef}
          className="grid gap-10 md:grid-cols-2 xl:grid-cols-4"
          animate={{ y: [-containerHeight, 0] }} // Usa la altura del contenedor
          transition={{
            duration: 100, // Ajusta según la cantidad de contenido
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
          }}
        >
          {ReviewCardsData.map((data, index) => (
            <ReviewCard
              key={`${data.userName}-${index}`}
              userImgSrc={data.userImage}
              userName={data.userName}
              userOnlineName={data.userOnlineName}
              paragrapth={data.paragrapth}
              linkToReview={data.linkToReview}
              logoSrc={data.logoSrc}
            />
          ))}
          {ReviewCardsData.map((data, index) => (
            <ReviewCard
              key={`duplicate-${data.userName}-${index}`}
              userImgSrc={data.userImage}
              userName={data.userName}
              userOnlineName={data.userOnlineName}
              paragrapth={data.paragrapth}
              linkToReview={data.linkToReview}
              logoSrc={data.logoSrc}
            />
          ))}
        </motion.div>
      </motion.article>
    </section>
  );
};

export default FeaturesAndReviews;
