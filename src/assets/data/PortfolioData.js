import portfolioImg01 from "../portfolio-01.jpg";
import portfolioImg02 from "../portfolio-02.jpg";
import portfolioImg03 from "../portfolio-03.jpg";
import portfolioImg04 from "../portfolio-04.jpg";
import portfolioImg05 from "../portfolio-05.jpg";
import portfolioImg06 from "../portfolio-06.jpg";
import portfolioImg07 from "../portfolio-07.jpg";

const portfolios = [
  {
    id: "01",
    imgUrl: portfolioImg01,
    category: "MERN",
    title: "Blogging Platform For Developers",
    description:
      "Introducing 'DevBlog' a MERN project that serves as a dynamic Blogging Platform for developers. It offers a secure authentication system, markdown editor, and interactive features. Join DevBlog today to share insights, collaborate, and learn within a thriving community of developers.",
    technologies: ["React", "Chakra UI⚡️", "Node.js","Express.js", "MongoDB"],
    siteUrl: "#",
    gitUrl:"https://github.com/samithadev/mern_blog.git"
  },
  {
    id: "02",
    imgUrl: portfolioImg02,
    category: "React",
    title: "Portfolio Website",
    description:
      "This is my personal portfolio website, built with the power of React and the sleekness of Tailwind CSS. Explore my projects, skills, and experience as I showcase my work in a visually stunning and responsive design. Get to know me and my passion for creating impactful web experiences",
    technologies: ["React", "Tailwind css"],
    siteUrl: "#",
    gitUrl:"#"
  },
  {
    id: "03",
    imgUrl: portfolioImg04,
    category: "Ux",
    title: "Multimedia Sharing Website",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!",
    technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
    siteUrl: "#",
    gitUrl:"#"
  }
];

export default portfolios;