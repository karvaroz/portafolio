import reactLogo from "../assets/svg/react.svg";
import nodeLogo from "../assets/svg/nodejs.svg";
import htmlLogo from "../assets/svg/html.svg";
import cssLogo from "../assets/svg/css.svg";
import bootstrapLogo from "../assets/svg/bootstrap.svg";
import pythonLogo from "../assets/svg/python.svg";
import gitLogo from "../assets/svg/git.svg";
import githubLogo from "../assets/svg/github.svg";
import reduxLogo from "../assets/svg/redux.svg";
import mongoLogo from "../assets/svg/mongosvg.svg";
import mysqlLogo from "../assets/svg/mysql.svg";
import typescriptLogo from "../assets/svg/typescript.svg";
import tailwindLogo from "../assets/svg/tailwindcss.svg";
import javascriptLogo from "../assets/svg/javascript.svg";
import firebaseLogo from "../assets/svg/firebase.svg";
import styledLogo from "../assets/svg/styled-components.svg";
import scrumLogo from "../assets/svg/scrum.svg";

import contestImg from "../assets/img/project2.png";

export const SkillsData = [
	{
		id: 1,
		tech: "React JS",
		icon: reactLogo,
	},
	{
		id: 2,
		tech: "Node JS",
		icon: nodeLogo,
	},
	{
		id: 3,
		tech: "HTML",
		icon: htmlLogo,
	},
	{
		id: 4,
		tech: "CSS",
		icon: cssLogo,
	},
	{
		id: 5,
		tech: "Bootstrap",
		icon: bootstrapLogo,
	},
	{
		id: 6,
		tech: "Python",
		icon: pythonLogo,
	},
	{
		id: 7,
		tech: "Git",
		icon: gitLogo,
	},
	{
		id: 8,
		tech: "Github",
		icon: githubLogo,
	},
	{
		id: 9,
		tech: "Redux",
		icon: reduxLogo,
	},
	{
		id: 10,
		tech: "Mongo DB",
		icon: mongoLogo,
	},
	{
		id: 11,
		tech: "MySQL",
		icon: mysqlLogo,
	},
	{
		id: 12,
		tech: "Typescript",
		icon: typescriptLogo,
	},
	{
		id: 14,
		tech: "Tailwind CSS",
		icon: tailwindLogo,
	},
	{
		id: 15,
		tech: "Javascript",
		icon: javascriptLogo,
	},
	{
		id: 16,
		tech: "Firebase",
		icon: firebaseLogo,
	},
	{
		id: 17,
		tech: "Styled Components",
		icon: styledLogo,
	},
	{
		id: 18,
		tech: "Scrum Methodology",
		icon: scrumLogo,
	},
];

export const ProjectsData = [
	{
		id: 1,
		name: "Blockmaster",
		description: "movie streaming platform",
		stack: [
			"ReactJS",
			"Redux",
			"Hooks",
			"React-router",
			"Formik",
			"Yup",
			"Bootstrap",
			"Styled Components",
			"Dynamic Routing",
			"Routes Protection",
			"Firebase",
			"Cloudinary",
		],
		image:
			"https://camo.githubusercontent.com/eb31bdc557c70b47dd65176f6d3fe906d3c93d26c7b765063120ea80dfc9ac40/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f6b61727661726f7a2f696d6167652f75706c6f61642f76313635323634333236392f626c6f636b6d61737465722f66343667616e6f7934696965346761756b64686c2e6a7067",
		demo: "https://blockmaster-karvaroz.vercel.app/",
		github: "https://github.com/karvaroz/blockmaster",
		reverse: false,
	},
	{
		id: 2,
		name: "Contest app",
		description: "Question and answer contest",
		stack: ["ReactJS", "Hooks", "React-router", "Tailwind CSS"],
		image: contestImg,
		demo: "https://blockmaster-karvaroz.vercel.app/",

		github:
			"https://github.com/karvaroz/concurso-de-preguntas-y-respuestas/blob/master/README.md",
		reverse: true,
	},
	{
		id: 3,
		name: "Star wars app",
		description: "Creation of a simple react app with a star wars theme",
		stack: ["ReactJS", "CSS", "Axios", "React-router", "API"],
		image: contestImg,
		demo: "https://blockmaster-karvaroz.vercel.app/",
		github:
			"https://github.com/karvaroz/concurso-de-preguntas-y-respuestas/blob/master/README.md",
		reverse: false,
	},
];
