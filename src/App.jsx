import React from "react";
import { ThemeProvider } from "styled-components";
import Projects from "./components/Projects";
import ShowCase from "./components/ShowCase";
import Skills from "./components/Skills";
import { Container, Main } from "./styles/Global.styled";
import { Theme } from "./utils/Theme";

const App = () => {
	return (
		<ThemeProvider theme={Theme}>
			<Main>
				<Container>
					<ShowCase />
					<Skills />
					<Projects />
				</Container>
			</Main>
		</ThemeProvider>
	);
};

export default App;
