import React, { useEffect, useState } from "react";
import {
	BlueText,
	FlexContainer,
	Heading,
	PaddingContainer,
	Paragraph,
} from "../styles/Global.styled";
import { SkillsCardContainer } from "../styles/Skills.styled";
import { SkillsData } from "../utils/Data";

import SkillCard from "./SkillCard";
import Community from "./Community";

const Skills = () => {
	const [mySkills, setMySkills] = useState([]);

	useEffect(() => {
		setMySkills(SkillsData);
	}, []);
	return (
		<PaddingContainer
			id="skills"
			top="10%"
			bottom="10%"
			responsiveLeft="1rem"
			responsiveRight="1rem">
			<FlexContainer
				fullWidthChild
				responsiveFlex
				responsiveDirection="column-reverse">
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
						My Skills
					</Heading>
					<Heading
						as="h2"
						size="h2"
						top="0.5rem">
						What <BlueText>I can do</BlueText>
					</Heading>
					<Paragraph
						to="2rem"
						bottom="1.5rem">
						As a developer, I have working experience in frontend development. I
						am proficient in Javascript, React, HTML, CSS. My experience in
						building responseive and dynamic user interfaces using React and
						Redux has allowed me to create engaging and interactive web
						applications.
					</Paragraph>
					<Community />
				</div>
			</FlexContainer>
		</PaddingContainer>
	);
};

export default Skills;
