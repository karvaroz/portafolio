import styled from "styled-components";

export const ParticleContainer = styled.div`
	position: relavite;
`;

export const ImageCard = styled.div`
	border: 1px solid white;
	width: 250px;
	text-align: center;
	border-radius: 1rem;
	position: relative;
	overflow: hidden;
	justify-content: center;
`;

export const Particle = styled.img`
	position: absolute !important;
	top: ${({ top }) => top};
	left: ${({ left }) => left};
	right: ${({ right }) => right};
	bottom: ${({ bottom }) => bottom};
	transform: rotate(${({ rotate }) => rotate});
`;
