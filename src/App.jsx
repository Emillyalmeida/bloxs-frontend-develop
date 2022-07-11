import Aside from "./components/aside";
import Container from "./components/container";
import GlobalStyle from "./style/global";

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Aside />
      </Container>
    </>
  );
}

export default App;
