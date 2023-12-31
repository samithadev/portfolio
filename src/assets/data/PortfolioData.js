import portfolioImg01 from "../portfolio-01.jpg";
import portfolioImg02 from "../portfolio-02.jpg";
import portfolioImg03 from "../portfolio-03.jpg";

const portfolios = [
  {
    id: "01",
    imgUrl: portfolioImg01,
    category: "MERN",
    title: "Blogging Platform For Developers",
    description:
      "Introducing 'DevBlog' a MERN project that serves as a dynamic Blogging Platform for developers. It offers a secure authentication system, markdown editor, and interactive features. Join DevBlog today to share insights, collaborate, and learn within a thriving community of developers.",
    technologies: ["React", "Chakra UI⚡️", "Node.js","Express.js", "MongoDB"],
    siteUrl: " ",
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
    siteUrl: " ",
    gitUrl:"https://github.com/samithadev/portfolio.git"
  },
  {
    id: "03",
    imgUrl: portfolioImg03,
    category: "Java",
    title: "Student Managment System",
    description:
      "Simple student managment system. Admin can add new student, delete student data, update student details etc.",
    technologies: ["Java", "SQL"],
    siteUrl: " ",
    gitUrl:"https://github.com/samithadev/Student_Managment_System.git"
  }
];

export default portfolios;