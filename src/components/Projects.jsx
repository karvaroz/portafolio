import React, { useEffect, useState } from "react";
import { BlueText, Heading, PaddingContainer } from "../styles/Global.styled";
import { ProjectsData } from "../utils/Data";
import ProjectCard from "./ProjectCard";

const Projects = () => {
	const [myProjects, setMyProjects] = useState([]);

	useEffect(() => {
		setMyProjects(ProjectsData);
	}, []);

	return (
		<PaddingContainer
			id="projects"
			top="5%"
			bottom="5%"
			responsiveTop="20%"
			responsiveLeft="1rem"
			responsiveRight="1rem">
			<Heading
				as="h4"
				size="h4">
				My Projects
			</Heading>
			<Heading
				as="h2"
				size="h2">
				What <BlueText>I have built </BlueText>
			</Heading>

			{myProjects.map((project) => (
				<PaddingContainer
					key={project.id}
					to="5rem"
					bottom="5rem">
					<ProjectCard project={project} />
				</PaddingContainer>
			))}
		</PaddingContainer>
	);
};

export default Projects;
