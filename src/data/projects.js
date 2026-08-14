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
      `${import.meta.env.BASE_URL}hoomie-info-attention.svg`,
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
      "Wanted Archives er en webshop, der tilbyder en bred vifte af tøj og accessoires. Webshoppen er designet med fokus på brugeroplevelse og æstetik, og er bygget med HTML, CSS, JavaScript og hostet på GitHub Pages.",
    tags: [
      "Design",
      "Adobe Photoshop",
      "Customer Experience",
      "Figma",
      "Web Shop",
      "JavaScript",
    ],
    image: `${import.meta.env.BASE_URL}wanted-mockup.jpg`,
    detailImages: [
      `${import.meta.env.BASE_URL}wanted-mockup.jpg`,
      `${import.meta.env.BASE_URL}wanted-product-page-mockup.jpg`,
      `${import.meta.env.BASE_URL}wanted-shop-page-mockup.jpg`,
      `${import.meta.env.BASE_URL}wanted-insta-mockup.jpg`,
    ],
    links: [
      {
        label: "Udforsk projekt",
        href: "https://magecties.github.io/customer-experience-exam/?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAcGRvZgJleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA85MzY2MTk3NDMzOTI0NTkAAac_AMvz6wL_nHp9-zPYRcvhNyldpEHIgwAaaeKyWhrHt2fPxYR3Ip0KB2sU2w_aem_DSO7Dul7YsPjBiGd3XDaOA",
      },
      {
        label: "GitHub repository",
        href: "http://github.com/Magecties/customer-experience-exam",
      },
    ],
  },
  {
    slug: "to-oel",
    title: "To Øl - Etiketter/labels",
    year: "2026",
    summary: "Etiketter design til To Øl.",
    description:
      "To Øl er et dansk bryggeri, der producerer øl af høj kvalitet. Fokus har været at designe etiketter til deres øl, som afspejler deres brandidentitet og værdier. Designet er lavet i Adobe Illustrator. Dette er ikke et officielt samarbejde med To Øl!",
    tags: ["Adobe Illustrator", "Brand Identity", "Visual Design", "Mockups"],
    image: `${import.meta.env.BASE_URL}beer-mockup.svg`,
    detailImages: [
      `${import.meta.env.BASE_URL}beers-mockup.jpg`,
      `${import.meta.env.BASE_URL}berliner-weisse.svg`,
      `${import.meta.env.BASE_URL}ipa.svg`,
      `${import.meta.env.BASE_URL}triple-bock.svg`,
    ],
    links: [],
  },
  {
    slug: "merkur",
    title: "Merkur Andelskasse",
    year: "2026",
    summary: "Redesign af Merkur Andelskasses logo og visuelle identitet.",
    description:
      "Merkur Andelskasse er en dansk bank, der fokuserer på bæredygtighed og social ansvarlighed. Fokus har været at redesigne deres logo og visuelle identitet, så det afspejler deres værdier og vission. Designet er lavet i Adobe Illustrator. Dette er ikke et officielt samarbejde med Merkur Andelskasse!",
    tags: ["Adobe Illustrator", "Brand Identity", "Visual Design", "Mockups"],
    image: `${import.meta.env.BASE_URL}merkur-mockup.png`,
    detailImages: [
      `${import.meta.env.BASE_URL}merkur-sign.png`,
      `${import.meta.env.BASE_URL}merkur-badge.png`,
      `${import.meta.env.BASE_URL}merkur-logo.svg`,
    ],
    links: [],
  },
];

export default projects;
