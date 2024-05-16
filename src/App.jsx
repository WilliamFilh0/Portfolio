import { useState } from "react";
import { Header } from "./components/Header/Header";
import { TechnologiesIcons } from "./components/technologiesIcons/technologiesIcons";
import { Projects } from "./components/Projects/projects";

function App() {
  return (
    <>
      <Header />
      <TechnologiesIcons />
      <Projects />
    </>
  );
}

export default App;
