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

import blockchain from "../assets/img/blockchainex_center.jpg";
import wwc from "../assets/img/wwc.jpeg";
import wwc2 from "../assets/img/wwc1.jpg";

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
					<Heading
						as="h4"
						size="h4"
						top="4rem">
						Active participant
					</Heading>
					<Heading
						as="h3"
						size="h3"
						top="0.5rem">
						Learning and
						<BlueText> Tech Community</BlueText>
					</Heading>
					<Paragraph
						to="2rem"
						bottom="1.5rem">
						I enjoy participating in local courses, events and competitions,
						bootcamps and more organized by tech communities in Medellín. This
						dedication and training has helped me win several web programming
						scholarships.
						<br />
						Tech Communities:
						<br />
						Women Who Code Medellin
						<br />
						Blockchain eX - Innovation Center
					</Paragraph>
					<SkillsCardContainer>
						<img
							src={wwc}
							alt="wwc"
							width="100%"
							height="auto"
							title="Women Who Code Medellin"
						/>
					</SkillsCardContainer>
					<br />
					<SkillsCardContainer>
						<img
							src={blockchain}
							alt="blockchain"
							width="100%"
							height="auto"
							title="Blockchain eX - Innovation Center"
						/>
					</SkillsCardContainer>
					<br />
					<SkillsCardContainer>
						<img
							src={wwc2}
							alt="wwc"
							width="100%"
							height="auto"
							title="Women Who Code Medellin"
						/>
					</SkillsCardContainer>
				</div>
			</FlexContainer>
		</PaddingContainer>
	);
};

export default Skills;
