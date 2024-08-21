import Scoutfy1 from "../assets/projects/project-scoutfy1.png";
import Scoutfy2 from "../assets/projects/project-scoutfy2.png";
import BNB1 from "../assets/projects/project-bnb1.png";
import BNB2 from "../assets/projects/project-bnb2.png";
import BNB3 from "../assets/projects/project-bnb3.png";
import Caule1 from "../assets/projects/project-caule1.png";
import Caule2 from "../assets/projects/project-caule2.png";
import CoffeeHouse1 from "../assets/projects/project-coffeehouse1.png";
import CoffeeHouse2 from "../assets/projects/project-coffeehouse2.png";
import CoffeeHouse3 from "../assets/projects/project-coffeehouse3.png";
import WeeTravel1 from "../assets/projects/project-weetravel1.png";
import WeeTravel2 from "../assets/projects/project-weetravel2.png";
import FilmNChips1 from "../assets/projects/project-film-n-chips1.png";
import FilmNChips2 from "../assets/projects/project-film-n-chips2.png";
import FilmNChips3 from "../assets/projects/project-film-n-chips3.png";
import APPqd1 from "../assets/projects/project-appqd1.png";
import APPqd2 from "../assets/projects/project-appqd2.png";
import WA1 from "../assets/projects/project-wa1.png";
import WA2 from "../assets/projects/project-wa2.png";
import WA3 from "../assets/projects/project-wa3.png";
import GoFinances1 from "../assets/projects/project-gofinances2.png";
import GoFinances2 from "../assets/projects/project-gofinances3.png";
import Portfolio1 from "../assets/projects/project-portfolio1.png";
import Portfolio2 from "../assets/projects/project-portfolio2.png";
import Portfolio3 from "../assets/projects/project-portfolio3.png";
import DevMeetup1 from "../assets/projects/project-devmeetup1.png";
import DevMeetup2 from "../assets/projects/project-devmeetup2.png";
import DevMeetup3 from "../assets/projects/project-devmeetup3.png";
import BritishBeers1 from "../assets/projects/project-british-beers1.png";
import BritishBeers2 from "../assets/projects/project-british-beers2.png";
import BritishBeers3 from "../assets/projects/project-british-beers3.png";
import CNH1 from "../assets/projects/project-cnh1.png";
import CNH2 from "../assets/projects/project-cnh2.png";
import DigitalPlatform1 from "../assets/projects/project-bnb-digital-platform1.png";
import DigitalPlatform2 from "../assets/projects/project-bnb-digital-platform2.png";
import DigitalPlatform3 from "../assets/projects/project-bnb-digital-platform3.png";
import CVFY from "../assets/projects/project-cvfy0.png";

export interface ProjectText {
  id: string;
  text: string;
}

export interface ProjectImage {
  id: string;
  src: string;
  alt: string;
}

export interface ProjectDetailsSchema {
  id: string;
  name: string;
  date: string;
  type: string;
  professional: boolean;
  skills: string[];
  about: ProjectText[];
  website?: string;
  github?: string;
  appleStore?: string;
  playStore?: string;
  images: ProjectImage[];
}

export const enIntroProjectDetailsData = {
  skills: "Skills & Tools",
  overview: "Project Overview",
  website: "Visit website",
  apple: "Download from Apple Store",
  play: "Download from Play Store",
  code: "Check out the code",
};

export const ptIntroProjectDetailsData = {
  skills: "Habilidades",
  overview: "Sobre o Projeto",
  website: "Visite o site",
  apple: "Baixe na Apple Store",
  play: "Baixe na Play Store",
  code: "Confira o código",
};

export const enProjectDetailsData = [
  {
    id: "bnb",
    name: "BNB React Lib",
    date: "May 2023 - Present",
    type: "Web",
    professional: true,
    skills: [
      "React.js",
      "TypeScript",
      "SCSS",
      "Responsive Web Design",
      "Storybook",
      "Jest",
      "React Testing",
      "Vite",
    ],
    about: [
      {
        id: "bnb1",
        text: "Through SONDA, I was hired to work at Banco do Nordeste (BNB), the largest social development bank in Latin America. Alongside the UX team, I am part of building the Bank's Design System, with the mission of bridging the gap between designers and developers.",
      },
      {
        id: "bnb2",
        text: "My most impactful task has been creating the Design System library (a library of user interface components). This work involves translating design and variables into code, producing a complex set of over 50 components that will be reused across various company websites to ensure high productivity in developing future screens.",
      },
      {
        id: "bnb3",
        text: "For the web-focused library, I used React.js with Vite, TypeScript, SCSS, and Storybook (to showcase, document, and test each component in isolation). Through an API developed by us, Figma's variables and tokens are converted from JSON to SCSS files, updating themes, measurements, and other styles in real-time. Additionally, I performed automated tests on each component using Jest and React Testing Library.",
      },
      {
        id: "bnb4",
        text: "• Note: At the moment, the library is accessed only by the bank's IT employees.",
      },
    ],
    website: "https://www.bnb.gov.br",
    github: "",
    appleStore: "",
    playStore: "",
    images: [
      {
        id: "bnb1.png",
        src: BNB1,
        alt: "BNB DS React Library component shown in Storybook",
      },
      {
        id: "bnb2.png",
        src: BNB2,
        alt: "BNB DS React Library component shown in Storybook",
      },
      {
        id: "bnb1.png",
        src: BNB3,
        alt: "BNB DS React Library component shown in Storybook",
      },
    ],
  },
  {
    id: "digital-platform",
    name: "BNB Digital Platform",
    date: "May 2023 - Aug 2023",
    type: "Web",
    professional: true,
    skills: [
      "React.js",
      "TypeScript",
      "Docusaurus",
      "Markdown",
      "Responsive Web Design",
      "Gitlab",
    ],
    about: [
      {
        id: "bnbdp1",
        text: "Although my main task was to build the React component library for Banco do Nordeste's (BNB) Design System, my first project was the Digital Platform, a collaborative documentation website created with Docusaurus, a static site generator that allows the combination of Markdown with React components.",
      },
      {
        id: "bnbdp2",
        text: "This portal is used by all Banco do Nordeste's IT employees to inform and be informed about guidelines and guides for performing development and testing activities. This implementation resulted in an increase of more than 50% in engagement compared to the previous version of the Digital Platform.",
      },
      {
        id: "bnbdp3",
        text: "• Note: The portal is accessed only by the bank's IT employees, and its site cannot be disclosed.",
      },
    ],
    website: "https://www.bnb.gov.br",
    github: "",
    appleStore: "",
    playStore: "",
    images: [
      {
        id: "bnbpd1.png",
        src: DigitalPlatform1,
        alt: "Digital Platform portal",
      },
      {
        id: "bnbpd2.png",
        src: DigitalPlatform2,
        alt: "Digital Platform portal",
      },
      {
        id: "bnbpd3.png",
        src: DigitalPlatform3,
        alt: "Digital Platform portal",
      },
    ],
  },
  {
    id: "scoutfy",
    name: "Scoutfy",
    date: "Jul 2021 - Apr 2022",
    type: "Web",
    professional: true,
    skills: [
      "Next.js",
      "Responsive Web Design",
      "Styled-Components",
      "Storybook",
      "Redux Toolkit",
      "CI/CD",
      "Vercel",
    ],
    about: [
      {
        id: "scoutfy1",
        text: "This was the first professional project I developed with React and Next.js, a large-scale website, an important learning experience, complex, responsive, and full of reusable components.",
      },
      {
        id: "scoutfy2",
        text: "Scoutfy is an intuitive sports management platform for amateurs to high-performance athletes, who can build a sports summary, apply for grants and sponsorships, contact the community, manage affiliations, members, events, competitions, teams, commission members, subscriptions and staff.",
      },
    ],
    website: "https://scoutfy.webflow.io",
    github: "",
    appleStore: "",
    playStore: "",
    images: [
      {
        id: "scoutfy1.png",
        src: Scoutfy1,
        alt: "Scoutfy logo",
      },
      {
        id: "scoutfy2.png",
        src: Scoutfy2,
        alt: "Scoutfy website login page",
      },
    ],
  },
  {
    id: "caule",
    name: "Caule",
    date: "Aug 2022 - Feb 2023",
    type: "Mobile",
    professional: true,
    skills: [
      "React Native",
      "TypeScript",
      "REST API",
      "Styled-Components",
      "GitLab",
    ],
    about: [
      {
        id: "caule1",
        text: "One of the most ambitious projects I've been a part of. When joining the Nano Incub team, my first challenge was to work on the mobile development of this complete business platform, Caule, used by more than 25,000 employees from the biggest mills in the country.",
      },
      {
        id: "caule2",
        text: "Caule is a Mobile tailored for large corporations that have thousands of employees geographically distributed (in the office, in the countryside, remotely), making life easier for both employer and employee.",
      },
      {
        id: "caule3",
        text: "Through the app, employees can access payroll and annual leave, receive handouts, distribute institutional content and several other custom functionalities - all integrated with the main Enterprise Resource Planning’s on the market (SAP, Totvs, and Senior). It's implementation brings high performance against the slowness of bureaucratic processes.",
      },
    ],
    website: "https://caule.app",
    github: "",
    appleStore: "https://apps.apple.com/br/app/caule/id6444843213",
    playStore: "https://play.google.com/store/apps/details?id=com.caule.app",
    images: [
      {
        id: "caule1.png",
        src: Caule1,
        alt: "Smartphones with Caule App screens",
      },
      {
        id: "caule2.png",
        src: Caule2,
        alt: "Smartphones with Caule App screens",
      },
    ],
  },
  {
    id: "coffee-house",
    name: "CoffeeHouse",
    date: "Sep 2021 - Nov 2021",
    type: "Web",
    professional: false,
    skills: [
      "React.js",
      "Responsive Web Design",
      "Context API",
      "JavaScript",
      "HTML",
      "SASS",
      "Photoshop",
      "Illustrator",
    ],
    about: [
      {
        id: "ch1",
        text: "This was my first personal project, built from scratch with my ideas and design. As a coffee lover, I was super excited to create a fictional London coffee shop chain: brand, visual identity, menu and addresses. I even elaborated the graphic arts with signs, facades and banners of this site, edited with Adobe Photoshop.",
      },
      {
        id: "ch2",
        text: "It was a challenging and really fun way to put my knowledge of React.js into practice. Among the features: responsive design using Sass, an infinite Image slider, mobile menu, gallery grid with slideshow modal, an adresses page using store filter, coffee quiz with score, contact form and newsletter subscribe with validation, menu page with context, CSS animations and charts.",
      },
    ],
    website: "https://coffeehouse-website-kohl.vercel.app",
    github: "https://github.com/thiagocabralcorreia/coffeehouse-website",
    appleStore: "",
    playStore: "",
    images: [
      {
        id: "coffeehouse1.png",
        src: CoffeeHouse1,
        alt: "CoffeeHouse website page",
      },
      {
        id: "coffeehouse2.png",
        src: CoffeeHouse2,
        alt: "CoffeeHouse website page",
      },

      {
        id: "coffeehouse3.png",
        src: CoffeeHouse3,
        alt: "CoffeeHouse website page",
      },
    ],
  },
  {
    id: "wee-travel",
    name: "Wee Travel",
    date: "Apr 2021 - Aug 2021",
    type: "Mobile",
    professional: true,
    skills: [
      "React Native",
      "Styled-Components",
      "JavaScrip",
      "Redux",
      "GitHub",
    ],
    about: [
      {
        id: "wee1",
        text: "Developed as soon as I joined NB Consulting. A corporate travel management mobile app with up-to-date information about airlines, OBT (Online booking travel) and Enterprise Resource Planning, accessed by different profiles, such as travel manager, cost center manager and traveler.",
      },
    ],
    website: "",
    github: "",
    appleStore: "",
    playStore: "https://apkpure.com/wee-gestão/com.weetechapp",
    images: [
      {
        id: "weetravel1.png",
        src: WeeTravel1,
        alt: "Smartphones with WeeTravel App screens",
      },
      {
        id: "weetravel2.png",
        src: WeeTravel2,
        alt: "Smartphones with WeeTravel App screens",
      },
    ],
  },
  {
    id: "film-n-chips",
    name: "Film N Chips",
    date: "Jul 2022",
    type: "Web",
    professional: false,
    skills: [
      "React.js",
      "Responsive Web Design",
      "TypeScript",
      "REST API",
      "Redux Toolkit",
      "Styled-Components",
      "Vercel Deploy",
    ],
    about: [
      {
        id: "film1",
        text: "After finishing a Udemy course, React Redux, I decided to put what I learned into practice. Fascinated by movies, I created my own movie website, with data from the IMDb API.",
      },
      {
        id: "film2",
        text: "This is a movie database site. Online movie-related data like movie specs, plot, cast, posters, ratings, and more. Website deployed on Vercel. This API only allows 1,000 requests per day.",
      },
    ],
    website: "https://film-and-chips-website.vercel.app",
    github: "https://github.com/thiagocabralcorreia/film-and-chips-website",
    appleStore: "",
    playStore: "",
    images: [
      {
        id: "film-n-chips1.png",
        src: FilmNChips1,
        alt: "Film N Chips website page",
      },
      {
        id: "film-n-chips2.png",
        src: FilmNChips2,
        alt: "Film N Chips website page",
      },

      {
        id: "film-n-chips3.png",
        src: FilmNChips3,
        alt: "Film N Chips website page",
      },
    ],
  },
  {
    id: "appqd",
    name: "APPqd",
    date: "Apr 2021 - Aug 2021",
    type: "Mobile",
    professional: true,
    skills: [
      "React Native",
      "Styled-Components",
      "JavaScrip",
      "Redux",
      "GitHub",
    ],
    about: [
      {
        id: "appqd1",
        text: "My second professional mobile app project, at NB Consulting IT. This is a very unique app, a logbook that helps skydivers. Among the various features, there are simulators, wing loading calculator, wind and weather forecast, data notebook and jump equipment.",
      },
      {
        id: "appqd2",
        text: "The user interface is very simple and beautiful, and I remember hearing a lot of praise from satisfied customers.",
      },
    ],
    website: "",
    github: "",
    appleStore:
      "https://apps.apple.com/hr/app/appqd-skydive-e-base-jump/id1548125179?l=hr",
    playStore: "https://play.google.com/store/apps/details?id=com.appqd",
    images: [
      {
        id: "appqd1.png",
        src: APPqd1,
        alt: "Smartphones with APPqd screens",
      },
      {
        id: "appqd2.png",
        src: APPqd2,
        alt: "Smartphones with APPqd screens",
      },
    ],
  },
  {
    id: "web-accessibility",
    name: "Web Accessibility",
    date: "Jul 2022",
    type: "Web",
    professional: false,
    skills: [
      "Next.js",
      "Responsive Web Design",
      "TypeScript",
      "Tailwind CSS",
      "Apiary",
      "AAA",
      "UX/UI",
      "Vercel",
    ],
    about: [
      {
        id: "wa1",
        text: "This responsive website was planned and developed in order to achieve theoretical knowledge and practical study on web accessibility, following good practices, such as use of contrast, alternative theme, understandable interface and easy navigation, with keyboard interaction.",
      },
      {
        id: "wa2",
        text: "Among the applied technologies, I used Next.js 13 and the new experimental features, including the new way to fetch data and handle promises inside components. Simple, well-readable user interface with a focus on user experience. I used Apiary as the API design stack to simulate data fetching. ",
      },
    ],
    website: "https://web-accessibility-nine.vercel.app",
    github: "https://github.com/thiagocabralcorreia/web-accessibility",
    appleStore: "",
    playStore: "",
    images: [
      {
        id: "wa1.png",
        src: WA1,
        alt: "Web Accessibility website page",
      },
      {
        id: "wa2.png",
        src: WA2,
        alt: "Web Accessibility website page",
      },

      {
        id: "wa3.png",
        src: WA3,
        alt: "Web Accessibility website page",
      },
    ],
  },
  {
    id: "gofinances",
    name: "GoFinances",
    date: "Sep 2022 - Oct 2022",
    type: "Mobile",
    professional: false,
    skills: [
      "React Native",
      "TypeScript",
      "Expo",
      "Styled-Components",
      "Social Login",
      "UX/UI",
    ],
    about: [
      {
        id: "finance1",
        text: "Another study mission. Through Rocketseat Ignite course, I developed an mobile app for user's personal finances management, including inflows/outflows cards, monthly summary chart and social login authentication.",
      },
      {
        id: "finance2",
        text: "I reviewed and practiced TypeScript and Styled-Components, learned about authentication with Google and Apple accounts, store with AsyncStorage, use of chart with date filters and Yup validation.",
      },
    ],
    website: "",
    github: "https://github.com/thiagocabralcorreia/gofinances-app",
    appleStore: "",
    playStore: "",
    images: [
      {
        id: "gofinances1.png",
        src: GoFinances1,
        alt: "Smartphones with GoFinances app screens",
      },
      {
        id: "gofinances2.png",
        src: GoFinances2,
        alt: "Smartphones with GoFinances app screens",
      },
    ],
  },
  {
    id: "portfolio",
    name: "Portfolio",
    date: "Feb 2023",
    type: "Web",
    professional: false,
    skills: [
      "React.js",
      "Responsive Web Design",
      "TypeScript",
      "Taildwind CSS",
      "UX/UI",
      "EmailJS",
      "Vercel Deploy",
    ],
    about: [
      {
        id: "portfolio1",
        text: "I'm proud of the work I put into this project and I hope it serves as a great representation of my skills and experience.",
      },
      {
        id: "portfolio2",
        text: "Built with React.js, TypeScript and Tailwind CSS, this website is fully responsive and includes downloadable resume, links to social media profiles, introduction section, skills list, project grid, detailed project pages, recommendation slider, and contact form powered by EmailJS.",
      },
      {
        id: "portfolio3",
        text: "To enhance the user experience, I incorporated Framer Motion for smooth animations and React Scroll for seamless scrolling between sections. More recently, I added theme switching and language selection (English and Portuguese).",
      },
    ],
    website: "https://thiagocabralcorreia.vercel.app",
    github: "https://github.com/thiagocabralcorreia/portfolio-website",
    appleStore: "",
    playStore: "",
    images: [
      {
        id: "portfolio1.png",
        src: Portfolio1,
        alt: "Portfolio website home page",
      },
      {
        id: "portfolio2.png",
        src: Portfolio2,
        alt: "Portfolio website project grid",
      },
      {
        id: "portfolio3.png",
        src: Portfolio3,
        alt: "Portfolio website contact and recommendations",
      },
    ],
  },
  {
    id: "dev-meetup",
    name: "DevMeetup",
    date: "Apr 2023",
    type: "Web",
    professional: false,
    skills: [
      "React.js",
      "Responsive Web Design",
      "TypeScript",
      "Taildwind CSS",
      "UX/UI",
      "Node.js",
      "Express",
      "MongoDB",
      "Web Sockets",
      "JSON Web Token",
    ],
    about: [
      {
        id: "devmeetup1",
        text: "Inspired by watching and studying a MERN Bootcamp, I developed this project from Back-end to Front-end. This is a website for consulting, creating, editing and registering in developer meetups.",
      },
      {
        id: "devmeetup2",
        text: "On the front-end, I developed a responsive design with login and registration forms, a dashboard displaying all meetup events (with information and image), a category filter and much more. I also created a simple brand with icon and special font, to give more authenticity.",
      },
      {
        id: "devmeetup3",
        text: "On the back-end, I integrated user register and authentication, session control, CRUD operations, and event search using filters. It also includes event registration, uploading images to the server, site notification using web sockets, and saving images to the S3 Bucket. It was an excellent experience to work with JSON Web Token and Web Sockets.",
      },
    ],
    website: "",
    github: "https://github.com/thiagocabralcorreia/dev-meetup",
    appleStore: "",
    playStore: "",
    images: [
      {
        id: "devmeetup1.png",
        src: DevMeetup1,
        alt: "DevMeetup website dashboard",
      },
      {
        id: "devmeetup2.png",
        src: DevMeetup2,
        alt: "DevMeetup responsive design on smartphone screen",
      },
      {
        id: "devmeetup3.png",
        src: DevMeetup3,
        alt: "DevMeetup create event form page",
      },
    ],
  },
  {
    id: "cnh",
    name: "Comida na Hora",
    date: "Dec 2022 - Jan 2023",
    type: "Mobile",
    professional: false,
    skills: [
      "React Native",
      "TypeScript",
      "REST API",
      "Styled-Components",
      "UX/UI",
    ],
    about: [
      {
        id: "cnh1",
        text: "Comida na Hora is a food delivery app. A restaurant marketplace as a showcase for local businesses, with tens of thousands of downloads.",
      },
      {
        id: "cnh2",
        text: "At Nano Incub, one of our missions was to develop a new version of the mobile app, which already existed and was working (its first version created with Iconic and Laravel). We rebuilt it with React Native and added new elements to improve the user experience.",
      },
    ],
    website: "https://comidanahora.com.br/",
    github: "",
    appleStore: "https://apps.apple.com/br/app/comida-na-hora/id1517670680",
    playStore:
      "https://play.google.com/store/apps/details?id=com.nanoincub.comidanahora&hl=pt&gl=US",
    images: [
      {
        id: "cnh1.png",
        src: CNH1,
        alt: "Smartphones with Comida na Hora app screens",
      },
      {
        id: "cnh2.png",
        src: CNH2,
        alt: "Smartphones with Comida na Hora app screens",
      },
    ],
  },
  {
    id: "british-beers",
    name: "British Beers",
    date: "Jun 2024",
    type: "Web",
    professional: false,
    skills: ["Next.js", "TypeScript", "Taildwind CSS", "SSR"],
    about: [
      {
        id: "britishbeers1",
        text: "This website was developed for study purposes, aiming to learn new features of Next.js App Router through practice. As a keen enthusiast of British beers, I built a simple e-commerce site focused on data retrieval.",
      },
      {
        id: "britishbeers2",
        text: "• Note: Since this project was solely for studying App Router, I created a basic API using Next.js itself. I did not focus on site responsiveness, nor did I include a shopping cart page or purchasing tool.",
      },
    ],
    website: "",
    github: "https://github.com/thiagocabralcorreia/british-beers",
    appleStore: "",
    playStore: "",
    images: [
      {
        id: "british-beers1.png",
        src: BritishBeers1,
        alt: "British Beers Website home page",
      },
      {
        id: "british-beers2.png",
        src: BritishBeers2,
        alt: "British Beers Website products page",
      },
      {
        id: "british-beers3.png",
        src: BritishBeers3,
        alt: "British Beers Website product details page",
      },
    ],
  },
  {
    id: "cvfy",
    name: "CVFY",
    date: "Apr 2022 - Aug 2022",
    type: "Mobile",
    professional: true,
    skills: ["React.js", "TypeScript", "Styled-Components", "React Native"],
    about: [
      {
        id: "cvfy1",
        text: "I undertook a remote freelance project in collaboration with a team based in Northampton, England. This project encompassed two main areas: the development of a job search mobile application and the creation of a landing page.",
      },
      {
        id: "cvfy2",
        text: "The application was designed with a strong focus on user experience and a clean, intuitive interface. I used React Native and TypeScript to deliver a streamlined and efficient navigation experience, with job search and application features powered by artificial intelligence.",
      },
      {
        id: "cvfy3",
        text: "To complement the app, I developed a responsive, mobile-first landing page using React and TypeScript. The page was designed to maximise visitor-to-user conversion, featuring an attractive and easy-to-navigate layout. The design was implemented with Styled-components and mockups created in Adobe XD.",
      },
    ],
    website: "",
    github: "",
    appleStore: "",
    playStore: "",
    images: [
      {
        id: "cvfy.png",
        src: CVFY,
        alt: "CVFY logo",
      },
    ],
  },
];

export const ptProjectDetailsData = [
  {
    id: "bnb",
    name: "BNB React Lib",
    date: "Mai 2023 - Presente",
    type: "Web",
    professional: true,
    skills: [
      "React.js",
      "TypeScript",
      "SCSS",
      "Responsive Web Design",
      "Storybook",
      "Jest",
      "React Testing",
      "Vite",
    ],
    about: [
      {
        id: "bnb1",
        text: "Via SONDA, fui contratado para trabalhar no Banco do Nordeste (BNB), o maior banco de desenvolvimento social da América Latina. E, junto ao time de UX, faço parte da construção do Design System do Banco, com a missão de preencher a lacuna entre designers e desenvolvedores.",
      },
      {
        id: "bnb2",
        text: "Minha tarefa mais impactante tem sido a criação da biblioteca de Design System (uma biblioteca de componentes de interface do usuário). Esse trabalho envolve transformar o design e as variáveis em código, produzindo um complexo conjunto de mais de 50 componentes que serão reutilizados em vários sites da empresa, a fim de garantir alta produtividade no desenvolvimento de futuras telas.",
      },
      {
        id: "bnb3",
        text: "Para a biblioteca voltada para web, utilizei React.js com Vite, TypeScript, SCSS e Storybook (para mostrar, documentar e testar cada componente em isolamento). Através de uma API desenvolvida por nós, as variáveis e os tokens do Figma são convertidas de JSON para arquivos SCSS, atualizando em tempo real temas, medidas e demais estilos. Além disso, realizei testes automatizados em cada componente, utilizando Jest e React Testing Library.",
      },
      {
        id: "bnb4",
        text: "• Nota: No momento, o site está acessível apenas para funcionários.",
      },
    ],
    website: "https://www.bnb.gov.br",
    github: "",
    appleStore: "",
    playStore: "",
    images: [
      {
        id: "bnb1.png",
        src: BNB1,
        alt: "Componente da BNB DS React Library apresentado no Storybook",
      },
      {
        id: "bnb2.png",
        src: BNB2,
        alt: "Componente da BNB DS React Library apresentado no Storybook",
      },
      {
        id: "bnb1.png",
        src: BNB3,
        alt: "Componente da BNB DS React Library apresentado no Storybook",
      },
    ],
  },
  {
    id: "digital-platform",
    name: "Plataforma Digital BNB",
    date: "Mai 2023 - Ago 2023",
    type: "Web",
    professional: true,
    skills: [
      "React.js",
      "TypeScript",
      "Docusaurus",
      "Markdown",
      "Responsive Web Design",
      "Gitlab",
    ],
    about: [
      {
        id: "bnbdp1",
        text: "Embora minha principal tarefa tenha sido a construção da biblioteca de componentes React do Design System do Banco do Nordeste (BNB), meu primeiro projeto foi a Plataforma Digital, um site de documentação colaborativa criado com Docusaurus, gerador de sites estático que possibilita a combinação de Markdown com componentes React.",
      },
      {
        id: "bnbdp2",
        text: "Este portal é utilizado por todos os colaboradores da TI do Banco do Nordeste a fim de informar e ser informado a respeito de diretrizes e guias para desempenhar as atividades de desenvolvimento e testes. Esta implementação resultou em um acréscimo de mais de 50% de engajamento em comparação à versão anterior da Plataforma Digital.",
      },
      {
        id: "bnbdp3",
        text: "• Nota: O portal é acessado apenas por funcionários da TI do banco e seu site não pode ser divulgado.",
      },
    ],
    website: "https://www.bnb.gov.br",
    github: "",
    appleStore: "",
    playStore: "",
    images: [
      {
        id: "bnbpd1.png",
        src: DigitalPlatform1,
        alt: "Portal Plataforma Digital",
      },
      {
        id: "bnbpd2.png",
        src: DigitalPlatform2,
        alt: "Portal Plataforma Digital",
      },
      {
        id: "bnbpd3.png",
        src: DigitalPlatform3,
        alt: "Portal Plataforma Digital",
      },
    ],
  },
  {
    id: "scoutfy",
    name: "Scoutfy",
    date: "Jul 2021 - Abr 2022",
    type: "Web",
    professional: true,
    skills: [
      "Next.js",
      "Responsive Web Design",
      "Styled-Components",
      "Storybook",
      "Redux Toolkit",
      "CI/CD",
      "Vercel",
    ],
    about: [
      {
        id: "scoutfy1",
        text: "Este foi o primeiro projeto profissional que desenvolvi com React e Next.js, um website grandioso, importante aprendizado, complexo, responsivo, repleto de componentes reutilizáveis.",
      },
      {
        id: "scoutfy2",
        text: "Scoutfy é uma plataforma de gestão esportiva intuitiva para esportistas amadores e atletas de alto rendimento, que podem elaborar um currículo esportivo, solicitar bolsas e patrocínios, entrar em contato com a comunidade, gerenciar afiliações, membros, eventos, competições, equipes, membros da comissão, assinaturas e suporte.",
      },
    ],
    website: "https://scoutfy.webflow.io",
    github: "",
    appleStore: "",
    playStore: "",
    images: [
      {
        id: "scoutfy1.png",
        src: Scoutfy1,
        alt: "Scoutfy logo",
      },
      {
        id: "scoutfy2.png",
        src: Scoutfy2,
        alt: "Tela de login do site Scoutfy",
      },
    ],
  },
  {
    id: "caule",
    name: "Caule",
    date: "Ago 2022 - Fev 2023",
    type: "Mobile",
    professional: true,
    skills: [
      "React Native",
      "TypeScript",
      "REST API",
      "Styled-Components",
      "GitLab",
    ],
    about: [
      {
        id: "caule1",
        text: "Um dos projetos mais ambiciosos de que já participei. Ao ingressar na equipe Nano Incub, meu primeiro desafio foi trabalhar no desenvolvimento móvel desta plataforma de negócios super completa, Caule, utilizada por mais de 25.000 funcionários das maiores usinas do país.",
      },
      {
        id: "caule2",
        text: "Caule é um aplicativo móvel feito sob medida para grandes corporações que possuem milhares de funcionários distribuídos geograficamente (no escritório, no campo, remotamente), facilitando a vida tanto do empregador quanto do empregado.",
      },
      {
        id: "caule3",
        text: "Através do aplicativo, os colaboradores podem acessar folha de pagamento e de férias, receber apostilas, distribuir conteúdo institucional e diversas outras funcionalidades personalizadas - tudo integrado às principais Enterprise Resource Planning's do mercado (SAP, Totvs e Senior). Sua implantação apresenta um alto desempenho contra a lentidão dos processos burocráticos.",
      },
    ],
    website: "https://caule.app",
    github: "",
    appleStore: "https://apps.apple.com/br/app/caule/id6444843213",
    playStore: "https://play.google.com/store/apps/details?id=com.caule.app",
    images: [
      {
        id: "caule1.png",
        src: Caule1,
        alt: "Smartphones com telas do aplicativo Caule",
      },
      {
        id: "caule2.png",
        src: Caule2,
        alt: "Smartphones com telas do aplicativo Caule",
      },
    ],
  },
  {
    id: "coffee-house",
    name: "CoffeeHouse",
    date: "Set 2021 - Nov 2021",
    type: "Web",
    professional: false,
    skills: [
      "React.js",
      "Responsive Web Design",
      "Context API",
      "JavaScript",
      "HTML",
      "SASS",
      "Photoshop",
      "Illustrator",
    ],
    about: [
      {
        id: "ch1",
        text: "Esse foi meu primeiro projeto pessoal, construído do zero com minhas ideias e meu design. Como um amante de café, fiquei super empolgado em criar uma rede fictícia de cafeterias londrinas: marca, identidade visual, cardápio e endereços. Elaborei até as artes gráficas com letreiros, fachadas e banners deste site, editadas com Adobe Photoshop.",
      },
      {
        id: "ch2",
        text: "Foi uma forma desafiadora e muito divertida de colocar em prática meus conhecimentos de React.js. Entre as funcionalidades: design responsivo usando Sass, slider de imagens infinito, menu mobile, grid da galeria com modal slideshow, página de endereços usando filtro de lojas, quiz de café com pontuação, formulário de contato e assinatura de newsletter com validação, página de menu com contexto, animações CSS e gráficos.",
      },
    ],
    website: "https://coffeehouse-website-kohl.vercel.app",
    github: "https://github.com/thiagocabralcorreia/coffeehouse-website",
    appleStore: "",
    playStore: "",
    images: [
      {
        id: "coffeehouse1.png",
        src: CoffeeHouse1,
        alt: "Website CoffeeHouse",
      },
      {
        id: "coffeehouse2.png",
        src: CoffeeHouse2,
        alt: "Website CoffeeHouse",
      },

      {
        id: "coffeehouse3.png",
        src: CoffeeHouse3,
        alt: "Website CoffeeHouse",
      },
    ],
  },
  {
    id: "wee-travel",
    name: "Wee Travel",
    date: "Abr 2021 - Ago 2021",
    type: "Mobile",
    professional: true,
    skills: [
      "React Native",
      "Styled-Components",
      "JavaScrip",
      "Redux",
      "GitHub",
    ],
    about: [
      {
        id: "wee1",
        text: "Desenvolvido assim que ingressei na NB Consulting. Um aplicativo móvel de gestão de viagens corporativas com informações atualizadas sobre companhias aéreas, OBT (Online booking travel) e Enterprise Resource Planning, acessado por diferentes perfis, como gestor de viagens, centro de custo gestor e viajante.",
      },
    ],
    website: "",
    github: "",
    appleStore: "",
    playStore: "https://apkpure.com/wee-gestão/com.weetechapp",
    images: [
      {
        id: "weetravel1.png",
        src: WeeTravel1,
        alt: "Smartphones com telas do aplicativo WeeTravel",
      },
      {
        id: "weetravel2.png",
        src: WeeTravel2,
        alt: "Smartphones com telas do aplicativo WeeTravel",
      },
    ],
  },
  {
    id: "film-n-chips",
    name: "Film N Chips",
    date: "Jul 2022",
    type: "Web",
    professional: false,
    skills: [
      "React.js",
      "Responsive Web Design",
      "TypeScript",
      "REST API",
      "Redux Toolkit",
      "Styled-Components",
      "Vercel Deploy",
    ],
    about: [
      {
        id: "film1",
        text: "Após a conclsão de um curso da Udemy, React Redux, resolvi colocar em prática o que aprendi. Fascinado por cinema, criei meu próprio site de filmes, com dados da API do IMDb.",
      },
      {
        id: "film2",
        text: "Este é um site de banco de dados de filmes. Dados on-line relacionados a filmes, como especificações do filme, sinopse, elenco, pôsteres, classificações indicativas e muito mais. Deploy via Vercel. Essa API permite apenas 1.000 solicitações por dia.",
      },
    ],
    website: "https://film-and-chips-website.vercel.app",
    github: "https://github.com/thiagocabralcorreia/film-and-chips-website",
    appleStore: "",
    playStore: "",
    images: [
      {
        id: "film-n-chips1.png",
        src: FilmNChips1,
        alt: "Página do site Film N Chips",
      },
      {
        id: "film-n-chips2.png",
        src: FilmNChips2,
        alt: "Página do site Film N Chips",
      },

      {
        id: "film-n-chips3.png",
        src: FilmNChips3,
        alt: "Página do site Film N Chips",
      },
    ],
  },
  {
    id: "appqd",
    name: "APPqd",
    date: "Abr 2021 - Ago 2021",
    type: "Mobile",
    professional: true,
    skills: [
      "React Native",
      "Styled-Components",
      "JavaScrip",
      "Redux",
      "GitHub",
    ],
    about: [
      {
        id: "appqd1",
        text: "Minha segunda experiência profissional com aplicativo móvel, na NB Consulting IT. Este é um aplicativo muito original, um diário de bordo que ajuda os paraquedistas. Entre as diversas funcionalidades, estão simuladores, calculadora de carga alar, previsão de vento e clima, caderno de dados e equipamentos de salto.",
      },
      {
        id: "appqd2",
        text: "A interface do usuário é muito simples e bonita, e lembro de ter ouvido muitos elogios de clientes satisfeitos.",
      },
    ],
    website: "",
    github: "",
    appleStore:
      "https://apps.apple.com/hr/app/appqd-skydive-e-base-jump/id1548125179?l=hr",
    playStore: "https://play.google.com/store/apps/details?id=com.appqd",
    images: [
      {
        id: "appqd1.png",
        src: APPqd1,
        alt: "Smartphones com telas do aplicativo APPqd",
      },
      {
        id: "appqd2.png",
        src: APPqd2,
        alt: "Smartphones com telas do aplicativo APPqd",
      },
    ],
  },
  {
    id: "web-accessibility",
    name: "Web Accessibility",
    date: "Jul 2022",
    type: "Web",
    professional: false,
    skills: [
      "Next.js",
      "Responsive Web Design",
      "TypeScript",
      "Tailwind CSS",
      "Apiary",
      "AAA",
      "UX/UI",
      "Vercel",
    ],
    about: [
      {
        id: "wa1",
        text: "Este site responsivo foi planejado e desenvolvido visando o conhecimento teórico e o estudo prático sobre acessibilidade web, seguindo boas práticas, como uso de contraste, tema alternativo, interface compreensível e fácil navegação, com interação por teclado.",
      },
      {
        id: "wa2",
        text: "Dentre as tecnologias aplicadas, utilizei o Next.js 13 e os novos recursos experimentais, incluindo a nova forma de buscar dados e tratar as promessas dentro dos componentes. Interface de usuário simples e de fácil leitura com foco na experiência do usuário. Utilizei o Apiary como a pilha de design da API para simular a busca de dados.",
      },
    ],
    website: "https://web-accessibility-nine.vercel.app",
    github: "https://github.com/thiagocabralcorreia/web-accessibility",
    appleStore: "",
    playStore: "",
    images: [
      {
        id: "wa1.png",
        src: WA1,
        alt: "Página do site Web Accessibility",
      },
      {
        id: "wa2.png",
        src: WA2,
        alt: "Página do site Web Accessibility",
      },

      {
        id: "wa3.png",
        src: WA3,
        alt: "Página do site Web Accessibility",
      },
    ],
  },
  {
    id: "gofinances",
    name: "GoFinances",
    date: "Set 2022 - Out 2022",
    type: "Mobile",
    professional: false,
    skills: [
      "React Native",
      "TypeScript",
      "Expo",
      "Styled-Components",
      "Social Login",
      "UX/UI",
    ],
    about: [
      {
        id: "finance1",
        text: "Mais uma missão de estudo. Por meio do curso Rocketseat Ignite, desenvolvi um aplicativo móvel para gerenciamento das finanças pessoais do usuário, incluindo cartões de entradas/saídas, gráfico de resumo mensal e autenticação de login social.",
      },
      {
        id: "finance2",
        text: "Revisei e pratiquei TypeScript e Styled-Components, aprendi sobre autenticação com contas Google e Apple, armazenamento com AsyncStorage, uso de gráfico com filtros de data e validação Yup.",
      },
    ],
    website: "",
    github: "https://github.com/thiagocabralcorreia/gofinances-app",
    appleStore: "",
    playStore: "",
    images: [
      {
        id: "gofinances1.png",
        src: GoFinances1,
        alt: "Smartphones com telas do aplicativo GoFinances",
      },
      {
        id: "gofinances2.png",
        src: GoFinances2,
        alt: "Smartphones com telas do aplicativo GoFinances",
      },
    ],
  },
  {
    id: "portfolio",
    name: "Portfolio",
    date: "Feb 2023",
    type: "Web",
    professional: false,
    skills: [
      "React.js",
      "Responsive Web Design",
      "TypeScript",
      "Taildwind CSS",
      "UX/UI",
      "EmailJS",
      "Vercel Deploy",
    ],
    about: [
      {
        id: "portfolio1",
        text: "Tenho orgulho do trabalho que dediquei a este projeto e espero que sirva como uma boa representação de minhas habilidades e experiência.",
      },
      {
        id: "portfolio2",
        text: "Construído com React.js, TypeScript e Tailwind CSS, este site é totalmente responsivo e inclui currículo para download, links para perfis de mídia social, seção de introdução, lista de habilidades, grade de projeto, páginas de projeto detalhados, slider de recomendação e formulário de contato desenvolvido por EmailJS.",
      },
      {
        id: "portfolio3",
        text: "Para aprimorar a experiência do usuário, incorporei o Framer Motion para animações suaves e o React Scroll para rolagem contínua entre as seções. Mais recentemente, adicionei mudança de tema e seleção de idioma (Português e Inglês).",
      },
    ],
    website: "https://thiagocabralcorreia.vercel.app",
    github: "https://github.com/thiagocabralcorreia/portfolio",
    appleStore: "",
    playStore: "",
    images: [
      {
        id: "portfolio1.png",
        src: Portfolio1,
        alt: "Home page do site Portfolio",
      },
      {
        id: "portfolio2.png",
        src: Portfolio2,
        alt: "Grid de projetos do site Portfolio",
      },
      {
        id: "portfolio3.png",
        src: Portfolio3,
        alt: "Seções de contato e recomendações do site Portfolio",
      },
    ],
  },
  {
    id: "dev-meetup",
    name: "DevMeetup",
    date: "Apr 2023",
    type: "Web",
    professional: false,
    skills: [
      "React.js",
      "Responsive Web Design",
      "TypeScript",
      "Taildwind CSS",
      "UX/UI",
      "Node.js",
      "Express",
      "MongoDB",
      "Web Sockets",
      "JSON Web Token",
    ],
    about: [
      {
        id: "devmeetup1",
        text: "Inspirado ao assistir e estudar um MERN Bootcamp, desenvolvi esse projeto do Back-end ao Front-end. Trata-se de um website para consultar, criar, editar e se cadastrar em meetups de desenvolvedores.",
      },
      {
        id: "devmeetup2",
        text: "No front-end, desenvolvi um design responsivo com formulários de login e cadastro, um painel exibindo todos os eventos de meetup (com informações e imagem), um filtro de categoria e muito mais. Também criei uma simples marca com ícone e fonte especial, para dar mais autenticidade.",
      },
      {
        id: "devmeetup3",
        text: "No back-end, integrei o registro e autenticação de usuários, controle de sessão, operações CRUD e pesquisa de eventos usando filtros. Também incluí a inscrição em eventos e upload de imagens para o servidor. Foi uma excelente experiência trabalhar com JSON Web Token e Web Sockets.",
      },
    ],
    website: "",
    github: "https://github.com/thiagocabralcorreia/dev-meetup",
    appleStore: "",
    playStore: "",
    images: [
      {
        id: "devmeetup1.png",
        src: DevMeetup1,
        alt: "Site DevMeetup com painel",
      },
      {
        id: "devmeetup2.png",
        src: DevMeetup2,
        alt: "Design responsivo de DevMeetup em tela de celular",
      },
      {
        id: "devmeetup3.png",
        src: DevMeetup3,
        alt: "Formulário de criar evento do site DevMeetup",
      },
    ],
  },
  {
    id: "cnh",
    name: "Comida na Hora",
    date: "Dez 2022 - Jan 2023",
    type: "Mobile",
    professional: false,
    skills: [
      "React Native",
      "REST API",
      "TypeScript",
      "Styled-Components",
      "UX/UI",
    ],
    about: [
      {
        id: "cnh1",
        text: "O Comida na Hora é um aplicativo de entrega de comida. Um mercado de restaurantes como vitrine para empresas locais, com dezenas de milhares de downloads.",
      },
      {
        id: "cnh2",
        text: "Na Nano Incub, uma de nossas missões foi desenvolver uma nova versão do aplicativo móvel, que já existia e estava em funcionamento (sua primeira versão criada com Iconic e Laravel). Refizemos com React Native e adicionamos novos elementos a fim de melhorar a experiência do usuário.",
      },
    ],
    website: "https://comidanahora.com.br/",
    github: "",
    appleStore: "https://apps.apple.com/br/app/comida-na-hora/id1517670680",
    playStore:
      "https://play.google.com/store/apps/details?id=com.nanoincub.comidanahora&hl=pt&gl=US",
    images: [
      {
        id: "cnh1.png",
        src: CNH1,
        alt: "Smartphones with Comida na Hora app screens",
      },
      {
        id: "cnh2.png",
        src: CNH2,
        alt: "Smartphones with Comida na Hora app screens",
      },
    ],
  },
  {
    id: "british-beers",
    name: "British Beers",
    date: "Jun 2024",
    type: "Web",
    professional: false,
    skills: ["Next.js", "TypeScript", "Taildwind CSS", "SSR"],
    about: [
      {
        id: "britishbeers1",
        text: "Este website foi desenvolvido para fins de estudo, a fim de aprender novas features do Next.js App Router através da prática. Como bom apreciador de cervejas do Reino Unido, construí um e-commerce simples de cervejas britânicas, com foco na busca de dados.",
      },
      {
        id: "britishbeers2",
        text: "• Nota: Uma vez que este projeto teve fins apenas para estudo de App Router, criei simples API com o próprio Next.js, não foquei na responsividade do site nem adicionei a página de carrinho nem ferramenta de compra.",
      },
    ],
    website: "",
    github: "https://github.com/thiagocabralcorreia/british-beers",
    appleStore: "",
    playStore: "",
    images: [
      {
        id: "british-beers1.png",
        src: BritishBeers1,
        alt: "Página inicial do site British Beers",
      },
      {
        id: "british-beers2.png",
        src: BritishBeers2,
        alt: "Página de produto do site British Beers",
      },
      {
        id: "british-beers3.png",
        src: BritishBeers3,
        alt: "Página de detalhes de produto do site British Beers",
      },
    ],
  },
  {
    id: "cvfy",
    name: "CVFY",
    date: "Abr 2022 - Ago 2022",
    type: "Mobile",
    professional: true,
    skills: ["React.js", "TypeScript", "Styled-Components", "React Native"],
    about: [
      {
        id: "cvfy1",
        text: "Realizei um projeto freelance remoto em colaboração com uma equipe localizada em Northampton, Inglaterra. Este projeto compreendia duas frentes principais: o desenvolvimento de um aplicativo móvel de busca de emprego e a criação de uma landing page.",
      },
      {
        id: "cvfy2",
        text: "O aplicativo foi concebido com um foco acentuado na experiência do usuário e em um design limpo e intuitivo. Utilizei React Native e TypeScript. O objetivo foi proporcionar uma navegação simplificada e eficiente, com funcionalidades de busca e aplicação de empregos impulsionadas por inteligência artificial.",
      },
      {
        id: "cvfy3",
        text: "Para complementar o aplicativo, desenvolvi uma landing page responsiva e mobile-first com React e TypeScript. A página foi projetada para maximizar a conversão de visitantes em usuários da plataforma, com um layout atraente e fácil de navegar. O design foi implementado utilizando Styled-components e mockups criados no Adobe XD.",
      },
    ],
    website: "",
    github: "",
    appleStore: "",
    playStore: "",
    images: [
      {
        id: "cvfy.png",
        src: CVFY,
        alt: "Marca da plataforma CVFY",
      },
    ],
  },
];
