const projects = [
  {
    slug: "Hoomie",
    title: "Hoomie",
    year: "2026",
    summary:
      "Webapp i mobil-first design, som samler opgaver, indkøb og planer under samme tag.",
    description:
      "Hoomie er en app, der hjælper roommates med at organisere deres hverdag og holde styr på opgaver, indkøb, planer m.m. Redigér, slet og tilføj opgaver, og få et overblik over, hvem der har gjort hvad. Appen er bygget med React og Vite, og er hostet på GitHub Pages.",
    tags: [
      "React & Vite",
      "Web Application",
      "CRUD",
      "Figma",
      "React Router",
      "Supabase",
    ],
    image: `${import.meta.env.BASE_URL}hoomie-mockup.jpg`,
    detailImages: [
      `${import.meta.env.BASE_URL}hoomie-mockup.jpg`,
      `${import.meta.env.BASE_URL}hoomie-phones-mockup.jpg`,
      `${import.meta.env.BASE_URL}hoomie-styletile.svg`,
      `${import.meta.env.BASE_URL}hoomie-moodboard.svg`,
    ],
    links: [
      {
        label: "Udforsk projekt",
        href: "https://sebbbenator.github.io/hoomie/",
      },
      {
        label: "GitHub repository",
        href: "https://github.com/Sebbbenator/hoomie",
      },
    ],
  },
  {
    slug: "wanted-archives",
    title: "Wanted Archives",
    year: "2026",
    summary: "Tøj webshop.",
    description:
      "Beskriv problemet, processen, din rolle, de vigtigste valg og hvad du lærte. Gør projektet konkret, så andre kan forstå dit arbejde.",
    tags: ["Filters & Sorting", "Customer Experience"],
    image: `${import.meta.env.BASE_URL}wanted-mockup.jpg`,
    detailImages: [
      `${import.meta.env.BASE_URL}wanted-mockup.jpg`,
      `${import.meta.env.BASE_URL}wanted-mockup.png`,
    ],
    links: [
      {
        label: "Live site",
        href: "https://magecties.github.io/customer-experience-exam/?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAcGRvZgJleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA85MzY2MTk3NDMzOTI0NTkAAaePqNtgEXWlhHxRG3sc6gFKXr1Q46h_hfOLt-u2pjQVA1akkOJlfjALVEiT2g_aem_3zge60WRR49bN0afd0s-2Q",
      },
    ],
  },
  {
    slug: "to-oel",
    title: "To Øl - Labels",
    year: "2026",
    summary: 'Øl-etiketter designet til "To Øl".',
    description:
      "Etiketdesign til To Øl, hvor jeg har arbejdet med typografi, farver og illustrationer for at skabe et unikt udtryk for hver øl. ",
    tags: ["Adobe Photoshop", "Mockups"],
    image: `${import.meta.env.BASE_URL}beer-mockup.svg`,
    links: [
      {
        label: "Eksempel-link",
        href: "https://github.com",
      },
    ],
  },
  {
    slug: "merkur",
    title: "Merkur Andelskasse",
    year: "2026",
    summary: "Re-design af logo for Merkur Andelskasse.",
    description:
      "Logodesign til Merkur Andelskasse, hvor typografi, farver og symbolik har været i fokus for at skabe et moderne og genkendeligt brand. Det nye logo er efterfølgende implementeret på forskellige moockups, som giver et realistisk billede af det færdige produkt.",
    tags: ["Design", "Adobe", "Proces"],
    image: `${import.meta.env.BASE_URL}merkur-mockup.png`,
    links: [
      {
        label: "Eksempel-link",
        href: "https://github.com",
      },
    ],
  },
];

export default projects;
