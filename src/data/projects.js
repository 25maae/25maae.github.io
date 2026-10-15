const projects = [
  {
    slug: "la-rouge-doccasion",
    title: "La Rouge / d'occasion",
    year: "2026",
    summary: "Secondhand subbrand for La Rouge.",
    description:
      "D'occasion er et subbrand af La Rouge, der fokuserer på deres secondhand tøj og accessoires. Fokus har været at udvikle en ny visuel identitet, der afspejler brandets værdier og vision kombineret med en optimering af brugeroplevelsen på deres webshop.",
    tags: [
      "Figma",
      "Optimization",
      "Subbrand Development",
      "UI/UX design",
      "Prototyping",
    ],
    image: `${import.meta.env.BASE_URL}doccasion-mockup.jpg`,
    detailImages: [`${import.meta.env.BASE_URL}doccasion-mockup.jpg`],
    links: [
      {
        label: "Udforsk projekt",
        href: "https://www.figma.com/design/i98oArkal1wU1PSigmsBzn/La-Rogue-Secondhand-Case?node-id=225-3&t=aePrUGs1dz7a7l2A-1",
      },
      {
        label: "Figma prototype",
        href: "https://www.figma.com/proto/i98oArkal1wU1PSigmsBzn/La-Rogue-Secondhand-Case?node-id=513-12734&viewport=-1872%2C-182%2C0.18&t=HE92vCuuWpAQG0iM-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=513%3A12734&show-proto-sidebar=1&page-id=225%3A3",
      },
    ],
  },
  {
    slug: "vuuh",
    title: "Vuuh",
    year: "2026",
    summary: "Optimering af onboadring for Shopify applikationen Vuuh.",
    description:
      "Vuuh er en Shopify applikation, der hjælper e-commerce virksomheder med at håndtere deres produktdata. Fokus har været at optimere deres onboarding flow, så oplevelsen for brugerne bliver mere intuitivt og brugervenligt.",
    tags: [
      "Figma",
      "Optimization",
      "Onboarding",
      "UI/UX design",
      "Prototyping",
      "Lottie",
    ],
    image: `${import.meta.env.BASE_URL}vuuh-mockup.jpg`,
    detailImages: [`${import.meta.env.BASE_URL}vuuh-mockup.jpg`],
    links: [
      {
        label: "Udforsk projekt",
        href: "https://www.figma.com/design/reqZjXUxZJj8l2q5l9sjf9/Case-2---3.-Semester?node-id=2137-198&t=hsWXzqC9CemZTubz-1",
      },
      {
        label: "Figma prototype",
        href: "https://www.figma.com/proto/reqZjXUxZJj8l2q5l9sjf9/Case-2---3.-Semester?node-id=2428-9026&viewport=1217%2C362%2C0.21&t=rFFT8OpWSnVChdUw-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=2428%3A9026&page-id=2137%3A198",
      },
    ],
  },
  {
    slug: "mellemrum",
    title: "Mellemrum",
    year: "2026",
    summary:
      "Optimering af eventplatformen Mellemrum, med fokus på brugeroplevelse, design, accessibility mm.",
    description:
      "Mellemrum er en eventplatform, der tilbyder en bred vifte af events og oplevelser. Fokus har været at optimere siderne så brugeroplevelsen, designet af platformen, accessibility mm. forbedres og brugerne samt andre udviklere har bedre mulighed for at udforske og arbejde med platformen.",
    tags: [
      "React",
      "Optimization",
      "CRUD",
      "Accessibility",
      "Supabase",
      "Backend",
    ],
    image: `${import.meta.env.BASE_URL}mellemrum-mockup.jpg`,
    detailImages: [`${import.meta.env.BASE_URL}mellemrum-mockup.jpg`],
    links: [
      {
        label: "Udforsk projekt",
        href: "https://25maae.github.io/mellemrum/",
      },
      {
        label: "GitHub repository",
        href: "https://github.com/25maae/mellemrum",
      },
    ],
    content: [
      {
        type: "image",
        src: `${import.meta.env.BASE_URL}mellemrum-mockup.jpg`,
      },
      {
        type: "text",
        text: "Første case ud af tre handler om lokal kultur- og eventplatformen Mellemrum er en eventplatform, hvor brugerne kan finde og tilmelde sig koncerter, talks, workshops og andre arrangementer. Udfordringen i dette tilfælde har været, at virksomheden har udviklet en react-prototype, med grundlæggende funktionalitet, dog bygget lidt for hurtigt ift. at afprøve idéen. Koden er altså derfor vanskelig at videreudvikle, brugeroplevelsen er ikke altid konsistent, og løsningen håndterer ikke langsomme svar, manglende data og fejl godt nok. Derudover er der også udfordringer med performance på platformen og ift. data så indeholder datamodellen gentagne oplysninger. Til sidst er tilmeldingsflowet kun påbegyndt, hvilket betyder at tilmelding af og forbindelse til de valgte events ikke registreres optimalt. Fokus har været at optimere siderne så brugeroplevelsen, designet af platformen, accessibility mm. forbedres og brugerne samt andre udviklere har bedre mulighed for at benytte og arbejde med platformen.",
      },
      {
        type: "text",
        text: "For at finde frem til de relevante optimeringer, udviklede jeg et audit med kategorierne: fund og evidens, konsekvens, forslag, prioritering og verifikation. På baggrund af det kunne jeg gennemgå platformen og dele de forskellige optimeringer ud på diverse kategorier. Der blev samlet set fundet 13 optimeringer, dog med forskellige prioriteringer.",
      },
      {
        type: "heading",
        text: "Audits",
      },
      {
        type: "subheading",
        text: "Audit 1 - Gentagende data",
      },
      {
        type: "text",
        text: "Her kan du skrive tekst om projektet.",
      },
      {
        type: "image",
        src: `${import.meta.env.BASE_URL}audit-1.jpg`,
      },
    ],
  },
  {
    slug: "hoomie",
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
