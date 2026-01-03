import "./Button.css";
import  {type ReactNode } from "react";
import { useGlobalContext } from "../../context/global.context";

interface ButtonProps {
  children: ReactNode;
  parentMethod: () => void;
}

interface ButtonChildrenProps {
  children: ReactNode;
}

export const RedButton = ( { children } : ButtonChildrenProps) => {

  const { value } = useGlobalContext();

  return <div className="red-button">{value}:{children}</div>;
}

export function Button({ children, parentMethod }: ButtonProps) {
  const { setValue } = useGlobalContext();

  const handleClick = () => {
    parentMethod();
    setValue((prev) => prev + 1);
  }

  return (
    <button className="custom-button" onClick={handleClick}>
      {children}
    </button>
  );
}
