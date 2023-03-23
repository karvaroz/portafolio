import React from "react";
import { Heading, IconContainer } from "../styles/Global.styled";
import { SkillsCard } from "../styles/Skills.styled";

const SkillCard = ({ skill }) => {
	return (
		<SkillsCard>
			<IconContainer
				color="blue"
				size="1.5rem">
				<img
					// src={skill.icon}
					alt={skill.tech}
					width="100"
					height="auto"
				/>
			</IconContainer>

			<Heading
				as="h4"
				size="h4">
				{skill.tech}
			</Heading>
		</SkillsCard>
	);
};

export default SkillCard;
