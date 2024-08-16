const FeaturesAndReviews = () => {
  return (
    <section className="px-6 pt-20 md:pt-32 pb-40 bg-[#0A002A] relative text-white">
      <div className="features-bg"></div>
      <article className="z-20 relative grid gap-16">
        <h2
          className="text-center font-extrabold text-3xl md:text-6xl 
        max-w-[500px] md:max-w-[1000px] mx-auto"
        >
          I’m an advanced language learner, can Migaku still help me?
        </h2>
        <p className="text-center font-bold text-xl md:text-3xl max-w-[500px] md:max-w-[855px] mx-auto">
          Absolutely! Migaku is a powerful tool under the hood and has countless
          features for intermediate and advanced learners:
        </p>
        <ul className=" text-xl md:text-[24px] font-extrabold grid md:grid-cols-3 md:items-center gap-6 md:gap-12 place-content-center text-center font-GTMaru max-w-[1000px] mx-auto ">
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
    </section>
  );
};

export default FeaturesAndReviews;
