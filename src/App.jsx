import Aside from "./components/aside";
import Container from "./components/container";
import Content from "./components/content";
import Header from "./components/header";
import GlobalStyle from "./style/global";

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Aside />
        <Content>
          <Header title="Noticias" />
        </Content>
      </Container>
    </>
  );
}

export default App;
