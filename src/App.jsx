import { useEffect } from "react";

import Aside from "./components/aside";
import Container from "./components/container";
import Content from "./components/content";
import DivCard from "./components/divCards";
import Header from "./components/header";
import useNotice from "./providers/notices";

import GlobalStyle from "./style/global";

function App() {
  const { GetAgro, GetEnergy } = useNotice();

  useEffect(() => {
    GetEnergy();
  }, [GetEnergy]);

  useEffect(() => {
    GetAgro();
  }, [GetAgro]);

  return (
    <>
      <GlobalStyle />
      <Container>
        <Aside />
        <Content>
          <Header title="Noticias" />
          <DivCard />
        </Content>
      </Container>
    </>
  );
}

export default App;
