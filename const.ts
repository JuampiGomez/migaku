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

type ReviewCard = {
  paragrapth: string;
  userImage: string;
  userName: string;
  userOnlineName?: string;
  linkToReview?: string;
  logoSrc: string;
};

export const ReviewCardsData: ReviewCard[] = [
  {
    paragrapth:
      "I absolutely love the Migaku SRS it is so much cleaner than anki",
    userImage: "/usersProfilePicture/has.jpeg",
    userName: "Has",
    userOnlineName: "@has424",
    linkToReview:
      "https://discord.com/channels/752293144917180496/757279900649652254/1086379215366140105",
    logoSrc: "/discordLogoSmall.svg",
  },
  {
    paragrapth:
      "@MigakuOfficial You guys r doing great things. Just started using the browser extension to build spanish/russian anki cards and they're game changing. Immersion is so much easier now. 🙏🔥.",
    userImage: "/usersProfilePicture/abas.jpeg",
    userName: "Abas Farah",
    userOnlineName: "@AbasFarah",
    linkToReview: "https://x.com/AbasFarah/status/1450645017136095233",
    logoSrc: "/twitterLogoSmall.svg",
  },
  {
    paragrapth:
      "Migaku Dictionary is the best thing that has ever happened to my language learning journey, honestly. After 2 years of slacking off on anki and making only ~1k cards per year, this year in 2.5 months I'm already at 500, thanks to how easy it is! I'd even say that it's now... enjoyable!!! Wow!!",
    userImage: "/usersProfilePicture/theJapanCode.jpeg",
    userName: "TheJapanCode",
    userOnlineName: "@TheJapanCode",
    linkToReview: "https://www.youtube.com/watch?v=vrzBeiFlKjg",
    logoSrc: "/youtubeLogoSmall.svg",
  },
  {
    paragrapth: `Migaku gives this feeling of "I think can do it!!!" That why I love it`,
    userImage: "/usersProfilePicture/speyke.png",
    userName: "Speyke",
    linkToReview:
      "https://discord.com/channels/752293144917180496/752303430399295578/1113294944191389777",
    logoSrc: "/discordLogoSmall.svg",
  },
  {
    paragrapth: `You guys are legends for making this. I've been studying Japanese for almost a year now and I think this is gonna be the final puzzle piece to fluency for me. Can't thank you enough! And I'll be using these tools to learn future languages as well. :)`,
    userImage: "/usersProfilePicture/gabriel.jpeg",
    userName: "Gabriel Arcega",
    userOnlineName: "@DoNuPkmmBritBad",
    linkToReview: "https://www.youtube.com/watch?v=PxN53b629sU",
    logoSrc: "/youtubeLogoSmall.svg",
  },
  {
    paragrapth: `I personally love it and have used even before official Korean support. I f anyone plans on learning via immersion and Anki then they should really consider trying it.`,
    userImage: "/usersProfilePicture/sean.jpeg",
    userName: "Sean Cardwell",
    userOnlineName: "@Sean6919",
    linkToReview: "https://x.com/Sean6919/status/1528491075924631553",
    logoSrc: "/twitterLogoSmall.svg",
  },
  {
    paragrapth: `Just downloaded and installed the new release. It's a bomb! 🔥 ...not tested all the features so far but I am loving it so far especially the reader.
    Congrats Guys!`,
    userImage: "/usersProfilePicture/tonikaku.jpeg",
    userName: "とにかく",

    linkToReview:
      "https://discord.com/channels/752293144917180496/755739098194640896/942819727070339182",
    logoSrc: "/discordLogoSmall.svg",
  },
  {
    paragrapth: `@MigakuOfficial is one of the best and most advanced apps for language learning. Specially if you use Anki.`,
    userImage: "/usersProfilePicture/santi.jpeg",
    userName: "Santi Younger",
    userOnlineName: "@SantiYounger",
    linkToReview: "https://x.com/SantiYounger/status/1560478945983741952",
    logoSrc: "/twitterLogoSmall.svg",
  },
  {
    paragrapth: `Your product has saved me so much time sentence mining and watching things. Very valuable.`,
    userImage: "/usersProfilePicture/LevelUp.jpeg",
    userName: "Level Up",
    userOnlineName: "@LevelUpPup",
    linkToReview: "https://x.com/LevelUpPup/status/1577550750447714304",
    logoSrc: "/twitterLogoSmall.svg",
  },
  {
    paragrapth: `Just great!`,
    userImage: "/usersProfilePicture/jeison.jpeg",
    userName: "Jeison Martinez",

    linkToReview:
      "https://chromewebstore.google.com/detail/migaku-legacy/acpchjgielgmkgkplljakcibfbjjppbk",
    logoSrc: "/googleLogoSmall.svg",
  },
  {
    paragrapth: `I love and prefer reading with Migaku and it's what i'm doing with japanese, chinese and german ❤️ again thank you guys 😃`,
    userImage: "/anonymousUser.svg",
    userName: "nyam65",

    linkToReview:
      "https://chromewebstore.google.com/detail/migaku-legacy/acpchjgielgmkgkplljakcibfbjjppbk",
    logoSrc: "/googleLogoSmall.svg",
  },
  {
    paragrapth: `Over the span of one year I was able to achieve near native-like comprehension to content. For two years before that time, I was relying on Duolingo and only achieved a decimal of the progress compared to using Migaku.`,
    userImage: "/usersProfilePicture/model.avif",
    userName: "Model of a Modern Major",

    linkToReview:
      "https://discord.com/channels/752293144917180496/752296547433185330/995845750946791484",
    logoSrc: "/discordLogoSmall.svg",
  },
  {
    paragrapth: `
    I love Kanji God... it made me dump Heisig entirely and it's super easy.
`,
    userImage: "/usersProfilePicture/seulgi.jpeg",
    userName: "*⋆༓☽ SEULGI ☾༓⋆*",

    linkToReview:
      "https://discord.com/channels/752293144917180496/752296547433185330/995845750946791484",
    logoSrc: "/discordLogoSmall.svg",
  },
  {
    paragrapth: `
    I love the convenience of Migaku and I'm happy with what it gives me so its tots worth for me.
`,
    userImage: "/usersProfilePicture/DFG.jpeg",
    userName: "DFG",

    linkToReview:
      "https://discord.com/channels/752293144917180496/752296547433185330/995845750946791484",
    logoSrc: "/discordLogoSmall.svg",
  },
  {
    paragrapth: `
   Thanks so much! I'm really enjoying the new card types. I also feel myself improving even more with phrases instead of individual words.

`,
    userImage: "/usersProfilePicture/ハンター.jpeg",
    userName: "Hundzbarbar",
    userOnlineName: "@Hundzbarbar",

    linkToReview: "https://x.com/Hundzbarbar/status/1576455029271429121",
    logoSrc: "/twitterLogoSmall.svg",
  },
  {
    paragrapth: `Really enjoying @MigakuOfficial to sentence mine Spanish sentences on Youtube!`,
    userImage: "/usersProfilePicture/lexie.jpeg",
    userName: "SpanishLexie",
    userOnlineName: "@SpanishLexie2",

    linkToReview: "https://x.com/SpanishLexie/status/1530678840707624963",
    logoSrc: "/twitterLogoSmall.svg",
  },
  {
    paragrapth: `Good tool for language learning. Use it daily. Pretty poggers`,
    userImage: "/anonymousUser.svg",
    userName: "Connor Williams",

    linkToReview:
      "https://chromewebstore.google.com/detail/migaku-legacy/acpchjgielgmkgkplljakcibfbjjppbk",
    logoSrc: "/googleLogoSmall.svg",
  },
  {
    paragrapth: `Makes tracking progress and learning new words easier :)`,
    userImage: "/anonymousUser.svg",
    userName: "MAW",

    linkToReview:
      "https://chromewebstore.google.com/detail/migaku-legacy/acpchjgielgmkgkplljakcibfbjjppbk",
    logoSrc: "/googleLogoSmall.svg",
  },
];
