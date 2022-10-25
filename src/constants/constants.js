// IMPORTS
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Node from "../assets/node.png";
import FireBase from "../assets/firebase.png";
import GitHub from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";
import Mongo from "../assets/mongo.png";
import AWS from "../assets/aws.png";
// Project Images
import WorkImg from "../assets/projects/workImg.jpeg";
import RealEstate from "../assets/projects/realestate.jpg";
import Ecommerce from "../assets/projects/ecommerce.jpeg";
import Social from "../assets/projects/social.webp";
import Learning from "../assets/projects/learning.webp";
import cvFile from "../assets/pdf/cv.pdf";

export const skills = [
  {
    title: "HTML",
    img: HTML,
  },
  {
    title: "CSS",
    img: CSS,
  },
  {
    title: "JavaScript",
    img: JavaScript,
  },
  {
    title: "ReactImg",
    img: ReactImg,
  },
  {
    title: "Node",
    img: Node,
  },
  {
    title: "FireBase",
    img: FireBase,
  },
  {
    title: "GitHub",
    img: GitHub,
  },
  {
    title: "Tailwind",
    img: Tailwind,
  },
  {
    title: "Mongo",
    img: Mongo,
  },
  {
    title: "AWS",
    img: AWS,
  },
];

export const projects = [
  {
    title: "E-learning Platform",
    description:
      "Full Stack SaaS Application - built using React, Node.js, Express, MongoDB from start to finish. The App is Learning Management System Application. Created for Actum Lab.",
    image: Learning,
    // tags: ["Mongo", "Express", "React", "Node", "Postgres", "Jest"],
    // source: "https://google.com",
    // visit: "https://google.com",
    id: 0,
  },
  {
    title: "E-Commerce App",
    description:
      "Full Stack E-commerce application developed using React, Node.js, GraphQL. App was created while working at Metlife.",
    image: Ecommerce,
    // tags: ["React", "JavaScript", "GraphQL", "Node"],
    // source: "https://google.com",
    // visit: "https://google.com",
    id: 1,
  },
  {
    title: "Bank App",
    description:
      "Bank Application built for a client at ITechArt Group.  The technical skills employed involved JavaScript, TypeScript, React, Tailwind CSS.",
    image: WorkImg,
    // tags: ["React", "JavaScript", "Tailwind CSS", "TypeScript"],
    // source: "https://google.com",
    // visit: "https://google.com",
    id: 2,
  },
  {
    title: "Social Media App",
    description:
      "Full Stack MERN Application, built using MongoDB, React, Express, Node.js. React Styled Components, React-Redux, React-Router libraries were used. User registration and login is implemented.",
    image: Social,
    // tags: ["React", "MongoDB", "Express", "NodeJS"],
    // source: "https://google.com",
    // visit: "https://google.com",
    id: 3,
  },
  {
    title: "Real Estate App",
    description: "App created using React JS",
    image: RealEstate,
  },
];

export const cv = { cv: cvFile };
