type ExtensionArticleProps = {
  date: string;
  title: string;
  children: React.ReactNode;
};

const AndroidArticle = ({ title, date, children }: ExtensionArticleProps) => {
  return (
    <article className="relative bg-white shadow-xl border border-black/10  rounded-2xl dark:bg-[#202047] p-4 ">
      <span className="text-[12px] md:text-sm font-bold text-[#00005A99] dark:text-[#FFFFFF99] block mb-3 uppercase">
        {date}
      </span>
      <h2 className="text-2xl md:text-4xl font-extrabold text-migaku-dark-text dark:text-white mb-3">
        {title}
      </h2>

      {children}
    </article>
  );
};

export default AndroidArticle;
