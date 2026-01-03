import "./index.css";
import { GlobalContextProvider } from "./context/global.context";
import { Button, RedButton } from "./components";

export function App() {
  const submit = () => {
    console.log("Button clicked");
  };

  const handleClick = () => {
    console.log("Uy you click me!");
  };

  const helloAlert = () => {
    alert("Hello from App component!");
  };

  return (
    <GlobalContextProvider>
      <RedButton>
        <Button parentMethod={helloAlert}>
          Red Button
        </Button>
      </RedButton>

      <Button parentMethod={handleClick}>
        Normal Button
      </Button>
    </GlobalContextProvider>
  );
}

export default App;
