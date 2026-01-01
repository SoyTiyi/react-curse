import "./index.css";
import { Button } from "./components";
import { useState } from "react";

export function App() {
  const [count, setCount] = useState(0);
  const countMore = () => {
    setCount(count + 1);
  }

  return (
    <Button label={`Count: is ${count}`} parentMethod={countMore} />
  );
}

export default App;
