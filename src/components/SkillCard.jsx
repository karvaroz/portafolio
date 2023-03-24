import React from "react";
import { Heading } from "../styles/Global.styled";
import { SkillsCard } from "../styles/Skills.styled";

const SkillCard = ({ skill }) => {
	return (
		<SkillsCard>
			<img
				src={skill.icon}
				alt={skill.tech}
				width="100"
				height="auto"
			/>

			<Heading
				as="h4"
				size="h4">
				{skill.tech}
			</Heading>
		</SkillsCard>
	);
};

export default SkillCard;
