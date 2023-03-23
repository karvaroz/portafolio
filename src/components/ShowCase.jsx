import React from "react";
import {
	BlueText,
	FlexContainer,
	Heading,
	IconContainer,
	PaddingContainer,
	Paragraph,
} from "../styles/Global.styled";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import {
	ImageCard,
	Particle,
	ParticleContainer,
} from "../styles/ShowCase.styled";
import Image from "../assets/me_resize.png";
import Background from "../assets/particle.png";

const ShowCase = () => {
	return (
		<PaddingContainer
			id="Home"
			left="3%"
			right="10%"
			top="15%"
			bottom="10%">
			<FlexContainer
				align="center"
				fullWidthChild>
				<div>
					<Heading
						as="h4"
						size="h4">
						Hello!
					</Heading>
					<Heading
						as="h2"
						size="h2"
						top="0.5rem"
						bottom="1rem">
						I'm <BlueText>Karina Vargas</BlueText>
					</Heading>
					<Heading
						as="h3"
						size="h3">
						<BlueText>Web Developer</BlueText>
					</Heading>
					<Paragraph
						as="p"
						top="2rem"
						bottom="4rem">
						💻 Web developer focused on Frontend development located in Medellin
						- Colombia 📍🌍
					</Paragraph>
					<FlexContainer gap="20px">
						<IconContainer
							color="blue"
							size="1.5rem">
							<BsLinkedin />
						</IconContainer>
						<IconContainer
							color="blue"
							size="1.5rem">
							<BsGithub />
						</IconContainer>
					</FlexContainer>
				</div>
				<FlexContainer justify="flex-end">
					<ParticleContainer>
						<ImageCard>
							<img
								src={Image}
								alt="Karina Vargas Rios"
							/>
						</ImageCard>
						<Particle
							src={Background}
							alt="particle"
							top="80px"
							left="10"
							rotate="90deg"
						/>
						<Particle
							src={Background}
							alt="particle"
							top="150px"
							right="150px"
							rotate="0deg"
						/>
						<Particle
							src={Background}
							alt="particle"
							bottom="150"
							left="40"
							rotate="50deg"
						/>
					</ParticleContainer>
				</FlexContainer>
			</FlexContainer>
		</PaddingContainer>
	);
};

export default ShowCase;
