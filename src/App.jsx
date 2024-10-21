import Main from "./components/Main";
import {Header}  from "./components/Header";
import Controls from "./components/Controls";

function App() {
  return (
    <>
      <Header />
      <Main>
        <Controls />
      </Main>
    </>
  );
}

export default App;
