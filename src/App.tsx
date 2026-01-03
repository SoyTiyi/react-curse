import "./index.css";
import { Button } from "./components/Button/Button";
import { createContext } from "react";
import { useState } from "react";

export const ProjectContext = createContext({});

export function App() {
  const [projectContextValue, setProjectContextValue] = useState(false);

  return (
    <ProjectContext.Provider
      value={{ projectContextValue, setProjectContextValue }}
    >
      {
        //<CustomForm />\
      }
    </ProjectContext.Provider>
  );
}

export default App;
