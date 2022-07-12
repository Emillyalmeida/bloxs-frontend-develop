import { useEffect } from "react";

import Aside from "./components/aside";
import Container from "./components/container";
import Content from "./components/content";
import DivCard from "./components/divCards";
import Header from "./components/header";
import useNotice from "./providers/notices";

import GlobalStyle from "./style/global";
import { ThemeProvider } from "styled-components";
import useTheme from "./providers/theme";
import { themes } from "./style/theme";

function App() {
  const { GetAgro, GetEnergy } = useNotice();

  useEffect(() => {
    GetEnergy();
  }, [GetEnergy]);

  useEffect(() => {
    GetAgro();
  }, [GetAgro]);

  const { currentTheme } = useTheme();

  return (
    <>
      <ThemeProvider theme={themes[currentTheme]}>
        <GlobalStyle />
        <Container>
          <Aside />
          <Content>
            <Header title="Noticias" />
            <DivCard />
          </Content>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
