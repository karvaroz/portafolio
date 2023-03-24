import React from "react";
import {
	Button,
	FlexContainer,
	Heading,
	IconContainer,
	PaddingContainer,
	Paragraph,
} from "../styles/Global.styled";
import {
	ProjectImage,
	ProjectImageContainer,
	TechStackCard,
} from "../styles/Project.styled";

import { FaGithub } from "react-icons/fa";

const ProjectCard = ({ project }) => {
	return (
		<FlexContainer fullWidthChild>
			<div>
				<FlexContainer
					align="center"
					gap="1rem">
					<Heading
						as="h3"
						size="h3"
						bottom="1rem">
						{project.name}
					</Heading>
					<IconContainer
						as="a"
						href={project.github}
						target="_blank"
						rel="noreferrer"
						color="blue"
						size="2rem">
						<FaGithub />
					</IconContainer>
				</FlexContainer>
				<PaddingContainer top="1rem">
					<FlexContainer
						gap="1.5rem"
						wrap="wrap">
						{project.stack.map((stack, idx) => (
							<TechStackCard key={idx}>{stack}</TechStackCard>
						))}
					</FlexContainer>
				</PaddingContainer>
				<Paragraph
					top="1.5rem"
					bottom="2rem">
					{project.description}
				</Paragraph>
				<Button
					href={project.demo}
					target="_blank"
					rel="noreferrer">
					Demo
				</Button>
			</div>
			<ProjectImageContainer justify="flex-end">
				<ProjectImage
					src={project.image}
					alt={project.name}
				/>
			</ProjectImageContainer>
		</FlexContainer>
	);
};

export default ProjectCard;
