import RafaelPerozin from "../assets/recommendations/rafael-perozin.jpeg";
import LuisFelipe from "../assets/recommendations/luis-felipe.jpeg";
import AfonsoPimentel from "../assets/recommendations/afonso-pimentel.jpeg";
import LuizDoretto from "../assets/recommendations/luiz-doretto.jpeg";
import PauloBorges from "../assets/recommendations/paulo-borges.jpeg";
import LucasLima from "../assets/recommendations/lucas-lima.jpeg";
import HelioCosta from "../assets/recommendations/helio-costa.jpeg";
import RyanAlencar from "../assets/recommendations/ryan-alencar.jpeg";
import ThamiresPorto from "../assets/recommendations/thamires-porto.jpeg";
import HelenCris from "../assets/recommendations/helen-cris.jpeg";
import NicolasFreitas from "../assets/recommendations/nicolas-freitas.jpeg";
import CamillaAmaro from "../assets/recommendations/camilla-amaro.jpeg";

export interface Recommendation {
  id: string;
  text: string;
  image: string;
  name: string;
  occupation: string;
  link: string;
}

export const enRecommendationsData: Recommendation[] = [
  {
    id: "RyanAlencar",
    text: "I had the pleasure of working closely with Thiago, and I wholeheartedly recommend him as a highly skilled front-end developer. He is a proactive collaborator with excellent communication skills, a quick learner with a keen attention to detail, and results-oriented. Known for his critical thinking abilities, Thiago demonstrates a strong commitment to teamwork, effectively collaborating with colleagues to achieve common goals and drive successful project outcomes. Working with him is both a productive and enjoyable experience.",
    image: RyanAlencar,
    name: "Francisco Ryan Alencar",
    occupation: "Senior Software Architect",
    link: "https://www.linkedin.com/in/ryanalencar/",
  },
  {
    id: "CamillaAmaro",
    text: "Thiago is an outstanding front-end developer who combines technical excellence with a passion for creating exceptional user experiences.  Beyond the exceptional eye for design, he brings a positive attitude and strong problem-solving abilities to every challenge. Thiago is always open to feedback, eager to learn, and quick to adapt to new tools and methodologies. His collaborative spirit and effective communication make working together a pleasure, and he have been a key player in fostering a productive and innovative team environment.",
    image: CamillaAmaro,
    name: "Camilla Amaro",
    occupation: ".NET Architect and Developer",
    link: "https://www.linkedin.com/in/camillaamaro/",
  },
  {
    id: "ThamiresPorto",
    text: "Working with Thiago on a project for Banco do Nordeste has been an incredible experience. Thiago is an exceptional developer with the fundamental skills one would want in any top-tier software developer. He is always eager to learn and present the best solutions to problems. His knowledge of React.js, TypeScript, and Next.js are essential for our current project. Also, Thiago's background in UX Design helps him understand and deliver a high-fidelity project with the best User Experience practices. Therefore, I look forward to working and exchanging knowledge with him in the following years.",
    image: ThamiresPorto,
    name: "Thamires de Andrade Porto",
    occupation: "UI/UX Designer",
    link: "https://www.linkedin.com/in/deandradethamires/",
  },
  {
    id: "NicolasFreitas",
    text: "Thiago is an outstanding colleague who goes beyond typical frontend development, as he consistently suggests valuable improvements that the UX team values. His React expertisei s impressive, and he's introduced best practices for unit testing with Jest to web projects. Thiago's deep knowledge of Design Systems further underscores his commitment to creating scalable and maintainable code. His contributions have greatly enriched our projects, and I highly recommend him.",
    image: NicolasFreitas,
    name: "Nicolas Freitas",
    occupation: "Mobile Architect",
    link: "https://www.linkedin.com/in/nicolas-freitas-cc/",
  },
  {
    id: "HelenCris",
    text: "Working with Thiago is always a great experience. He's a top-notch professional who not only excels in the technologies he uses but is also constantly seeking to learn and improve. What really stands out about Thiago is his generosity in sharing knowledge and helping others grow. He communicates clearly and directly, and his willingness to collaborate makes him an invaluable and enjoyable colleague to work with.",
    image: HelenCris,
    name: "Helen Cris Tavares",
    occupation: "Mobile & Web Developer",
    link: "https://www.linkedin.com/in/helen-cris-morais/",
  },
  {
    id: "LuisFelipe",
    text: "Thiago is an excellent professional, very dedicated and careful with projects, always striving to deliver the best possible outcome. He has a good code organization and a great proactivity which allows him to raise the level of the team in relation to projects and studies. I also see that he has a lot of curiosity in learning new things and applying what he has learned, and he is a great colleague for any team. There is nothing better than a highly dedicated and friendly professional who fits in perfectly with any project. In short, a developer with a bright future ahead.",
    image: LuisFelipe,
    name: "Luís Felipe Silva",
    occupation: "Mobile Developer",
    link: "https://www.linkedin.com/in/luis-felipe-borges-silva-1905/",
  },
  {
    id: "LucasLima",
    text: "I recently worked with Thiago, and everything went smoothly. He is proactive, a programmer who insists on the search for problem solving, also with those with more complicated tasks, which can take a long time. He is a very communicative person, without problems with this and other soft-skills, trying to understand how the team is progressing, suggesting improvements and helping those who need it. I highly recommend him, he is an excellent professional.",
    image: LucasLima,
    name: "Lucas de Lima",
    occupation: "Mobile Developer",
    link: "https://www.linkedin.com/in/lucas-de-lima-azsura/",
  },
  {
    id: "HelioCosta",
    text: "Thiago is a highly motivated and ambitious individual who is always eager to learn and improve his skills. During his time at our organization, he consistently demonstrated a strong commitment to self-improvement and took every opportunity to expand his knowledge. He always approached new challenges with a positive attitude, and his enthusiasm for learning was infectious and inspiring to those around him.",
    image: HelioCosta,
    name: "Hélio Costa",
    occupation: "Mobile Developer",
    link: "https://www.linkedin.com/in/heliocosta-dev/",
  },
  {
    id: "RafaelPerozin",
    text: "I like Thiago's commitment. Only a few professional has such commitment and devotion. He started helping me with a personal project for free to learn, and due to his excellent performance converting designs into code, he became a paid freelancer and got more responsibilities in the project. He is definitely a developer with a brilliant future. I would love to work with him again someday.",
    image: RafaelPerozin,
    name: "Rafael Perozin",
    occupation: "Lead Frontend Architect",
    link: "https://www.linkedin.com/in/rafaelperozin/",
  },
  {
    id: "AfonsoPimentel",
    text: "When we started working together, Thiago was always willing to help in any way he could. If he couldn't, he would go after learning what was necessary to be able to collaborate. Your organization and communication are exceptional, and have helped a lot on All. He always shows care for them, and tries to understand everything in the best way, in order to be able to communicate even something that we had not seen. His role is indispensable in a Scrum team, not only for his role, but also for his empathy, humility and understanding.",
    image: AfonsoPimentel,
    name: "Afonso Pimentel",
    occupation: "Product Owner",
    link: "https://www.linkedin.com/in/afonsopimentel/",
  },
  {
    id: "LuizDoretto",
    text: "Thiago has one of the greatest thirsts for knowledge I have ever witnessed. Dedicated with deadlines, work clean and well done. Always seeks to ask for revisions to improve the service, delivers feedback clearly and always in the best way. Excellent professional, outstanding within any company!",
    image: LuizDoretto,
    name: "Luiz Henrique Doretto",
    occupation: "Frontend Developer",
    link: "https://www.linkedin.com/in/luiz-doretto/",
  },
  {
    id: "PauloBorges",
    text: "Cabral, in addition to being a very prepared and dedicated guy, was extremely proactive and had a desire to learn and contribute more and more. An example of persistence and organization, it was an honor to work alongside him!",
    image: PauloBorges,
    name: "Paulo Borges",
    occupation: "Software Engineer",
    link: "https://br.linkedin.com/in/paulo-borges-1133341a1",
  },
];

export const ptRecommendationsData: Recommendation[] = [
  {
    id: "RyanAlencar",
    text: "Tive o prazer de trabalhar de perto com Thiago, e o recomendo de verdade como um desenvolvedor front-end altamente qualificado. Ele é um colaborador proativo com excelentes habilidades de comunicação, um aprendiz rápido com grande atenção aos detalhes e orientado a resultados. Conhecido por suas habilidades de pensamento crítico, Thiago demonstra um forte comprometimento com o trabalho em equipe, colaborando efetivamente com colegas para atingir objetivos comuns e impulsionar resultados de projetos bem-sucedidos. Trabalhar com ele é uma experiência produtiva e agradável.",
    image: RyanAlencar,
    name: "Francisco Ryan Alencar",
    occupation: "Arquiteto de Software Sênior",
    link: "https://www.linkedin.com/in/ryanalencar/",
  },
  {
    id: "CamillaAmaro",
    text: "Thiago é um desenvolvedor front-end excepcional que combina excelência técnica com uma paixão por criar experiências de usuário excepcionais. Além de seu olhar apurado para design, ele traz uma atitude positiva e fortes habilidades de resolução de problemas para cada desafio. Thiago está sempre aberto a feedback, é ávido por aprender e rápido para se adaptar a novas ferramentas e metodologias. Seu espírito colaborativo e comunicação eficaz tornam o trabalho conjunto um prazer, e ele tem sido fundamental para promover um ambiente de equipe produtivo e inovador.",
    image: CamillaAmaro,
    name: "Camilla Amaro",
    occupation: "Arquiteta e Desenvolvedora .NET",
    link: "https://www.linkedin.com/in/camillaamaro/",
  },
  {
    id: "ThamiresPorto",
    text: "Trabalhar com o Thiago em um projeto para o Banco do Nordeste tem sido uma experiência incrível. Ele é um profissional excepcional com as habilidades fundamentais desejáveis em qualquer desenvolvedor de software de alto nível. Seu conhecimento em React.js, TypeScript e Next.js é fundamental para o nosso projeto atual. Além disso, sua formação em Design de UX o ajuda a compreender e entregar um projeto de alta fidelidade com as melhores práticas de experiência do usuário. Por isso, fico ansiosa para continuar trabalhando e trocando conhecimentos com ele nos próximos anos.",
    image: ThamiresPorto,
    name: "Thamires de Andrade Porto",
    occupation: "UI/UX Designer",
    link: "https://www.linkedin.com/in/deandradethamires/",
  },
  {
    id: "NicolasFreitas",
    text: "Thiago é um colega excepcional que vai além do desenvolvimento frontend típico, pois constantemente sugere melhorias valiosas que a equipe de UX abraça. Sua expertise em React é impressionante, e ele trouxe para os projetos web as melhores práticas de testes unitários com Jest. O profundo conhecimento de Thiago em Design Systems destaca ainda mais seu compromisso com a criação de código escalável e de fácil manutenção. Suas contribuições enriqueceram muito nossos projetos, e eu o recomendo fortemente.",
    image: NicolasFreitas,
    name: "Nicolas Freitas",
    occupation: "Arquiteto Mobile",
    link: "https://www.linkedin.com/in/nicolas-freitas-cc/",
  },
  {
    id: "HelenCris",
    text: "Trabalhar com o Thiago é sempre uma ótima experiência. Ele é um profissional de primeira linha, que não apenas se destaca nas tecnologias que utiliza, mas também está constantemente buscando aprender e se aperfeiçoar. O que realmente se destaca no Thiago é sua generosidade em compartilhar conhecimento e ajudar os outros a crescer. Ele se comunica de forma clara e direta, e sua disposição para colaborar o torna um colega inestimável e agradável de se trabalhar.",
    image: HelenCris,
    name: "Helen Cris Tavares",
    occupation: "Desenvolvedora Mobile & Web",
    link: "https://www.linkedin.com/in/helen-cris-morais/",
  },
  {
    id: "LuisFelipe",
    text: "Thiago é um excelente profissional, muito dedicado e cuidadoso com os projetos, sempre se esforçando para entregar o melhor resultado possível. Ele tem uma ótima organização de código e uma grande proatividade, o que lhe permite elevar o nível da equipe em relação a projetos e estudos. Também percebo que ele tem muita curiosidade em aprender coisas novas e aplicar o que aprendeu, além de um ótimo colega de equipe. Não há nada melhor do que um profissional altamente dedicado e parceiro que se encaixa perfeitamente em qualquer projeto. Em resumo, um desenvolvedor com um grande futuro.",
    image: LuisFelipe,
    name: "Luís Felipe Silva",
    occupation: "Desenvolvedor Mobile",
    link: "https://www.linkedin.com/in/luis-felipe-borges-silva-1905/",
  },
  {
    id: "LucasLima",
    text: "Trabalhei recentemente com o Thiago e tudo correu muito bem. Ele é proativo, um programador que insiste na busca pela resolução de problemas, mesmo com aqueles com tarefas mais complicadas, que podem demorar muito. É uma pessoa muito comunicativa, sem problemas com esta e outras soft-skills, tentando perceber como está a evolução da equipe, sugerindo melhorias e ajudando quem precisa. Recomendo muito, é um excelente profissional.",
    image: LucasLima,
    name: "Lucas de Lima",
    occupation: "Desenvolvedor Mobile",
    link: "https://www.linkedin.com/in/lucas-de-lima-azsura/",
  },
  {
    id: "HelioCosta",
    text: "O Thiago é uma pessoa altamente motivada e ambiciosa, sempre ansiosa para aprender e aprimorar suas habilidades. Durante o tempo em que esteve em nossa organização, ele demonstrou consistentemente um forte compromisso com o autodesenvolvimento e aproveitou cada oportunidade para expandir seu conhecimento. Ele sempre encarou novos desafios com uma atitude positiva, e seu entusiasmo pela aprendizagem era contagiante e inspirador para aqueles ao seu redor.",
    image: HelioCosta,
    name: "Hélio Costa",
    occupation: "Desenvolvedor Mobile",
    link: "https://www.linkedin.com/in/heliocosta-dev/",
  },
  {
    id: "RafaelPerozin",
    text: "Gosto do comprometimento do Thiago. Poucos profissionais possuem tal dedicação. Ele começou a me ajudar em um projeto pessoal gratuitamente para aprender e, devido ao seu excelente desempenho na conversão de designs em código, tornou-se um freelancer remunerado e assumiu mais responsabilidades no projeto. Ele é definitivamente um desenvolvedor com um futuro brilhante. Adoraria trabalhar com ele novamente um dia.",
    image: RafaelPerozin,
    name: "Rafael Perozin",
    occupation: "Arquiteto de Frontend Líder",
    link: "https://www.linkedin.com/in/rafaelperozin/",
  },
  {
    id: "AfonsoPimentel",
    text: "Quando começamos a trabalhar juntos, Thiago sempre se mostrou disposto a ajudar como podia. Se não podia, ia atrás de aprender o necessário pra poder colaborar. Sua organização e sua comunicação são excepcionais, e acrescentaram bastante em todos os projetos. Sempre demonstra cuidado com eles, e busca entender tudo da melhor forma, para poder comunicar até algo que não havíamos visto, o que sempre acaba contribuindo bastante. Seu papel é indispensável numa equipe SCRUM, não apenas pela sua função, mas também pela sua empatia, humildade e compreensão.",
    image: AfonsoPimentel,
    name: "Afonso Pimentel",
    occupation: "Product Owner",
    link: "https://www.linkedin.com/in/afonsopimentel/",
  },
  {
    id: "LuizDoretto",
    text: "Thiago tem uma das maiores sedes de conhecimento que eu já presenciei. Dedicado com deadlines, trabalho limpo e bem feito. Procura sempre pedir revisões para melhorar o serviço, entrega feedbacks com clareza e sempre da melhor maneira. Excelente profissional e que busca sempre crescer, um destaque dentro de qualquer empresa!",
    image: LuizDoretto,
    name: "Luiz Henrique Doretto",
    occupation: "Desenvolvedor Frontend",
    link: "https://www.linkedin.com/in/luiz-doretto/",
  },
  {
    id: "PauloBorges",
    text: "Cabral, além de ser um cara extremamente preparado e dedicado, era extremamente proativo e tinha um desejo por aprender e contribuir cada vez mais, um exemplo de persistência e organização. Uma honra trabalhar ao seu lado!",
    image: PauloBorges,
    name: "Paulo Borges",
    occupation: "Engenheiro de Software",
    link: "https://br.linkedin.com/in/paulo-borges-1133341a1",
  },
];
