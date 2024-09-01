type Props = {
  title: string;
  iframeSrc: string;
  infoParagraph: string;
};

const YoutubePage = ({ title, iframeSrc, infoParagraph }: Props) => {
  return (
    <>
      <h1 className="font-extrabold text-3xl md:text-6xl text-center my-5 md:my-10 text-migaku-dark-text dark:text-white">
        {title}
      </h1>

      <article className="max-w-[800px] mx-auto">
        <iframe
          src={iframeSrc}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="w-full aspect-video "
        ></iframe>

        <p className="font-medium md:text-lg mt-5 text-migaku-dark-text dark:text-white">
          {infoParagraph}
        </p>
      </article>
    </>
  );
};

export default YoutubePage;
