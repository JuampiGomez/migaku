export const LanguageBalls = [
  {
    src: "/ballFlags/cantonese.svg",
    title: "Cantonese",
    alt: "Cantonese",
  },
  {
    src: "/ballFlags/UK.svg",
    title: "English",
    alt: "English",
  },
  {
    src: "/ballFlags/france.svg",
    title: "French",
    alt: "French",
  },
  {
    src: "/ballFlags/german.svg",
    title: "German",
    alt: "German",
  },
  {
    src: "/ballFlags/japan.svg",
    title: "Japanese",
    alt: "Japanese",
    href: "/learn-japanese",
    IsClickable: true,
  },
  {
    src: "/ballFlags/korea.svg",
    title: "Korean",
    alt: "Korean",
  },
  {
    src: "/ballFlags/china.svg",
    title: "Chinese",
    alt: "Chinese",
    href: "/learn-chinese",
    IsClickable: true,
  },
  {
    src: "/ballFlags/brazil.svg",
    title: "Portuguese",
    alt: "Portuguese",
  },
  {
    src: "/ballFlags/spain.svg",
    title: "Spanish",
    alt: "Spanish",
  },
];

type TeamCardProps = {
  role: string;
  imageSrc: string;
  name: string;
  info: string;
};

export const TeamMembersHomePage: TeamCardProps[] = [
  {
    role: "CEO",
    imageSrc: "/team1.avif",
    name: "LUCAS",
    info: "He’s traveled the world and dabbled in over 10 languages, learned Japanese, Mandarin, and Portuguese to fluency, and passed the Japanese Language Proficiency Test N1.",
  },
  {
    role: "Creative Director",
    imageSrc: "/team2.avif",
    name: "JANNIK",
    info: "Fluent in his native language German, English and Japanese. He operates an investment company in Tokyo and uses Migaku to improve his industry-specific Japanese.",
  },
  {
    role: "Content Team Lead",
    imageSrc: "/team3.avif",
    name: "STEVI",
    info: "A native German speaker who speaks fluent English and Japanese. He passed the highest level of the Japanese Language Proficiency Test (JLPT N1) in just 1.5 years.",
  },
  {
    role: "Design Lead",
    imageSrc: "/team4.avif",
    name: "ERIKA",
    info: "She learned fluent Japanese and has lived and worked in France and the Netherlands while learning French. She’s currently using Migaku daily to improve her language proficiency.",
  },
  {
    role: "Learning Materials Creator",
    imageSrc: "/team5.avif",
    name: "RAIMONDS",
    info: "A native Latvian living in Shanghai. He speaks fluent Mandarin, English, Russian, German, and has dabbled in a ton of languages! He’s translated several famous books into Latvian.",
  },
  {
    role: "Learning Materials Creator",
    imageSrc: "/team6.avif",
    name: "FUMIKO",
    info: "A native Japanese speaker with fantastic English ability. She’s an author of a funny Japanese book about the nuances of the English language.",
  },
];
