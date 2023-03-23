import React, { useEffect, useState } from "react";
import {
	FlexContainer,
	Heading,
	PaddingContainer,
} from "../styles/Global.styled";
import { SkillsCardContainer } from "../styles/Skills.styled";
import { SkillsData } from "../utils/Data";

import SkillCard from "./SkillCard";

const Skills = () => {
	const [mySkills, setMySkills] = useState([]);

	useEffect(() => {
		setMySkills(SkillsData);
	}, []);
	return (
		<PaddingContainer
			id="skills"
			top="10%"
			bottom="10%">
			<FlexContainer fullWidthChild>
				<SkillsCardContainer>
					{mySkills.map((skill) => (
						<SkillCard
							key={skill.id}
							skill={skill}
						/>
					))}
				</SkillsCardContainer>
				<div>
					<Heading
						as="h4"
						size="h4">
						Hola
					</Heading>
				</div>
			</FlexContainer>
		</PaddingContainer>
	);
};

export default Skills;
