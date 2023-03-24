import React from "react";
import blockchain from "../assets/img/blockchainex_center.jpg";
import wwc from "../assets/img/wwc.jpeg";
import wwc2 from "../assets/img/wwc1.jpg";
import { BlueText, Heading, Paragraph } from "../styles/Global.styled";

const Community = () => {
	return (
		<React.Fragment>
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

			<img
				src={wwc}
				alt="wwc"
				width="100%"
				height="auto"
				title="Women Who Code Medellin"
			/>

			<br />

			<img
				src={blockchain}
				alt="blockchain"
				width="100%"
				height="auto"
				title="Blockchain eX - Innovation Center"
			/>

			<br />

			<img
				src={wwc2}
				alt="wwc"
				width="100%"
				height="auto"
				title="Women Who Code Medellin"
			/>
		</React.Fragment>
	);
};

export default Community;
